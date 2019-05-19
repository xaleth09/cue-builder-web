// react
import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// styled
import styled from 'styled-components'

// fetches
import { fetchCue } from 'stores/cue/fetches'
import { fetchOptions } from 'stores/options/fetches'

// components
import Row from 'components/Row'
import Col from 'components/Col'
import Page from 'components/Page'

import CuePreviewer from './CuePreviewer'
import SectionPreviewer from './SectionPreviewer'
import OptionsGrid from './OptionsGrid'

// constants
import { SECTIONS } from 'config'

class Builder extends Component {

	state = {
		activeSection: SECTIONS.FOREARM,
		activePiece: ''
	}

	componentDidMount () {
		fetchCue()
		fetchOptions()
	}



	render () {
		return (
			<Page>
				<Content>
					<CuePreviewer/>
					<Editor>
						<SectionPreviewer/>
						<OptionsGrid/>
					</Editor>
				</Content>
			</Page>
		)
	}
}

export default Builder

const Content = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: 1.33fr 6fr;
`

const Editor = styled.div`
	display: grid;
	grid-template-rows: 1.33fr 6fr;
`