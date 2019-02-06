import React, { Component } from 'react'
import face from '../assets/face.jpg'
import Footer from '../components/Footer/Footer.js'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../assets/style.scss'
import Header from '../components/Header/Header.js';
import Sticky from 'react-stickynode';
import Work from '../components/Work/Work.js';
class IndexPage extends Component {
 
  render() {
    return (
      <div className="IndexPage">
      <Helmet/>
      <Sticky>
    <Header />
    </Sticky>
        <div className="background">
          <h1 className="title">It's me, Kendra.</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <div className="background2"></div>
        <div className="imgcontainer">
          <div className="green"></div>
          <img src={face} alt="a picture of my face" />
          <p className="about">Based in Minneapolis, Minnesota. Coding BootCamp and Liberal Arts graduate with the resources to create elegant and responsive websites. Enthusiastic about people, great writing, and technological solutions</p>
        </div>
        <Work />
        <Footer />
        
      </div> 
    );
  }

}
export default IndexPage;
