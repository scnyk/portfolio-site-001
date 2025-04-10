"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumeData from './data/resumeData';
import ResumeTabSystem from '@/components/ResumeTabSystem';


export default function Home() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  
  useEffect(() => {
    const handleScroll = () => {
      // Hide the "scroll for more" section when the user scrolls past 100px
      if (window.scrollY > 100) {
        setShowScrollHint(false);
      } else {
        setShowScrollHint(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="relative h-screen flex flex-col justify-between">
        {/* Main Content */}
        <div className="h-screen flex lg:flex-row md:flex-row flex-col-reverse justify-center items-center">

          {/* Profile Image - Can be made circular, but the png itself is circular - Adobe Illustrator */}
          <div className="flex justify-center items-center lg:p-0 md:p-0 p-10">
            <Image
              src="/profile.png"
              alt="Profile"
              width={500}
              height={500}
              layout="intrinsic"
              unoptimized
            />
          </div>

          {/* Text Section */}
          <div className="lg:ml-40 md:ml-20 flex flex-col font-poppins flex justify-center items-center">
            <h1 className="mb-2 lg:text-[70px] text-[50px] duration-300 font-[530] text-center">Samik Nayak</h1>
            <h1 className="lg:text-[25px] text-[18px] font-[230] text-center">
              Student @{' '}
              <span className="text-[#FFC627]">Arizona State{' '}</span>
              <span className="">|</span>
              <span>{' '}Software Developer @{' '}</span>
              <span className="text-[#FF9900]">Amazon</span>
            </h1>

            <div className="mt-5 flex flex-row lg:gap-5 gap-2 duration-100 items-center">
              <a
                href="https://github.com/scnyk"
                target="_blank"
                className="hover:bg-white/15 bg-white outline text-black hover:text-white px-4 py-2 rounded-md mt-4 flex items-center gap-2"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/samik-nayak/"
                target="_blank"
                className="hover:bg-white/15 bg-[#0072b1] hover:outline text-white px-4 py-2 rounded-md mt-4 flex items-center gap-2"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Scroll for More Section */}
        <div
          className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-500 ${
            showScrollHint ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <p className="text-white-500 animate-bounce"><a href="#resume-section">check out my resume</a></p>
        </div>
      </div>

      {/* Next Section */}
      <div id="resume-section" className="py-10 min-h-screen  flex flex-col justify-center items-center">
        <ResumeTabSystem 
          tabs={resumeData} 
          initialActiveTab="about"
        />
      </div>
    </div>
  );
}

