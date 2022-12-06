import Link from 'next/link'
import { AiFillRightCircle } from 'react-icons/ai'


export default function BlogCard({id, title, publishDate, slug, contentHTML, authorName, avatarURL, coverImageURL}) {
  return (
    <div>
        <Link href={'/posts/' + slug}>
            <div className='p-3 bg-c-charcoal bg-opacity-75 rounded-lg animate-fade-in-up max-w-3xl flex justify-between gap-x-10 hover:translate-y-2 active:opacity-90'>
                <div className='text-xl w-full'>
                    <h1>{title}</h1>
                </div>
                <div className='w-3/12 my-auto hidden md:block'>
                    <img src={coverImageURL} alt="Cover Image" />
                </div>
                <div className='my-auto md:pr-6'>
                    <AiFillRightCircle size={30} color='#D3D4D9'/>
                </div>
            </div>
        </Link>
    </div>
  )
}
