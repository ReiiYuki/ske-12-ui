import Button from 'components/Button'
import React from 'react'

const customColorSet = {
	textColor: '#000000',
	buttonColors: {
		disable: '#E6EE9C',
		normal: '#D4E157',
		hover: '#AFB42B',
		press: '#827717',
	},
}

const CustomButton = () => (
	<>
		<Button border="8px">Custom Border Button</Button>
		<Button colorSet={customColorSet}>Custom Color Button</Button>
		<Button colorSet={customColorSet} disabled>
			Disabled Custom Color Button
		</Button>
	</>
)

export default CustomButton
