import React,{useState,useEffect} from "react";
import Main from "./Main";


const Home = () =>{
    const[top,setTop] = useState()
    const[height,setHeight] = useState()
    const move = () =>{
        setTop('4rem');
        setHeight('1045rem')
         
    }
    const reset = () =>{
        setTop('69rem');
        setHeight('5rem')
         
    }

    window.addEventListener('scroll',()=>{
        if (document.documentElement.scrollTop >5) {
            move()
       }else{  
        reset()  
       }
    })
    
    return(
        <div className="home">
            <div className="welDiv"> welcome to alabay world</div>

            <div className="paraDiv"> <div>where the <span>legendary Central Asian Shepherd Dog</span> meets a new-age adventure. <span >Join us</span> in celebrating the <span>strength</span>, <span> loyalty</span>, and <span>heritage</span> of the Alabay breed.</div>
            </div>

            <div className="mainDiv" style={{top:top,height:height}}><hr/>
            <Main/>
            </div>
        </div>
        
    )
}

export default Home;