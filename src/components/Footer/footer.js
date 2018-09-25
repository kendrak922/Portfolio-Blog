import Link from 'gatsby-link'
import React, { Component } from 'react'
import './style.scss';



const Footer = () => (
    <div className="footer">
        <p className="contact-title">- Get in Touch -</p>
        <p className="email">kendrak922@gmail.com</p>
        <p className="number">651-261-5162</p>
        <div className="social-media">
            <a className="social-media-link" href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a className="social-media-link" href="https://www.linkedin.com/in/kendra-kyndberg/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a className="social-media-link" href="https://github.com/kendrak922" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </div>
    </div>

)

export default Footer;