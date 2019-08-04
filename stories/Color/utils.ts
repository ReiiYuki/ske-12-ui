import styled, { css } from 'styled-components'

import colors from 'mixins/colors'

interface Props {
	color?: string
	isInverse?: boolean
}

function applyColor ({ color, isInverse = false }: Props) {
	return css`
		background: ${color};
		color: ${isInverse ? colors.black : colors.white};
	`
}

export const Color = styled.div`
	${applyColor} width: 100px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`
