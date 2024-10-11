import react, { useState } from 'react'
import Project from './Project'
import RoadMap from './RoadMap'
import Tokenomics from './Tokenomics'
import Merchandise from './Merchandise'
import Games from './Games'
import SocialMedia from './SocialMedia'

const Main = () => {

    const [visibility, setVisibility] = useState()
    // const [overflow,setOverflow] = useState()
    const [left, setLeft] = useState()
    const [color, setColor] = useState()
    const imgChangeOne = () => {
        let i = 0
        setInterval(() => {
            if (i === 111) {
                clearInterval()
            }
            else {
                i++
                // setRight(`-${i}rem`)
                setLeft(`-${i}rem`)

            }
        }, .10);
        setVisibility('visible')

    }

    const imgChangeTwo = () => {
        let i = 111
        setInterval(() => {
            if (i === 0) {
                clearInterval()
            }
            else {
                i--
                // setRight(`-${i}rem`)
                setLeft(`${i}rem`)
            }
        }, .10);
        setVisibility('hidden')
    }

    const colorCha = () => {
        setColor('#FFA800')
        console.log('clicked');

    }
    return (
        <>
            <div className="main">
                <div className="history">
                    <div className="fHDiv">History Of
                        <span> ALABAY</span></div>
                    <p>The Central Asian Shepherd Dog, also known as Alabay, has been a     guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage strength, and loyalty.</p>
                </div>
                <img alt='img' className="img" src='https://s3-alpha-sig.figma.com/img/0581/9154/369b463b9efe66ff3c4aa09e02e1bb96?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bLaAfyFvOKQOPYR4MJ-HmXTBaFOssESygmS16Mug~6sWnba2SFTKQkFEOgdh7-Onz1yc35l0oyGFQeaTcw5Uu94~RKOzYGwfGSxs7tK8EjxogLDMZ3J6qpQ-BRo3AjJut9zQIq8Bet05A7ApMliZYUvNDLxOdq31PRprZs1HZL7DYCxp3JOqwNnt9F41UqWl56DiWu-FGyG42uAqiGMaSs2yAUQDNbKJVE6-nqSMUbnfZDU2Op4~yyKHXsn9CGjb3eMc9URJdhPETmkFKbLE6AWenpoQ2l5iufLL6GZx7wQ16gK5l4wCl-8Yk9fyJmXt9Snhpi2SNkq~xXLwgvWTuA__' />
                <div className="sImg"><img alt='img' src='https://s3-alpha-sig.figma.com/img/0581/9154/369b463b9efe66ff3c4aa09e02e1bb96?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bLaAfyFvOKQOPYR4MJ-HmXTBaFOssESygmS16Mug~6sWnba2SFTKQkFEOgdh7-Onz1yc35l0oyGFQeaTcw5Uu94~RKOzYGwfGSxs7tK8EjxogLDMZ3J6qpQ-BRo3AjJut9zQIq8Bet05A7ApMliZYUvNDLxOdq31PRprZs1HZL7DYCxp3JOqwNnt9F41UqWl56DiWu-FGyG42uAqiGMaSs2yAUQDNbKJVE6-nqSMUbnfZDU2Op4~yyKHXsn9CGjb3eMc9URJdhPETmkFKbLE6AWenpoQ2l5iufLL6GZx7wQ16gK5l4wCl-8Yk9fyJmXt9Snhpi2SNkq~xXLwgvWTuA__' /></div>

                <ul className="galleryMenu">
                    <li className="all" style={{ color: color }} onClick={colorCha}>All</li>
                    <li className="photo">Photos</li>
                    <li className="video">Videos</li>
                </ul>
                <div className="gallery">
                    <div className="fSlide" style={{ left: left }}>
                        <div className="div_1"><img alt='...' src=''/></div>
                        <div className="div_2"><img alt='...' src=''/></div>
                        <div className="div_3"><img alt='...' src=''/></div>
                    </div>
                    <div className="sSlide" style={{ left: left }}>
                        <div className="div_4"><img alt='...' src=''/></div>
                        <div className="div_5"><img alt='...' src=''/></div>
                        <div className="div_6"><img alt='...' src=''/></div>
                    </div>
                </div>
                <div className="arrowBtn"><button className="btn" onClick={imgChangeOne}>
    <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short btnRight1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
    </button>
    <button className="btn1" onClick={imgChangeTwo} visibility={visibility}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short btnRight2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
    </button>
                </div>
                <Project/>
                <RoadMap/>
                <Tokenomics/>
                <Merchandise/>
                <Games/>
                <SocialMedia/>
                
            </div>
        </>
    )
}

export default Main;