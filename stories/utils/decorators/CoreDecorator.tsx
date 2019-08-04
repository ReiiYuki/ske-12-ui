import React from 'react'
import CoreStyle from 'src/core'
import { StoryDecorator, RenderFunction } from '@storybook/react'

const CoreDecorator: StoryDecorator = (storyFn: RenderFunction) => (
	<CoreStyle>
		<>
			{storyFn()}
		</>
	</CoreStyle>
)

export default CoreDecorator
