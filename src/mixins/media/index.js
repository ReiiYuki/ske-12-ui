export const screen = {
	xxs: '345px',
	xs: '576px',
	sm: '768px',
	md: '992px',
	lg: '1200px',
}

const media = Object.keys(screen).reduce((media, size) => {
	media[size] = `max-width: ${screen[size]}`
	return media
}, {})

export default media
