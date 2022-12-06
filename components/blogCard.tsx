import Link from 'next/link'

export default function BlogCard({id, title, publishDate, slug, contentHTML, authorName, avatarURL, coverImageURL}) {
  return (
    <div className=''>
        <Link href={'/posts/' + slug}>
            <h1 className='text-xl text-c-green'>{title}</h1>
            <div className='max-w-lg'>
                <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
            </div>
        </Link>
    </div>
  )
}
