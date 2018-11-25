import React, { Component } from 'react'
import { Header, MainNav, Customer, Button, FullFooter } from '../Components'
import PaymentPane from './PaymentPane'
import CustomerPane from './CustomerPane'
import SettingsPane from './SettingsPane'
import { getRestaurant } from '../API'
import Socket from '../Sockets'

export default class DashboardPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nearbyUsers: []
		}
	}

	async componentDidMount() {
		Socket.subscribeUserNearby(user => {
			this.setState({ nearbyUsers: this.state.nearbyUsers.concat(user) })
		})

		Socket.subscribeUserLeft(user => {
			this.setState({
				nearbyUsers: this.state.nearbyUsers.filter(
					u => u._id.toString() !== user._id.toString()
				)
			})
		})

		const response = await getRestaurant()

		if (response.status === 200) {
			const data = await response.json()

			this.setState({
				nearbyUsers: data.nearbyUsers,
				checkedInUsers: data.checkedInUsers,
				transactionHistory: data.transactionHistory
			})
		}
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
								<CustomerPane
									nearbyUsers={this.state.nearbyUsers}
									checkedInUsers={this.state.checkedInUsers}
								/>
								<PaymentPane
									transactionHistory={this.state.transactionHistory}
								/>
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
