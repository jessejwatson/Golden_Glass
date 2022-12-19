import { useState } from "react"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"

export default function LikeBtn({ liked }: {liked:boolean}) {
    const [likedState, setLikedState] = useState(liked)
    return (
        <div onClick={() => {
            if (likedState) {
                setLikedState(false)
            } else {
                setLikedState(true)
            }
        }}>
            {
                (likedState && <AiFillLike color='#221D23' size={25}/>)
                ||
                (!likedState && <AiOutlineLike color='#221D23' size={25}/>)
            }
        </div>
    )
}