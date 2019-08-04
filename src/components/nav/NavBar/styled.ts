import styled, { css } from 'styled-components'

import { borders } from 'mixins/borders'
import colors from 'mixins/colors'
import media from 'mixins/media'
import shadows from 'mixins/shadows'
import zIndexes from 'mixins/z-index'

interface Props {
	isOpen?: boolean
}

function openStyle ({ isOpen = false }: Props) {
	return (
		isOpen &&
		css`
			transform: translateY(0);
		`
	)
}

export const Nav = styled.div`
	position: fixed;

	left: 8px;
	right: 8px;

	z-index: ${zIndexes.nav};
	background: ${colors.white};
	border-radius: 0 0 ${borders.default} ${borders.default};
	box-shadow: ${shadows.default};

	@media (${media.xs}) {
		transition: transform 0.3s ease-in-out;
		transform: translateY(calc(-100% + 64px));
		${openStyle};
	}
`

export const NavBody = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 64px;

	@media (${media.xs}) {
		padding: 0 32px;
		flex-direction: column-reverse;
		align-items: center;
		> div > *:not(:first-child) {
			border-bottom: 0.5px solid ${colors.grey50};
		}
		> div:not(:first-child) > *:first-child {
			border-bottom: 0.5px solid ${colors.grey50};
		}
	}
`
