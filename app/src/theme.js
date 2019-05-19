const colors = {
	// Brand Colors
	primary: '#308CD0',
	secondary: '#33658A',
	alternate1: '#8C9FA4',
	alternate2: '#C0D6DF',
	info: '#815AB4',
	success: '#439A86',
	accent: '#42F2F7',
	accent2: '#5DD9C1',
	accent3: '#46ACC2',
	warning: '#EF6462',

	// Brand Neutrals
	white: 'white',
	light: '#F6F4F3',
	disabled: '#605F5E',
	mid: '#666666',
	dark: '#2C2C2C',
	darker: '#222222',
	darkest: '#151414',

	// Transparent
	transparent: 'transparent',

	// Gradients
	lightStopMid: 'rgba(246, 246, 246, 0.5)',
	lightStopEnd: 'rgba(246, 246, 246, 0)',
	darkStopMid: 'rgba(44, 44, 44, 0.5)',
	darkStopEnd: 'rgba(44, 44, 44, 0)',

	linkText: '#3274af',
	mostText: '#565656',
	disabledText: '#A4A4A4',
	muted: '#ADBDCE',
	window: '#F9F9F9',

	primaryButtonBorder: '#4C6B90',
	secondaryButtonBorder: '#DDDDDD',

	primaryButton: `linear-gradient(to bottom, #7397C0 0%, #6487b0 33%, #5477A0 100%)`,
	secondaryButton: `linear-gradient(to bottom, #FFFFFF 0%, #F3F3F3 33%, #E6E6E6 100%)`,
	disabledButton: 'linear-gradient(to bottom, #C1CFDB 0%, #B7C6D5 33%, #ADBDCE 100%)',

	disabledButttonText: '#8E9FAF',
	disabledButtonBorder: '#8E9FAF',

	primaryBoxShadow: `0 .125rem .125rem rgba(0,0,0,0.125)`
}

const sizes = {
	borderRadius: '.125rem',
	inputBorderRadius: '.125rem'
}

export const theme = {
	colors: colors,
	sizes: sizes
}