'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDesktop } from '@/contexts/DesktopContext';
import { IoClose, IoRemove, IoExpand } from 'react-icons/io5';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultWidth?: number;
  defaultHeight?: number;
}

export const Window: React.FC<WindowProps> = ({
  id,
  title,
  children,
  defaultWidth = 800,
  defaultHeight = 600,
}) => {
  const { windows, closeWindow, minimizeWindow, maximizeWindow, focusWindow } = useDesktop();
  const windowState = windows[id];
  const constraintsRef = useRef<HTMLDivElement>(null);
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // Find the desktop container for drag constraints
    const desktop = document.getElementById('desktop-area');
    if (desktop) {
      constraintsRef.current = desktop as HTMLDivElement;
    }
  }, []);

  if (!mounted || !windowState?.isOpen) return null;

  const isMaximized = windowState.isMaximized;

  return (
    <AnimatePresence>
      {!windowState.isMinimized && (
        <motion.div
          key={id}
          drag={!isMaximized}
          dragConstraints={constraintsRef}
          dragMomentum={false}
          onMouseDown={() => focusWindow(id)}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            width: isMaximized ? '100vw' : defaultWidth,
            height: isMaximized ? 'calc(100vh - 80px)' : defaultHeight,
            top: isMaximized ? 0 : undefined,
            left: isMaximized ? 0 : undefined,
            borderRadius: isMaximized ? 0 : 12,
          }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`absolute flex flex-col bg-[#111113]/90 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden`}
          style={{
            zIndex: windowState.zIndex,
            maxWidth: '100vw',
            maxHeight: 'calc(100vh - 80px)', // Leave space for dock
            // If not maximized, center it initially.
            ...( !isMaximized && { top: '10%', left: 'max(10%, calc(50vw - 400px))' } )
          }}
        >
          {/* Title Bar */}
          <div
            className={`flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5 ${
              !isMaximized ? 'cursor-grab active:cursor-grabbing' : ''
            }`}
            onDoubleClick={() => maximizeWindow(id)}
          >
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
                className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group"
              >
                <IoClose className="w-3 h-3 text-red-900 opacity-0 group-hover:opacity-100" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
                className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group"
              >
                <IoRemove className="w-3 h-3 text-yellow-900 opacity-0 group-hover:opacity-100" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); maximizeWindow(id); }}
                className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center group"
              >
                <IoExpand className="w-2.5 h-2.5 text-green-900 opacity-0 group-hover:opacity-100" />
              </button>
            </div>
            <div className="text-sm font-medium text-white/70 select-none">
              {title}
            </div>
            <div className="w-[50px]"></div> {/* Spacer to center title */}
          </div>

          {/* Window Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
