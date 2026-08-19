import React, { Fragment } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function MathText({ content, className }: { content?: string | null; className?: string }) {
  if (!content) return null;

  // This regex matches $$...$$ (block math) or $...$ (inline math)
  const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);

  const handlePlayTTS = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      // Cancel any ongoing speech to avoid queuing delays
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Slightly slower for learning
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          return <BlockMath key={index} math={part.slice(2, -2)} />;
        }
        if (part.startsWith('$') && part.endsWith('$')) {
          return <InlineMath key={index} math={part.slice(1, -1)} />;
        }
        
        // Match [TTS:...] for Text-to-Speech
        const subParts = part.split(/(\[TTS:[^\]]+\])/g);
        return (
          <span key={index}>
            {subParts.map((subPart, subIndex) => {
              if (subPart.startsWith('[TTS:') && subPart.endsWith(']')) {
                const text = subPart.slice(5, -1);
                return (
                  <button 
                    key={subIndex} 
                    onClick={() => handlePlayTTS(text)}
                    className="inline-flex items-center justify-center bg-sky-100 text-sky-700 hover:bg-sky-200 border border-sky-200 rounded-md px-1.5 py-0.5 text-[11px] mx-1 cursor-pointer transition-colors translate-y-[-2px] active:scale-95" 
                    title="播放英文發音"
                  >
                    🔊 播放
                  </button>
                );
              }

              let htmlContent = subPart.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              htmlContent = htmlContent.replace(/\n/g, '<br />');

              return (
                <span key={subIndex} dangerouslySetInnerHTML={{ __html: htmlContent }} />
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
