import React from 'react'
import Navigation from '../../components/Navigation/Navigation.jsx'
import './About.scss'
import Footer from '../../components/Footer/Footer.jsx'

export default function About() {
    return (
        <div>
            <Navigation></Navigation>
            <div className="about">
                <div className="about-content">
                    <h1>About us</h1>
                    <div className="about-text">

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec turpis at arcu consequat dictum.
                            In eu euismod quam. Praesent ut finibus risus. Ut eu aliquet libero, non ornare nisl.
                            Aenean gravida urna at ligula viverra, sed pharetra ante pharetra. Interdum et malesuada
                            fames ac ante ipsum primis in faucibus. Quisque efficitur a mi eget hendrerit. Quisque
                            tortor lorem, aliquet eget feugiat ac, volutpat et lorem. Integer porta luctus leo et
                            interdum. Morbi porta diam sem, sit amet porta lectus iaculis ac.
                        </p>
                    </div>
                    <img
                        src="../../img/about.png"
                        alt="About Us"
                        className="about-image"
                    />
                    <div className="about-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec turpis at arcu consequat dictum. In eu euismod quam. Praesent ut finibus risus. Ut eu aliquet libero, non ornare nisl. Aenean gravida urna at ligula viverra, sed pharetra ante pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque efficitur a mi eget hendrerit. Quisque tortor lorem, aliquet eget feugiat ac, volutpat et lorem. Integer porta luctus leo et interdum. Morbi porta diam sem, sit amet porta lectus iaculis ac.
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
