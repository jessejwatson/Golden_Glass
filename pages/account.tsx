import { useSession, signOut, getSession } from "next-auth/react"
import { Context } from "vm";

export const getServerSideProps = async (context:Context) => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/login',
            }
        }
    }

    return {
        props: { session },
    };
};

export default function Account() {
    const {data: session, status} = useSession()
    
    if (status === 'authenticated') {
        return (
            <div>
                <p>Welcome, {session?.user?.email}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
            </div>
        )
    }
}