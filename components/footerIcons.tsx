import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// Import Icons
import { SiYoutube, SiTwitter, SiSpotify, SiGithub } from 'react-icons/si'

export default function FooterIcons() {
  return (
    <div className='font-FiraCode text-c-white px-4 pt-2'>
      
      <div className='flex justify-center pb-6'>
        <div className='px-4'>
          <a href="https://www.youtube.com/@Jessals04" target="_blank" rel="noreferrer">
            <SiYoutube color='#5AC494' fontSize={24}/>
          </a>
        </div>
        <div className='px-4'>
          <a href="https://twitter.com/jessals04" target="_blank" rel="noreferrer">
            <SiTwitter color='#5AC494' fontSize={24}/>
          </a>
        </div>
        <div className='px-4'>
          <a href="https://open.spotify.com/user/yutzwhvn77ybml43prhsbzd8d?si=b48a448326f5469f" target="_blank" rel="noreferrer">
            <SiSpotify color='#5AC494' fontSize={24}/>
          </a>
        </div>
        <div className='px-4'>
          <a href="https://github.com/Jessals04/" target="_blank" rel="noreferrer">
            <SiGithub color='#5AC494' fontSize={24}/>
          </a>
        </div>
      </div>

    </div>
  )
}