// react
import React from 'react'

// proptypes
import PropTypes from 'prop-types'

// styled
import styled from 'styled-components'

const LinkButton = ({ onClick, children: btnText, style, className }) => {
	return (
		<Btn {...{ onClick, style, className }}>
			{btnText}
		</Btn>
	)
}

export default LinkButton

LinkButton.propTypes = {
	onClick: PropTypes.func.isRequired
}

const Btn = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	background: transparent;
	border: 0;
	padding: 0;
	cursor: pointer;
	color: ${props => props.theme.colors.linkText};
	
	:focus {
		outline: none;
	}
`
