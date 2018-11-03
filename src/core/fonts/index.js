import { css } from 'styled-components'

export default css`
	@font-face {
		font-family: 'Kanit';
		src: url(${require('core/fonts/Kanit/Kanit-Medium.ttf')});
		font-weight: bold;
	}
	@font-face {
		font-family: 'Kanit';
		src: url(${require('core/fonts/Kanit/Kanit-Regular.ttf')});
		font-weight: normal;
	}
	@font-face {
		font-family: 'Kanit';
		src: url(${require('core/fonts/Kanit/Kanit-Light.ttf')});
		font-weight: lighter;
	}

	@font-face {
		font-family: 'TH Saraban';
		src: url(${require('core/fonts/THSaraban/THSarabunNew.ttf')});
		font-weight: normal;
	}

	@font-face {
		font-family: 'TH Saraban';
		src: url(${require('core/fonts/THSaraban/THSarabunNew-Bold.ttf')});
		font-weight: bold;
	}
`
