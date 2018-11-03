import { fontFamilies, fontSizes } from 'mixins/typography'

import colors from 'mixins/colors'
import { css } from 'styled-components'

export default css`
	body {
		color: ${colors.black};
		font-family: ${fontFamilies.default};
		font-size: ${fontSizes.default};
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	button,
	a {
		font-family: ${fontFamilies.highlight};
	}

	a {
		text-decoration: none;
		color: ${colors.red};
		font-size: ${fontSizes.link};
		&:hover {
			text-decoration: none;
			color: ${colors.red100};
		}
		&:hover {
			text-decoration: none;
			color: ${colors.red200};
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	button,
	a,
	p {
		margin: 0;
	}
`
