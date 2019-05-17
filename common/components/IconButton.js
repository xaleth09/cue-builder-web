// react
import React from 'react'

// proptypes
import PropTypes from 'prop-types'
import themeColorType from 'types/themeColorType'

// styled
import styled from 'styled-components'

// components
import Icon from 'components/Icon'

const IconButton = ({
	                    onClick,
	                    color = 'buttonIcon', icon = 'add_circle',
	                    iconRight = false, lg = false, xl = false,
	                    children, style, className
                    }) => {
	return iconRight ?
		<Btn {...{ onClick, color, style, className }}>
			{children && (
				<span>{children}&ensp;</span>
			)}
			<Icon {...{ color, lg, xl, icon }}/>
		</Btn>
		:
		<Btn {...{ onClick, color, style, className }}>
			<Icon {...{ color, lg, xl, icon }}/>
			{children && (
				<span>&ensp;{children}</span>
			)}
		</Btn>

}

export default IconButton

IconButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	icon: PropTypes.string.isRequired,
	color: themeColorType,
	iconRight: PropTypes.bool,
	lg: PropTypes.bool

}

const Btn = styled.button`
	box-sizing: border-box;
	background: transparent;
	white-space: nowrap;
	color: ${props => props.theme.colors[props.color]};
	border: 0;
	margin: 0;
	padding:0;
	cursor: pointer;
	
	:focus{
			outline: none;
	}
		
	*{
		display: inline-block;
	}
`
