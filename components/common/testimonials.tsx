"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
  pauseOnHover?: boolean;
}

const Testimonials = ({ testimonials, autoplay = true, interval = 6000, pauseOnHover = true }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!autoplay || isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, Math.max(2500, interval));
    timerRef.current = id;
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoplay, interval, testimonials.length, isPaused]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleMouseEnter = () => { if (pauseOnHover) setIsPaused(true); };
  const handleMouseLeave = () => { if (pauseOnHover) setIsPaused(false); };

  return (
    <div className="testimonials" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="testimonials__container">
        <div className="testimonials__slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="testimonial__content">
                <div className="testimonial__rating">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`star ${i < testimonial.rating ? 'is-filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="testimonial__quote">
                  "{testimonial.content}"
                </blockquote>
                <div className="testimonial__author">
                  <div className="testimonial__avatar">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="testimonial__info">
                    <h4 className="testimonial__name">{testimonial.name}</h4>
                    <p className="testimonial__role">{testimonial.role}</p>
                    <p className="testimonial__company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials__controls">
          <button className="testimonial-btn testimonial-btn--prev" onClick={prevSlide} type="button" aria-label="Previous testimonial">
            ‹
          </button>
          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeIndex === index ? 'is-active' : ''}`}
                onClick={() => goToSlide(index)}
                type="button"
                aria-current={activeIndex === index}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button className="testimonial-btn testimonial-btn--next" onClick={nextSlide} type="button" aria-label="Next testimonial">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
