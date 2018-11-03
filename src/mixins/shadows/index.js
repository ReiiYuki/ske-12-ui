import colors from 'mixins/colors'
import { css } from 'styled-components'

function getShadow (position) {
	return `${position} ${colors.shadow}`
}

const shadows = {
	disable: 0,
	default: getShadow('1px 2px 4px'),
	hover: getShadow('2px 4px 4px'),
	press: getShadow('1px 1px 4px'),
	modal: getShadow('1px 0px 4px'),
}

export default shadows

export const clickableShadowStyle = css`
	transition: all 0.2s ease-in-out;
	box-shadow: ${shadows.default};
	&:hover:enabled {
		box-shadow: ${shadows.hover};
	}
	&:active:enabled {
		box-shadow: ${shadows.press};
	}
	&:disabled {
		box-shadow: ${shadows.disable};
	}
`
