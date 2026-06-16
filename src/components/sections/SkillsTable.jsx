// src/components/sections/SkillsTable.jsx
import React from 'react';
import SectionCard from '../ui/SectionCard';

const SkillsTable = () => {
    const skillGroups = [
        {
            category: "Databases & Caching",
            tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Amazon QLDB (Ledger)"]
        },
        {
            category: "Core Languages & Back-end",
            tools: ["Python", "SQL", "JavaScript (ES6+)", "TypeScript", "Node.js", "Nest.js", "Express.js"]
        },
        {
            category: "AI & Advanced Analytics",
            tools: ["LangChain", "CrewAI", "LangGraph", "Retrieval-Augmented Generation (RAG)", "Data Analytics", "Vector Databases (Pinecone, ChromaDB)"]
        },
        {
            category: "Cloud & DevOps",
            tools: ["AWS (Lambda, API Gateway, EC2)", "Docker", "CI/CD pipelines", "Git", "Linux"]
        },
        {
            category: "Mobile",
            tools: ["Android (Java)", "Ionic", "Cordova"]
        }
    ];

    return (
        <SectionCard title="Skills">
            <div className="mt-6 rounded-xl border border-slate-200 overflow-hidden bg-white">
                <table className="w-full border-collapse">

                    <tbody className="divide-y divide-slate-100">
                        {skillGroups.map((group, index) => (
                            <tr key={index} className="group hover:bg-slate-50/30 transition-colors">
                                {/* Left Column: Category */}
                                <td className="px-8 py-6 align-top">
                                    <span className="text-sm font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                                        {group.category}
                                    </span>
                                </td>

                                {/* Right Column: Tools as Chips */}
                                <td className="px-8 py-6 border-l border-slate-100">
                                    <div className="flex flex-wrap gap-2">
                                        {group.tools.map((tool, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-md shadow-sm hover:border-sky-300 hover:text-sky-600 transition-all cursor-default"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </SectionCard>
    );
};

export default SkillsTable;