import CoreStyle from 'core'
import React from 'react'

const CoreDecorator = storyFn => <CoreStyle>{storyFn()}</CoreStyle>

export default CoreDecorator
