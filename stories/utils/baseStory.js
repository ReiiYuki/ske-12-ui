import CoreDecorator from 'stories/utils/decorators/CoreDecorator'
import { storiesOf } from '@storybook/react'

export default function baseStory (storyname) {
	const story = storiesOf(storyname, module).addDecorator(CoreDecorator)
	return story
}
