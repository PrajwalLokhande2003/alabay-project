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
                            <img alt="..." src="https://s3-alpha-sig.figma.com/img/085e/79d3/914a22e4e30df6b369a72c0ef6027214?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oyOWuSX996a5cLdjUiP4SgRNXclnOngWB27bZdiTmUyhN1EwmIQk9ULm9e87LGLlsgY5NmWMR3WJ6I6MfmMJ01ytT~EF6PRBkU2XWjD7QD0EGCOHuEY~Z~g1GwB4sAVBXdHI5M6IwOdL~-HDkZ8ol2NyU~0rYA4dnglhBI~rll7KHz9Ng-EVu6ryEBHZt-5v1U-B3U6XRVnLnXECXDEqhGeflzJ86hucQp0zm7Hth6Sv-tlDxDGsGXMxlIwxD1i-UpdAczWvlSQx03VcfxFBdNxbdc34IgsNLZ10OWy9-CW~t605zj42sY~masqWwVKHG~8RWWJ28RsSLKKVQLPHxg__" />
                            <img alt="..." src="https://s3-alpha-sig.figma.com/img/03b5/046f/8d5174376aefb11ffb5c6f52219d94aa?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PJAwgBj5HxfDZ-rTghjvkLVVwDZ3T6vrVPpRTZfZZSJEhQfZ3Yxdjwoux0ZrfXO4R8LCkC~6zNOyzz-ApZsjUPMEeKUieD4NpfvEHMo~75IjcoQRQqEQbjLc~s5GNQoIdoLUoZLuBXEb6mP5-xkk2KX5Z9ic-dglHyRGQDHKYZE6GjqTgaV8-HudmhprMMqXa8iSrdwGmSA6rocHJ9bfVQ4EPjalcwk2az3jJYZcSZDDvsL~MZf9bzmSW9jX2dMWzRvVaCp4skkd80yTyz8HPwSqtxm0G7fCXmhkLgw-hsS0uekocnUPi~0UkAWvpD~TKgW7uA6NvnlwlqaVJjH7iQ__" />
                            <img alt="..." src="https://s3-alpha-sig.figma.com/img/6394/0394/a9cc88bd7bb13d9606f8b43ca3f22818?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ea6TS0t1eSKUsbWuJ-DnkQQZV-LEBJH22Sc5xhebedTLfEyfpg2bWQe-etjzOxiht5nWE5ugu8ZtKrnZpB7u4HlzKQLqtij925O0iRbDYEe07iB~aD0GCV~Z5myWE0VpnQ-ddzBSNH0aqAfgTN0BE0Edy1yRi5YQdHUPw5t-O8Dgtjq8OK~hrltX1HRkBQ2-VRla0upI8SVkxUJqXIwBU6gSQwM5z-CgdcPk-r6m6dCBIZZinZQ63Px4AQE~BdX1d~ltp5UU4YnybFBgmY5UtvEvS0WBZVm9VmRvrHMNWnCkAKkfOpzIgigfpfyxPEC349hXwdMCRfOc8NI-JaHqpg__" />
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