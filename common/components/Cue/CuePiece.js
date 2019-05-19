// react
import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// proptypes
import PropTypes from 'prop-types'

// styled
import styled from 'styled-components'

// components

const CuePiece = ({ color, imageURL, children }) => {
	console.log(imageURL)
	return (
		<Piece {...{ color, imageURL }}>
			{children}
		</Piece>
	)
}

export default CuePiece

const Piece = styled.div`
	height: 100%;
	width: 100%;
	background-size: cover;
	background-color: ${props => props.color && props.theme.colors[props.color]};
	background-image: url(${props => props.imageURL || ''});
`