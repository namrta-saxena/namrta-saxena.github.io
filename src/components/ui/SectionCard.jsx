// src/components/ui/SectionCard.jsx
import React from 'react';

const SectionCard = ({ title, children, className = '' }) => {
    return (
        <div className={`p-6 bg-white rounded-xl border border-slate-200 shadow-xl ${className}`}>
            {title && (
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">
                    {title}
                </h2>
            )}
            <div className="text-slate-800">
                {children}
            </div>
        </div>
    );
};

export default SectionCard;