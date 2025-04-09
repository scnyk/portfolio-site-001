// app/data/tabsData.ts
import React from 'react';
import { TabItem } from '../types';

const tabsData: TabItem[] = [
  {
    id: 'about',
    number: '01',
    title: 'About Me',
    content: (
      <p className="text-lg">
        As a global market maker, we trade thousands of financial instruments on exchanges around the world, continuously injecting liquidity to make markets more efficient, transparent and stable for all market participants.
      </p>
    ),
  },
  {
    id: 'experience',
    number: '02',
    title: 'Work Experience',
    content: (
      <p className="text-lg">
        Our cutting-edge technology and infrastructure enable high-performance trading systems capable of processing millions of transactions per day with minimal latency.
      </p>
    ),
  },
  {
    id: 'projects',
    number: '03',
    title: 'Projects',
    content: (
      <p className="text-lg">
        We implement sophisticated risk management systems that monitor transactions in real-time, ensuring compliance with regulatory requirements and protecting our firm against market volatility.
      </p>
    ),
  },
  {
    id: 'education',
    number: '04',
    title: 'Education',
    content: (
      <p className="text-lg">
        Our team of data scientists and researchers develop advanced algorithms and analytical models to identify market patterns and optimize trading strategies across global markets.
      </p>
    ),
  },
  {
    id: 'operations',
    number: '05',
    title: 'Business Operations',
    content: (
      <p className="text-lg">
        Our operations team ensures seamless functioning of all business processes, from trade settlements to financial reporting, allowing our traders and technologists to focus on their core responsibilities.
      </p>
    ),
  },
];

export default tabsData;