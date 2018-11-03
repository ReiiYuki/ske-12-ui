import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import fontStyles from 'core/fonts'
import typograpgy from 'core/typography'

export const BaseSheet = createGlobalStyle`
	${fontStyles}
	${typograpgy}
`

const CoreStyle = ({ children }) => (
	<Fragment>
		<BaseSheet />
		{children}
	</Fragment>
)

CoreStyle.propTypes = {
	children: PropTypes.node,
}

export default CoreStyle
