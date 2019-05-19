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

class ButtCapSection extends Component {

	render () {
		const { sleeve } = this.props
		return (
			<Wrapper>
				<Sleeve imageURL={sleeve.material.imageURL}>
					<Window imageURL={''}>
						<Inlay imageURL={''}/>
					</Window>
				</Sleeve>
				<ButtCap color='darkest' imageURL={''}/>
			</Wrapper>
		)
	}
}

export default ButtCapSection

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 18fr 4fr;
	height: 4rem;
	width: 100%;
`

const Sleeve = styled(CuePiece)`
`

const Window = styled(CuePiece)`
`

const ButtCap = styled(CuePiece)`
`
