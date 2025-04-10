"use client";

import React, { useState } from 'react';
import Panel from './Panel';
import DownloadResumeButton from './DownloadIcon';

type TabContent = {
  panels: {
    title: string;
    link: string | undefined;
    bulletPoints: string[];
  }[];
};

type Tab = {
  id: string;
  number: string;
  title: string;
  content: TabContent;
};

interface ResumeTabSystemProps {
  tabs: Tab[];
  initialActiveTab?: string;
}

const ResumeTabSystem: React.FC<ResumeTabSystemProps> = ({ tabs, initialActiveTab }) => {
  const [activeTabId, setActiveTabId] = useState<string>(initialActiveTab || tabs[0].id);

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen text-white p-8 gap-12">
      {/* Left side - Tab navigation */}
      <div className="w-full md:w-2/5">
        <h2 className="ml-5 text-sm uppercase tracking-wider font-serif mb-6">My resume</h2>
        <div className="ml-5 flex flex-row gap-5 relative">
            <h1 className="text-5xl duration-300 font-serif mb-12">Samik Nayak</h1>
            <div className=""><DownloadResumeButton /></div>
        </div>
        <div className="ml-5 space-y-8">
          {tabs.map((tab) => (
            <div 
              key={tab.id} 
              className="group flex items-center cursor-pointer group"
              onClick={() => setActiveTabId(tab.id)}
            >
              <div 
                className={`w-1 h-12 mr-4 transition-colors duration-300 ${
                  activeTabId === tab.id ? 'bg-red-500' : 'group-hover:bg-orange-300 bg-white'
                }`}
              />
              <div>
                <div className="text-xs opacity-70 mb-1">{tab.number}</div>
                <div className="text-2xl font-[Roboto_Mono]">{tab.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right side - Content panels */}
      <div className="w-full font-serif md:w-3/5 mt-12 md:mt-0 overflow-y-auto">
        <h2 className="text-sm uppercase tracking-wider mb-6">{activeTab.title.toUpperCase()}</h2>
        
        <div className="space-y-6 px-5">
          {activeTab.content.panels.map((panel, index) => (
            <Panel
              key={index}
              link={panel.link}
              title={panel.title}
              bulletPoints={panel.bulletPoints}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeTabSystem;