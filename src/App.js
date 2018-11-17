import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage'

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={LoginPage} />

					{/* <Route component={LostPage} /> */}
				</Switch>
			</Router>
		)
	}
}
