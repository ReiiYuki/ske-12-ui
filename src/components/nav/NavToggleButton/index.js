import { ButtonContainer } from './styled'
import PropTypes from 'prop-types'
import React from 'react'

const NavToggleButton = ({ onClick, isOpen }) => (
	<ButtonContainer onClick={onClick} isOpen={isOpen}>
		<div />
		<div />
		<div />
	</ButtonContainer>
)

NavToggleButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
}

export default NavToggleButton
