import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DashboardPage from './DashboardPage'

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/dashboard" component={DashboardPage} />

					{/* <Route component={HomePage} /> */}
				</Switch>
			</Router>
		)
	}
}
