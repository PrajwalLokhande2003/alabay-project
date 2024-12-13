import React, { useState } from "react";
import {Link} from 'react-router-dom'

const Discover = () => {

    const [top, setTop] = useState()
    const [up,setUp] = useState()
    const [downColor,setDownColor] = useState()
    const [upColor,setUpColor] = useState()
    const x = (e) => {
        if (e.target.scrollTop > 5) {
            setTop('4rem')
        } else {
            setTop('8rem')
        }
        // console.log(e.target.scrollTop);
        let val = e.target.scrollTop
        let thumbVal = val/44
        setUp(thumbVal+'rem')
        if(thumbVal === 12){
            setUpColor('#A4A8FF');
            setDownColor('')
        }
        else if(thumbVal===0){
            setDownColor('#A4A8FF')
            setUpColor('')
        }
    }

    const btnDown = (e) =>{
        let upVal = 0
        if(upVal<=12){
            upVal++
        }else{
            setDownColor('#A4A8FF')
        }
        setUp(upVal+'rem')
    }

    const btnUp = (e) =>{
        let downVal = 12
        if(downVal>=0){
            downVal--
        }else{
            setUpColor('#A4A8FF')
        }
        setUp(downVal+'rem')
    }

    return (
        <>
            <div className="gaurdian">
                <div className="hGaurdian" style={{ marginTop: top }}><span>ALABAY GUARDIAN</span>
                    <br />SHEPHERD OF THE STEPPES</div>
                <div className="gaurdianDiv" id="gaurdianDiv" onScroll={x}>
                    <div className="info">
                        Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
                    </div>
                    <div className="btnDiv">
                        <button className="playBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill playSvg" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                            </svg> PLAY
                        </button>
                    </div>
                    <div className="gamePreview">
                        <span>GAME</span> PREVIEW<br />
                        <div className="previews">
                            <img alt="..." src="/Image/Alabay Games/Alabay Guard/image 1 alabay guard.png" />
                            <img alt="..." src="/Image/Alabay Games/Alabay Guard/image 2 alabay guard.png" />
                            <img alt="..." src="/Image/Alabay Games/Alabay Guard/image 3 alabay guard.png" />
                        </div>
                    </div>
                    <div className="features">
                        <div className="featureDetail">
                            <span className="hFeature">FEATURES</span><br /><br />
                            <div>Explore a variety of landscapes, including <span>mountains</span>, <span>forests</span>, <span>deserts</span>, and <span>ancient ruins</span>.</div><br />

                            <div>Use the Alabay's <span>abilities</span> to solve <span>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues.</div><br />

                            <div>Discover relics that tell the story of the Alabay's ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.</div><br />

                            <div>Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.</div><br />

                            <div>
                                Challenge Modes:<br />
                                - <span>Time Trials</span>: Compete in special timed challenges where the Alabai must navigate through complex mazes or
                                complete puzzles within a time limit.<br />
                                - <span>Exploration Mastery</span>: A mode that rewards players for fully exploring every nook and cranny of the game's world,
                                uncovering all secrets
                            </div>
                            <div className="btnDiv">
                            <button className="playBtn">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill playSvg" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                                </svg> PLAY
                            </button>

                            <Link to='/'><button className="exitBtn">
                                 EXIT
                            </button>
                            </Link>
                            </div>
                            
                        </div>

                    </div>
                </div>
                <div className="scrollbarDiv">
                        <div className="scrollup">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={btnUp} style={{background:upColor}} width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill up" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
                        </div>
                        <div className="scrollbar"><div className="thumb" style={{top:up}}></div></div>

                        <div className="scrolldown">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={btnDown} style={{background:downColor}} width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill down" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                        </div>

                        </div>
            </div>

        </>
    )

}


export default Discover;