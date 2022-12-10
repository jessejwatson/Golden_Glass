import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link';
import router from 'next/router';

export default function Login() {
    const {data: session} = useSession()

    function backBtn() {
        // go home if postSlug is null; else push
        // user to post
        console.log('Slug is ' + localStorage.getItem('postSlug'))
        if (localStorage.getItem('postSlug') != null) {
            router.push('/posts/' + localStorage.getItem('postSlug'))
        } else {
            router.push('/blog')
        }
    }
    
    if (session) {
        return (
            <div className='h-screen'>
                <div className='font-FiraCode bg-gradient-to-br from-c-charcoal to-c-blue text-c-white h-full flex flex-col justify-center items-center overflow-y-auto scrollbar-thin scrollbar-thumb-c-green scrollbar-track-c-blue'>
                    <div className='p-10 bg-c-grey bg-opacity-5 rounded-lg animate-fade-in-up max-w-3xl flex flex-col justify-between gap-y-5 shadow-lg hover:shadow-md'>
                        <p>Welcome, {session?.user?.name}</p>
                        <button className='hover:bg-c-blue active:opacity-90 border-c-green border-2 text-c-green rounded-full py-2 px-2' onClick={() => signOut()}>Sign Out</button>
                        <button className='underline text-c-grey mx-auto' onClick={backBtn}>back</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='h-screen'>
                <div className='font-FiraCode bg-gradient-to-br from-c-charcoal to-c-blue text-c-white h-full flex flex-col justify-center items-center overflow-y-auto scrollbar-thin scrollbar-thumb-c-green scrollbar-track-c-blue'>
                    <div className='p-10 bg-c-grey bg-opacity-5 rounded-lg animate-fade-in-up max-w-3xl flex flex-col justify-between gap-y-5 shadow-lg hover:shadow-md'>
                        <p>Click the button below<br/>to sign in with Google</p>
                        <button className='hover:bg-c-blue active:opacity-90 border-c-green border-2 text-c-green rounded-full py-2 px-2' onClick={() => signIn()}>Sign In</button>
                        <button className='underline text-c-grey mx-auto' onClick={backBtn}>back</button>
                    </div>
                </div>
            </div>
        )
    }
}