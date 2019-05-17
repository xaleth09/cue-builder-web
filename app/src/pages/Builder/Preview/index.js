// react
import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// components
import Row from 'components/Row'

class Preview extends Component {

	render () {
		return (
			<Row>
				Hello, World!
			</Row>
		)
	}
}

export default Preview