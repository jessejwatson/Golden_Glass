import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function NavBar() {
  return (
    <div className='font-FiraCode text-c-white px-4 pt-2'>
      
      <div className='flex justify-between p-7 bg-c-blue rounded-2xl font-semibold shadow-lg max-w-7xl hover:shadow-2xl m-auto'>
        <Link href="/"><h1 className='text-3xl font-normal'>Jess_W;</h1></Link>
        <div className=''>
            <div className='flex flex-col md:flex-row'>
                <Link href={''} className='hover:font-normal'><p><span className='text-c-green'>01.</span> Blog</p></Link>
                <Link href={''} className='hover:font-normal md:pl-8'><p><span className='text-c-green'>02.</span> Projects</p></Link>
            </div>
        </div>
      </div>

    </div>
  )
}
