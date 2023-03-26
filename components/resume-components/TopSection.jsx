import Image from "next/image";
import profilePic from "../../assets/profilePic.png";

export default function TopSection() {
    return (
        <div className="p-4 max-w-2xl h-full w-screen flex mx-auto">
            <div className="flex flex-col md:flex-row lg:flex-col gap-10">
                <div className="">
                    <Image className="noDrop border-2 border-resume-grey text-resume-dark-blue" src={profilePic} width="2507" />
                </div>
                <div className="mt-6 md:mt-0 lg:mt-6">
                    <h1 className='text-3xl pb-2'>Professional Summary</h1>
                    <p>
                    IT student with troubleshooting, programming and other technical skills. I have experience in JavaScript, ReactJS, NextJS, Java, GraphQL, SQL and Python. Fixing computer issues is something I have been doing for years. I have studied the Bachelor of IT for a year at RMIT Online and have completed online courses on the side. My career goals include networking within the industry, learning to work well in an IT team, and eventually become a web developer using frameworks such as NextJS.
                    </p>
                </div>
            </div>
        </div>
    )
}