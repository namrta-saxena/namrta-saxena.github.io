// src/components/sections/ExperienceTimeline.jsx
import React from 'react';
import SectionCard from '../ui/SectionCard';

const TimelineItem = ({ company, duration, role, responsibilities, isLast }) => {
    return (
        <div className="flex gap-6 md:gap-10">
            {/* Left Side: Axis and Dot */}
            <div className="flex flex-col items-center">
                {/* The Indicator Dot */}
                <div className="w-4 h-4 rounded-full border-4 border-white bg-sky-500 shadow-[0_0_0_1px_#e2e8f0] z-10" />
                {/* The Connector Line */}
                {!isLast && <div className="w-0.5 flex-1 bg-slate-200 my-1" />}
            </div>

            {/* Right Side: Content */}
            <div className="pb-12 flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                            {company}
                        </h3>
                        <p className="text-sky-600 font-bold text-sm uppercase tracking-wide">
                            {role}
                        </p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-slate-50 border border-slate-200 text-slate-500 text-[11px] font-bold rounded-full w-fit">
                        {duration}
                    </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-1">
                    {responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                            <span className="text-sky-400 shrink-0">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ExperienceTimeline = () => {
    const experiences = [
        {
            company: "Bechtel India Pvt. Ltd",
            role: "Lead Consultant",
            duration: "Feb 2023 - Feb 2026",
            responsibilities: [
                "Developed and enhanced core components of the Digital Supply Chain System (DSCS), specifically focusing on the ETA and MAP applications to streamline material expediting and supply-demand allocation planning. Key technical contributions include implementing complex features such as Holds, History tracking, ETA Decoupling, and Custom Configurations, alongside architecting essential UI elements like approver modals, filters, and user settings for the MWR platform. Additionally, strengthened enterprise security through SSO integration in SCVitals and ensured cross-platform stability by resolving critical UI issues within the Doc Sync application."
            ]
        },
        {
            company: "Assimilate Solutions. Pvt. Ltd",
            role: "Senior Software Engineer",
            duration: "Feb 2020 - Jan 2023",
            responsibilities: [
                "Leveraged Amazon Lambda to architect serverless solutions, focusing on the automation of scheduled diagnostic tasks to monitor product health and system functionality. Designed and implemented high-performance RESTful web services to facilitate seamless client-server communication, while engineering robust data layers using PostgreSQL and Amazon QLDB for blockchain-integrated auditing. Additionally, enhanced application utility by developing automated PDF generation systems and ensuring enterprise-grade security through critical Veracode vulnerability remediation."
            ]
        }, {
            company: "Iron Systems India Pvt. Ltd.",
            role: "Principal Software Engineer",
            duration: "Sept 2019 - June 2020",
            responsibilities: [
                "Worked as a full stack developer for features related to globalization, messaging, filters, application version, application update, image optimization."
            ]
        },
        {
            company: "Agreeya Solutions",
            role: "Lead Consultant",
            duration: "July 2017-July 2019",
            responsibilities: [
                "Led the end-to-end design and implementation of core frameworks across a diverse suite of enterprise applications, including OneExl, iExpense, and eVoyage. Key contributions involve architecting secure authentication modules such as SSO, 2FA, M-Pin, and biometric fingerprinting, alongside developing complex functional features like dynamic survey engines, route mapping for ExlCarpool, and comprehensive expense management workflows. Furthermore, enhanced mobile and security infrastructure by building system update utilities and automated OTP registration systems for self-service password platforms."
            ]
        },
        {
            company: "R Systems International",
            role: "Senior Software Engineer",
            duration: "Oct 2015-July 2017",
            responsibilities: [
                "Spearheaded the development of a diverse range of interactive features for digital media and mobile platforms, including complex STB functionalities such as program guides, parental controls, and time-shift recording. Developed the IservU Hybrid application by integrating Facebook and Google OAuth and implementing high-fidelity Material Design animations via Ionic. Additionally, engineered a Car Pooling mobile solution, leveraging the Google Maps API to architect sophisticated route mapping and fare calculation modules."
            ]
        },
        {
            company: "Infogain India Pvt. Ltd.",
            role: "Assistant Consultant",
            duration: "Apr 2015 - Oct 2015",
            responsibilities: [
                "Contributed to the development of high-impact Android applications, including MagicBricks, where I engineered core search modules for property buying, renting, and locality/agent discovery. Additionally, I enhanced the Visual Merchandising and Smart Partner Portal platforms by implementing critical background features such as seamless data synchronization and automated application update systems."
            ]
        },
        {
            company: "HCL Technologies",
            role: "Member Technical Staff",
            duration: "May 2012 - April 2015",
            responsibilities: [
                "Contributed to the design and development of diverse mobile and IoT frameworks, including the Western Union Ikivo hybrid application, where I led bug fixes, localization, and the integration of InAuth and analytics. I engineered specialized communication protocols for the Destroyer/Coppola IoT platform to facilitate seamless interaction between mobile devices, servers, and smart appliances, while also architecting core telephony and presence modules for the Ucclient suite. Furthermore, I supported NTT Docomo Inc. by developing phonebook and business card utilities and conducting comprehensive performance analysis for tablet and smartphone applications."
            ]
        },
        {
            company: "Magic Software Pvt. Ltd.",
            role: "Software Engineer",
            duration: "Apr 2010 - Apr 2012",
            responsibilities: [
                "As a member of the R&D team, I specialized in developing cross-platform prototypes and interactive applications for business and pre-sales needs, most notably the Magic-Box eBook engine. I architected core Android modules to wrap and manage HTML-based layouts and engineered specialized plugins for audio, video, and recording. Using jQuery Mobile and Sencha Touch, I built high-utility features including PDF hotspots, drawing tools, in-app purchases, and dynamic questionnaires. Additionally, I optimized system performance and automated backend workflows through Java-based tools for PDF manipulation and Shell scripts for scheduled FTP file transfers."
            ]
        },
        // Add more entries here to total 14 years
    ];

    return (
        <SectionCard title="Professional Journey">
            <div className="mt-8 px-2 mx-auto">
                {experiences.map((exp, index) => (
                    <TimelineItem
                        key={index}
                        {...exp}
                        isLast={index === experiences.length - 1}
                    />
                ))}
            </div>
        </SectionCard>
    );
};

export default ExperienceTimeline;