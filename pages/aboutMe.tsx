import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components
import NavBar from '../components/navBar'
import BodyAboutMe from '../components/body-aboutMe'
import FooterIcons from '../components/footerIcons'

export default function AboutMe() {
  return (
    <div className='h-auto scrollbar-thin scrollbar-track-c-charcoal scrollbar-thumb-c-blue'>
      <div className='font-FiraCode bg-gradient-to-br from-c-charcoal to-c-blue text-c-white text-sm md:text-base xl:text-lg'>
        
        <NavBar/>

        <BodyAboutMe/>

        <FooterIcons/>

      </div>
    </div>
  )
}
