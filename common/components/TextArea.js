// react
import React, { useState } from 'react'

// styled
import styled from 'styled-components'

const TextArea = ({ disabled, onChange, ...props }) => {
	const [value, setValue] = useState('')
	const [rows, setRows] = useState(1)
	const [minRows, setMinRows] = useState(1)
	const [maxRows, setMaxRows] = useState(10)

	if (disabled && value !== '') {
		setValue('')
	}

	const handleChange = (event) => {
		const textareaLineHeight = 24

		const previousRows = event.target.rows
		event.target.rows = minRows // reset number of rows in textarea

		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight)

		if (currentRows === previousRows) {
			event.target.rows = currentRows
		}

		if (currentRows >= maxRows) {
			event.target.rows = maxRows
			event.target.scrollTop = event.target.scrollHeight
		}

		setValue(event.target.value)
		setRows(currentRows < maxRows ? currentRows : maxRows)
	}

	return (
		<Area
			disabled={disabled}
			{...props}
			rows={rows}
			value={value}
			onChange={(e) => {
				handleChange(e)
				onChange && onChange(e)
			}}
		/>
	)
}

const Area = styled.textarea`
	box-sizing: border-box;
	width: 100%;
	padding: .25rem 2rem .25rem .75rem;
	line-height: 24px;
	font-size: .85rem;
	border: .5px solid ${props => props.theme.colors.disabledText};
	border-radius: ${props => props.theme.sizes.inputBorderRadius};
	caret-color: ${props => props.theme.colors.primary};
	resize: none;
	
	${props => props.disabled && `
		background-color: ${props.theme.colors.window};
		border-color: ${props => props.theme.colors.muted};
		
		::placeholder {
			color: ${props.theme.colors.muted};
		}
		
		:hover {
			cursor: not-allowed;
		}
	`}
	
	:focus{
		outline: none;
	}
`

export default TextArea