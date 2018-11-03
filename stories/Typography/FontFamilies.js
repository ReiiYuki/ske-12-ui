import styled, { css } from 'styled-components'

import React from 'react'
import { fontFamilies } from 'mixins/typography'

function applyFontFamily ({ family }) {
	return css`
		font-family: ${family};
	`
}

const Text = styled.p`
	${applyFontFamily};
`

const FontFamilies = () => (
	<>
		<Text family={fontFamilies.highlight}>Highlight เน้นข้อความ</Text>
		<Text family={fontFamilies.default}>Default ทั่วไป</Text>
	</>
)

export default FontFamilies
