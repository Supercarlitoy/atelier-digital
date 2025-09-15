"use client";

import { useState } from 'react';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  iconType?: 'emoji' | 'image';
  price?: string;
}

interface ServiceCardsProps {
  services: Service[];
}

const ServiceCards = ({ services }: ServiceCardsProps) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="service-cards">
      {services.map((service) => (
        <div
          key={service.id}
          className={`service-card ${hoveredCard === service.id ? 'is-hovered' : ''}`}
          onMouseEnter={() => setHoveredCard(service.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="service-card__icon">
            {service.iconType === 'image' ? (
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={48}
                height={48}
                className="service-icon"
              />
            ) : (
              <span>{service.icon}</span>
            )}
          </div>
          <div className="service-card__content">
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
            <ul className="service-card__features">
              {service.features.map((feature, index) => (
                <li key={index} className="service-feature">
                  <span className="feature-icon">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {service.price && (
            <div className="service-card__footer">
              <span className="service-card__price">{service.price}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;

