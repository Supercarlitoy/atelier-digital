

"use client";

import { useState, useEffect } from 'react';
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
}

const Testimonials = ({ testimonials, autoplay = true, interval = 5000 }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, testimonials.length]);

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

  return (
    <div className="testimonials">
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
          <button className="testimonial-btn testimonial-btn--prev" onClick={prevSlide}>
            ‹
          </button>
          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button className="testimonial-btn testimonial-btn--next" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
