import React, { Fragment, useEffect, useState } from 'react'
import './navbar.css'


function NavBar() {

  const [showNav, setShowNav] = useState(false)

  // it track our scroll
  function trackScroll() {
    if (window.scrollY > 100) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
    console.log(showNav)
  }

  useEffect(() => {
    window.addEventListener('scroll', trackScroll)
    return () => {
      window.removeEventListener('scroll', trackScroll)
    }
  }, [])


  return (
    <Fragment>
      <div className= {`nav ${ showNav && "nav-black"}`} >
        <div className='nav_container' >
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt='' />
          <img className='profile' src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt='' />
        </div>
      </div>
    </Fragment>

  )
}

export default NavBar