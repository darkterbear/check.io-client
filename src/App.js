import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import LoginPage from './LoginPage'
import { Elements } from 'react-stripe-elements'
import HomePage from './HomePage'

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/dashboard" component={DashboardPage} />
					<Route exact path="/login" component={LoginPage} />

					<Route component={HomePage} />
				</Switch>
			</Router>
		)
	}
}
