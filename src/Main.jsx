import React, { useState } from 'react'
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
                <img alt='img' className="img" src='/Image/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png' />
                <div className="sImg"><img alt='img' src='/Image/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png' /></div>

                <ul className="galleryMenu">
                    <li className="all" style={{ color: color }} onClick={colorCha}>All</li>
                    <li className="photo">Photos</li>
                    <li className="video">Videos</li>
                </ul>
                <div className="gallery">
                    <div className="fSlide" style={{ left: left }}>
                        <div className="div_1"><img alt='img1...' src='/Image/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png '/></div>
                        <div className="div_2"><img alt='img2...' src='/Image/Alabay Games/Alabay Adventure - The Lost Heritage/artifacts.png'/></div>
                        <div className="div_3"><img alt='img3...' src='/Image/DALL·E 2024-07-15 01.31.03 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a t-shirt with an Alabay dog printed on it and we 2.png'/></div>
                    </div>
                    <div className="sSlide" style={{ left: left }}>
                        <div className="div_4"><img alt='img4...' src='/Image/Alabay Games/Alabay Adventure - The Lost Heritage/overview.png'/></div>
                        <div className="div_5"><img alt='img5...' src='/Image/Alabay Games/Abilities 2.png'/></div>
                        <div className="div_6"><img alt='img6...' src='/Image/Alabay Games/image 3 alabay guard 2.png'/></div>
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
