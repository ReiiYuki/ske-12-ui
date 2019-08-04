import { Color } from './utils'
import React from 'react'
import colors from 'mixins/colors'

const BaseColor = () => (
	<>
		<Color color={colors.white} isInverse>
			white
		</Color>
		<Color color={colors.black}>black</Color>
		<Color color={colors.red50}>red50</Color>
		<Color color={colors.red}>red</Color>
		<Color color={colors.red100}>red100</Color>
		<Color color={colors.red200}>red200</Color>
	</>
)

export default BaseColor
