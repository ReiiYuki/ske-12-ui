import baseStory from 'stories/utils/baseStory'

baseStory('Color', module)
	.addWithJSX('Base Colors', require('./BaseColor').default)
	.addWithJSX('Grey Colors', require('./Grey').default)
	.addWithJSX('Facebook Colors', require('./Facebook').default)
