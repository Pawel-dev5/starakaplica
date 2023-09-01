import { transparentize, darken } from 'polished';

const ThemeDefault = () => {
	const theme = {
		white: '#fff',
		black: 'hsl(0, 0%, 0%)',
		red: '#ff0000',

		grey100: 'hsl(0, 0%, 96%)',
		grey200: 'hsl(0, 0%, 90%)',
		grey300: 'hsl(0, 0%, 80%)',
		grey400: 'hsl(0, 0%, 70%)',
		grey500: 'hsl(0, 0%, 60%)',
		grey600: 'hsl(0, 0%, 50%)',
		grey700: 'hsl(0, 0%, 40%)',
		grey800: 'hsl(0, 0%, 30%)',
		grey900: 'hsl(0, 0%, 20%)',
		grey1000: 'hsl(0, 0%, 10%)',

		shadow: `
            -webkit-box-shadow: 0px 8px 12px -3px rgb(0 0 0 / 80%), 0px 0px 2px 0 rgb(0 0 0 / 15%);
            box-shadow: 0px 8px 12px -3px rgb(0 0 0 / 80%), 0px 0px 2px 0 rgb(0 0 0 / 15%);
        `,

		overlay: `
        background-color: #000000;
        opacity: 0.4;
        * {
          opacity: 1;
        }
        `,

		light: 400,
		semiBold: 500,
		bold: 600,

		breakpoints: {
			xs: '0',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px',
		},
	};

	theme.transparentize = ({ amount, color }) => transparentize(amount ?? 0.2, color ?? 'black');
	theme.darken = ({ amount, color }) => darken(amount ?? 0.2, color ?? 'black');

	return theme;
};

export default ThemeDefault;
