import { Color } from './utils'
import React from 'react'
import colors from 'mixins/colors'

const Facebook = () => (
	<>
		<Color color={colors.fb50}>fb50</Color>
		<Color color={colors.fb}>fb</Color>
		<Color color={colors.fb100}>fb100</Color>
		<Color color={colors.fb200}>fb200</Color>
	</>
)

export default Facebook
