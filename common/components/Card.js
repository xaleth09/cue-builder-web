// react
import React from 'react'

// proptypes
import PropTypes from 'prop-types'

// styled
import styled from 'styled-components'

// components
import Col from 'components/Col'

const Card = ({ children, ...props }) => {
	return (
		<StyledCard {...props}>
			{children}
		</StyledCard>
	)
}

export default Card

const StyledCard = styled(Col)`
	padding: 1rem;
	background-color: ${props => props.theme.colors.white};
	box-shadow: ${props => props.theme.colors.primaryBoxShadow};
	border-radius: ${props => props.theme.sizes.borderRadius};
`