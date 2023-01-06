import Image from 'next/image'
import myHealthImg from "../assets/myHealth.png"

export default function MyHealth() {
    return (
        <div className="p-4 flex flex-col gap-4 m-auto rounded-lg max-w-4xl noDrop border-2 border-opacity-25 border-c-grey bg-c-grey bg-opacity-5">
            <h1 className='text-xl font-semibold'>My Health (uni project)</h1>
            <Image className='coverImg' src={myHealthImg} alt={'Profile Picture'} width={500}/>
            <p className='max-w-lg'>MyHealth is a desktop app developed to keep track of health records. This was the first app I built with a GUI. I completed it in my first year of university as an assignment.</p>
            <a className="text-c-green hover:underline" href="">See how I made it here &gt;</a>
        </div>
    )
}