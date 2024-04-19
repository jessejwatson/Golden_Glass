import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components
import NavBar from '../components/navBar'
import Link from 'next/link'

export default function Body() {
  return (
    <div className='px-16 flex justify-center content-center'>
        <div className='max-w-md'>
          <p className='text-c-green'>Hi, I&apos;m</p>
          <h1 className='text-3xl font-semibold'>Jesse Watson</h1>
          <p className='text-c-grey'>
            I love to build things with code. I program in JS, ReactJS,
            NextJS, Python and SwiftUI. I work at a private school in
            Australia called Lindisfarne Anglican Grammar School building
            things and helping people with tech.
          </p>
          <div className='pt-6'>
            <Link href={'/aboutMe'}>
              <button className='bg-c-charcoal p-3 border-2 border-c-white text-c-white oldSchoolBtn hover:text-c-green hover:bg-c-blue hover:border-c-green'>More about me</button>
            </Link>
          </div>
        </div>
    </div>
  )
}
