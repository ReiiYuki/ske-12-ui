import SpaceEvenlyDecorator from 'stories/utils/decorators/SpaceEvenlyDecorator'
import baseStory from 'stories/utils/baseStory'

baseStory('Button', module)
	.addDecorator(SpaceEvenlyDecorator)
	.addWithJSX('Default Button', require('./DefaultButton').default)
	.addWithJSX('Facebook Button', require('./Facebook').default)
	.addWithJSX('Custom Button', require('./CustomButton').default)
