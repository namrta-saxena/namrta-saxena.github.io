import SectionCard from '../ui/SectionCard';
import ProfileContact from './ProfileContact';
import ProfileImage from './ProfileImage';

const About = () => (
    <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex-col md:flex-row items-center space-y-4 py-6 md:py-4  gap-8 gap-y-2">
            <h1 className="text-3xl font-bold text-slate-900">
                Hi, I'm Namrta
            </h1>
            <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-medium">
                Specializing in the intersection of MERN stack engineering and Predictive Analytics. I leverage over a decade of industry experience to transform complex business requirements into high-performance digital products, currently focusing on integrating Agentic AI workflows into enterprise environments.
            </p>
            <div className="flex gap-5 pt-2">
                <a
                    href="/Namrta_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    View Resume
                </a>

                <ProfileContact />
            </div>
            <div className="flex items-center gap-2.5 group w-fit">
                {/* Modern Envelope Icon - Slate-500 for a professional, neutral look */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-slate-500 group-hover:text-sky-600 transition-colors"
                >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>

                {/* Email Link - Clean text without background or borders */}
                <a
                    href="mailto:abc@gmail.com"
                    className="text-sm font-bold text-slate-700 hover:text-sky-600 transition-colors tracking-tight"
                >
                    namrtasaxena2000@gmail.com
                </a>
            </div>

        </div>
        <ProfileImage />
    </div>

    // </SectionCard>
);

export default About;