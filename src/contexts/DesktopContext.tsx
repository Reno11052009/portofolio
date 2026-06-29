'use client';

import React, { createContext, useContext, useState } from 'react';

export type WindowState = {
  id: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
};

export type ViewMode = 'window' | 'scroll';

type DesktopContextType = {
  windows: Record<string, WindowState>;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
};

const defaultContext: DesktopContextType = {
  windows: {},
  openWindow: () => {},
  closeWindow: () => {},
  minimizeWindow: () => {},
  maximizeWindow: () => {},
  focusWindow: () => {},
  viewMode: 'window',
  setViewMode: () => {},
};

const DesktopContext = createContext<DesktopContextType>(defaultContext);

export const useDesktop = () => useContext(DesktopContext);

export const DesktopProvider = ({ children }: { children: React.ReactNode }) => {
  const [windows, setWindows] = useState<Record<string, WindowState>>({
    about: { id: 'about', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
    experience: { id: 'experience', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 11 },
    projects: { id: 'projects', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 12 },
    contact: { id: 'contact', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 13 },
    settings: { id: 'settings', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 14 },
  });
  const [topZIndex, setTopZIndex] = useState(20);
  const [viewMode, setViewMode] = useState<ViewMode>('window');

  const focusWindow = (id: string) => {
    setTopZIndex((prev) => prev + 1);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], zIndex: topZIndex + 1 },
    }));
  };

  const openWindow = (id: string) => {
    setTopZIndex((prev) => prev + 1);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: true, isMinimized: false, zIndex: topZIndex + 1 },
    }));
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true },
    }));
  };

  const maximizeWindow = (id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMaximized: !prev[id].isMaximized },
    }));
  };

  return (
    <DesktopContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        viewMode,
        setViewMode,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
};
