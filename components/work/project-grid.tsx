"use client";

import { useState } from 'react';
import Image from 'next/image';
import Button from '../common/button';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

interface ProjectGridProps {
  projects: Project[];
  categories: string[];
}

const ProjectGrid = ({ projects, categories }: ProjectGridProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setActiveCategory(category);
    
    // Simulate loading for smooth animation
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="project-grid-wrapper">
      <div className="project-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'is-active' : ''}`}
            onClick={() => handleCategoryChange(category)}
            type="button"
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className={`project-grid ${isLoading ? 'is-loading' : ''}`}>
        {filteredProjects.map((project, index) => (
          <article 
            key={project.id} 
            className="project-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="project-card__image">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                className="project-image"
              />
              <div className="project-card__overlay">
                <Button href={project.link} variant="primary">
                  View Project
                </Button>
              </div>
            </div>
            <div className="project-card__content">
              <div className="project-card__meta">
                <span className="project-card__category">{project.category}</span>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="empty-state">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
