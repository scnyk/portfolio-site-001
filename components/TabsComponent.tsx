/*

UNIMPLEMENTED - Use ResumeTabSystem

*/

import React, { useState } from 'react';

type Tab = {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
};

interface TabSystemProps {
  tabs: Tab[];
  initialActiveTab?: string;
}

const TabSystem: React.FC<TabSystemProps> = ({ tabs, initialActiveTab }) => {
  const [activeTabId, setActiveTabId] = useState<string>(initialActiveTab || tabs[0].id);

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div className="flex flex-col md:flex-row w-full  text-white px-8 gap-12">
      <div className="w-full md:w-2/5">
        <h2 className="text-sm uppercase tracking-wider mb-6"></h2>
        <h1 className="text-5xl font-serif mb-12">My Resume</h1>
        
        <div className="space-y-8">
          {tabs.map((tab) => (
            <div 
              key={tab.id} 
              className="flex items-center cursor-pointer group"
              onClick={() => setActiveTabId(tab.id)}
            >
              <div 
                className={`w-1 h-12 mr-4 transition-colors duration-300 ${
                  activeTabId === tab.id ? 'bg-red-500' : 'bg-white'
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
      
      <div className="w-full md:w-3/5 mt-12 md:mt-0">
        <h2 className="text-sm uppercase tracking-wider mb-6">{activeTab.title}</h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className="w-24 h-24 rounded-full bg-white"></div>
            <div className="flex flex-col ml-4">
              {/* Bars representing the chart from the image */}
              <div className="flex gap-2 items-end">
                <div className="w-8 h-24 bg-white"></div>
                <div className="w-8 h-16 bg-red-500"></div>
                <div className="w-8 h-20 bg-white"></div>
                <div className="w-8 h-16 bg-white"></div>
                <div className="w-8 h-24 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          {activeTab.content}
        </div>
        
        <button className="border border-red-500 text-white rounded-full px-8 py-2 hover:bg-red-500 transition-colors">
          Find out more
        </button>
      </div>
    </div>
  );
};

export default TabSystem;