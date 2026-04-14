// src/components/ui/CertificationCard.jsx
import React from 'react';

const CertificationCard = ({ title, issuer, date, link }) => {
    return (
        /* h-full: Forces the card to fill the parent container's height */
        /* flex flex-col: Allows us to push the link to the very bottom using mt-auto */
        <div className="flex flex-col h-full p-5 bg-gray-100 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">

            <div className="flex-1"> {/* flex-1: This div grows to push the link down */}
                <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-bold text-slate-900 text-base md:text-lg leading-tight min-h-[3rem]">
                        {/* min-h-[3rem] ensures even 1-line titles take up some space */}
                        {title}
                    </h3>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded border border-slate-100 whitespace-nowrap">
                        {date}
                    </span>
                </div>

                <p className="text-slate-600 font-medium text-sm mb-4">{issuer}</p>
            </div>

            {/* mt-auto: Pushes this link to the bottom of the card, aligning it across all cards */}
            {link && (
                <div className="mt-auto border-t border-slate-300 pt-4">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 uppercase tracking-widest"
                    >
                        View Certificate
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                    </a>
                </div>
            )}
        </div>
    );
};

export default CertificationCard;