import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'

const NavBar = ({title}) => {
  return (
    <nav className="navbar bg-primary">
      <h2>
        <FaStar/> {title}
      </h2>
    </nav>
  )
}
// IF no props is defined, it will use this default
NavBar.defaultProps={
  title: 'Simple Star Rating System',
};

NavBar.propTypes={
  title: PropTypes.string.isRequired,

};

export default NavBar
