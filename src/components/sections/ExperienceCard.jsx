// src/components/ui/ExperienceCard.jsx
import React from 'react';

const ExperienceCard = ({ company, role, duration, responsibilities }) => {
    return (
        <div className="flex flex-col w-full h-[450px] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:border-sky-200">

            {/* 1. Header: Fixed at the top, no scrolling */}
            <div className="p-6 pb-4 border-b border-slate-50 bg-white z-10">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
                        {company}
                    </h3>
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-1 rounded border border-sky-100 uppercase">
                        {duration}
                    </span>
                </div>
                <p className="text-slate-500 font-semibold text-xs uppercase tracking-wide">
                    {role}
                </p>
            </div>

            {/* 2. Content: This area will scroll if content exceeds the height */}
            <div className="flex-1 overflow-y-auto p-6 pt-4 custom-scrollbar">
                <ul className="space-y-4">
                    {responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                            <span className="text-sky-400 mt-1.5 shrink-0">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 3. Subtle Footer Fade: Hints to the user that they can scroll */}
            <div className="h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
    );
};

export default ExperienceCard;