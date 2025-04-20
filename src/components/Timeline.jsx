// src/components/Timeline.jsx
import React from 'react';
import TimelineCard from './TimelineCard';
import { timelineData } from '../data/timelineData';
import '../styles/Timeline.css';

const Timeline = () => {
  return (
    <section className="timeline-wrapper" id="experience">
      <h2 className="timeline-heading">Journey Through Time 🌀</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <TimelineCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
