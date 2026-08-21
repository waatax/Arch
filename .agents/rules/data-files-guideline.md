---
description: >-
  Rules for editing TypeScript data files in apps/web/src/data/subjects/
trigger: always_on
---

# Data File Editing Guidelines

When editing TypeScript data files in `apps/web/src/data/subjects/*.ts`, you MUST follow these rules to avoid breaking the `pnpm validate:content` pipeline:

1. **NEVER use `sed`, raw regex replacements, or string replacement scripts** to globally change quotes (`'` or `"` or `\"`) across these files. These files contain complex nested strings (e.g., Markdown inside JS objects, HTML classes inside strings). Global replacements corrupt the AST and break the build.
2. **Inner vs Outer Quotes**: 
   - If a string is wrapped in single quotes (e.g. `question: '...'`), any HTML inside must use double quotes (e.g. `className="..."`).
   - If a string is wrapped in double quotes (e.g. `"body": "..."`), any HTML inside must use escaped double quotes (e.g. `className=\"...\"`) or single quotes (`className='...'`).
3. **Array string delimiters**: Arrays like `steps` and `illustrations` use specific quote styles depending on the file. Do not blanket-replace them.
4. **Validation**: ALWAYS run `pnpm validate:data-syntax` immediately after modifying any data files. This script uses the official TypeScript parser to verify the files are syntactically valid. If it fails, fix the specific line it points to.
5. **DO NOT commit** if `pnpm validate:data-syntax` or `pnpm validate:content` fails. The GitHub Actions deploy pipeline will fail (exit code 1).
6. **Grade Levels**: When adding new subjects or topics, ensure `gradeLevel` is set according to conventions (e.g., 10 for basic subjects like history/math-c, 11 for professional subjects like surveying/drafting).
