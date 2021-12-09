import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const NavBar = ({icon,title}) => {
  return (
    <nav className="navbar bg-primary">
      <h2>
        <i className={icon} alt="github" /> {title}
      </h2>
      <ul>
        <li> <Link to='/'> Main </Link> </li>
        <li> <Link to='/about'> About </Link> </li>
      </ul>
    </nav>
  )
}
// IF no props is defined, it will use this default
NavBar.defaultProps={
  title: 'Github Props',
  icon: 'fab fa-github'
};

NavBar.propTypes={
  title: PropTypes.string.isRequired,

};

export default NavBar
