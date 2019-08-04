import baseStory from 'stories/utils/baseStory'

baseStory('Color')
	.add('Base Colors', require('./BaseColor').default)
	.add('Grey Colors', require('./Grey').default)
	.add('Facebook Colors', require('./Facebook').default)
