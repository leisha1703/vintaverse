import React, { useEffect, useRef } from 'react';
import './StylishScroll.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const StylishScroll = () => {
  const pathRef = useRef(null);
  useEffect(() => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  }, []);
  const imageClasses = [
    'left', 'right', 'left-down', 'right-down',
    'left', 'right', 'left-down', 'right-down',
    'left', 'right', 'left-down', 'right-down',
    'left', 'right', 'left-down', 'right-down',
    'left', 'right', 'left-down', 'right-down'
  ];
  return (
    <>
      <div className="svg-container">
        <svg viewBox="0 0 116 272" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={pathRef}
            d="M4.5 1C24 25 43.8 47.9 67 67.5C96 92 126.687 67.8762 110 59C86.5 46.5 62.9322 64 44.5 75C28.1507 84.757 9.00003 103.5 36 120C63 136.5 107 123.5 107 148C107 165.5 85.2816 147.307 24 169C-32.5 189 27 206.5 66 210C105 213.5 105 213 111 217C117 221 117 239.5 98.5 238C80 236.5 72 233.5 70 233C68 232.5 41.5 227 70 271"
            stroke="green"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
      <div className="image-strip">
        {imageClasses.map((cls, index) => (
          <div key={index} className={`image-box ${cls}`}>
            <img src="download.jpg" alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
};
export default StylishScroll;