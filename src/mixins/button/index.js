import { clickableShadowStyle } from 'mixins/shadows'
import colors from 'mixins/colors'
import { css } from 'styled-components'

export const defaultButtonColorSet = {
	textColor: colors.white,
	buttonColors: {
		disable: colors.red50,
		normal: colors.red,
		hover: colors.red100,
		press: colors.red200,
	},
}

export function buttonStyle (colorSet, border) {
	const {
		textColor,
		buttonColors: { disable, normal, hover, press },
	} = colorSet
	return css`
		padding: 4px 20px;
		border-radius: ${border};
		color: ${textColor};
		background-color: ${normal};
		border: 1px solid ${normal};
		cursor: pointer;
		outline: 0;
		${clickableShadowStyle};
		&:disabled {
			background-color: ${disable};
			border: 1px solid ${disable};
			cursor: default;
		}
		&:hover:enabled {
			background-color: ${hover};
			border: 1px solid ${hover};
		}
		&:active:enabled {
			background-color: ${press};
			border: 1px solid ${press};
		}
	`
}
