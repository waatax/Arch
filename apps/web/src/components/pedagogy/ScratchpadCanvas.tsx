'use client';

import { useRef, useEffect, useState } from 'react';
import { Eraser, Pen, X, Trash2 } from 'lucide-react';

interface ScratchpadCanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScratchpadCanvas({ isOpen, onClose }: ScratchpadCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  
  useEffect(() => {
    if (!isOpen) {
      // Memory recovery for Android low-RAM
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        canvas.width = 0;
        canvas.height = 0;
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize canvas full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    if (ctx) {
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }

    const handleResize = () => {
      // Simple resize handling, clears canvas. More complex would save/restore image data
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  if (!isOpen) return null;

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) ctx.beginPath();
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    ctx.lineWidth = tool === 'eraser' ? 20 : 2;
    ctx.strokeStyle = tool === 'eraser' ? 'rgba(0,0,0,1)' : '#0ea5e9'; // Blue pen
    ctx.globalCompositeOperation = tool === 'eraser' ? 'destination-out' : 'source-over';

    ctx.lineTo(clientX, clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(clientX, clientY);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex animate-fade-in touch-none select-none">
      <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-sm pointer-events-none" />
      
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        onMouseLeave={endDrawing}
        onTouchStart={startDrawing}
        onTouchEnd={endDrawing}
        onTouchMove={draw}
        className="absolute inset-0 cursor-crosshair touch-none"
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-white dark:bg-slate-900 p-2 shadow-2xl border border-slate-200 dark:border-slate-800 pointer-events-auto">
        <button
          onClick={() => setTool('pen')}
          className={`rounded-full p-3 transition-colors ${tool === 'pen' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400' : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}`}
        >
          <Pen className="size-5" />
        </button>
        <button
          onClick={() => setTool('eraser')}
          className={`rounded-full p-3 transition-colors ${tool === 'eraser' ? 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200' : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}`}
        >
          <Eraser className="size-5" />
        </button>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" />
        <button
          onClick={clearCanvas}
          className="rounded-full p-3 text-slate-500 hover:bg-rose-100 hover:text-rose-600 dark:text-slate-400 dark:hover:bg-rose-900/40 dark:hover:text-rose-400 transition-colors"
        >
          <Trash2 className="size-5" />
        </button>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" />
        <button
          onClick={onClose}
          className="rounded-full bg-slate-100 dark:bg-slate-800 p-3 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <X className="size-5" />
        </button>
      </div>
    </div>
  );
}
