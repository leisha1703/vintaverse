'use client';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './BouncingLine.css';

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const BouncingLine = ({ color = '#F45837', width = 1000, height = 200 }) => {
  const wrapperRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const mouseY = useRef(height);
  const [isHovering, setIsHovering] = useState(false);
  const mouseMoveTween = useRef(null);

  // Object to animate and sync with mouseY.current
  const mouseYAnim = useRef({ current: height });

  useEffect(() => {
    let rafId;

    const updatePath = () => {
      const waveControlX = width / 2;
      const waveAmplitude = isHovering ? (mouseY.current - height) * 0.9 : 0;

      const pathData = `
        M 0 ${height}
        Q ${waveControlX} ${height + waveAmplitude}
          ${width} ${height}
      `;
      if (pathRef.current) {
        pathRef.current.setAttribute('d', pathData);
      }
      rafId = requestAnimationFrame(updatePath);
    };

    updatePath();

    return () => cancelAnimationFrame(rafId);
  }, [isHovering, height, width]);

  const handleMouseMove = (e) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    const centerY = e.clientY - rect.top;
    const deltaY = centerY - height;

    const targetY = clamp(height + deltaY * 1.5, height - 150, height + 150);

    if (mouseMoveTween.current) {
      mouseMoveTween.current.kill();
    }

    mouseMoveTween.current = gsap.to(mouseY, {
      current: targetY,
      duration: 0.05,
      ease: 'linear',
    });
  };

  const handleMouseLeave = () => {
    // Delay turning off hovering to keep stickiness longer
    setTimeout(() => setIsHovering(false), 900);

    // Start vibration animation timeline
    const tl = gsap.timeline();

    tl.to(mouseYAnim.current, {
      current: height + 100,
      duration: 0.3,
      ease: 'power3.in',
      onUpdate: () => {
        mouseY.current = mouseYAnim.current.current;
      },
    })
      .to(mouseYAnim.current, {
        current: height - 80,
        duration: 0.3,
        ease: 'power4.out',
        onUpdate: () => {
          mouseY.current = mouseYAnim.current.current;
        },
      })
      .to(mouseYAnim.current, {
        current: height + 60,
        duration: 0.25,
        ease: 'power2.inOut',
        onUpdate: () => {
          mouseY.current = mouseYAnim.current.current;
        },
      })
      .to(mouseYAnim.current, {
        current: height - 40,
        duration: 0.25,
        ease: 'power2.inOut',
        onUpdate: () => {
          mouseY.current = mouseYAnim.current.current;
        },
      })
      .to(mouseYAnim.current, {
        current: height + 20,
        duration: 0.2,
        ease: 'power2.inOut',
        onUpdate: () => {
          mouseY.current = mouseYAnim.current.current;
        },
      })
      .to(mouseYAnim.current, {
        current: height - 10,
        duration: 0.2,
        ease: 'power2.inOut',
        onUpdate: () => {
          mouseY.current = mouseYAnim.current.current;
        },
      })
      .to(mouseYAnim.current, {
        current: height,
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)',
        onUpdate: () => {
          mouseY.current = mouseYAnim.current.current;
        },
      });
  };

  return (
    <div
      className="bouncing-line-wrapper"
      ref={wrapperRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className="bouncing-line"
        ref={svgRef}
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height + 100}`}
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d={`M 0 ${height} Q ${width / 2} ${height} ${width} ${height}`}
          stroke={color}
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default BouncingLine;
