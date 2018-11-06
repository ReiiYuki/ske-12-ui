import { Nav, NavBody } from './styled'
import React, { PureComponent } from 'react'

import NavToggleButton from 'components/nav/NavToggleButton'
import PropTypes from 'prop-types'

class NavBar extends PureComponent {
	state = {
		isOpen: false,
	}

	toggle = () => {
		const { isOpen } = this.state
		this.setState({ isOpen: !isOpen })
	}

	close = () => {
		this.setState({ isOpen: false })
	}

	render () {
		const { children } = this.props
		const { isOpen } = this.state
		return (
			<Nav isOpen={isOpen}>
				<NavToggleButton onClick={this.toggle} isOpen={isOpen} />
				<NavBody onClick={this.close}>{children}</NavBody>
			</Nav>
		)
	}
}

NavBar.propTypes = {
	children: PropTypes.node.isRequired,
}

export default NavBar
