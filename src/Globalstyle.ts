import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		font-family: 'Roboto Flex';
		font-size: 18px;
		line-height: normal;
		letter-spacing: normal;
		font-style: normal;
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
