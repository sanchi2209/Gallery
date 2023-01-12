
import MiddlePage from "./MiddlePage"
import LastPage from "./LastPage"
import { useState } from "react"
import {Link} from 'react-router-dom'
const Landing=()=>{
    const[page,setPage]=useState(true)
    const[get,setGet]=useState(null)
    let arr=[
        "https://static.fandomspot.com/images/07/7957/00-featured-mine-pink-hair-girl-in-akame-ga-kill-screenshot.jpg",
        "https://st.depositphotos.com/60149000/52163/v/600/depositphotos_521631940-stock-illustration-cute-anime-girl-pink-headphones.jpg",
        "https://img.freepik.com/free-vector/young-girl-anime-character-poster_603843-2522.jpg?w=2000",
        "https://i.pinimg.com/736x/24/46/79/244679ee28cced29049688ba506eac12.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReoblZ3oZNDaiw7ssFskeo2qckswkfT_3qDuLQqPQm6hsCrZp_kXCFYMg3xiD7CvSdUMY&usqp=CAU"
    ]
    function handleKey(){
      setPage(false)
    }
    return(
        <div>
            <Link className="Link" to='/'><button>Back</button></Link>
            {page?<div >
            {arr.map((val, index)=>{
                return(
                    <MiddlePage val={val} key={index} handleKey={handleKey} setGet={setGet} index={index}/>
                )
                  
            })}
            </div>:<LastPage image={arr} get={get} setGet={setGet} setPage={setPage}/>}
        
            

        </div>
    )
}
export default Landing