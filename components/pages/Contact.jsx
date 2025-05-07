import React from 'react';
import { motion as m } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact" className="w-full h-[500px] md:h-[600px] bg-[#121B42] md:bg-[url('/images/contact-bg.png')] bg-cover relative">
      <div className='w-full h-full bg-black/[.4] py-16 md:py-20'>
        <div className='container mx-auto flex flex-col justify-between h-full'>
          <div>
            <m.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0, duration:1}} className='flex items-center gap-4 mb-8'>
              <div className='bg-[#01B2F6] w-1 h-8 md:h-16'></div>
              <h1 className='text-2xl md:text-4xl font-semibold uppercase text-white'>
                Contact Me
              </h1>
            </m.div>
            <m.h5 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2, duration:1}} className='text-lg md:text-2xl text-[#D9D9D9] mb-2'>
              Chan Min Oo
            </m.h5>
            <m.h4 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4, duration:1}} className='text-lg md:text-2xl font-semibold text-[#D9D9D9]'>
              Data Entry / Document Reviewer
            </m.h4>
          </div>
          <m.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.6, duration:1}}>
            <ul className='mb-4 flex items-center gap-2'>
              <li>
                <a href='#'>
                  <img src='/icons/facebook.svg' alt='facebook' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='/icons/github.svg' alt='github' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='/icons/linkedin.svg' alt='linkedin' />
                </a>
              </li>
            </ul>
            <p className='text-base font-semibold text-white mb-2'>
              Email - zinminthet14@gmail.com
            </p>
            <p className='text-base font-semibold text-white mb-4'>
              Phone - +959 765320562
            </p>
            <p className='text-base font-semibold text-white'>Thingangyun, Yangon, Myanmar</p>
          </m.div>
        </div>
      </div>
      <img
        src='/icons/pin.svg'
        alt='pin icon'
        className='absolute max-sm:hidden md:top-24 md:right-8 lg:top-[240px] lg:right-[330px]'
      />
    </div>
  );
};

export default Contact;
