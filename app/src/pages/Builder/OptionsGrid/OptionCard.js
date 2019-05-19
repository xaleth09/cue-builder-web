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
import Row from 'components/Row'
import Col from 'components/Col'
import Checkbox from 'components/Checkbox'

// constants
import { CHECKBOX_STATE } from 'components/Checkbox'

class OptionCard extends Component {

	render () {
		const { option: { title = 'Title', price, imageUrl } } = this.props

		return (
			<Content>
				<Header centerVertically spaceBetween>
					<span>{title}</span>
					<span>$ {price}</span>
				</Header>
				<Card>
					<OptionImg src={imageUrl}/>
					<CornerCheckbox checked={CHECKBOX_STATE.CHECKED}
					                onClick={() => {
					                }}
					/>
				</Card>
			</Content>
		)
	}
}

export default OptionCard

const Content = styled(Col)`
	padding: .75rem .5rem;
`

const Header = styled(Row)`
	padding: .25rem .5rem;
	border-top-left-radius: .25rem;
	border-top-right-radius: .25rem;
	background-color: #46ACC2;
	color: white;
`

const Card = styled(Col)`
	position: relative;
	height: 5rem;
	width: 15rem;
	border-radius: .25rem;
	box-shadow: ${props => props.theme.colors.primaryBoxShadow};
`

const OptionImg = styled.img`
	height: 100%;
	width: auto;
`

const CornerCheckbox = styled(Checkbox)`
	position: absolute;
	bottom: 0;
	right: 0;
	margin-right: .9rem;
	margin-bottom: .75rem;
`