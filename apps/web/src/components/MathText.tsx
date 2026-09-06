'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import InteractiveDialogue, { DialogueLine } from '@/components/InteractiveDialogue';

export default function MathText({ content, className }: { content?: string | null; className?: string }) {
  if (!content) return null;

  const handlePlayTTS = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Step 1: Split content by [DIALOGUE_START:...] ... [DIALOGUE_END]
  const dialogueBlocks = content.split(/(\[DIALOGUE_START:[\s\S]*?\[DIALOGUE_END\])/g);

  return (
    <span className={className}>
      {dialogueBlocks.map((dialogueBlock, dIdx) => {
        if (dialogueBlock.startsWith('[DIALOGUE_START:') && dialogueBlock.endsWith('[DIALOGUE_END]')) {
          const titleMatch = dialogueBlock.match(/\[DIALOGUE_START:([^\]]*)\]/);
          const title = titleMatch ? titleMatch[1].trim() : '情境對話範例 (Practical Dialogue)';
          
          // Extract inner text
          const inner = dialogueBlock
            .replace(/^\[DIALOGUE_START:[^\]]*\]\n?/, '')
            .replace(/\n?\[DIALOGUE_END\]$/, '')
            .trim();

          const rawLines = inner.split('\n').map((l) => l.trim()).filter(Boolean);
          const lines: DialogueLine[] = rawLines.map((rawLine, idx) => {
            // Check for format: "Speaker: English | Chinese"
            const pipeMatch = rawLine.match(/^([^:]+):\s*(.+?)\s*\|\s*(.+)$/);
            if (pipeMatch) {
              return {
                speaker: pipeMatch[1].trim(),
                en: pipeMatch[2].trim(),
                zh: pipeMatch[3].trim(),
              };
            }

            // Check for format: "Speaker: English (Chinese)"
            const parenMatch = rawLine.match(/^([^:]+):\s*(.+?)\s*[（\(]([^）\)]+)[）\)]\s*$/);
            if (parenMatch) {
              return {
                speaker: parenMatch[1].trim(),
                en: parenMatch[2].trim(),
                zh: parenMatch[3].trim(),
              };
            }

            // Check for format without speaker: "English | Chinese"
            const simplePipe = rawLine.match(/^(.+?)\s*\|\s*(.+)$/);
            if (simplePipe) {
              return {
                speaker: idx % 2 === 0 ? 'Person A' : 'Person B',
                en: simplePipe[1].trim(),
                zh: simplePipe[2].trim(),
              };
            }

            // Fallback: whole line as English
            return {
              speaker: idx % 2 === 0 ? 'Person A' : 'Person B',
              en: rawLine,
              zh: '',
            };
          });

          return <InteractiveDialogue key={dIdx} title={title} lines={lines} />;
        }

        // Standard Math & TTS parsing
        const parts = dialogueBlock.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
        return (
          <span key={dIdx}>
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
                          type="button"
                          onClick={() => handlePlayTTS(text)}
                          className="inline-flex items-center gap-1 bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-900 border border-sky-200 dark:border-sky-800 rounded-md px-1.5 py-0.5 text-[11px] font-mono mx-1 cursor-pointer transition-all translate-y-[-1px] active:scale-95 shadow-2xs"
                          title="播放英文發音 (Listen to English Pronunciation)"
                        >
                          <span>🔊</span>
                          <span>發音</span>
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
      })}
    </span>
  );
}
