import React, { Component } from 'react'
import { Customer } from '../Components'

export default class PaymentPane extends Component {
	constructor(props) {
		super(props)

		this.state = {
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
			historySearch: '',
			selectedTransaction: 0
		}
	}

	handleHistorySearchChange = e => {
		const value = e.target.value

		this.setState({ historySearch: value })
	}

	render() {
		return (
			<div className="tab-pane fade show " id="pills-payment" role="tabpanel">
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
		)
	}
}
