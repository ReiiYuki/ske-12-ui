import React from 'react'
import styled from 'styled-components'
import { RenderFunction, StoryDecorator } from '@storybook/react'

const SpaceEvenlyContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: space-evenly;
	flex-wrap: wrap;
`

const SpaceEvenlyDecorator: StoryDecorator = (storyFn: RenderFunction) => (
	<SpaceEvenlyContainer>
		{storyFn()}
	</SpaceEvenlyContainer>
)

export default SpaceEvenlyDecorator
