// react
import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux/index'

// proptypes
import PropTypes from 'prop-types'

// styled
import styled from 'styled-components'
import CuePiece from 'components/Cue/CuePiece'

// components

class ForearmSection extends Component {

	render () {
		const { joint, rings, forearm } = this.props
		return (
			<Wrapper>
				<Joint imgURL={joint.imageURL}/>
				<Ring imgURL={rings.collar.imageURL}/>
				<Forearm imgURL={forearm.material.imageURL}>
					<Veneers imgURL={''}>
						<Points shape={''}
						        material={'points'}
						>
							<Inlay shape={forearm.inlay.svg}
							       material={forearm.inlay.material}
							/>
						</Points>
					</Veneers>
				</Forearm>
			</Wrapper>
		)
	}
}

export default ForearmSection

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 10fr 3fr 54fr;
	height: 4rem;
	width: 100%;
`

const Joint = styled(CuePiece)`
`

const Ring = styled(CuePiece)`
`

const Forearm = styled(CuePiece)`
`

const Veneers = styled(CuePiece)`
`

const Points = styled(CuePiece)`
`

const Inlay = styled(CuePiece)`
`