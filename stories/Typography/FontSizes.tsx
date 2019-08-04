import styled, { css } from 'styled-components'

import React from 'react'
import { fontSizes } from 'mixins/typography'

interface Props {
	size: string
}

function applyFontSize({ size }: Props) {
	return css`
	font-size: ${size};
	`
}

const Text = styled.p`
	${applyFontSize};
`

export default function FontSizes() {
	return (
		<>
			<Text size={fontSizes.title}>Title หลัก</Text>
			<Text size={fontSizes.header}>Header หัวเรื่อง</Text>
			<Text size={fontSizes.header2}>Header 2 หัวเรื่อง 2</Text>
			<Text size={fontSizes.default}>Default ทั่วไป</Text>
			<Text size={fontSizes.note}>Note หมายเหตุ</Text>
			<Text size={fontSizes.footer}>Footer ปิดท้าย</Text>
		</>
	)
}
