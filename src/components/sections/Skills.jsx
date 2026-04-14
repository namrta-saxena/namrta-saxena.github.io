// src/components/sections/Skills.jsx
import React from 'react';
import SectionCard from '../ui/SectionCard';

const SkillRow = ({ category, skills }) => (
    <div className="grid grid-cols-1 md:grid-cols-[220px,1fr] border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
        {/* Category Heading */}
        <div className="py-1 px-3 bg-slate-50/50 md:bg-transparent border-b md:border-b-0 md:border-r border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {category}
            </span>
        </div>
        {/* Skills List */}
        <div className="py-2 px-3 flex flex-wrap gap-2 items-center">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-md shadow-sm"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skillData = [
        {
            category: "Technologies",
            skills: ["React", "Node.js", "TypeScript", "Python", "Agentic AI", "LangGraph", "MERN Stack"]
        },
        {
            category: "Database",
            skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "MongoDB"]
        },
        {
            category: "Tools",
            skills: ["Vite", "Tailwind CSS", "Docker", "Postman", "Jira"]
        },
        {
            category: "Config Management",
            skills: ["Git", "NPM/Yarn"]
        }
    ];

    return (
        <SectionCard title="Technical Skills Matrix">
            <div className="mt-4 rounded-xl border border-slate-200 overflow-hidden bg-white">
                {skillData.map((item, index) => (
                    <SkillRow key={index} category={item.category} skills={item.skills} />
                ))}
            </div>
        </SectionCard>
    );
};

export default Skills;