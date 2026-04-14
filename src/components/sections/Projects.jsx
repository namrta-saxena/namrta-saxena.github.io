// src/components/sections/Projects.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import SectionCard from '../ui/SectionCard';
import ProjectCard from './ProjectCard';

import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
    const myProjects = [
        {
            title: "Supply Chain Delivery Predictor",
            description: "Implemented an XGBoost classification model to predict 'Late Delivery' risks using a 53-column dataset. Featured engineering and label encoding for high-accuracy logistics forecasting.",
            tags: ["Python", "XGBoost", "Data Science"],
            githubLink: "https://github.com/yourusername/project1"
        },
        {
            title: "Agentic AI Workflow Engine",
            description: "Developing autonomous multi-agent systems using LangGraph and LLMs to automate complex business processes and decision-making logic.",
            tags: ["Agentic AI", "LangGraph", "LLMs"],
            githubLink: "https://github.com/yourusername/project2"
        },
        {
            title: "MERN Enterprise Dashboard",
            description: "A high-performance monitoring tool for microservices, featuring real-time data visualization with Socket.io and a PostgreSQL backend.",
            tags: ["React", "Node.js", "PostgreSQL"],
            githubLink: "https://github.com/yourusername/project3"
        },
        {
            title: "Agentic AI Workflow Engine",
            description: "Developing autonomous multi-agent systems using LangGraph and LLMs to automate complex business processes and decision-making logic.",
            tags: ["Agentic AI", "LangGraph", "LLMs"],
            githubLink: "https://github.com/yourusername/project2"
        },
        {
            title: "MERN Enterprise Dashboard",
            description: "A high-performance monitoring tool for microservices, featuring real-time data visualization with Socket.io and a PostgreSQL backend.",
            tags: ["React", "Node.js", "PostgreSQL"],
            githubLink: "https://github.com/yourusername/project3"
        },
        {
            title: "Music Band",
            description: "The platform enables users to explore past event galleries, browse popular lyrics, and manage event registrations through a secure account portal.",
            tags: ["Python", "Flask", "Django", "SQLite", "MongoDB"],
            githubLink: "https://github.com/yourusername/project3"
        }
    ];

    return (
        <SectionCard title="Projects">
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 1.5 },
                    1024: { slidesPerView: 2 },
                }}
                className="pb-14 project-swiper"
            >
                {myProjects.map((proj, index) => (
                    <SwiperSlide key={index} className="!h-auto flex pb-4">
                        <ProjectCard {...proj} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
        .project-swiper .swiper-pagination-bullet-active {
          background: #0ea5e9 !important;
          width: 24px;
          border-radius: 4px;
        }
        .project-swiper .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
        </SectionCard>
    );
};

export default Projects;