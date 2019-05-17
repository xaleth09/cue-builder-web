const colors = {
	// Brand Colors
	primary: '#6ABFF0',
	secondary: '#007DC3',
	alternate1: '#07BFF1',
	alternate2: '#2CAACA',
	info: '#815AB4',
	success: '#35BBAA',
	accent: '#FFA601',
	warning: '#EF6462',

	// Brand Neutrals
	white: 'white',
	light: '#F6F6F6',
	disabled: '#DDDDDD',
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

	// New Colors
	header: '#5aa2de',
	tableHeaderText: '#3d89d4',
	primaryTableBg: '#eff5fa',
	secondaryTableBg: '#4c6c91',
	buttonIcon: '#548bc5',
	activeIcon: '#5599f5',
	linkText: '#3274af',
	mostText: '#565656',
	disabledBadge: '#666666',
	disabledText: '#A4A4A4',
	muted: '#ADBDCE',
	window: '#F9F9F9',

	tableBodyStart: 'rgba(255, 255, 255, 1)',
	tableBodyMid: 'rgba(255, 255, 255, .5)',
	tableBodyEnd: 'rgba(255, 255, 255, 0)',

	tableHeaderStart: 'rgba(239, 245, 250, 1)',
	tableHeaderMid: 'rgba(239, 245, 250, 0.5)',
	tableHeaderEnd: 'rgba(239, 245, 250, 0)',

	primaryButtonBorder: '#4C6B90',

	primaryButtonStart: '#7397C0',
	primaryButtonMid: '#6487B0',
	primaryButtonEnd: '#5477A0',

	secondaryButtonBorder: '#DDDDDD',

	secondaryButtonStart: '#FFFFFF',
	secondaryButtonMid: '#F3F3F3',
	secondaryButtonEnd: '#E6E6E6',

	primaryButton: `linear-gradient(to bottom, #7397C0 0%, #6487b0 33%, #5477A0 100%)`,
	secondaryButton: `linear-gradient(to bottom, #FFFFFF 0%, #F3F3F3 33%, #E6E6E6 100%)`,
	disabledButton: 'linear-gradient(to bottom, #C1CFDB 0%, #B7C6D5 33%, #ADBDCE 100%)',

	disabledButttonText: '#8E9FAF',
	disabledButtonBorder: '#8E9FAF',

	primaryBoxShadow: `0 .125rem .125rem rgba(0,0,0,0.125)`
}

const scrims = {
	// Scrims
	tabScrim: 'linear-gradient(to left, rgba(90,162,222,1), rgba(90,162,222,0))',
	tableBodyLeft: `linear-gradient(to right, ${colors.tableBodyStart} 0%, ${colors.tableBodyMid} 33%, ${colors.tableBodyEnd} 100%)`,
	tableBodyRight: `linear-gradient(to left, ${colors.tableBodyStart} 0%, ${colors.tableBodyMid} 33%, ${colors.tableBodyEnd} 100%)`,
	tableHeaderLeft: `linear-gradient(to right, ${colors.tableHeaderStart} 0%, ${colors.tableHeaderMid} 33%, ${colors.tableHeaderEnd} 100%)`,
	tableHeaderRight: `linear-gradient(to left, ${colors.tableHeaderStart} 0%, ${colors.tableHeaderMid} 33%, ${colors.tableHeaderEnd} 100%)`

}

const sizes = {
	borderRadius: '.125rem',
	inputBorderRadius: '.125rem'
}

export const theme = {
	colors: colors,
	scrims: scrims,
	sizes: sizes
}