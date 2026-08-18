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
        
        // Replace **bold** with <strong>bold</strong> and \n with <br />
        // Then render via dangerouslySetInnerHTML to support colored spans
        let htmlContent = part.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        htmlContent = htmlContent.replace(/\n/g, '<br />');

        return (
          <span key={index} dangerouslySetInnerHTML={{ __html: htmlContent }} />
        );
      })}
    </span>
  );
}
