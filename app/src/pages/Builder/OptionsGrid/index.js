// react
import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// styled
import styled from 'styled-components'

// components
import Row from 'components/Row'
import Col from 'components/Col'
import Button from 'components/Button'

import OptionCard from './OptionCard'

class OptionsGrid extends Component {

	render () {
		const { title = 'Title', options } = this.props

		return (
			<Content>
				<Header centerVertically spaceBetween>
					<span>{title}</span>
					<Row>
						<Button style={{ marginRight: '.25rem' }}
						        onClick={() => {
						        }}
						>
							Cancel
						</Button>
						<Button style={{ marginLeft: '.25rem' }}
						        onClick={() => {
						        }}
						>
							Save
						</Button>
					</Row>
				</Header>
				<Options wrap>
					{options.map(option => (
						<OptionCard {...{ option }}/>
					))}
				</Options>
			</Content>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		options: state.options.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsGrid)

const Content = styled(Col)`
	min-height: 20rem;
	box-shadow: ${props => props.theme.colors.primaryBoxShadow};
	background-color: white;
`

const Header = styled(Row)`
	height: 4rem;
	padding-left: 1rem;
	padding-right: 1rem;
	border-top-left-radius: .25rem;
	border-top-right-radius: .25rem;
	background-color: black;
	color: white;
`

const Options = styled(Row)`
	padding: 1rem;
`