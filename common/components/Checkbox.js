// react
import React, { useState, useEffect } from 'react'

// proptypes
import PropTypes from 'prop-types'

// styled
import styled from 'styled-components'

//components
import Col from 'components/Col'
import Icon from './Icon'

export const CHECKBOX_STATE = {
	UNCHECKED: 0,
	CHECKED: 1
}

const Checkbox = ({ checked = CHECKBOX_STATE.UNCHECKED, onClick, style, className }) => {
	let [checkedState, setCheckedState] = useState(checked)

	useEffect(() => {
		setCheckedState(checked)
	}, [checked])

	let icon = ''
	if (checkedState) {
		icon = 'done'
	}

// TODO: put back in
//   <HiddenCheckBox type="checkbox"
//                  {...{ checked }}
// 	 />
	return (
		<Wrapper {...{ style, className }}
		         checked={checkedState}
		         onClick={e => {
			         e.stopPropagation()
			         let newState
			         switch (checkedState) {
				         case CHECKBOX_STATE.UNCHECKED:
					         newState = CHECKBOX_STATE.CHECKED
					         break
				         case CHECKBOX_STATE.PARTIAL:
				         case CHECKBOX_STATE.CHECKED:
					         newState = CHECKBOX_STATE.UNCHECKED
					         break
			         }
			         setCheckedState(newState)
			         onClick(newState)
		         }}
		>
			<Box centered checked={checkedState}>
				<Icon {...{ icon }}/>
			</Box>
		</Wrapper>
	)
}

export default Checkbox

Checkbox.propTypes = {
	checked: PropTypes.oneOf([CHECKBOX_STATE.UNCHECKED, CHECKBOX_STATE.CHECKED]).isRequired,
	onClick: PropTypes.func.isRequired
}

const Wrapper = styled.div`
	height: 1rem;
	width: 1rem;
	border-radius:  ${props => props.theme.sizes.inputBorderRadius};
	background-color: ${props => props.checked === CHECKBOX_STATE.UNCHECKED ? props.theme.colors.light : props.theme.colors.primary};
	border: 1px solid ${props => props.checked === CHECKBOX_STATE.UNCHECKED ? props.theme.colors.disabledText : props.theme.colors.primary};
`

const HiddenCheckBox = styled.input`
	display: block;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(1px);
    white-space: nowrap;
    position: absolute;
`

const Box = styled(Col)`
	box-sizing: border-box;
	height: 100%;
	width: 100%;
	padding: .25rem;
	cursor: pointer;
	${props => props.checked === CHECKBOX_STATE.UNCHECKED ? 'span{display:hidden;}' : ''}
	
	:hover{
		background-color: ${props => props.checked === CHECKBOX_STATE.UNCHECKED ? props.theme.colors.alternate1 : props.theme.colors.secondary};
	}
`