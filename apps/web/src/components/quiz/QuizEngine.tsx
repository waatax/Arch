'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { needsScaffolding } from '@/lib/algorithm/adaptive';
import { CheckCircle2, XCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { useStudentStore } from '@/lib/store/studentStore';

export function QuizEngine() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Adaptive State from Global Store
  const { streak, updateAccuracy, incrementStreak } = useStudentStore();
  
  const [localRecentAccuracy, setLocalRecentAccuracy] = useState<number[]>([]);

  const question = {
    text: "對於一均勻矩形斷面，寬為 b，高為 h，其對通過形心之水平軸的慣性矩 (Moment of Inertia) 為何？",
    options: ["(b * h^2) / 12", "(b * h^3) / 12", "(b * h^3) / 3", "(b * h^2) / 3"],
    correctIndex: 1,
    hint: "鷹架提示：矩形慣性矩對中心平行的旋轉軸，高度是三次方，寬度平行於旋轉軸所以是一次方。"
  };

  const handleSelect = useCallback((index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  }, [isSubmitted]);

  const handleSubmit = useCallback(() => {
    if (selectedOption === null || isSubmitted) return;
    setIsSubmitted(true);
    
    const isCorrect = selectedOption === question.correctIndex;
    
    // Update global persistent store
    updateAccuracy(isCorrect);
    if (isCorrect) incrementStreak();
    
    // Update local state for scaffolding logic
    setLocalRecentAccuracy(prev => [...prev, isCorrect ? 1 : 0].slice(-5));
  }, [selectedOption, isSubmitted, question.correctIndex, updateAccuracy, incrementStreak]);

  const handleNext = useCallback(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setCurrentIndex(c => c + 1);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSubmitted) {
        if (e.key === '1' || e.key === 'a') handleSelect(0);
        if (e.key === '2' || e.key === 'b') handleSelect(1);
        if (e.key === '3' || e.key === 'c') handleSelect(2);
        if (e.key === '4' || e.key === 'd') handleSelect(3);
        if (e.key === 'Enter') handleSubmit();
      } else {
        if (e.key === 'Enter' || e.key === ' ') handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSubmitted, handleSelect, handleSubmit, handleNext]);

  const showScaffolding = needsScaffolding({
    streak,
    recentAccuracy: localRecentAccuracy,
    averageTimePerQuestionMs: 15000
  });

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4">
      {streak > 2 && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-center text-orange-500 font-bold flex items-center justify-center gap-2"
        >
          🔥 {streak} Streak! You&apos;re on fire!
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <GlassCard className="p-8 md:p-12">
            
            {showScaffolding && (
              <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700/50 rounded-xl flex items-start gap-3">
                <Lightbulb className="text-yellow-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800 dark:text-yellow-200 leading-relaxed">
                  {question.hint}
                </p>
              </div>
            )}

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 leading-relaxed">
              {question.text}
            </h2>

            <div className="space-y-4">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === question.correctIndex;
                const showStatus = isSubmitted && isSelected;
                
                let btnStyle = "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300";
                
                if (isSelected) {
                  btnStyle = "border-blue-500 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 ring-2 ring-blue-500/20";
                }
                
                if (isSubmitted) {
                  if (isCorrect) {
                    btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300";
                  } else if (isSelected && !isCorrect) {
                    btnStyle = "border-red-500 bg-red-50 dark:bg-red-900/40 text-red-700 dark:text-red-300";
                  } else {
                    btnStyle = "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-600 opacity-50";
                  }
                }

                return (
                  <motion.button
                    whileHover={!isSubmitted ? { scale: 1.01 } : {}}
                    whileTap={!isSubmitted ? { scale: 0.99 } : {}}
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex justify-between items-center ${btnStyle}`}
                  >
                    <span className="font-medium text-lg flex items-center gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm font-bold text-slate-500">
                        {['A', 'B', 'C', 'D'][idx]}
                      </span>
                      {opt}
                    </span>
                    {showStatus && isCorrect && <CheckCircle2 className="text-emerald-500 w-6 h-6" />}
                    {showStatus && !isCorrect && <XCircle className="text-red-500 w-6 h-6" />}
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-8 flex justify-end">
              {!isSubmitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  className="px-8 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-slate-900/20"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  Next Question <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </GlassCard>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
