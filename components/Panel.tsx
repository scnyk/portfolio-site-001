import React from 'react';

interface PanelProps {
  title: string;
  link: string | undefined;
  bulletPoints: string[];
}

const Panel: React.FC<PanelProps> = ({ title, link, bulletPoints }) => {
    // if (link === undefined) {
    //     link = '';
    // }
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    }
      
  return (
    <div onClick={handleClick} className={`border border-white/25 hover:border-white/50 hover:shadow-xl hover:scale-101 duration-300 rounded-lg p-8 mb-6 ${link ? 'cursor-pointer' : ''}`}
    role={link ? 'link' : undefined}
    aria-label={link ? `${title} - Click to open link` : undefined}
>
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <ul className="space-y-4">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-xl mr-4">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Panel;