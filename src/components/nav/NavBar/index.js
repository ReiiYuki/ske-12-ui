import React, { PureComponent } from 'react'

import { Nav } from './styled'
import PropTypes from 'prop-types'

class NavBar extends PureComponent {
	state = {
		isOpen: false,
	}

	toggle = () => {
		const { isOpen } = this.state
		this.setState({ isOpen: !isOpen })
	}

	render () {
		const { children } = this.props
		const { isOpen } = this.state
		return (
			<Nav onClick={this.toggle} isOpen={isOpen}>
				{children}
			</Nav>
		)
	}
}

NavBar.propTypes = {
	children: PropTypes.node.isRequired,
}

export default NavBar
