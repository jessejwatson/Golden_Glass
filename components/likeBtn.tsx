import { useEffect, useState } from "react"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"

const LikeBtn = (props:any) => {
    const [likedState, setLikedState] = useState(props.liked)
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
        
    return (
        <div className='p-1.5 bg-c-white shadow-2xl rounded-full w-fit hover:translate-y-1 active:opacity-90' onClick={() => {
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