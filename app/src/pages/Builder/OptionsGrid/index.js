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
		const { titles = ['Title1', 'Title2'], activeSubOption = 'Title1', options } = this.props

		return (
			<Content>
				<Row right
				     style={{ width: '100%' }}
				>
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
				<Tabs centeredVertically>
					{titles.map(title => (
						<Tab centered
						     key={title}
						     active={activeSubOption === title}
						>
							<H3>{title}</H3>
						</Tab>
					))}
				</Tabs>
				<Card>
					<Options>
						{/*{options.map((option, i) => (*/}
						{/*	<OptionCard key={i} {...{ option }}/>*/}
						{/*))}*/}
					</Options>
				</Card>
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
	padding: 1rem 2rem;
	background-color: white;
`

const Card = styled(Col)`
	min-height: 20rem;
	border-top: .5px solid ${props => props.theme.colors.light};
	box-shadow: ${props => props.theme.colors.primaryBoxShadow};
`

const Tab = styled(Col)`
	margin-right: 1rem;
	padding: 1rem 2rem;
	text-align: center;
	border-top-left-radius: .25rem;
	border-top-right-radius: .25rem;
	background-color: ${props => props.active ? props.theme.colors.secondary : 'transparent'};
	color:  ${props => props.active ? 'white' : props.theme.colors.secondary};
	cursor: pointer;
`

const Tabs = styled(Row)`
	
`


const H3 = styled.h3`
	margin: 0;
`

const Options = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 10rem);
	grid-template-rows: repeat(auto-fill, 5rem);
	grid-gap: 2rem 2rem; 
	padding: 1rem;
`