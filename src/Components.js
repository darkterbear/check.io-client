import React, { Component } from 'react'

export class Header extends Component {
	render() {
		return (
			<nav
				className="navbar navbar-big  fixed-top"
				style={{ background: 'transparent' }}>
				<div className="header-info">
					<div className="navbar-brand">Business Name</div>
					<div className="online-indicator" />
				</div>
				<a className="block-link" href="">
					Logout
				</a>
			</nav>
		)
	}
}

export class MainNav extends Component {
	render() {
		return (
			<div className="container main-nav">
				<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active"
							id="pills-customer-tab"
							data-toggle="pill"
							href="#pills-customer"
							role="tab"
							aria-controls="pills-home"
							aria-selected="true">
							Customer
						</a>
					</li>
					<li className="divider">/</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="pills-payment-tab"
							data-toggle="pill"
							href="#pills-payment"
							role="tab"
							aria-controls="pills-profile"
							aria-selected="false">
							Payment
						</a>
					</li>
					<li className="divider">/</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="pills-settings-tab"
							data-toggle="pill"
							href="#pills-settings"
							role="tab"
							aria-controls="pills-contact"
							aria-selected="false">
							Settings
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

export class Customer extends Component {
	render() {
		return (
			<div className={'row' + (this.props.selected ? ' selected' : '')}>
				<div className="col-12 col-name">
					<div className="person">
						<div className="icon" />
						<h3>{this.props.name}</h3>
					</div>
					{this.props.onCheckIn && (
						<a
							onClick={this.props.onCheckIn}
							href="#"
							style={{ cursor: 'pointer' }}>
							check in
						</a>
					)}
					{this.props.onPay && (
						<a
							onClick={this.props.onPay}
							href="#"
							style={{ cursor: 'pointer' }}>
							bill
						</a>
					)}
				</div>
			</div>
		)
	}
}

export class SettingsPane extends Component {
	render() {
		return (
			<div className="tab-pane fade show " id="pills-settings" role="tabpanel">
				<div className="consumer-container">
					<div className="row">
						<div className="col">
							<h3>Name</h3>
						</div>
						<div className="col">
							<h3>Full Name</h3>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col">
							<h3>Email</h3>
						</div>
						<div className="col">
							<h3>businessemail@email.com</h3>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col">
							<h3>Password</h3>
						</div>
						<div className="col">
							<h3>••••••••</h3>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col">
							<h3>Credit Card</h3>
						</div>
						<div className="col">
							<div className="row">
								<div className="col">
									<h3>Number</h3>
									<h3>Expiration Date</h3>
								</div>
								<div className="col">
									<h3>*********1234</h3>
									<h3>01/23</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export class Button extends Component {
	render() {
		return (
			<button type="button" class="btn btn-transparent">
				{this.props.icon && <i className={this.props.icon} />}
				{this.props.text}
			</button>
		)
	}
}
