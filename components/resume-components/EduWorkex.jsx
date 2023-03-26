
export default function EduWorkex() {
    return (
        <div className="border-2 border-resume-light-blue border-opacity-50 rounded-lg m-6 p-4 bg-resume-charcoal bg-opacity-50 flex flex-col xl:flex-row gap-4 lg:gap-10">
            <div className='border-b-2 xl:border-b-0 xl:border-r-2 pb-4 xl:pb-0 xl:pr-10 lg:pb-10 lg:max-w-md'>
                <h1 className='text-3xl pb-2'>Education</h1>
                <ul className='list-disc pl-4'>
                    <li>Learn React Course - Codecademy - March, 2023</li>
                    <li>Bachelor of Information Technology (first year) - RMIT Online - November, 2021 → November, 2022</li>
                </ul>
            </div>
            
            <div className="lg:max-w-sm">
                <h1 className='text-3xl pb-2'>Work Experience</h1>
                <ul className='list-disc pl-4'>
                    <li>Fast-food Cook - McDonald&apos;s - November, 2021 → to date</li>
                    <li>Tiler&apos;s Apprentice - Swish Tiling - August, 2020 → October, 2021</li>
                </ul>
            </div>
        </div>
    );
}