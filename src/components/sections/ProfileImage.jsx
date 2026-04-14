import SectionCard from '../ui/SectionCard';

const ProfileImage = () => (
    <div className="w-full md:w-[240px] aspect-square rounded-2xl bg-white overflow-hidden ring-1 ring-slate-200">
        <img
            src="/profile-image.jpg"
            alt="Senior Software Architect"
            className="w-full h-full object-cover"
        />
    </div>
);

export default ProfileImage;