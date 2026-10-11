// Load a TypeScript module (and its relative imports) from apps/web/src in plain Node.
// Uses the TypeScript compiler that ships with apps/web, so it works on any Node ≥ 20
// without relying on experimental type stripping.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const webRoot = path.join(root, 'apps', 'web');
const require = createRequire(path.join(webRoot, 'package.json'));
const ts = require('typescript');

function resolveSource(fromFile, specifier) {
  let base;
  if (specifier.startsWith('@/')) base = path.join(webRoot, 'src', specifier.slice(2));
  else if (specifier.startsWith('.')) base = path.resolve(path.dirname(fromFile), specifier);
  else return null;
  for (const candidate of [base, `${base}.ts`, `${base}.tsx`, path.join(base, 'index.ts')]) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  }
  throw new Error(`Cannot resolve ${specifier} from ${fromFile}`);
}

export async function loadTsModule(relativePath) {
  const entry = path.join(root, relativePath);
  const outDir = fs.mkdtempSync(path.join(os.tmpdir(), 'arch-ts-'));
  const done = new Map();
  const emit = (file) => {
    if (done.has(file)) return done.get(file);
    const rel = path.relative(root, file).replace(/\.(tsx?|mts)$/, '.mjs');
    const outFile = path.join(outDir, rel);
    done.set(file, outFile);
    let source = fs.readFileSync(file, 'utf8');
    const output = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, verbatimModuleSyntax: false, isolatedModules: true },
      fileName: file,
    }).outputText;
    const rewritten = output.replace(/(from\s+|import\s*\(\s*)(['"])([^'"]+)\2/g, (match, lead, quote, spec) => {
      if (spec.endsWith('.json')) {
        const target = spec.startsWith('.') ? path.resolve(path.dirname(file), spec) : spec;
        return `${lead}${quote}${pathToFileURL(target).href}${quote}`;
      }
      const resolved = resolveSource(file, spec);
      if (!resolved) return match;
      const target = emit(resolved);
      return `${lead}${quote}${pathToFileURL(target).href}${quote}`;
    });
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, rewritten.replace(/import\s+([\w{},\s*]+)\s+from\s+(['"][^'"]+\.json['"]);?/g, 'import $1 from $2 with { type: "json" };'));
    return outFile;
  };
  const out = emit(entry);
  return import(pathToFileURL(out).href);
}

export { root as repoRoot };
