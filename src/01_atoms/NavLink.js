/*
 * Navigation Link Component
 *
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 * Gatsby Active Link: https://www.gatsbyjs.org/docs/gatsby-link/#add-custom-styles-for-the-currently-active-link
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

/* Same pattern used within `MenuMobile` to customize `MenuLink` to work as `NavLink` component */
const isActive = ({ isCurrent }) => {
    return { className: isCurrent ? "active" : "navlink" }
}
const NavigationLink = props => <Link getProps={isActive} {...props} />

const NavLink = props => {
    return (
        <>
            <NavigationLink to={props.to}>{props.text}</NavigationLink>
        </>
    )
}

NavLink.defaultProps = {
    to: "/",
    text: "Missing Text",
}

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default NavLink
