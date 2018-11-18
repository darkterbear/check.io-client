import React, { Component } from 'react'
import { Header, MainNav, Customer, SettingsPane, Button } from './Components'

export default class DashboardPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nearbyUsers: [
				{ name: 'Terrance Li' },
				{ name: 'Owen Cheung' },
				{ name: 'Simon Zhang' }
			],
			checkedInUsers: [
				{ name: 'Your Mom ' },
				{ name: 'Your Mom ' },
				{ name: 'Your Mom ' }
			],
			transactionHistory: []
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
								<div
									className="tab-pane fade show active"
									id="pills-customer"
									role="tabpanel">
									<div className="consumer-container">
										<div className="row ">
											<div className="col-sm-6 ">
												<div className="search">
													<span className="icon">
														<i className="fa fa-search" />
													</span>
													<input type="search" placeholder="Search" />
												</div>
											</div>
										</div>
										<div className="row overlap">
											<div className="col ">
												<div className="row">
													<div className="col col-name">
														<h2>Nearby</h2>
														<Button text="Add Name" icon="fas fa-plus" />
													</div>
												</div>
												<div className=" row div-scroll">
													<div className="col">
														{this.state.nearbyUsers.map(u => {
															return <Customer name={u.name} />
														})}
													</div>
												</div>
											</div>
											<div className="col">
												<div className="row">
													<div className="col col-name">
														<h2>Checked In</h2>
														<h4>
															Ocupancy: {this.state.checkedInUsers.length}/20
														</h4>
													</div>
												</div>
												<div className=" row div-scroll">
													<div className="col">
														{this.state.checkedInUsers.map(u => {
															return <Customer name={u.name} />
														})}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div
									className="tab-pane fade show "
									id="pills-payment"
									role="tabpanel">
									<div className="consumer-container">
										<div className="row">
											<div className="col">
												<input type="text" placeholder="Search.." />
												<div className="row">
													<div className="col">
														<h2>History</h2>
													</div>
												</div>
												{this.state.transactionHistory.forEach(transaction => {
													return <Customer name={transaction.customer.name} />
												})}
											</div>
											<div className="col">
												<div className="row">
													<div className="col">
														<h3>Cancel Payment</h3>
													</div>
												</div>
												<hr />
												<div className="row">
													<div className="col align-left">
														<h3>Food Item</h3>
														<h3>Description</h3>
														<ul style={{ listStyle: 'none' }}>
															<li>Options</li>
															<ul>
																<li>Option 1</li>
																<li>Option 2</li>
															</ul>
														</ul>
													</div>
													<div className="col align-right">
														<p>$200.44</p>
													</div>
												</div>
												<hr />
												<div className="row">
													<div className="col align-left">
														<h3>Food Item</h3>
														<h3>Description</h3>
													</div>
													<div className="col align-right">
														<p>$200.44</p>
													</div>
												</div>
												<hr />
												<div className="row">
													<div className="col align-left">
														<h3>Payment Options</h3>
													</div>
													<div className="col align-right">
														<h3>Total Before Tax:</h3>
														<h3>Tax:</h3>
														<h3 />
														<h3>Total:</h3>
													</div>
													<div className="col align-right">
														<h3>$400.88</h3>
														<h3>+ $40.12</h3>
														<h3 />
														<h3>$441</h3>
													</div>
												</div>
												<div className="row">
													<div
														className="col align-right"
														style={{ display: 'inline-flex' }}>
														<button>Physical Payment</button>
														<button>Pay with Check.io</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<SettingsPane />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
