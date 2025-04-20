import React, { useEffect, useRef, useState } from 'react';
import { showcaseData } from '../data/showcaseData';
import ShowcaseCard from './ShowcaseCard';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import '../styles/Showcase.css';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const scrollRef = useRef();
  const horizontalRef = useRef();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate heading
      gsap.from('.showcase-heading', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: 'top 80%',
        },
      });
  
      const sections = gsap.utils.toArray('.swiper-slide');
      const cardWidth = 420; // card width + margin
      const visibleCards = 3;
      const totalScrollWidth = (sections.length - visibleCards) * cardWidth;
  
      gsap.to(horizontalRef.current, {
        x: () => `-${totalScrollWidth}`,
        ease: 'none',
        scrollTrigger: {
          trigger: scrollRef.current,
          start: 'top top', // Start from the top of the page
          end: () => `+=${totalScrollWidth}`, // Ensures scrolling across the whole section
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const scrollProgress = self.progress;
            const pinHeight = 500 + (scrollProgress * 200); // Dynamically adjusting height
            scrollRef.current.style.height = `${pinHeight}px`;
          },
        },
      });      
    }, scrollRef);
  
    return () => ctx.revert();
  }, []);  

  return (
    <section className="showcase-wrapper" id="achievements" ref={scrollRef}>
      <h2 className="showcase-heading">🏆 Achievements & Certifications</h2>

      <div className="swiper-container" ref={horizontalRef}>
        {showcaseData.map((item, index) => (
          <div className="swiper-slide" key={index}>
            <ShowcaseCard {...item} index={index} onClick={() => setSelectedCard(item)} />
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="modal-backdrop" onClick={() => setSelectedCard(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>✖</button>
            <img src={selectedCard.image} alt={selectedCard.title} className="modal-img" />
            <h3>{selectedCard.title}</h3>
            <p>{selectedCard.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Showcase;
