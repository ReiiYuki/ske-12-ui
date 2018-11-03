import Button from 'components/button/Button'
import PropTypes from 'prop-types'
import React from 'react'
import { facebookButtonColorSet } from 'mixins/facebook'

const FacebookButton = props => (
	<Button colorSet={facebookButtonColorSet} {...props} />
)

FacebookButton.propTypes = {
	children: PropTypes.node.isRequired,
}

export default FacebookButton
