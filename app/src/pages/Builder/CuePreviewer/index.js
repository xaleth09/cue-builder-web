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
import Col from 'components/Col'
import Cue from 'components/Cue'

class CuePreviewer extends Component {

	render () {

		return (
			<Content centerHorizontally>
				<Cue vertical/>
			</Content>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cue: state.cue.config
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CuePreviewer)

const Content = styled(Col)`
	padding: 2rem 2.5rem;
	background-color: ${props => props.theme.colors.alternate2};
`