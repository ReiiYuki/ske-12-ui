import { configure, setAddon } from '@storybook/react'

import JSXAddon from 'storybook-addon-jsx'

function loadStories () {
	require('stories')
}

setAddon(JSXAddon)

configure(loadStories, module)
