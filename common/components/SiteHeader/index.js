// react
import React, { Component } from 'react'

// styled
import styled from 'styled-components'

// components
import Row from 'components/Row'
import Icon from 'components/Icon'
import { NavLink } from 'react-router-dom'

// constants
import { PATH } from 'config'

class SiteHeader extends Component {

	render () {
		const { children, location: { pathname } } = this.props

		console.log(this.props)
		return (
			<React.Fragment>
				<Header centerVertically spaceBetween>
					<Logo src={'/img/logo.jpg'}/>
					<Icon lg icon="account_circle" color="alternate1"/>
				</Header>
				<Main>
					{children}
				</Main>
			</React.Fragment>
		)
	}
}

export default SiteHeader

const Header = styled(Row)`
	position: fixed;
	height: 3rem;
	width: 100%;
	z-index: 5;
	box-sizing: border-box;
	padding-left: 1rem;
	padding-right: 1rem;
	background-color: ${props => props.theme.colors.white};
`

const Main = styled(Row)`
	position: relative;
	box-sizing: border-box;
	min-height: 100vh;
	padding-top: 3rem;		
`

const Logo = styled.img`
	height: 2rem;
	width: auto;
	margin-right: 2rem;
`

const Link = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 3rem;
	padding: 0 2rem;
	white-space: nowrap;
	text-decoration: none;
	color: ${props => props.theme.colors.linkText};
`