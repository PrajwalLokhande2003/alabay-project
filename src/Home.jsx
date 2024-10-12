import React,{useState} from "react";
import Main from "./Main";


const Home = () =>{
    const[bottom,setBottom] = useState()
    const move = () =>{
        setBottom('-980rem');
         
    }
    const reset = () =>{
        setBottom('');
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

            <div className="mainDiv" style={{bottom:bottom}}><hr/>
            <Main/>
            </div>
        </div>
        
    )
}

export default Home;