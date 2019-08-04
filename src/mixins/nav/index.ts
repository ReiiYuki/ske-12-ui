import { fontFamilies, fontSizes } from 'mixins/typography'

import colors from 'mixins/colors'
import { css } from 'styled-components'

interface Props {
	isActive?: boolean
}

function activeStyle ({ isActive = false }: Props) {
	return (
		isActive &&
		css`
			font-weight: bold;
		`
	)
}

export const navItemLinkStyle = css`
	color: ${colors.grey};
	font-size: ${fontSizes.nav};
	font-family: ${fontFamilies.highlight};
	transition: color 0.2s ease-in-out;
	&:hover {
		color: ${colors.red100};
	}
	&:disabled {
		color: ${colors.grey50};
	}
	${activeStyle};
`

export const navItemStyle = css`
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: center;
`
