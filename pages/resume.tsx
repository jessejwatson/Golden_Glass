import { useState } from "react";

// import components
import PersonalInfo from "../components/resume-components/PersonalInfo";
import TopSection from "../components/resume-components/TopSection";
import DarkBlueSection from "../components/resume-components/DarkBlueSection";

export default function Resume() {
    
    return (
        <div className="font-ABeeZee h-screen flex flex-col">
            <div>
                <PersonalInfo />
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-center m-auto">
                <div>
                    <TopSection />
                </div>
                <div className="lg:my-auto">
                    <DarkBlueSection />
                </div>
            </div>
        </div>
    );
}