'use client';

import React from 'react';
import { DesktopProvider, useDesktop } from '@/contexts/DesktopContext';
import { Window } from '@/components/ui/Window';
import { FloatingDock } from '@/components/ui/floating-dock';
import LoadingScreen from '@/components/LoadingScreen';

// Sections
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

// Icons
import {
  IconTerminal2,
  IconBriefcase,
  IconMail,
  IconUser
} from '@tabler/icons-react';

const DesktopWorkspace = () => {
  const { openWindow, windows } = useDesktop();

  const dockItems = [
    {
      title: "Projects",
      icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
      onClick: (e: React.MouseEvent) => { e.preventDefault(); openWindow('projects'); }
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
      onClick: (e: React.MouseEvent) => { e.preventDefault(); openWindow('about'); }
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
      onClick: (e: React.MouseEvent) => { e.preventDefault(); openWindow('contact'); }
    },
  ];

  return (
    <div id="desktop-area" className="relative w-screen h-screen overflow-hidden bg-[#0A0A0B] text-white">
      <div className="absolute inset-0 z-0 overflow-y-auto overflow-x-hidden scrollbar-hide pb-32">
        <Hero />
      </div>

      {/* Windows */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Window id="projects" title="Projects" defaultWidth={850} defaultHeight={650}>
            <Projects />
          </Window>
          <Window id="about" title="About" defaultWidth={800} defaultHeight={500}>
            <About />
          </Window>
          
          <Window id="contact" title="Contact" defaultWidth={500} defaultHeight={400}>
            <Contact />
          </Window>
        </div>
      </div>

      {/* Taskbar / Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} mobileClassName="translate-y-2" />
      </div>
    </div>
  );
};

export default function DesktopApp() {
  return (
    <DesktopProvider>
      <LoadingScreen />
      <DesktopWorkspace />
    </DesktopProvider>
  );
}
