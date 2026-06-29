'use client';

import React from 'react';
import { DesktopProvider, useDesktop } from '@/contexts/DesktopContext';
import { Window } from '@/components/ui/Window';
import { FloatingDock } from '@/components/ui/floating-dock';
import LoadingScreen from '@/components/LoadingScreen';

// Sections
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ScrambledText from '@/components/ScrambledText';


// Icons
import {
  IconTerminal2,
  IconBriefcase,
  IconMail,
  IconUser,
  IconSettings
} from '@tabler/icons-react';

const SettingsContent = () => {
  const { viewMode, setViewMode } = useDesktop();
  return (
    <div className="p-6 h-full text-white flex flex-col space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Desktop View Mode</h3>
        <p className="text-sm text-neutral-400 mb-6">Choose how you want to navigate the portfolio on desktop.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setViewMode('window')}
            className={`flex-1 p-4 rounded-xl border transition-all text-left ${viewMode === 'window' ? 'bg-white/10 border-white/40 ring-1 ring-white/20' : 'border-white/10 hover:bg-white/5'}`}
          >
            <div className="font-semibold mb-1">Window Mode</div>
            <div className="text-xs text-neutral-400">Classic desktop UI with draggable windows.</div>
          </button>
          <button
            onClick={() => setViewMode('scroll')}
            className={`flex-1 p-4 rounded-xl border transition-all text-left ${viewMode === 'scroll' ? 'bg-white/10 border-white/40 ring-1 ring-white/20' : 'border-white/10 hover:bg-white/5'}`}
          >
            <div className="font-semibold mb-1">Scroll Mode</div>
            <div className="text-xs text-neutral-400">Modern single-page scrolling experience.</div>
          </button>
        </div>
      </div>
    </div>
  );
};

const DesktopWorkspace = () => {
  const { openWindow, viewMode } = useDesktop();

  const dockItems = [
    {
      title: "About",
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#mobile-about",
      onClick: (e: React.MouseEvent) => {
        if (typeof window !== 'undefined' && (window.innerWidth < 768 || viewMode === 'scroll')) {
          e.preventDefault();
          document.getElementById('mobile-about')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          e.preventDefault();
          openWindow('about');
        }
      }
    },
    {
      title: "Experience",
      icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#mobile-experience",
      onClick: (e: React.MouseEvent) => {
        if (typeof window !== 'undefined' && (window.innerWidth < 768 || viewMode === 'scroll')) {
          e.preventDefault();
          document.getElementById('mobile-experience')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          e.preventDefault();
          openWindow('experience');
        }
      }
    },
    {
      title: "Projects",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#mobile-projects",
      onClick: (e: React.MouseEvent) => {
        if (typeof window !== 'undefined' && (window.innerWidth < 768 || viewMode === 'scroll')) {
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
        if (typeof window !== 'undefined' && (window.innerWidth < 768 || viewMode === 'scroll')) {
          e.preventDefault();
          document.getElementById('mobile-contact')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          e.preventDefault();
          openWindow('contact');
        }
      }
    },
    {
      title: "Settings",
      icon: <IconSettings className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
      hideOnMobile: true,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        openWindow('settings');
      }
    },
  ];


  return (
    <div id="desktop-area" className="relative w-screen h-screen overflow-hidden bg-[#0A0A0B] text-white">
      <div className={`absolute inset-0 z-0 overflow-x-hidden scrollbar-hide pb-32 ${viewMode === 'window' ? 'overflow-y-auto md:overflow-hidden md:pb-0' : 'overflow-y-auto'}`}>
        <Hero />


        {/* Scrollable content */}
        <div className={`flex flex-col space-y-24 px-4 pb-24 mt-12 max-w-7xl mx-auto ${viewMode === 'window' ? 'md:hidden' : ''}`}>

          <div id="mobile-about" className="scroll-mt-6">
            <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <IconUser className="w-6 h-6 text-neutral-400" />
              <h2 className="text-2xl font-bold">About Me</h2>
            </div>
            <About />
          </div>

          <div id="mobile-experience" className="scroll-mt-6">
            <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <IconBriefcase className="w-6 h-6 text-neutral-400" />
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>
            <Experience />
          </div>

          <div id="mobile-projects" className="scroll-mt-6">
            <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <IconTerminal2 className="w-6 h-6 text-neutral-400" />
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
          {viewMode === 'window' && (
            <>
              <Window id="projects" title="Projects" defaultWidth={850} defaultHeight={650}>
                <Projects />
              </Window>
              <Window id="about" title="About" defaultWidth={800} defaultHeight={500}>
                <About />
              </Window>
              <Window id="experience" title="Experience" defaultWidth={850} defaultHeight={600}>
                <Experience />
              </Window>
              <Window id="contact" title="Contact" defaultWidth={800} defaultHeight={500}>
                <Contact />
              </Window>
            </>
          )}
          <Window id="settings" title="Settings" defaultWidth={500} defaultHeight={350}>
            <SettingsContent />
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
