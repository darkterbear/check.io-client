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
							href=""
							onClick={this.props.onPay}
							data-toggle="modal"
							data-target="#payment-modal">
							bill
						</a>
					)}
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

export class FullFooter extends Component {
	render() {
		return (
			<nav
				className="footer navbar navbar-big fixed-bottom"
				style={{ background: 'transparent' }}>
				<p class="grey">Copyright Young Dumb Broke High School Kids MMXVIII</p>
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
		)
	}
}

export class Modal extends Component {
	render() {
		return (
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
								{this.props.title}
							</h5>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								onClick={this.props.onClose}
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">{this.props.children}</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-transparent-a"
								onClick={this.props.onClose}
								data-dismiss="modal">
								Close
							</button>
							<button
								type="button"
								onClick={this.props.onConfirm}
								class="btn btn-brand">
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
