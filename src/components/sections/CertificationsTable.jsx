// src/components/sections/CertificationsTable.jsx
import React from 'react';
import SectionCard from '../ui/SectionCard';

const CertificationsTable = () => {
    const certifications = [
        { title: "IBM - RAG and Agentic AI", issuer: "IBM", year: "2026", link: "https://www.coursera.org/account/accomplishments/professional-cert/JOPKE5AQYW6F" },
        { title: "IBM - Data Science", issuer: "IBM", year: "2026", link: "https://www.coursera.org/account/accomplishments/professional-cert/S7NVGM3XWFIZ" },
        { title: "IBM - Back-End Development", issuer: "IBM", year: "2026", link: "https://www.coursera.org/account/accomplishments/specialization/E85UKCUMGDSP" },
        { title: "Python for Data Science and Machine Learning Bootcamp", issuer: "Udemy", year: "2022", link: "https://www.udemy.com/certificate/UC-b7cfa9e2-6bb4-4f81-8b50-8a9d50b057cb/" },
    ];

    return (
        <SectionCard title="Certifications">
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Certification Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Issuer</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Year</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {certifications.map((cert, index) => (
                            <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors flex items-center gap-2"
                                    >
                                        {cert.title}
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                        </svg>
                                    </a>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-600">
                                    {cert.issuer}
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                                        {cert.year}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </SectionCard>
    );
};

export default CertificationsTable;