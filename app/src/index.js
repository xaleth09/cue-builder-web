// react
import React from 'react'
import ReactDOM from 'react-dom'

// components
import App from './App.js'

const render = Component => {
	ReactDOM.render(
		<Component/>,
		document.getElementById('main')
	)
}

render(App)

if (module.hot) {
	console.log('HOT RELOADING!')
}