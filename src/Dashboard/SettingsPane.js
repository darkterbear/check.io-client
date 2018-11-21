import React, { Component } from 'react'

export default class SettingsPane extends Component {
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
