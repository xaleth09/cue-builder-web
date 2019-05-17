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
import Page from 'components/Page'

import Index from './Preview'
import OptionsGrid from './OptionsGrid'

class Builder extends Component {

	render () {
		return (
			<Page>
				<Content>
					<Index/>
					<OptionsGrid/>
				</Content>
			</Page>
		)
	}
}

export default Builder

const Content = styled(Col)`
	padding: 2rem;
`