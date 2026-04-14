// src/components/sections/ProjectsTable.jsx
import React, { useState } from 'react';
import SectionCard from '../ui/SectionCard';
import PasswordGenerator from './PasswordGenerator';

const ProjectsTable = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const projectData = [
        {
            name: "Random Password generator",
            showPopup: true,
            link: "https://github.com/yourusername/mern-dashboard",
            description: "Architected a real-time monitoring tool for microservices with Socket.io and PostgreSQL. Focused on high-availability and sub-second data visualization for enterprise metrics."
        },
        {
            name: "Late Delivery Risk Predictor",
            link: "https://github.com/yourusername/logistics-ml",
            description: "Developed an XGBoost classification model to forecast supply chain delays. Optimized performance through geographic feature engineering and log transformations on a 50+ column dataset."
        },
        {
            name: "Agentic Workflow Orchestrator",
            link: "https://github.com/yourusername/agent-engine",
            description: "Built a multi-agent system using LangGraph and Python to automate complex decision-making processes, featuring human-in-the-loop validation and persistent state management."
        },
        {
            name: "Enterprise MERN Dashboard",
            link: "https://github.com/yourusername/mern-dashboard",
            description: "Architected a real-time monitoring tool for microservices with Socket.io and PostgreSQL. Focused on high-availability and sub-second data visualization for enterprise metrics."
        }
    ];

    return (
        <SectionCard title="Key Projects">
            <div className="mt-6 rounded-xl border border-slate-200 overflow-hidden bg-white">
                <table className="w-full border-collapse">

                    <tbody className="divide-y divide-slate-100">
                        {projectData.map((project, index) => (
                            <tr key={index} className="group hover:bg-slate-50/30 transition-colors">
                                {/* Left Column: Project Name Link */}
                                <td className="px-8 py-6 align-top">
                                    {index !== 0 &&
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors"
                                        >
                                            {project.name}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all translate-y-0.5"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                        </a>
                                    }
                                    {index == 0 &&
                                        <button
                                            onClick={() => setModalOpen(true)}
                                            className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 hover:text-sky-600 transition-colors text-left"
                                        >
                                            Password Generator Tool
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all translate-y-0.5"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                        </button>
                                    }
                                </td>

                                {/* Right Column: Description */}
                                <td className="px-8 py-6 border-l border-slate-100">
                                    <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                                        {project.description}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <PasswordGenerator isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </SectionCard>
    );
};

export default ProjectsTable;