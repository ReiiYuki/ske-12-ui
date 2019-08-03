import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import fontStyles from 'core/fonts'
import typograpgy from 'core/typography'

export const BaseSheet = createGlobalStyle`
	${fontStyles}
	${typograpgy}
	body {
		margin: 0;
	}
`

const CoreStyle = ({ children }: { children: React.ReactElement<any> }) => (
	<Fragment>
		<BaseSheet />
		{children}
	</Fragment>
)

CoreStyle.propTypes = {
	children: PropTypes.node.isRequired,
}

export default CoreStyle
