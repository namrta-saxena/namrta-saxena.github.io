// src/components/layouts/ProfileGridLayout.jsx
import React from 'react';

// Import all sections
import About from '../sections/About';
import ProfileContact from '../sections/ProfileContact';
import ProfileImage from '../sections/ProfileImage';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Certifications from '../sections/Certifications';
import CertificationsTable from '../sections/CertificationsTable';
import ExperienceTimeline from '../sections/ExperienceTimeline';
import SkillsTable from '../sections/SkillsTable';
import ProjectsTable from '../sections/ProjectsTable';

// 1. Component Registry: Map names to React components
const componentMap = {
    about: About,
    // contact: ProfileContact,
    // image: ProfileImage,
    experience: ExperienceTimeline,
    projects: ProjectsTable,
    certifications: CertificationsTable,
    skills: SkillsTable,

};

// 2. Define the configuration for the top "Hero" row
const TOP_ROW_SECTIONS = [
    { id: 'about', type: 'about' },
    // { id: 'contact', type: 'contact' },
    // { id: 'image', type: 'image' },
];

// 3. Define the configuration for the stacked sections
const STACKED_SECTIONS = [
    { id: 'projects', type: 'projects' },
    { id: 'experience', type: 'experience' },
    { id: 'certifications', type: 'certifications' },
    { id: 'skills', type: 'skills' },

];

const ProfileGridLayout = () => {
    return (
        <div className="space-y-6">
            {/* ---------------------------------------------------- */}
            {/* 1. TOP "HERO" ROW (The About, Contact, Image grid) */}
            {/* ---------------------------------------------------- */}
            {/* On desktop (md:), this row uses a custom grid: a flexible main area and a fixed image/sidebar area. */}
            {/* On mobile, everything stacks vertically (grid-cols-1). */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-6">

                {/* Left Column (About + Contact) */}
                <div className="space-y-6">
                    {TOP_ROW_SECTIONS
                        .filter(section => ['about', 'contact'].includes(section.type))
                        .map(section => {
                            const Component = componentMap[section.type];
                            return <Component key={section.id} />;
                        })}
                </div>

                {/* Right Column (Fixed Sidebar/Image) */}
                {TOP_ROW_SECTIONS
                    .filter(section => section.type === 'image')
                    .map(section => {
                        const Component = componentMap[section.type];
                        return (
                            <div key={section.id} className="md:w-[250px]">
                                <Component />
                            </div>
                        );
                    })}
            </div>

            {/* ---------------------------------------------------- */}
            {/* 2. STACKED SECTIONS (Experience, Projects, etc.)    */}
            {/* ---------------------------------------------------- */}
            {/* These will always take up the full width (grid-cols-1) */}
            <div className="grid grid-cols-1 gap-6">
                {STACKED_SECTIONS.map(section => {
                    const Component = componentMap[section.type];
                    if (!Component) return null;
                    return <Component key={section.id} />;
                })}
            </div>
        </div>
    );
};

export default ProfileGridLayout;