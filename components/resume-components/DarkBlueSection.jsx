
// import components
import SkillsProjects from "./SkillsProjects";
import EduWorkex from "./EduWorkex";

export default function DarkBlueSection() {
    return (
        <div className="bg-resume-dark-blue drop-shadow-xl text-resume-white py-2 rounded-t-md lg:rounded-md lg:flex lg:flex-col lg:m-4">
            <SkillsProjects />
            <EduWorkex />
        </div>
    );
}