// react
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// fetches

// actions
import { setErrors } from 'stores/user/actions'

// components

// constants
import { TITLE } from 'config'

// utilities
import { Strings } from 'utilities'

class Login extends Component {

	usernameEle = null
	passwordEle = null

	componentWillMount () {
		document.title = TITLE.LOGIN
	}

	componentDidMount () {
		const keyupListener = (event) => {
			event.preventDefault()
			if (event.keyCode === 13) {
				this.login()
			}
		}

		if (this.usernameEle !== null) {
			ReactDOM.findDOMNode(this.usernameEle).addEventListener('keyup', keyupListener)
			ReactDOM.findDOMNode(this.passwordEle).addEventListener('keyup', keyupListener)
		}
	}

	login () {
		this.props.setErrors([])
		let email = this.usernameEle.getValue()
		let password = this.passwordEle.getValue()

		if (email === '' || !Strings.isEmail(email) || password === '') {
			return
		}

		//sendLogin(email, password)
	}

	render () {
		return (
			<div>
				Login
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		errors: state.errors
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		setErrors
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)