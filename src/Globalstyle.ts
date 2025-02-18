import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

import MontserratBoldttf from './assets/fonts/Montserrat-Bold.ttf';
import MontserratBoldwoff from './assets/fonts/Montserrat-Bold.woff';
import MontserratBoldwoff2 from './assets/fonts/Montserrat-Bold.woff2';
import MontserratMediumttf from './assets/fonts/Montserrat-Medium.ttf';
import MontserratMediumwoff from './assets/fonts/Montserrat-Medium.woff';
import MontserratMediumwoff2 from './assets/fonts/Montserrat-Medium.woff2';
import MontserratRegularttf from './assets/fonts/Montserrat-Regular.ttf';
import MontserratRegularwoff from './assets/fonts/Montserrat-Regular.woff';
import MontserratRegularwoff2 from './assets/fonts/Montserrat-Regular.woff2';
import MontserratSemiBoldttf from './assets/fonts/Montserrat-SemiBold.ttf';
import MontserratSemiBoldwoff from './assets/fonts/Montserrat-SemiBold.woff';
import MontserratSemiBoldwoff2 from './assets/fonts/Montserrat-SemiBold.woff2';

export function fontFace(
  name: string,
  srcwoff2: string,
  srcwoff: string,
  srcttf: string,
  fontWeight = 400,
  fontStyle = 'normal'
) {
  return `
      @font-face{
          font-family: ${name};
          src: url(${srcwoff2}) format('woff2'),
					url(${srcwoff}) format('woff'),
					url(${srcttf}) format("truetype");
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}

export const GlobalStyle = createGlobalStyle`
	${fontFace('Montserrat', MontserratRegularwoff2, MontserratRegularwoff, MontserratRegularttf)};
	${fontFace('Montserrat', MontserratMediumwoff2, MontserratMediumwoff, MontserratMediumttf, 500)}
	${fontFace('Montserrat', MontserratSemiBoldwoff2, MontserratSemiBoldwoff, MontserratSemiBoldttf, 600)};
	${fontFace('Montserrat', MontserratBoldwoff2, MontserratBoldwoff, MontserratBoldttf, 700)};

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		font-family: 'Montserrat';
		font-feature-settings:
    'clig' off,
    'liga' off;
		font-size: 24px;
		font-style: normal;
		letter-spacing: normal;
		font-weight: 400;
		margin: 0;
		background-color: ${({ theme }) => theme.backgroundWhite};
		color: ${({ theme }) => theme.colorBlack};
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin-top: 0;
		margin-bottom: 0;
	}

	a {
  	color: currentColor;
  	text-decoration: none;
	}

	ul, ol {
		margin: 0;
		padding: 0;
		text-decoration: none;
		list-style: none;
	}

	img {
		display: block;		
		height: auto;
		max-width:100%;
	}

	input,
	button,
	label {
		display: block;
	}

	button {
		border: none;
		background-color: transparent;
  	cursor: pointer;
		padding: 0;
	}

	svg {
		display: block;
		margin: 0;
		padding: 0;
	}
`;
