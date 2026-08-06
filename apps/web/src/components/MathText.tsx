import React, { Fragment } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function MathText({ content, className }: { content?: string | null; className?: string }) {
  if (!content) return null;

  // This regex matches $$...$$ (block math) or $...$ (inline math)
  // It handles escaped dollars if necessary, but typically standard latex uses $ and $$.
  const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          return <BlockMath key={index} math={part.slice(2, -2)} />;
        }
        if (part.startsWith('$') && part.endsWith('$')) {
          return <InlineMath key={index} math={part.slice(1, -1)} />;
        }
        // Return regular text with newline support
        return (
          <Fragment key={index}>
            {part.split('\n').map((line, i, arr) => (
              <Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </Fragment>
            ))}
          </Fragment>
        );
      })}
    </span>
  );
}
