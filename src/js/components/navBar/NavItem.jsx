import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../../style/less/componentStyle/navBar/navItem.less'

const NavItem = (props) => (
  <Link
    className='nav-item'
    activeClassName='nav-selected'
    to={props.to}
  >
    <span>{props.name}</span>
  </Link>
)

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default NavItem
