import { css } from 'styled-components'

export const screen = {
	xxs: '345px',
	xs: '576px',
	sm: '768px',
	md: '992px',
	lg: '1200px',
}

export default Object.keys(screen).reduce((media, size) => {
	media[size] = (...args) => css`
		@media (max-width: ${screen[size]}px) {
			css(...args)};
		}
	`
	return media
}, {})
