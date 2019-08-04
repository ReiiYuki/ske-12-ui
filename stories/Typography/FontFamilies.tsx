import styled, { css } from 'styled-components'

import React from 'react'
import { fontFamilies } from 'mixins/typography'

interface Props {
	family: string
}

function applyFontFamily ({ family }: Props) {
	return css`
	font-family: ${family};
	`
}

const Text = styled.p`
	${applyFontFamily};
`

export default function FontFamilies() {
	return (
		<>
			<Text family={fontFamilies.highlight}>Highlight เน้นข้อความ</Text>
			<Text family={fontFamilies.default}>Default ทั่วไป</Text>
		</>
	)
}
