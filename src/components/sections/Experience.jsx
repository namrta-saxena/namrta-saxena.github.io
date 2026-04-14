// src/components/sections/Experience.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import SectionCard from '../ui/SectionCard';
import ExperienceCard from './ExperienceCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Experience = () => {
    const jobs = [
        {
            company: "Bechtel India Pvt. Ltd",
            role: "Lead Consultant",
            duration: "feb 2023 - feb 2026",
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
                "Architected enterprise frameworks for expense management, 2FA security, and dynamic survey generation."

            ]
        },
        {
            company: "R Systems International",
            role: "Senior Software Engineer",
            duration: "Oct 2015-July 2017",
            responsibilities: [
                "Developed hybrid mobile applications and integrated complex Google Maps routing and OAuth security.",
                "Worked on various features, like customizing scan, programming guide filters, reminders, recording, time shift, parental control, locale, dish TV branding, active services, fingerprinting, my account."

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
                "Developed communication frameworks for NTT Docomo and Western Union; specialized in performance analysis and SQLite optimization.",

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
        <SectionCard title="Experience">
            <div className="relative group px-2">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }, // Your updated setting
                    }}
                    pagination={{ clickable: true }}
                    /* The '!flex' utility on the slide is the "magic" 
                       that allows the ExperienceCard inside to grow. 
                    */
                    className="pb-16 experience-swiper"
                >
                    {jobs.map((job, index) => (
                        <SwiperSlide key={index} className="pb-4 h-auto !flex">
                            <ExperienceCard {...job} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
        /* Consistent High-Visibility Light Theme Dots */
        .experience-swiper .swiper-pagination {
          bottom: 0px !important; /* Forces dots to stay in the padding area */
          position: absolute;
          width: 100%;
        }
        .experience-swiper .swiper-pagination-bullet-active {
          background: #0ea5e9 !important; 
          width: 28px;
          border-radius: 4px;
        }
        .experience-swiper .swiper-pagination {
          bottom: 0px !important;
        }
        /* Custom Navigation Arrows for Light Theme */
        .experience-swiper .swiper-button-next,
        .experience-swiper .swiper-button-prev {
          color: #94a3b8;
          transform: scale(0.6);
          top: 40%;
        }
        .experience-swiper .swiper-button-next:hover,
        .experience-swiper .swiper-button-prev:hover {
          color: #0ea5e9;
        }
        .experience-swiper .swiper-wrapper {
            display: flex !important;
            align-items: stretch !important;
        }

        .experience-swiper .swiper-slide {
            height: auto !important; /* Let the tallest content define the height */
            display: flex !important; /* Ensure the internal card can use h-full */
        }
      `}</style>
        </SectionCard>
    );
};

export default Experience;