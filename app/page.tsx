"use client";

import { useEffect, useState, useRef } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Projects from '../components/projects';
import '../styles/home.css';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [contentFadeIn, setContentFadeIn] = useState(false);
  const [backgroundFadeIn, setBackgroundFadeIn] = useState(false);

  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // background fade in
  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundFadeIn(true);
    }, 900);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // content fade in
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentFadeIn(true);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-slate-800'>
      <div className={`fixed top-0 left-0 w-full h-full homeBackground backgroundOpacity ${backgroundFadeIn ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`text-center z-10 contentOpacity ${contentFadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <section className='h-screen pt-48 text-white opacity-90'>
          <h1 className="m-8 text-7xl font-extrabold">PORTFOLIO</h1>
          <p className="mx-40 italic text-xl py-5">A showcase of my projects and background.</p>
          <button onClick={scrollToProjects} className='hover:text-blue-400'>
            {isClient && <ArrowCircleDownIcon sx={{ fontSize: 80 }} />}
          </button>
        </section>
        <section id='projectsSection' ref={projectsRef} className="h-screen absolute pt-20 mx-60">
          <Projects />
        </section>
      </div>
    </div>
  );
}
