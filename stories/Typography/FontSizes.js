import styled, { css } from 'styled-components'

import React from 'react'
import { fontSizes } from 'mixins/typography'

function applyFontSize ({ size }) {
	return css`
		font-size: ${size};
	`
}

const Text = styled.p`
	${applyFontSize};
`

const FontSizes = () => (
	<>
		<Text size={fontSizes.title}>Title หลัก</Text>
		<Text size={fontSizes.header}>Header หัวเรื่อง</Text>
		<Text size={fontSizes.header2}>Header 2 หัวเรื่อง 2</Text>
		<Text size={fontSizes.default}>Default ทั่วไป</Text>
		<Text size={fontSizes.note}>Note หมายเหตุ</Text>
		<Text size={fontSizes.footer}>Footer ปิดท้าย</Text>
	</>
)

export default FontSizes
