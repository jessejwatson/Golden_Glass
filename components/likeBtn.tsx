import { AiOutlineLike } from "react-icons/ai"

export default function LikeBtn({ post }: {post:any[]}) {
    let likeIcon = <AiOutlineLike color='#221D23' size={25}/>
    
    

    return (
        <>
            <button>
                <div className='p-1.5 bg-c-white shadow-2xl rounded-full w-fit hover:translate-y-1 active:opacity-90'>{likeIcon}</div>
            </button>
        </>
    )
}