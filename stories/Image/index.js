import baseStory from 'stories/utils/baseStory'

baseStory('Image', module).addWithJSX(
	'Normal Image',
	require('./NormalImage').default,
)
