import Image from 'next/image'
import thisWebsiteImg from '../assets/thisWebsiteImg.png'

export default function ThisWebsite() {
    return (
        <div className="p-4 flex flex-col gap-4 m-auto p-2rounded-lg max-w-4xl noDrop border-2 border-opacity-25 border-c-grey bg-c-grey bg-opacity-5">
            <h1 className='text-xl font-semibold'>This Website (code name: GoldenGlass)</h1>
            <Image className='coverImg' src={thisWebsiteImg} alt={'Profile Picture'} width={500}/>
            <p className='max-w-lg'>I&apos;ve always wanted my own website. But not only that, one that I can say I built from scratch. And that is what you are looking at right now. I built this website using ReactJS libraries and the NextJS framework.</p>
            <a className="text-c-green hover:underline" href="">Read more here &gt;</a>
        </div>
    )
}