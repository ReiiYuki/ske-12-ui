import styled, { css } from 'styled-components'

import colors from 'mixins/colors'
import media from 'mixins/media'

const openStyle = css`
	> *:nth-child(2) {
		top: 50%;
	}
	> *:nth-child(3) {
		top: 100%;
	}
`

const closeStyle = css`
	> * {
		top: 0;
	}
`

function applyStyle ({ isOpen }: { isOpen: boolean }) {
	return isOpen ? closeStyle : openStyle
}

export const ButtonContainer = styled.div`
	display: none;
	@media (${media.xs}) {
		display: block;
		width: 24px;
		height: 20px;

		left: 32px;
		bottom: 24px;

		position: absolute;
		cursor: pointer;

		> * {
			background: ${colors.red};
			width: 100%;
			height: 4px;
			position: absolute;
			transition: top 0.3s ease-in-out;
		}

		${applyStyle};
	}
`
