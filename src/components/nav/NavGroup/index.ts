import media from 'mixins/media'
import styled from 'styled-components'

const NavGroup = styled.div`
	display: flex;
	align-items: center;
	> * {
		margin: 0 16px;
	}
	@media (${media.xs}) {
		flex-direction: column-reverse;
		justify-content: center;
		width: 100%;
		> * {
			width: 100%;
			margin: 0;
		}
	}
`

export default NavGroup
