// import React from 'react'
import Link from 'gatsby-link'
import React, { Component } from 'react'


import icon from '../../../public/icons/icon.png'


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
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/frontpage/">Writing</Link>
                  <Link className="nav-link" to="#">Banshee</Link>
                </div>
              )}
      </div>
          );
      
  }  }



export default Header;






