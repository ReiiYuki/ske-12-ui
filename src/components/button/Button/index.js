import { buttonStyle, defaultButtonColorSet } from 'mixins/button'
import styled, { css } from 'styled-components'

import PropTypes from 'prop-types'
import borders from 'mixins/borders'

function applyButtonStyle ({ colorSet, border }) {
	return css`
		${buttonStyle(colorSet, border)};
	`
}

const Button = styled.button`
	${applyButtonStyle};
`

Button.defaultProps = {
	colorSet: defaultButtonColorSet,
	border: borders.button,
}

Button.propTypes = {
	border: PropTypes.string,
	colorSet: PropTypes.shape({
		textColor: PropTypes.string,
		buttonColors: PropTypes.shape({
			disable: PropTypes.string,
			normal: PropTypes.string,
			hover: PropTypes.string,
			press: PropTypes.string,
		}),
	}),
	children: PropTypes.node.isRequired,
}

export default Button
