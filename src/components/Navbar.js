import React from 'react'
import PropType from "prop-types"

export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode==="light"?"dark":"light"}`} href="/">{props.text}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className={`nav-link active text-${props.mode==="light"?"dark":"light"}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="/">{props.about}</a>
              </li>
              
            </ul>
                  <div class={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                      <input class="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
                      <label class="form-check-label" for="flexSwitchCheckDefault">Enable dark mode</label>
                  </div>
          </div>
        </div>
      </nav>
  )
}
Navbar.propTypes={
        text:PropType.string.isRequired,
        about:PropType.string.isRequired

}

Navbar.defaultProps ={
    text:"nextText",
    about :"nextAbout"

}
