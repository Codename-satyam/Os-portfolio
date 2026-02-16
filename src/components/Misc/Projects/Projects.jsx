import React, { useState } from 'react';
import './Projects.scss';

// Import project images
import JigyasaImg1 from "../../../assets/projects/Jigyasa/images/1 (1).webp"
import JigyasaImg2 from '../../../assets/projects/Jigyasa/images/1 (2).webp';
import JigyasaImg3 from '../../../assets/projects/Jigyasa/images/1 (3).webp';
import JigyasaImg4 from '../../../assets/projects/Jigyasa/images/1 (4).webp';
import JigyasaImg5 from '../../../assets/projects/Jigyasa/images/1 (5).webp';

import CookBookImg1 from '../../../assets/projects/CookBook/images/1.webp';
import CookBookImg2 from '../../../assets/projects/CookBook/images/2.webp';
import CookBookImg3 from '../../../assets/projects/CookBook/images/3.webp';

import TemplateGenImg1 from '../../../assets/projects/TemplateGenerator/images/1 (1).webp';
import TemplateGenImg2 from '../../../assets/projects/TemplateGenerator/images/1 (2).webp';
import TemplateGenImg3 from '../../../assets/projects/TemplateGenerator/images/1 (3).webp';

const projectData = {
  jigyasa: {
    title: 'Jigyasa - Gamified Quiz Platform',
    shortDesc: 'Interactive quiz platform with scoring and gamification',
    description: `Jigyasa is an interactive quiz platform built with React that gamifies the learning experience through scoring, replayability, and instant feedback.

Features:
• 🎮 Interactive quiz gameplay with real-time scoring
• 🔄 Replayability - retake quizzes multiple times
• ⚡ Instant feedback on answers
• 📊 Score tracking and performance metrics
• 🎨 Responsive and engaging UI
• 💾 Local storage for quiz history

Technical Stack:
• Frontend: React.js
• Styling: CSS3
• Architecture: Component-based design
• State Management: React Hooks

Key Achievements:
• Developed optimized UI rendering for smooth gameplay without page reloads
• Implemented component-based architecture for scalability
• Created intuitive interface that encourages repeated engagement

Project Timeline: November 2025
GitHub: Quizy2`,
    images: [JigyasaImg1, JigyasaImg2, JigyasaImg3, JigyasaImg4, JigyasaImg5],
    link: 'https://github.com/Codename-satyam/Quizy2'
  },
  cookbook: {
    title: 'CookBook - Recipe Management Application',
    shortDesc: 'Recipe discovery and management platform',
    description: `CookBook is a comprehensive recipe management and discovery platform that helps users find, save, and organize recipes.

Features:
• 🔍 Smart ingredient-based recipe search
• 📖 Recipe browser with detailed instructions
• ❤️ Favorite recipes collection
• 📸 High-quality recipe images
• 🏷️ Easy categorization and filtering
• 💾 Save recipes locally
• 🎯 Personalized recommendations

Technical Stack:
• Frontend: React.js / HTML5 & CSS3
• Backend: Node.js & Express
• Database: MongoDB
• Architecture: Full-stack web application

Key Features:
• Pattern-matching logic for accurate recipe suggestions
• Live updates without page refresh
• Responsive design for mobile and desktop
• Recipe filtering by cuisine, difficulty, and time

Project Timeline: March 2025
GitHub: RecipeGen`,
    images: [CookBookImg1, CookBookImg2, CookBookImg3],
    link: 'https://github.com/Codename-satyam/RecipeGen'
  },
  templategenerator: {
    title: 'Template Generator - Dynamic Template Creation Tool',
    shortDesc: 'Drag-and-drop template builder for custom templates',
    description: `Template Generator is a powerful tool that enables users to create custom templates without any coding knowledge.

Features:
• 🎨 Drag-and-drop template builder
• 📋 Pre-built template library
• 🔧 Customizable components
• 📥 Template import/export functionality
• 🎯 Real-time preview
• 📱 Responsive template generation
• ⚡ Instant download and deployment

Technical Stack:
• Frontend: React.js / JavaScript
• Styling: CSS3 with modern design patterns
• Architecture: Component-based modular design
• Performance: Optimized rendering and caching

Key Capabilities:
• Create templates for websites and applications
• Generate code without manual HTML/CSS
• Customize colors, fonts, layouts, and content
• Export templates as ready-to-use code
• Share templates with others

Project Timeline: Ongoing Development (v2.0)
GitHub: TemplateGenerator`,
    images: [TemplateGenImg1, TemplateGenImg2, TemplateGenImg3],
    link: 'https://github.com/Codename-satyam/TemplateGenerator'
  },
  portfolio: {
    title: 'Portfolio Website - Interactive Desktop Experience',
    shortDesc: 'Windows 98 retro-style interactive portfolio',
    description: `A unique portfolio website built as an interactive Windows 98-style desktop environment.

Features:
• 🖥️ Windows 98 retro desktop theme
• 📁 File explorer-like project navigation
• 🎮 Interactive window system
• 📱 Responsive across devices
• ⚡ Smooth animations and transitions
• 🎨 Custom styling and components

Technical Stack:
• Frontend: React.js
• Styling: SCSS/CSS3
• Animation: CSS Animations & Transitions
• Architecture: Component-based React
• Deployment: Vercel

Key Components:
• Desktop environment with draggable windows
• Start menu navigation
• Taskbar with window management
• Project showcase with detailed views
• Resume and contact information
• Music and media player
• Document viewer

Creative Elements:
• Nostalgic desktop UI design
• Double-click window management
• Window minimize/maximize/close functionality
• Smooth drag interactions

Project Timeline: Ongoing & Maintained
Live: https://my-portfolio-pi-kohl-66.vercel.app/`,
    images: [],
    link: 'https://github.com/Codename-satyam/portfolio'
  }
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState('jigyasa');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectData[selectedProject];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleProjectChange = (projectKey) => {
    setSelectedProject(projectKey);
    setCurrentImageIndex(0);
  };

  return (
    <div className="projects-container">
      <div className="projects-sidebar">
        <h3>My Projects</h3>
        {Object.entries(projectData).map(([key, data]) => (
          <div
            key={key}
            className={`project-item ${selectedProject === key ? 'active' : ''}`}
            onClick={() => handleProjectChange(key)}
          >
            <span>{data.title}</span>
          </div>
        ))}
      </div>

      <div className="projects-main">
        <div className="project-header">
          <h2>{project.title}</h2>
          <p className="project-subtitle">{project.shortDesc}</p>
        </div>

        {project.images.length > 0 ? (
          <div className="projects-gallery">
            <div className="gallery-container">
              <img src={project.images[currentImageIndex]} alt={`${selectedProject} ${currentImageIndex + 1}`} />
              <div className="gallery-controls">
                <button onClick={handlePrevImage} className="gallery-btn prev">❮</button>
                <span className="gallery-counter">{currentImageIndex + 1} / {project.images.length}</span>
                <button onClick={handleNextImage} className="gallery-btn next">❯</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-images">
            <p>Project images coming soon...</p>
          </div>
        )}

        <div className="project-details">
          <div className="project-description">
            {project.description.split('\n').map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          <div className="project-footer">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
