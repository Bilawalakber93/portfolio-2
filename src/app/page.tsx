"use client";

import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import About from '@/components/About'
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react';

const page = () => {
  useEffect(() => {
  AOS.init({
    easing: "ease-out-back",
    duration: 1200,
    delay: 100,
    mirror: true,
    anchorPlacement: "bottom-bottom",
    offset: 160,
  });
  AOS.refresh()
  }, []);
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </div>
  )
}

export default page

