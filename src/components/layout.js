import React from 'react'
import { Link } from 'gatsby'
import header from '../components/Header/header.js';
import Sticky from 'react-stickynode';
import footer from '../components/Footer/footer.js'
import bio from '../components/bio'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === '/frontpage/' || "/frontpage") {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/frontpage'}
          >
            Alacrity: Brisk and Cheeful Readiness
          </Link>
          <Bio />
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/frontpage'}
          >
             Alacrity: Brisk and Cheeful Readiness
          </Link>
        </h3>
      )
    }
    return (
      <div>
      <Sticky>
      <Header />
      </Sticky>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
      <Footer />
      </div>
    )
  }
}

export default Template
