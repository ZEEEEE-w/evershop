import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Home.scss'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Footer from '../../components/Footer/Footer.jsx'


export default function Layout() {
  return (
    <div>
      <Navigation></Navigation>
      <div className="heading">
        <div className="headingLeft">
          <div className='headingLogo'></div>
        </div>
        <div className="headingRight">
          <h1> Your Heading Here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies sodales mi, at ornare elit semper ac.</p>
          <a href="">SHOP NOW</a>
        </div>
      </div>
      <div className="homeBody">
        <div className="container">
          <div className="collections">
            <div className="collection">
              <h3>Kids shoes collection</h3>
              <p>Constructed from luxury nylons, leathers, and custom hardware...</p>
              <Link to='/kids'><a className="btn" href="#">Shop Kids</a></Link>
            </div>
            <div className="collection">
              <h3>Women shoes collection</h3>
              <p>Constructed from luxury nylons, leathers, and custom hardware...</p>
              <Link to='/women'><a className="btn" href="#">Shop women</a></Link>
            </div>
            <div className="collection">
              <h3>Men shoes collection</h3>
              <p>Constructed from luxury nylons, leathers, and custom hardware...</p>
              <Link to='/men'><a className="btn" href="#">Shop men</a></Link>
            </div>
          </div>

          <h2 className="section-title">FEATURED PRODUCTS</h2>
          <div className="product-grid">
            <div className="product-card">
              <Link to='ProductDetail/women10'><img src='../../img/Senseboost go shoes.png' alt="Nike react"></img></Link>
              <Link to='ProductDetail/women10'><a href="" className="title">Senseboost go shoes</a></Link>
              <p className="price">$231.00</p>
            </div>
            <div className="product-card">
              <Link to='ProductDetail/kids1'><img src='/img/Coated glitter chuck taylor all star.png' alt="Nike react"></img></Link>
              <Link to='ProductDetail/kids1'><a href="" className="title">Coated glitter chuck taylor all star</a></Link>
              <p className="price">$261.00</p>
            </div>
            <div className="product-card">
              <Link to='ProductDetail/kids3'><img src='../../img/Continental 80 shoes.png' alt="Nike react"></img></Link>
              <Link to='ProductDetail/kids3'><a href="" className="title">Continental 80 shoes</a></Link>
              <p className="price">$126.00</p>
            </div>
            <div className="product-card">
              <Link to='ProductDetail/men4'><img src='../../img/Nizza trefoil shoes.png' alt="Nike react"></img></Link>
              <Link to='ProductDetail/men4'><a href="" className="title">Nizza trefoil shoes</a></Link>
              <p className="price">$137.00</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <Outlet />


    </div>
  )
}
