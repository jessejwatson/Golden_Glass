import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components
import NavBar from '../components/navBar'

export default function Body() {
  return (
    <div className='px-16 flex justify-center content-center'>
        <div className='max-w-md'>
          <p className='text-c-green'>Hi, I'm</p>
          <h1 className='text-3xl font-semibold'>Jesse Watson</h1>
          <p className='text-c-grey'>
            I am a uni student studying at RMIT Online on the Gold Coast. I
            love to code (Java, JS, React)and write blog posts. I also have
            other hobbies; click below to find out more...
          </p>
          <div className='pt-6'>
            <button className='bg-c-charcoal p-3 border-2 border-c-white text-c-white oldSchoolBtn hover:text-c-green hover:bg-c-blue hover:border-c-green'>More about me</button>
          </div>
        </div>
    </div>
  )
}
