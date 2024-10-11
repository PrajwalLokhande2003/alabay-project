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
      <img src="https://s3-alpha-sig.figma.com/img/17ad/b147/27a80e9f26b1592e8f58588da90159bc?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UFuKumYsUeZsSWFb~Jen5kYxXglroCLa57Ac1lebJwyA8V9wguPeoZsGx-UgQp-XTJk5YBjlt~j-9mOO~adK1EwjN4pIf9Oh4j-2KgpsNkpaUAiPtbMXH~LyY67FL9GSnJDCP31C4gPGrvDjUWC27cgmLncTevMQZrFKobjRzAWGhPsZHCT-yTUH~FhIby8dOONu9u3-dXngof7GrAmD0lfZRnzE6DA2UivoL9wBafQNf8oU7aL~TiYQo72y9jmyfjqhi8ANq0lX~zVh-awjSVfWdp9e9mr4IAXEbGNrvTelrzeIR9YVLqt4uKKOCVEOWCrRT34iIops7e7MpyPgEg__" class="d-block w-100" alt="..."/>
      <div className="btnDiv">
      <Link to='/alabay-gaurdian'>
      <button className="discover1">DISCOVER<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short btnRight" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></button>
      </Link>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="https://s3-alpha-sig.figma.com/img/9ea3/c2a5/258e9acc950cdef2a23e058d05c99fd5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2ZtSZMtq87oU-xDZEgfe~ngWhCOn6K6OyHAjIJudqoYE5CadS0MrgBFiNUjZnFDgGRYZD4frEXa~A88lcBxbXniAnwuIRxwExdQSI1TUQqEOFCNGFG9Z~PEgAfUT52-Ax2qY6-LBj42LtVGMC-SkK2O4Cvi6vcfPn5LtuUIYxKipg~rEYw2OnUmQhODIg5rSd8e8WkK3LeJymeG4aKaaqxA7xNVNlTVAOoS~nnxlnFfXtPnL0CEUzupfA-fcicsNsnxYOaHtsKU2DIHEQWZjokx~4Yina8cgwgBTXuo9tFmj3SfuVMrc0ijXfmlH-FUAxhQGz7JDOxteYP5gSxTCg__" class="d-block w-100" alt="..."/>
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
    <div className="imgDiv1"><img alt="..." src="https://s3-alpha-sig.figma.com/img/0565/c51f/853323e69d9f16cea8f642ff8e3a86ba?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hy-OU6cCBd3Lz2taZLPM1Q7hlW8P3m9HCGAIxWvPkywCJSxkwI8zKXkRw82Jo5dRdPSwskYxUkQbG~hrosVIDisbaEEDHfyBgzPxLqaO8Z-zqHjYf0Pi2ogQd6wvH6eSoU3qFw3kFd6c6z-hxeJfeYCZ0~CDIMp3bSli71lYN43ovB38pRF5qV-90Q91oPrn5ERqmzB5aWO~lwTDn8U65R0i8tXvQISxQaIPpHcrbcJ~hkwNDEFxvLGlLB2MCj59yS1QhlOCnRxVSY-Dh3Ch68Xq~zFKMfgiG6w7eOXabT8xjEfgnP3dc3ZxGFPYGYddpw169lMnBImGoV9iP7VV4g__" /></div>
    <div className="imgDiv2"><img alt="..." src="https://s3-alpha-sig.figma.com/img/1243/de2a/2f35b2812077928282c36cd1462a700e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iyvgJ1OWA7cdyp1o5IMBYd76bwz3HhepxzLTtpV~pzqs-lWhTL85DRgx0E41Ywb32eYs6fe1~6hWa5ObLjW5zerXyvZk65EUVe5tPrtQjP47o1QxcMWHECqFmB4LInGl9oOG07Rw5G6NfE1TMWuI~1AEB6PKtzqN2sJP30w-E0I8djYWNPU3iFGyt4ekcurY66bq6X9ddrs2pQgYqv~WmMutN79HwypFeNaCOG2xTFtWQ0c2vCpInapXHAv2EQQSRIQn2ldf5byKWcd-rEz69Tq~UaaxQ24iWCZbFx5I4FwIBp9Jnxyu-vexD-ttEyuc~TBanfNqPp2c8rqmdLJ1hQ__" /></div>
    <div className="imgDiv3"><img alt="..." src="https://s3-alpha-sig.figma.com/img/6394/0394/a9cc88bd7bb13d9606f8b43ca3f22818?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ea6TS0t1eSKUsbWuJ-DnkQQZV-LEBJH22Sc5xhebedTLfEyfpg2bWQe-etjzOxiht5nWE5ugu8ZtKrnZpB7u4HlzKQLqtij925O0iRbDYEe07iB~aD0GCV~Z5myWE0VpnQ-ddzBSNH0aqAfgTN0BE0Edy1yRi5YQdHUPw5t-O8Dgtjq8OK~hrltX1HRkBQ2-VRla0upI8SVkxUJqXIwBU6gSQwM5z-CgdcPk-r6m6dCBIZZinZQ63Px4AQE~BdX1d~ltp5UU4YnybFBgmY5UtvEvS0WBZVm9VmRvrHMNWnCkAKkfOpzIgigfpfyxPEC349hXwdMCRfOc8NI-JaHqpg__" /></div>
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