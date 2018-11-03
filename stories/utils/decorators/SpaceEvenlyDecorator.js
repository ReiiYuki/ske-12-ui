import React from 'react'
import styled from 'styled-components'

const SpaceEvenlyContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: space-evenly;
	flex-wrap: wrap;
`

const SpaceEvenlyDecorator = storyFn => (
	<SpaceEvenlyContainer>{storyFn()}</SpaceEvenlyContainer>
)

export default SpaceEvenlyDecorator
