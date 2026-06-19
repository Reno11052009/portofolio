'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconAlertTriangle,
  IconTerminal,
  IconHome,
  IconRefresh,
  IconChevronRight,
  IconBug
} from '@tabler/icons-react';
import BorderGlow from '@/components/BorderGlow';
import ScrambledText from '@/components/ScrambledText';

export default function NotFound() {
  const pathname = usePathname();
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const mockLogs = [
    `Initializing system check on route: "${pathname}"...`,
    "Querying main workspace directories...",
    "Scanning src/app/page.tsx routing map...",
    "Checking active server components...",
    "CRITICAL WARNING: Route pointer is pointing to undefined space.",
    "Attempting sector reconstruction...",
    "Error code: 0x404_PAGE_NOT_FOUND",
    "Verdict: Requested address does not exist on this portfolio system."
  ];

  useEffect(() => {
    if (scanState !== 'scanning') return;

    let currentLogIndex = 0;
    setLogs([]);

    const interval = setInterval(() => {
      if (currentLogIndex < mockLogs.length) {
        setLogs((prev) => [...prev, mockLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setScanState('complete');
      }
    }, 600);

    return () => clearInterval(interval);
  }, [scanState]);

  const handleStartScan = () => {
    setScanState('scanning');
  };

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-[#0A0A0B] text-white flex flex-col items-center justify-center p-4 md:p-6 select-none font-sans">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05)_0%,transparent_50%)] pointer-events-none" />

      {/* Retro Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_97%,rgba(255,255,255,0.02)_98%,rgba(255,255,255,0.02)_100%)] bg-[length:100%_4px]" />

      <motion.div
        className="w-full max-w-[640px] z-10"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <BorderGlow
          borderRadius={12}
          backgroundColor="rgba(18, 15, 23, 0.75)"
          glowColor="239 68 68" /* Red glow for system error */
          glowRadius={35}
          glowIntensity={0.7}
          colors={['#ef4444', '#f97316', '#7c5cff']}
          className="w-full border border-white/5 backdrop-blur-md"
        >
          {/* OS Window Chrome / Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 rounded-t-xl">
            <div className="flex items-center gap-2">
              {/* Window Controls */}
              <div className="w-3 h-3 rounded-full bg-[#ef4444] opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b] opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#10b981] opacity-80" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold ml-2">
                system_core_error.exe
              </span>
            </div>
            <Link
              href="/"
              className="text-neutral-500 hover:text-neutral-300 text-xs font-mono no-underline transition-colors"
            >
              [esc]
            </Link>
          </div>

          {/* Window Body */}
          <div className="p-6 md:p-8 flex flex-col space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 shrink-0">
                <IconAlertTriangle className="w-8 h-8 animate-pulse" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-bold tracking-widest text-red-500">
                  fatal_error_detected
                </div>
                
                <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2 font-mono">
                  <span>404</span>
                  <span className="text-neutral-600 font-normal">|</span>
                  <span className="text-neutral-300 text-lg md:text-xl font-normal self-end mb-1">
                    Route Not Found
                  </span>
                </h1>
              </div>
            </div>

            <div className="text-sm text-neutral-400 leading-relaxed font-mono">
              The sector you are trying to read <code className="text-red-400 bg-red-500/5 border border-red-500/10 px-1.5 py-0.5 rounded text-xs select-all">{pathname}</code> is inaccessible or has been dereferenced.
            </div>

            {/* Diagnostic Console Box */}
            <div className="bg-[#050506]/90 border border-white/5 rounded-lg p-4 font-mono text-xs text-neutral-300 min-h-[140px] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-neutral-500 border-b border-white/5 pb-2 mb-2">
                  <IconTerminal className="w-3.5 h-3.5" />
                  <span>DIAGNOSTIC CONSOLE</span>
                </div>
                
                {scanState === 'idle' && (
                  <div className="space-y-1.5 text-neutral-400">
                    <p>&gt; Status: UNRESOLVED_ROUTE</p>
                    <p>&gt; Ready to run system trace...</p>
                  </div>
                )}

                {scanState === 'scanning' && (
                  <div className="space-y-1">
                    {logs.map((log, index) => (
                      <p key={index} className="text-neutral-300 leading-relaxed flex items-start gap-1">
                        <span className="text-[#7c5cff] shrink-0">&gt;</span>
                        <span>{log}</span>
                      </p>
                    ))}
                    <div className="flex items-center gap-1.5 text-[#7c5cff] font-bold mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cff] animate-ping" />
                      <span>Diagnosing...</span>
                    </div>
                  </div>
                )}

                {scanState === 'complete' && (
                  <div className="space-y-1.5">
                    {logs.map((log, index) => (
                      <p key={index} className={index === logs.length - 1 || index === 6 ? 'text-red-400' : 'text-neutral-400'}>
                        &gt; {log}
                      </p>
                    ))}
                    <p className="text-red-400 font-bold border-t border-red-500/10 pt-2 mt-2 flex items-center gap-1">
                      <IconBug className="w-3.5 h-3.5" />
                      <span>VERDICT: ROUTE IS DEFUNCT. RECOMMEND RETURNING TO HOMEPAGE.</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Interaction Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/"
                className="flex-1 py-2.5 px-4 rounded-lg bg-[#7c5cff] hover:bg-[#6c4be0] text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-xs shadow-lg shadow-[#7c5cff]/10 border border-[#8a6eff] no-underline"
              >
                <IconHome className="w-4 h-4" />
                <span>Return to Desktop</span>
              </Link>
              
              <button
                onClick={handleStartScan}
                disabled={scanState === 'scanning'}
                className="flex-1 py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-xs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <IconRefresh className={`w-4 h-4 ${scanState === 'scanning' ? 'animate-spin' : ''}`} />
                <span>
                  {scanState === 'complete' ? 'Run Scan Again' : scanState === 'scanning' ? 'Scanning...' : 'Diagnose Error'}
                </span>
              </button>
            </div>
          </div>
        </BorderGlow>

        {/* Small Scrambled Brand Footer */}
        <div className="mt-8 flex justify-center opacity-40 hover:opacity-100 transition-opacity duration-300">
          <ScrambledText
            className="text-xs tracking-[0.2em] font-mono cursor-default text-neutral-500"
            radius={80}
            duration={1.0}
            speed={0.4}
            scrambleChars="░▒▓█<>?/[]{}|+=*^%$#@!"
          >
            SYSTEM OVERFLOW
          </ScrambledText>
        </div>
      </motion.div>
    </div>
  );
}
