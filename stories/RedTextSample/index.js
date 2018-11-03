import Sample from 'stories/RedTextSample/Sample'
import VarSample from 'stories/RedTextSample/VarSample'
import baseStory from 'stories/utils/baseStory'

baseStory('RedText', module)
	.add('Sample Text', Sample)
	.add('Variable Sample Text', VarSample)
