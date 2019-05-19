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
import CuePiece from 'components/Cue/CuePiece'

class Cue extends Component {

	render () {
		const { cue: { joint, rings, forearm, wrap, sleeve, buttCap }, horizontal } = this.props
		return (
			<Wrapper {...{ horizontal }}>
				<Joint imageURL={joint.imageURL}/>
				<Ring color='darkest' imageURL={rings.collar.imageURL}/>
				<Forearm imageURL={forearm.material.imageURL}>
					<Veneers imageURL={''}>
						<Points shape={''}
						        material={'points'}
						>
							<Inlay shape={forearm.inlay.svg}
							       material={forearm.inlay.material}
							/>
						</Points>
					</Veneers>
				</Forearm>
				<Ring color='darkest' imageURL={rings.wrap.imageURL}/>
				<Wrap imageURL={wrap.imageURL}/>
				<Ring color='darkest' imageURL={rings.sleeve.imageURL}/>
				<Sleeve imageURL={sleeve.material.imageURL}>
					<Window imageURL={''}>
						<Inlay imageURL={''}/>
					</Window>
				</Sleeve>
				<ButtCap imageURL={buttCap.material.imageURL}/>
			</Wrapper>
		)
	}
}

const mapStateToProps = state => {
	return {
		cue: state.cue.config
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cue)

const dimensions = '10fr 3fr 54fr 3fr 72fr 3fr 18fr 4fr'

const Wrapper = styled.div`
	display: grid;
	${props => props.horizontal ?
	`
		grid-template-columns: ${dimensions};
		height: 3rem;
		width: 100%;
	` :
	`
		grid-template-rows: ${dimensions};
		height: 100%;
		width: 3rem;
	`};
`

const Joint = styled(CuePiece)`
`

const Forearm = styled(CuePiece)`
`

const Veneers = styled(CuePiece)`
`

const Points = styled(CuePiece)`
`

const Wrap = styled(CuePiece)`
`

const Sleeve = styled(CuePiece)`
`

const Window = styled(CuePiece)`
`

const ButtCap = styled(CuePiece)`
`

const Ring = styled(CuePiece)`
`

const Inlay = styled(CuePiece)`
`