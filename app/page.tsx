"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ResumeSection from '../components/ResumeSection';

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
        <div className="h-screen flex flex-row justify-center items-center">

          {/* Profile Image - Can be made circular, but the png itself is circular - Adobe Illustrator */}
          <div className="flex justify-center items-center  ">
            <Image
              src="/profile.png"
              alt="Profile"
              width={500}
              height={500}
              layout="intrinsic"
            />
          </div>

          {/* Text Section */}
          <div className="ml-40 flex flex-col font-poppins flex justify-center items-center">
            <h1 className="mb-2 text-[70px] font-[530]">samik nayak</h1>
            <h1 className="text-[20px] font-[230]">
              student @{' '}
              <span className="text-[#FFC627]">arizona state{' '}</span>
              <span className="text-[25px]">|</span>
              <span>{' '}software developer @{' '}</span>
              <span className="text-[#FF9900]">amazon</span>
            </h1>

            <div className="mt-5 flex flex-row gap-5 items-center">
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
          <p className="text-white-500 animate-bounce">check out my resume</p>
        </div>
      </div>

      {/* Next Section */}
      <div className="py-20 min-h-screen bg-[#4F518C] flex flex-col justify-center items-center">
        <h2 className="text-4xl font-[510] mb-10">Work & Projects</h2>
        <ResumeSection />
      </div>
    </div>
  );
}

