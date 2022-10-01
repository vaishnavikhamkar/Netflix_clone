import React from 'react'
import "./styles.css"
import netflixlogo from "../images/Netflix-logo-red-black-png.png"

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" id="nav-title" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="nav-title">TV Shows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="nav-title">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="nav-title">News and Popular</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="nav-title">My list</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="nav-title">Browse by Languages</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar