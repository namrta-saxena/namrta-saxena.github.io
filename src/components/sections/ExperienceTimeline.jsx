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
                "Worked on ETA and MAP application. ETA is part of digital Supply chain System (DSCS) that tracks material expediting milestones and certain logistics activities. MAP is Material Allocation Planner. It uses generic concepts of supply and demand to provide a flexible platform to plan for, report on and evaluate material status.",
                "Implemented features like Holds, History, custom configurations, ETA Performance and ETA Decoupling, Column Finder.",
                "Worked on Header page, filter, approver modal and user settings page for MWR application",
                "Implemented SSO in SCVitals application.",
                "Worked on UI fixes for Doc Sync application.",
                "Worked on ETA and MAP application. ETA is part of digital Supply chain System (DSCS) that tracks material expediting milestones and certain logistics activities. MAP is Material Allocation Planner. It uses generic concepts of supply and demand to provide a flexible platform to plan for, report on and evaluate material status.",
                "Implemented features like Holds, History, custom configurations, ETA Performance and ETA Decoupling, Column Finder.",
                "Worked on Header page, filter, approver modal and user settings page for MWR application",
                "Implemented SSO in SCVitals application.",
                "Worked on UI fixes for Doc Sync application."

            ]
        },
        {
            company: "Assimilate Solutions. Pvt. Ltd",
            role: "Senior Software Engineer",
            duration: "Feb 2020 - Jan 2023",
            responsibilities: [
                "Have worked on serverless architecture using Amazon Lambda functions.",
                "Worked on automation of daily scheduled tasks of checking the health and functionality of overall product.",
                "Implemented generation of pdf files and Veracode fixes for the application.",
                "Developed Rest architecture-based web services to facilitate communication between client and servers",
                "Designed and develop database schema using PostgreSQL and block chain technology using Amazon QLDB to meet business requirements"

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
                "Worked on design, development and implementation of framework for OneExl Application. Developed modules like login, m-pin, fingerprint, to check if is installed or any update exists on phone.",
                "Worked on design, development and implementation of framework for iExpense Application. Developed modules like expense creation of various types, e.g., cash, credit, per diem, notification, in progress and submitted, approve or reject, attachment, 2FA.",
                "Worked on design, development and implementation of framework for Password Self Service Application. Developed modules like 2FA, OTP, registering mobile number.",
                "Worked on design, development and implementation of framework for eVoyage Application. Developed modules like SSO, travel options from travel vendors.",
                "Worked on design, development and implementation of framework for ExlCarpool Application. Developed module for mapping routes between source and destination.",
                "Worked on design, development and implementation of framework for Dynamic Survey Application. Developed module for dynamic generation of questionnaire."
            ]
        },
        {
            company: "R Systems International",
            role: "Senior Software Engineer",
            duration: "Oct 2015-July 2017",
            responsibilities: [
                "Worked on various features, like customizing scan, programming guide filters, reminders, recording, time shift, parental control, locale, dish TV branding, active services, fingerprinting, my account.",
                "Worked on IservU Hybrid mobile application. Integrated facebook and google Oauth. Managing the comments and ratings of the services. Implemented material design animations and transitions using Ionic-material.",
                "Worked on Car Pooling mobile application. Implemented car routes between source and destination with fare routes module using Google Maps API V2."
            ]
        },
        {
            company: "Infogain India Pvt. Ltd.",
            role: "Assistant Consultant",
            duration: "Apr 2015 - Oct 2015",
            responsibilities: [
                "Worked on MagicBricks android application. Implemented module for search for buy, rent, find agents and locality.",
                "Worked on Visual Merchandising and Smart Partner Portal android application. Implemented features like synchronization, update for application."
            ]
        },
        {
            company: "HCL Technologies",
            role: "Member Technical Staff",
            duration: "May 2012 - April 2015",
            responsibilities: [
                "Worked on Western Union Ikivo hybrid application, was involved in bug fixing, enhancements, optimization and localization. Implemented features involving analytics and In Auth.",
                "Worked on design, development and implementation of framework for Destroyer/Coppola Application. Developed features that require communication between phone and Oven/Fridge and Server.",
                "Worked on design, development and implementation of framework for Ucclient Application. Developed modules like contacts, presence, groups, communication, and telephony.",
                "Worked for NTT Docomo Inc. on Phonebook, UIBatman and Business Card. Involved in performance analysis of tablet and phone application."
            ]
        },
        {
            company: "Magic Software Pvt. Ltd.",
            role: "Software Engineer",
            duration: "Apr 2010 - Apr 2012",
            responsibilities: [
                "Worked as a member of R & D team and was involved in developing prototype applications for business needs and pre sales purposes.",
                "Worked on Magic-Box (eBook engine) which involves development and maintenance of a cross platform application which displays eBook in an interactive way.",
                "Developed module for Android platform that wraps the html code of eBook engine which handles the layout of eBook.",
                "Developed audio, video, recording plugin for eBook",
                "Developed modules in jQuery-mobile for eBook like drawing, notes, audio, video, pdf hotspot.",
                "Developed modules in Sencha Touch like questionnaire, In-app Purchase",
                "Implemented shell scripts for transferring files to server using ftp at specific scheduled time.",
                "Worked on Tools Automation and developed features in Java like splitting Pdf file into multiple files and rasterizing of images.",
                "Worked on improving the performance of application. "
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