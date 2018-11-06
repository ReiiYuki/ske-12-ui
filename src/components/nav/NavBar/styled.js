import styled, { css } from 'styled-components'

import borders from 'mixins/borders'
import colors from 'mixins/colors'
import media from 'mixins/media'
import shadows from 'mixins/shadows'
import zIndexes from 'mixins/z-index'

function openStyle ({ isOpen }) {
	return (
		isOpen &&
		css`
			transform: translateY(0);
		`
	)
}

export const Nav = styled.div`
	position: fixed;
	max-width: 100%;

	left: 8px;
	right: 8px;
	padding: 0 64px;

	z-index: ${zIndexes.nav};
	background: ${colors.white};
	border-radius: 0 0 ${borders.default} ${borders.default};
	box-shadow: ${shadows.default};
	display: flex;
	justify-content: space-between;

	@media (${media.xs}) {
		padding: 0 40px;
		transition: transform 0.3s ease-in-out;
		transform: translateY(calc(-100% + 64px));
		${openStyle};
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
