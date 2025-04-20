import { useEffect } from 'react';

const useMagnetEffect = (selector = '.skill-item') => {
  useEffect(() => {
    const items = document.querySelectorAll(selector);

    const handleMouseMove = (e) => {
      const item = e.currentTarget;
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.03)`;
    };

    const handleMouseLeave = (e) => {
      const item = e.currentTarget;
      item.style.transform = 'translate(0, 0) scale(1)';
    };

    items.forEach((item) => {
      item.addEventListener('mousemove', handleMouseMove);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener('mousemove', handleMouseMove);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [selector]);
};

export default useMagnetEffect;
