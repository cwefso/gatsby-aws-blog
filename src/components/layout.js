import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from '../utils/typography'

const Layout = ({ location, title, children, isDashboard }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
    {!isDashboard && (
      <div
        style={{
          position: `fixed`,
          top: `8px`,
          right: `16px`,
        }}
      >
        <Link to="/dashboard">Dashboard</Link>
      </div>
    )}
    {header}
    {children}
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
