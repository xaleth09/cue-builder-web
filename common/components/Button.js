// react
import React from 'react'

// proptypes
import PropTypes from 'prop-types'
import themeColorType from 'types/themeColorType'

// styled
import styled from 'styled-components'

const Button = ({
	                onClick,
	                primary = false,
	                disabled = false,
	                bgColor, color,
	                children: btnText, style, className
                }) => {

	let borderColor = 'secondaryButtonBorder'

	if (primary) {
		bgColor = 'primaryButton'
		color = 'light'
		borderColor = 'primaryButtonBorder'
	}

	if (disabled) {
		bgColor = 'disabledButton'
		color = 'disabledButtonText'
		borderColor = 'disabledButtonBorder'
	}

	if ((!primary || !disabled) && !bgColor) {
		bgColor = 'secondaryButton'
	}

	if ((!primary || !disabled) && !color) {
		color = 'mostText'
	}

	return (
		<Btn type='button'
		     {...{
			     bgColor, color, borderColor,
			     disabled, style, className
		     }}
		     onClick={() => {
			     !disabled && onClick()
		     }}
		>
			{btnText}
		</Btn>
	)
}

export default Button

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	primary: PropTypes.bool,
	disabled: PropTypes.bool,
	bgColor: themeColorType,
	color: themeColorType
}

const Btn = styled.button`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	min-height: 2rem;
	padding: 0.5rem 1rem;
	font-size: .8rem;
	white-space: nowrap;
	border: 1px solid ${props => props.theme.colors[props.borderColor]};
	border-radius: ${props => props.theme.sizes.borderRadius};
	color: ${props => props.theme.colors[props.color]};
	background: ${props => props.theme.colors[props.bgColor]};
	cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`
