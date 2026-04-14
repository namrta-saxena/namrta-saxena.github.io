import SectionCard from '../ui/SectionCard';

const ProfileContact = () => (
    <div className="flex gap-5 pt-2">
        <a
            href="https://www.linkedin.com/in/namrta-saxena-85568618/"
            target="_blank"
            className="text-[#0077b5]" /* Stays LinkedIn Blue permanently */
            aria-label="LinkedIn"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
            >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.5c1.55 0 3.4 1.08 3.4 3.83z" />
            </svg>
        </a>


    </div>
);

export default ProfileContact;