// react
import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux/index'

// proptypes
import PropTypes from 'prop-types'

// styled
import styled from 'styled-components'

// components
import CuePiece from 'components/Cue/CuePiece'

class WrapSection extends Component {

	render () {
		const { rings, wrap } = this.props
		return (
			<Wrapper>
				<Ring color='darkest' imageURL={rings.wrap.imageURL}/>
				<Wrap imageURL={wrap.imageURL}/>
				<Ring color='darkest' imageURL={rings.sleeve.imageURL}/>
			</Wrapper>
		)
	}
}

export default WrapSection

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 72fr 3fr;
	height: 4rem;
	width: 100%;
`

const Wrap = styled(CuePiece)`
`

const Ring = styled(CuePiece)`
`