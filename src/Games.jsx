import React from 'react'
import {Link} from 'react-router-dom'

const Games = () =>{
    return(
        <>
        <div className="games">
        <div className="bgColorDiv">
                    <div className ="bgColor"></div>
                    <div className="bgColor2"></div>
        </div>
        <div className="hGames">games</div>
        <div className="info">Stay tuned for upcoming games !</div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
      <img src="/Image/Alabay Games/alabay guard prev 2 1.png" class="d-block w-100" alt="..."/>
      <div className="btnDiv">
      <Link to='/alabay-gaurdian'>
      <button className="discover1">DISCOVER<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short btnRight" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></button>
      </Link>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="/Image/Alabay Games/alabay lost heritage prev 1.png" class="d-block w-100" alt="..."/>
      <div className="btnDiv2">
      <Link to={'/alabay-heritage'}>
      <button className="discover2">DISCOVER<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short btnRight" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></button>
</Link>
      </div>
    </div>
    {/* <div class="carousel-item">
      <img src="https://s3-alpha-sig.figma.com/img/17ad/b147/27a80e9f26b1592e8f58588da90159bc?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UFuKumYsUeZsSWFb~Jen5kYxXglroCLa57Ac1lebJwyA8V9wguPeoZsGx-UgQp-XTJk5YBjlt~j-9mOO~adK1EwjN4pIf9Oh4j-2KgpsNkpaUAiPtbMXH~LyY67FL9GSnJDCP31C4gPGrvDjUWC27cgmLncTevMQZrFKobjRzAWGhPsZHCT-yTUH~FhIby8dOONu9u3-dXngof7GrAmD0lfZRnzE6DA2UivoL9wBafQNf8oU7aL~TiYQo72y9jmyfjqhi8ANq0lX~zVh-awjSVfWdp9e9mr4IAXEbGNrvTelrzeIR9YVLqt4uKKOCVEOWCrRT34iIops7e7MpyPgEg__" class="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill btnRight" viewBox="0 10 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="gamePreview"><span>GAME</span> PREVIEWS
<div className="previews">
    <div className="imgDiv1"><img alt="..." src="/Image/Alabay Games/Abilities 2.png" /></div>
    <div className="imgDiv2"><img alt="..." src="/Image/Alabay Games/artifacts 2.png" /></div>
    <div className="imgDiv3"><img alt="..." src="/Image/Alabay Games/image 3 alabay guard 2.png" /></div>
    <button className="btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short btnRight" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
    </button>
</div>
</div>

        </div>
        </>
    )
}

export default Games;