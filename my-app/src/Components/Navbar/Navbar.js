import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';


export default function Navbar() {

  let handleCrossClick = ()=>{
    let navUl = document.getElementById("nav-ul");
    if(window.screen.width <= 900){
      navUl.style.display = "none";
    }
    else{
      navUl.style.display = "flex";
    }
    
  }

  let handleHamburgerClick = ()=>{
    let navUl = document.getElementById("nav-ul");
    navUl.style.display = "flex";
  }

  return (
    <div className="navbar">
          <div className='mobile-nav'>
          <img className='logo' src="./icon/logo.svg" alt="" />
          <span className="nav-icons">
          <i className="fa-solid fa-bars" onClick={handleHamburgerClick}></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          </div>
        <ul className="nav-ul" id="nav-ul">
            <li className="nav-item"><Link className="nav-link" to="/">INDIA</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/international">INTERNATIONAL</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/political">POLITICAL</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/governance">GOVERNANCE</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/economy">ECONOMY</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">SPORTS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">SCIENCE&TECH</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/videos">VIDEOS</Link></li>
            <li className=" nav-item nav-dropdown">
                GET INVOVED
                <ul className="dropdown-ul">
                    <li className="dropdown-items"><a href='/'>HealthCare</a></li>
                    <li className="dropdown-items"><a href='/'>Eduction</a></li>
                    <li className="dropdown-items"><a href='/'>Social Impact</a></li>
                    <li className="dropdown-items"><a href='/'>Empowerment</a></li>
                    <li className="dropdown-items"><a href='/'>Environment</a></li>
                    <li className="dropdown-items"><a href='/'>Fatafat News</a></li>
                    <li className="dropdown-items dropdown-last"><a href='/'>Autring's Blog</a></li>
                    <li className="dropdown-items dropdown-last"><a href='/'>Career</a></li>
                    <li className="dropdown-items dropdown-last"><a href='/'>Connect with us</a></li>
                    <li className="dropdown-items dropdown-last"><a href='/'>support to Journalism</a></li>
                </ul>
            </li>
            
            <li><a href="/" className="nav-item search_btn"><i className="fa-solid fa-magnifying-glass"></i></a></li>
            <li className='user'><i className="fa-solid fa-user"></i>
              <ul className='login'>
                <li ><button className='sign-up'>Sign in</button></li>
                <li ><button className='sign-up'>Sign up</button></li>
                <li><button className='sign-in'>Admin</button></li>
              </ul>
            </li>
            <li>
              <ul className='mobile-login'>
                <li ><button className='sign-up'>sign in</button></li>
                <li><button className='sign-in'>sign up</button></li>
                <li><button className='sign-up'>Admin</button></li>
              </ul>
            </li>
            <li><i className="fa-solid fa-x" id='fa-x' onClick={handleCrossClick}></i></li>
            <li className='nav-item ind nav-ind'><h3>Support for Journalism</h3></li>
        </ul>
    </div>
    
  )
}