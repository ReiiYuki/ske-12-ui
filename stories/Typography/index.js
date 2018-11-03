import baseStory from 'stories/utils/baseStory'

baseStory('Typography', module)
	.addWithJSX('Head', require('./Head').default)
	.addWithJSX('Link', require('./Link').default)
	.addWithJSX('Text', require('./Text').default)
	.addWithJSX('Font Sizes', require('./FontSizes').default)
	.addWithJSX('Font Families', require('./FontFamilies').default)
