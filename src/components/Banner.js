import React from 'react'
import './Banner.css'

function Banner() {

  function truncate(text, n){
    return text.length > n ? text.substr(0,n-1) + "..." : text
  }


  return (
    <header>
    <div className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://img.freepik.com/premium-vector/sale-banner-poster-flyer-design-with-pattern-dark-black-canvas-grunge-texture-background_126712-1920.jpg?w=2000")`,
        backgroundPosition: "center center"
      }}
    >
      <div className='banner-content'>
        <h1 className='banner-title'>Movie Title</h1>
        <h3 className='banner-description'>{truncate(`this is our movid descriptoin and we hava a very long description this is our movid descriptointhis is our movid descriptointhis is our movid descriptoin this is our movid descriptointhis is our movid descriptointhis is our movid descriptointhis is our movid descriptoin`, 120) }</h3>
        <div>

          <div className='banner-buttons'>
            <button className='banner-button'>Play</button>
            <button className='banner-button'>Add to List</button>
          </div>
        </div>
      </div>
      <div className='banner-fade-bottom' ></div>
    </div>
    </header>
  )
}

export default Banner