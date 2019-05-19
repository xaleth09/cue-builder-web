// react
import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// styled
import styled from 'styled-components'

// components
import Row from 'components/Row'
import Cue from 'components/Cue'

class SectionPreviewer extends Component {

	render () {
		return (
			<Content centerVertically>
				<Cue horizontal/>
			</Content>
		)
	}
}

export default SectionPreviewer

const Content = styled(Row)`
	padding: 3rem 2rem;
	background-color: ${props => props.theme.colors.alternate1};
`