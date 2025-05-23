
import React from 'react';
import Projects from '@/components/pages/Projects'
import Hero from '@/components/pages/Hero';
import Certifications from '@/components/pages/Certifications2';
import Services from '@/components/pages/Services';
import ProjectGallery from '@/components/pages/ProjectGallery';
import Skills from '@/components/pages/Skills';
import Experiences from '@/components/pages/Experiences';
import Contact from '@/components/pages/Contact';
import About from '@/components/pages/About';
import Experiences2 from '@/components/pages/Experiences2';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Projects /> */}
      <Skills />
      <Experiences2 />
      <Services />
      {/* <ProjectGallery /> */}
      <Experiences />
      <Certifications />
      <Contact />
      <About />
    </div>
  );
};

export default Home;
