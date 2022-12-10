import { SetStateAction } from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    PocketShareButton,
    EmailShareButton
} from 'next-share'
import {
    SiPocket,
    SiTwitter,
    SiFacebook
} from 'react-icons/si'
import { AiFillMail } from 'react-icons/ai'

export default function ShareScreen({ slug, title }: {slug:string, title:string}) {
  return (
    <div className="flex gap-x-6">
        <PocketShareButton
            url={"https://golden-glass.vercel.app/posts/" + slug}
            title={title}
            blankTarget={true}
        >
            <SiPocket className="hover:animate-pulse" size={25} color='#B3B4BD'/>
        </PocketShareButton>

        <TwitterShareButton
            url={"https://golden-glass.vercel.app/posts/" + slug}
            title={title}
            blankTarget={true}
        >
            <SiTwitter className="hover:animate-pulse" size={25} color='#B3B4BD'/>
        </TwitterShareButton>

        <FacebookShareButton
            url={"https://golden-glass.vercel.app/posts/" + slug}
            quote={title}
            blankTarget={true}
        >
            <SiFacebook className="hover:animate-pulse" size={25} color='#B3B4BD'/>
        </FacebookShareButton>

        <EmailShareButton
            url={"https://golden-glass.vercel.app/posts/" + slug}
            subject={title}
            blankTarget={true}
        >
            <AiFillMail className="hover:animate-pulse" size={25} color='#B3B4BD'/>
        </EmailShareButton>
    </div>
  )
}
