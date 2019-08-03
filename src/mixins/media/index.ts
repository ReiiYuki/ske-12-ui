interface Screen {
	[key: string]: string
}

interface Media {
	[key: string]: string
}

export const screen: Screen = {
	xxs: '345px',
	xs: '576px',
	sm: '768px',
	md: '992px',
	lg: '1200px',
}

const media: Media = Object.keys(screen).reduce((media: Media, size) => {
	media[size] = `max-width: ${screen[size]}`
	return media
}, {})

export default media
