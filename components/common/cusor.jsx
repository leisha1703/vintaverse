'use client';
import React, { useEffect } from 'react';
function Cursor() {
  useEffect(() => {
    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');
    const animateit = function (e) {
      const hoverAnim = this.querySelector('.hover-anim');
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;
      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;
      hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };
    // :point_down: Smooth cursor follow
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const animateCursor = () => {
      currentX += (mouseX - currentX) * 0.2; // :point_left: Adjust 0.1 for slower/faster
      currentY += (mouseY - currentY) * 0.2;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      requestAnimationFrame(animateCursor);
    };
    window.addEventListener('mousemove', handleMouseMove);
    animateCursor();
    link.forEach((b) => b.addEventListener('mousemove', animateit));
    link.forEach((b) => b.addEventListener('mouseleave', animateit));
    document.querySelectorAll('a, .cursor-pointer').forEach((el) => {
      el.addEventListener('mousemove', () => {
        cursor.classList.add('cursor-active');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-active');
      });
    });
  }, []);
  return <div className="cursor"></div>;
}
export default Cursor;