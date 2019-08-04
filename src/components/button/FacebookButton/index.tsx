import Button from 'components/button/Button'
import React from 'react'
import { facebookButtonColorSet } from 'mixins/facebook'

interface Props {
	children: React.ReactNode
	disabled?: boolean
}

const FacebookButton = (props: Props) => (
	<Button colorSet={facebookButtonColorSet} {...props} />
)

export default FacebookButton
