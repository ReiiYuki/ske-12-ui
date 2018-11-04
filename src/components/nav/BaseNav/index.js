import borders from 'mixins/borders'
import colors from 'mixins/colors'
import media from 'mixins/media'
import shadows from 'mixins/shadows'
import styled from 'styled-components'
import zIndexes from 'mixins/z-index'

const BaseNav = styled.div`
	margin: 0 8px;
	padding: 0 64px;
	max-width: 100%;
	z-index: ${zIndexes.nav};
	background: ${colors.white};
	border-radius: 0 0 ${borders.default} ${borders.default};
	box-shadow: ${shadows.default};
	display: flex;
	justify-content: space-between;
	${media.sm`
		padding: 0 40px;
		flex-direction: column-reverse;
		justify-content: center;
	`};
`

export default BaseNav
