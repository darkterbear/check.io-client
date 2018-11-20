import React, { Component } from 'react'
import {
	Header,
	MainNav,
	Customer,
	SettingsPane,
	Button,
	FullFooter
} from '../Components'
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

				<FullFooter />
			</div>
		)
	}
}
