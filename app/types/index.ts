// import { ReactNode } from 'react';

export interface TabItem {
    id: string;
    number: string;
    title: string;
    content: React.ReactNode;
  }

export interface PanelItem {
  title: string;
  bulletPoints: string[];
}

export interface ResumeTabItem {
  id: string;
  number: string;
  title: string;
  content: {
    panels: PanelItem[];
  };
}