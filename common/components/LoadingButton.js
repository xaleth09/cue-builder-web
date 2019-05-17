// react
import React from 'react'

// proptypes
import PropTypes from 'prop-types'

// styled
import styled, { keyframes } from 'styled-components'

// components
import Icon from 'components/Icon'
import Button from 'components/Button'

const LoadingButton = ({
	                       onClick,
	                       primary, loading, disabled,
	                       children: btnText, style, className
                       }) => {
	return (
		<Button
			{...{ disabled, primary, style, className }}
			onClick={!loading && !disabled ? onClick : () => {
			}}
		>
			{loading ?
				<div>
					{btnText}<RotatingIcon lg icon="autorenew"/>
				</div>
				:
				btnText
			}
		</Button>
	)
}

export default LoadingButton

LoadingButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	primary: PropTypes.bool,
	disabled: PropTypes.bool,
	type: PropTypes.string
}

const rotation = keyframes`
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(359deg);
		transform: rotate(359deg);
	}
`

const RotatingIcon = styled(Icon)`
	padding-left: 8px;
	padding-right: 8px;
	animation: ${rotation} 2s infinite linear;
`