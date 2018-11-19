import React, { Component } from 'react'
import { Customer, Button } from '../Components'

export default class CustomerPane extends Component {
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
			search: '',
			billingCustomer: {},
			billingAmount: 0
		}
	}

	handleSearchChange = e => {
		const value = e.target.value

		this.setState({ search: value })
	}

	handleCheckIn = userId => {
		// TODO:
	}

	handleBillAmountChange = e => {
		const value = e.target.value

		if (isNaN(value)) this.setState({ billingAmount: 0 })
		else this.setState({ billingAmount: parseInt(value) })
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
									<h4>Occupancy: {this.state.checkedInUsers.length}/20</h4>
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
			</div>
		)
	}
}
