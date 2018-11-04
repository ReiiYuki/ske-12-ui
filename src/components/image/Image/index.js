import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import borderRadius from 'mixins/borderRadius'

function applyImageStyles ({ radius }) {
	return css`
		border-radius: ${radius};
	`
}

const StyledImage = styled.img`
	${applyImageStyles};
`

const Image = ({ src, alt, radius, width, height }) => (
	<StyledImage
		src={src}
		alt={alt}
		radius={radius}
		height={height}
		width={width}
	/>
)

Image.defaultProps = {
	radius: borderRadius.image,
	height: 142,
	width: 142,
}

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	radius: PropTypes.string,
}

export default Image
