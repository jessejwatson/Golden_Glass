import Link from 'next/link'

export default function NavBar() {
  return (
    <div className='font-FiraCode text-c-white px-2 pt-2 animate-fade-in-down'>
      
      <div className='flex justify-between p-7 bg-c-blue bg-opacity-50 rounded-2xl font-semibold shadow-lg max-w-7xl hover:shadow-2xl m-auto'>
        <Link className='my-auto' href="/"><h1 className='text-3xl font-normal'>Jess_W;</h1></Link>
        <div className='my-auto'>
            <div className='flex flex-col md:flex-row'>
                <Link href={'/blog'} className='hover:font-normal'><p><span className='text-c-green'>01.</span> Blog</p></Link>
                <Link href={'/projectsList'} className='hover:font-normal md:pl-8'><p><span className='text-c-green'>02.</span> Projects</p></Link>
            </div>
        </div>
      </div>

    </div>
  )
}
