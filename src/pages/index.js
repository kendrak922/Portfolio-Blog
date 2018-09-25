import React, { Component } from 'react'
import face from '../assets/face.jpg'
import Footer from '../components/Footer'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../assets/style.scss'
class IndexPage extends Component {
 
  render() {
    return (
      <div className="IndexPage">
      <Helmet/>
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
        <Footer />
      </div> 
    );
  }

}
export default IndexPage;
