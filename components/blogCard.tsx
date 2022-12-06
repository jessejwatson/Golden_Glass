import Link from 'next/link'
import { AiFillRightCircle } from 'react-icons/ai'


export default function BlogCard({id, title, publishDate, slug, contentHTML, authorName, avatarURL, coverImageURL}) {
  return (
    <div className='mx-16 p-3 bg-c-charcoal rounded-lg animate-fade-in-up'>
        <Link href={'/posts/' + slug}>
            <div className='flex justify-between gap-x-10'>
                <div>
                    <h1 className='text-xl'>{title}</h1>
                </div>
                <div className='w-1/12 h-full hidden md:block'>
                    <img src={coverImageURL} alt="Cover Image" />
                </div>
                <div className=' my-auto'>
                    <AiFillRightCircle size={30} color='#D3D4D9'/>
                </div>
            </div>
        </Link>
    </div>
  )
}
