import { ButtonContainer } from './styled'
import React from 'react'

interface Props {
	onClick: () => void
	isOpen: boolean
}

const NavToggleButton = ({ onClick, isOpen }: Props) => (
	<ButtonContainer onClick={onClick} isOpen={isOpen}>
		<div />
		<div />
		<div />
	</ButtonContainer>
)

export default NavToggleButton
