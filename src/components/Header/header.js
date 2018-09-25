// import React from 'react'
import Link from 'gatsby-link'
import React, { Component } from 'react'
import './style.scss';


import icon from '../../../public/images/icon.png'


class Header extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })

  }

  render() {
    return (
              
            <div  className="nav" id="navbar">
              <img src={icon} alt="icon" />
              <p onClick={this.toggle}>Menu</p>
              {this.state.on && (
                <div className="links">
                  <Link className="link" to="/">Home</Link>
                  <Link className="link" to="/page-2/">Writing</Link>
                  <Link className="link" to="#">Company</Link>
                </div>
              )}
      </div>
          );
      
  }  }



export default Header;







