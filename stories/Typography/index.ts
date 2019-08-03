import baseStory from 'stories/utils/baseStory'

baseStory('Typography')
	.add('Head', require('./Head').default)
	.add('Link', require('./Link').default)
	.add('Text', require('./Text').default)
	.add('Font Sizes', require('./FontSizes').default)
	.add('Font Families', require('./FontFamilies').default)
