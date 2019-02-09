// import React from 'react'
import Link from 'gatsby-link'
import React, { Component } from 'react'
import Sticky from 'react-stickynode';


import icon from '../../assets/icons/icon.png'


class header extends Component {
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
      <div>
        <div className="directory">
          <p><a href="#about-me">About Me</a></p>
          <p><a href="#work-title">Portfolio</a></p>
          <p><a href="#footer">Contact</a></p>
          </div>
          {/* <Sticky>
          <div className="logo">
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
      </Sticky> */}
      </div>
    );

  }
}



export default header;







