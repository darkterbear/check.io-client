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
				{ name: 'John Smith ' },
				{ name: 'Random Person ' },
				{ name: 'Jacob Zhang' }
			],
			selectedTransaction: 0,
			transactionHistory: [
				{
					customer: {
						name: 'John Smith'
					}
				},
				{
					customer: {
						name: 'Random Person'
					}
				},
				{
					customer: {
						name: 'Meme Meme'
					}
				}
			],
			search: '',
			historySearch: '',
			billingCustomer: {},
			billingAmount: 0
		}
	}

	componentDidMount() {
		// TODO: get restaurant object and update state
	}

	handleBillAmountChange = e => {
		const value = e.target.value

		if (isNaN(value)) this.setState({ billingAmount: 0 })
		else this.setState({ billingAmount: parseInt(value) })
	}

	handleSearchChange = e => {
		const value = e.target.value

		this.setState({ search: value })
	}

	handleHistorySearchChange = e => {
		const value = e.target.value

		this.setState({ historySearch: value })
	}

	handleCheckIn = userId => {
		// TODO:
	}

	handlePay = user => {
		this.setState({ billingCustomer: user })
	}

	handleBillingClose = () => {
		this.setState({ billingCustomer: {}, billingAmount: 0 })
	}

	handleBill = () => {
		// TODO:
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
													<input
														type="search"
														placeholder="Search"
														onChange={this.handleSearchChange}
													/>
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
														{this.state.nearbyUsers
															.filter(u =>
																u.name
																	.toLowerCase()
																	.includes(this.state.search.toLowerCase())
															)
															.map(u => {
																return (
																	<Customer
																		name={u.name}
																		onCheckIn={() => this.handleCheckIn(u._id)}
																	/>
																)
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
														{this.state.checkedInUsers
															.filter(u =>
																u.name
																	.toLowerCase()
																	.includes(this.state.search.toLowerCase())
															)
															.map(u => {
																return (
																	<Customer
																		name={u.name}
																		onPay={() => this.handlePay(u)}
																	/>
																)
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
												<div className="search">
													<span className="icon">
														<i className="fa fa-search" />
													</span>
													<input
														type="search"
														placeholder="Search"
														onChange={this.handleHistorySearchChange}
													/>
												</div>
												<div className="row">
													<div className="col">
														<h2>History</h2>
													</div>
												</div>
												{this.state.transactionHistory
													.filter(t =>
														t.customer.name
															.toLowerCase()
															.includes(this.state.historySearch.toLowerCase())
													)
													.map((transaction, i) => {
														return (
															<Customer
																name={transaction.customer.name}
																selected={this.state.selectedTransaction === i}
															/>
														)
													})}
											</div>
											<div className="col" style={{ marginTop: '4em' }}>
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
											</div>
										</div>
									</div>
								</div>
								<SettingsPane />
							</div>
						</div>
					</div>
				</div>

				<div
					class="modal "
					id="payment-modal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true">
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalCenterTitle">
									Billing {this.state.billingCustomer.name}
								</h5>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									onClick={this.handleBillingClose}
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<div class="container-fluid">
									<div class="row">
										{/* <div class="col-md-6">.col-md-4</div>
                    <div class="col-md-6 ml-auto">.col-md-4 .ml-auto</div> */}
										<div class="form-group">
											<input
												type="number"
												className="form-control"
												placeholder="Amount"
												onChange={this.handleBillAmountChange}
											/>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-transparent-a"
									onClick={this.handleBillingClose}
									data-dismiss="modal">
									Close
								</button>
								<button
									type="button"
									onClick={this.handleBill}
									class="btn btn-brand">
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* <nav>
					class="footer navbar navbar-big fixed-bottom" style=
					{{ background: 'transparent' }}>
					<p class="grey">Copyright Big Peen Boys MMXVIII</p>
					<p>
						Made with <span class="accent">❤</span> at Hacksgiving 2018
					</p>
					<p class="grey">
						Need Help?{' '}
						<a class="accent" href="#">
							Contact Us
						</a>
					</p>
				</nav> */}
			</div>
		)
	}
}
