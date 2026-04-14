// src/components/sections/Certifications.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SectionCard from '../ui/SectionCard';
import CertificationCard from './CertificationCard';

import 'swiper/css';
import 'swiper/css/pagination';

const Certifications = () => {
    const certs = [
        { title: "IBM - Data Science", issuer: "IBM", date: "2026", link: "https://www.coursera.org/account/accomplishments/professional-cert/S7NVGM3XWFIZ" },
        { title: "IBM - RAG and Agentic AI", issuer: "IBM", date: "2026", link: "https://www.coursera.org/account/accomplishments/professional-cert/JOPKE5AQYW6F" },
        { title: "IBM - Back-End Development Professional Certificate", issuer: "IBM", date: "2026", link: "https://www.coursera.org/account/accomplishments/specialization/E85UKCUMGDSP" },
        { title: "Learn SQL Basics for Data Science", issuer: "UC Davis", date: "2026", link: "https://www.coursera.org/account/accomplishments/specialization/KC8YRE6I051K" },
        { title: "Python for Data Science and Machine Learning Bootcamp", issuer: "Udemy", date: "2022", link: "https://www.udemy.com/certificate/UC-b7cfa9e2-6bb4-4f81-8b50-8a9d50b057cb/" },
    ];

    return (
        <SectionCard title="Certifications">
            {/* 1. Added pb-14 to the Swiper to create room at the bottom.
        2. Added custom-swiper class to target pagination specifically.
      */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 4000 }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true // Optional: makes dots smaller as they move
                }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.5 },
                }}
                className="pb-14 custom-swiper"
            >
                {certs.map((cert, index) => (
                    <SwiperSlide key={index} className="pb-4">
                        <CertificationCard {...cert} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* HIGH-VISIBILITY CSS FIX:
         - Forces pagination to stay at the bottom of the padded area.
         - Changes colors for Light Theme visibility.
      */}
            <style jsx global>{`
        .custom-swiper .swiper-pagination {
          bottom: 0px !important; /* Forces dots to stay in the padding area */
          position: absolute;
          width: 100%;
        }

        .swiper-pagination-bullet {
          background: #94a3b8 !important; /* slate-400 for high visibility */
          opacity: 0.4;
          width: 8px;
          height: 8px;
        }

        .swiper-pagination-bullet-active {
          background: #0ea5e9 !important; /* sky-500 */
          opacity: 1;
          width: 20px;
          border-radius: 4px;
        }

        /* Ensure slides don't get cut off if heights vary */
        .swiper-wrapper {
          align-items: stretch;
        }
      `}</style>
        </SectionCard>
    );
};

export default Certifications;