import React, { Component } from 'react'
import { Header, MainNav, Customer, SettingsPane, Button } from '../Components'
import PaymentPane from './PaymentPane'
import CustomerPane from './CustomerPane'

export default class DashboardPage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		// TODO: get restaurant object and update state
	}

	render() {
		return (
			<div style={{ height: '100%' }}>
				<Header />
				<div className="" style={{ flex: '2', height: '100%' }}>
					<MainNav />

					<div className="container-card ">
						<div className="card-content">
							<div
								className="container section border tab-content"
								id="pills-tabContent">
								<CustomerPane />
								<PaymentPane />
								<SettingsPane />
							</div>
						</div>
					</div>
				</div>

				<nav
					className="footer navbar navbar-big fixed-bottom"
					style={{ background: 'transparent' }}>
					<p class="grey">
						Copyright Young Dumb Broke High School Kids MMXVIII
					</p>
					<p>
						Made with <span class="accent">❤</span> at Hacksgiving 2018
					</p>
					<p class="grey">
						Need Help?{' '}
						<a class="accent" href="#">
							Contact Us
						</a>
					</p>
				</nav>
			</div>
		)
	}
}
