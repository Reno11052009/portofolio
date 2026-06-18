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
import ScrambledText from '@/components/ScrambledText';


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
      title: "About",
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#mobile-about",
      onClick: (e: React.MouseEvent) => { 
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
          e.preventDefault();
          document.getElementById('mobile-about')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          e.preventDefault(); 
          openWindow('about'); 
        }
      }
    },
    {
      title: "Projects",
      icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#mobile-projects",
      onClick: (e: React.MouseEvent) => { 
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
          e.preventDefault();
          document.getElementById('mobile-projects')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          e.preventDefault(); 
          openWindow('projects'); 
        }
      }
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#mobile-contact",
      onClick: (e: React.MouseEvent) => { 
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
          e.preventDefault();
          document.getElementById('mobile-contact')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          e.preventDefault(); 
          openWindow('contact'); 
        }
      }
    },
  ];


  return (
    <div id="desktop-area" className="relative w-screen h-screen overflow-hidden bg-[#0A0A0B] text-white">
      <div className="absolute inset-0 z-0 overflow-y-auto md:overflow-hidden overflow-x-hidden scrollbar-hide pb-32 md:pb-0">
        <Hero />

        
        {/* Mobile scrollable content */}
        <div className="md:hidden flex flex-col space-y-24 px-4 pb-24 mt-12 max-w-7xl mx-auto">

          <div id="mobile-about" className="scroll-mt-6">
            <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <IconUser className="w-6 h-6 text-neutral-400" />
              <h2 className="text-2xl font-bold">About Me</h2>
            </div>
            <About />
          </div>

          <div id="mobile-projects" className="scroll-mt-6">
            <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <IconBriefcase className="w-6 h-6 text-neutral-400" />
              <h2 className="text-2xl font-bold">Projects</h2>
            </div>
            <Projects />
          </div>
          
          
          <div id="mobile-contact" className="scroll-mt-6">
            <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <IconMail className="w-6 h-6 text-neutral-400" />
              <h2 className="text-2xl font-bold">Contact</h2>
            </div>
            <Contact />
          </div>

          <div className="mt-8 flex justify-center">
            <ScrambledText
              className="scrambled-text-demo"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars="░▒▓█<>?/[]{}|+=*^%$#@!"
            >
              RENO
            </ScrambledText>
          </div>
        </div>

      </div>

      {/* Windows (Desktop only) */}
      <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Window id="projects" title="Projects" defaultWidth={850} defaultHeight={650}>
            <Projects />
          </Window>
          <Window id="about" title="About" defaultWidth={800} defaultHeight={500}>
            <About />
          </Window>
          
          <Window id="contact" title="Contact" defaultWidth={800} defaultHeight={500}>
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
