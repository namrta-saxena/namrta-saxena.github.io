// src/components/ui/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, githubLink, tags }) => {
    return (
        <div className="flex flex-col h-[200px] bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
            {/* 1. Project Info Area */}
            <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-sky-600 transition-colors">
                    {title}
                </h3>

                {/* Technology Tags (Great for SEO & scannability) */}
                {/* <div className="flex flex-wrap gap-2 mb-4">
                    {tags?.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div> */}

                <p className="text-slate-600 text-sm leading-relaxed">
                    {description}
                </p>


            </div>
            {githubLink && (
                <div className="px-6 pb-6 mt-auto flex justify-start">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors group/link"
                    >
                        Link
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </a>
                </div>
            )}

        </div>
    );
};

export default ProjectCard;