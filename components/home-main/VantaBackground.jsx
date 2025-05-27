'use client';
import React, { useRef, useEffect } from 'react';
const VantaBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.8;
        this.vy = (Math.random() - 0.5) * 1.8;
        this.size = Math.random() * 5 + 3;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - this.x;
          const dy = mouse.current.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const attractionRadius = 120;
          if (dist < attractionRadius) {
            const force = (attractionRadius - dist) / attractionRadius * 0.4;
            const angle = Math.atan2(dy, dx);
            this.vx += force * Math.cos(angle);
            this.vy += force * Math.sin(angle);
          }
        }
        // Friction kam kiya hai taaki particles ruk na jayein
        this.vx *= 0.99;
        this.vy *= 0.99;
        // Velocity agar bahut kam ho to thoda speed add karo taaki particles ruk na jayein
        if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.2;
        if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.2;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#FF4400';
        ctx.fill();
      }
    }
    const numParticles = 80;
    particles.current = [];
    for (let i = 0; i < numParticles; i++) {
      particles.current.push(new Particle());
    }
    const connectParticles = () => {
      let maxDistance = 150;
      for (let a = 0; a < particles.current.length; a++) {
        for (let b = a + 1; b < particles.current.length; b++) {
          let dx = particles.current[a].x - particles.current[b].x;
          let dy = particles.current[a].y - particles.current[b].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / maxDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles.current[a].x, particles.current[a].y);
            ctx.lineTo(particles.current[b].x, particles.current[b].y);
            ctx.stroke();
          }
        }
      }
    };
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.current.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: '#0F0F0F',
        display: 'block',
      }}
    />
  );
};
export default VantaBackground;