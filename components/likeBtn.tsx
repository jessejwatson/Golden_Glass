import { AiOutlineLike } from "react-icons/ai"

export default function LikeBtn({ post }: {post:any[]}) {
    let likeIcon = <AiOutlineLike color='#221D23' size={25}/>
    
    function likeBtn() {
        // save slug for later
        localStorage.setItem("postSlug", post.slug)

        // if user logged in, add like to article; else login
        if (!session) {
            router.push('/login')
        } else if (post.likes.includes(session.user?.email)) {
            // user already liked post, unlike
            const index = post.likes.indexOf(session.user?.email)
            likes.splice(index)
            graphcms.request(LIKEPOST, {id, likes})
        } else {
            // user not yet liked post, like
            likes.push(session.user?.email)
            graphcms.request(LIKEPOST, {id, likes})
        }

    }

    return (
        <>
            <button onClick={likeBtn}>
                <div className='p-1.5 bg-c-white shadow-2xl rounded-full w-fit hover:translate-y-1 active:opacity-90'>{likeIcon}</div>
            </button>
        </>
    )
}