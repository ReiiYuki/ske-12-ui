import { buttonStyle, defaultButtonColorSet } from 'mixins/button'
import styled, { css } from 'styled-components'

import { borders } from 'mixins/borders'
import { ColorSet } from 'types'

interface Props {
	colorSet?: ColorSet
	border?: string
	children: React.ReactNode
	disabled?: boolean
}

function applyButtonStyle ({ colorSet = defaultButtonColorSet, border = borders.button }: Props) {
	return css`
		${buttonStyle(colorSet, border)};
	`
}

const Button = styled.button`
	${applyButtonStyle};
`

export default Button