import { useState } from 'react';
import styles from './DownloadResumeButton.module.css';

const DownloadResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.downloadContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href="/samik_nayak_resume.pdf" 
        download="samik_nayak_resume.pdf"
        className={styles.downloadLink}
        aria-label="Download Resume"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={styles.downloadIcon}
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        
        {isHovered && (
          <span className={styles.tooltip}>Download My Resume</span>
        )}
      </a>
    </div>
  );
};

export default DownloadResumeButton;
