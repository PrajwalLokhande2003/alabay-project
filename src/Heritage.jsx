import React, { useState } from "react";
import {Link} from 'react-router-dom'

const Haritage = () => {

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
            setUpColor('#90FFAE');
            setDownColor('')
        }
        else if(thumbVal===0){
            setDownColor('#90FFAE')
            setUpColor('')
        }
    }

    const btnDown = (e) =>{
        let upVal = 0
        if(upVal<=12){
            upVal++
        }else{
            setDownColor('#90FFAE')
        }
        setUp(upVal+'rem')
    }

    const btnUp = (e) =>{
        let downVal = 12
        if(downVal>=0){
            downVal--
        }else{
            setUpColor('#90FFAE')
        }
        setUp(downVal+'rem')
    }

    return (
        <>
            <div className="heritage">
                <div className="hHeritage" style={{ marginTop: top }}><span>ALABAY GUARDIAN</span>
                    <br />THE LOST ADVENTURE</div>
                <div className="heritageDiv" id="heritageDiv" onScroll={x}>
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
                            <img alt="..." className="img1" src="https://s3-alpha-sig.figma.com/img/27d4/f132/427acb4a9319d4e73bbf34c63806e56e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqLPf8GEcI0QxhKIgJMZwjUcCzoXawQnFSYv4Qutbg2aRkSPHwKxRlAcjjTKFJppCHE7ZibXqBTgiA1viBEL8cJ4Z3Ix8F13-UKCLap2FHdx9-IzY~hKjcDAx-cmolIiYHd5TwBKStxq5bp~43HztZAtP8QEKhEnVGGjH~AYEbWAgILCciYUa6C2K3NvVT11HQn9S-NwLCWgorpe0HFPog-ChTsFDR6Fve6ewY-zFQsXB6Env0LJAHRFH0vubj32lzGV6X8CvFiZVIe4HOLmWIlwm3xohHYv~8qBW0jQB8sdwCg--dZaI4PuIMPJl~PEeNPDnW22WZZbzAdexdvxOQ__" />
                            <img alt="..." src="https://s3-alpha-sig.figma.com/img/1243/de2a/2f35b2812077928282c36cd1462a700e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iyvgJ1OWA7cdyp1o5IMBYd76bwz3HhepxzLTtpV~pzqs-lWhTL85DRgx0E41Ywb32eYs6fe1~6hWa5ObLjW5zerXyvZk65EUVe5tPrtQjP47o1QxcMWHECqFmB4LInGl9oOG07Rw5G6NfE1TMWuI~1AEB6PKtzqN2sJP30w-E0I8djYWNPU3iFGyt4ekcurY66bq6X9ddrs2pQgYqv~WmMutN79HwypFeNaCOG2xTFtWQ0c2vCpInapXHAv2EQQSRIQn2ldf5byKWcd-rEz69Tq~UaaxQ24iWCZbFx5I4FwIBp9Jnxyu-vexD-ttEyuc~TBanfNqPp2c8rqmdLJ1hQ__" />
                            <img alt="..." src="https://s3-alpha-sig.figma.com/img/0565/c51f/853323e69d9f16cea8f642ff8e3a86ba?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hy-OU6cCBd3Lz2taZLPM1Q7hlW8P3m9HCGAIxWvPkywCJSxkwI8zKXkRw82Jo5dRdPSwskYxUkQbG~hrosVIDisbaEEDHfyBgzPxLqaO8Z-zqHjYf0Pi2ogQd6wvH6eSoU3qFw3kFd6c6z-hxeJfeYCZ0~CDIMp3bSli71lYN43ovB38pRF5qV-90Q91oPrn5ERqmzB5aWO~lwTDn8U65R0i8tXvQISxQaIPpHcrbcJ~hkwNDEFxvLGlLB2MCj59yS1QhlOCnRxVSY-Dh3Ch68Xq~zFKMfgiG6w7eOXabT8xjEfgnP3dc3ZxGFPYGYddpw169lMnBImGoV9iP7VV4g__" />
                            <img alt="..." className="img1" src="https://s3-alpha-sig.figma.com/img/6347/db55/b9710d5da392dbdb229636ac10e5991a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c-BKmV6vE8SUY~22i62DiA2rjoFI8UI5V8qgLA7TanPQGLbLWSS9gl3212he2DRaeFBeJ20-doC~bSnWp3L3vUO~AJruQbupEzf7xCuJG3CgSUoAIw3kkRDSKUa6M4MClcakANfgKmGOdu9AB2kE6d0LXiVs~LEKZNvy8Alvh186nOV6cqahAp7mxEq7QVYks-oPYExa1jEfNDMjp8-AKL-jQzF9-nQD9xpudoWHqzLoY8weCnShW3-28FUGTPa9u3vmrYNJAvHne4EPF0a2ILNCj2B~24Is1NwxmKMphEz1dvZyXL7KPky6aV7B3UzSs0AQqZNtxiHee~OKLRCAAw__" />
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


export default Haritage;