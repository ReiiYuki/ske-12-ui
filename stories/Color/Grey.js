import { Color } from './utils'
import React from 'react'
import colors from 'mixins/colors'

const Grey = () => (
	<>
		<Color color={colors.grey50}>grey50</Color>
		<Color color={colors.grey}>grey</Color>
		<Color color={colors.grey100}>grey100</Color>
		<Color color={colors.grey200}>grey200</Color>
	</>
)

export default Grey
