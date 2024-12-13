import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

const Merchandise = () =>{
    return(
        <>
        <div className="merchandise">
            <div className="hMerchandise">merchandise</div>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active bg1">
      <img src="Image/Alabay-Merch/black hoodie.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item bg2">
      <img src="/Image/Alabay-Merch/pink tshirt.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item bg3">
      <img src="/Image/Alabay-Merch/yellow tshirt.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item bg4">
      <img src="Image/Alabay-Merch/cap mockup.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill btnLeft" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill btnRight" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="comingSoon">Coming Soon...</div>
        </div>
        </>
    )
}

export default Merchandise;
