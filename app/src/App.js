// react
import React, { Component } from 'react'

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// styled
import { Reset } from 'styled-reset'
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'

// reducers
import reducer from 'reducer'

// fetches
import { getSelf } from 'stores/user/fetches'

// components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// pages
import Login from 'pages/Login'
import Builder from 'pages/Builder'

// constants
import { PATH } from 'config'

// utilities
import { isEmpty } from 'utilities'

const store = createStore(reducer, DEVTOOLS)
window.reduxStore = store

export default class App extends Component {

	state = {
		loading: false
	}

	// componentDidMount () {
	// 	const user = store.getState().user
	//
	// 	if (isEmpty(user)) {
	// 		this.setState({ loading: true })
	// 		getSelf('token1337').finally(() => {
	// 			this.setState({ loading: false })
	// 		})
	// 	} else {
	// 		this.setState({ loading: false })
	// 	}
	// }

	renderContent () {
		const { loading } = this.state
		const user = store.getState().user

		if (loading) {
			return (<div>LOADING</div>)
		} else if (false && isEmpty(user)) {
			return <Login/>
		} else {
			return (
				<React.Fragment>
					<Normalize/>
					<Router>
						<Switch>
							<Route exact={true} path={PATH.ROOT} component={Login}/>
							<Route path={PATH.ROOT} component={Builder}/>
						</Switch>
					</Router>
				</React.Fragment>
			)
		}
	}

	render () {
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					{this.renderContent()}
				</ThemeProvider>
			</Provider>
		)
	}
}
