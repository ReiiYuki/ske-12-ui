import SpaceEvenlyDecorator from 'stories/utils/decorators/SpaceEvenlyDecorator'
import baseStory from 'stories/utils/baseStory'

baseStory('Button')
	.addDecorator(SpaceEvenlyDecorator)
	.add('Default Button', require('./DefaultButton').default)
	.add('Facebook Button', require('./Facebook').default)
	.add('Custom Button', require('./CustomButton').default)
