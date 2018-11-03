# SKE 12 UI

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://github.com/storybooks)

## Demo

https://reiiyuki.github.io/ske-12-ui/

## Design

https://www.figma.com/file/YM9lLAGmNJsrrmhCd7eQ0GpN/SKE12?node-id=16%3A2

## Developer Guide

### Command

Development

```
npm start
```

Deploy GH-Pages

```
npm run build:story
git add .
git commit -m "Update Docs"
git subtree push --prefix docs origin gh-pages
```

Build Library

```
npm run build:lib
```

### Write New Components

Write it in `src/components`. If they are the group of components, please categorize it into sub folder in `src/components`.

If you are completely done your job on it, please export it in `src/index.js` as the following example:

```js
export { default as Button } from 'components/button/Button'
```

Note: Please use mixins for develop components, if it doesn't exist in mixins please update mixins for the nice future of this library.

### Write Mixins

Write it in `src/mixins`.

Note: Don't export mixins in `src/index.js`! Because it's already nice, when you call `ske-12-ui/mixins/colors`.

### Write New Story

1. Create the story folder in `stories`.
2. Write `index.js` file with the following template:
  ```js
  import baseStory from 'stories/utils/baseStory'
  import SpaceEvenlyDecorator from 'stories/utils/decorators/SpaceEvenlyDecorator' // If you use decorator

  baseStory('Button', module) // baseStory(name of story)
  	.addDecorator(SpaceEvenlyDecorator) // If you want to wrap all of your sample in something please use decorator
  	.addWithJSX('Default Button', require('./DefaultButton').default) // .addWithJSX(Name of sample, require(sample component).default)
  ```
 3. Write your sample components
 4. Require it in `stories/index.js`
 
