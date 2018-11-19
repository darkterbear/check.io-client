import React, { Component } from 'react'
import { login, register } from './API'
export default class LoginPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			page: 0,
			loginEmail: '',
			loginPassword: '',
			registerEmail: '',
			registerName: '',
			registerLocationLon: '',
			registerLocationLat: '',
			registerPassword: '',
			registerConfirmPassword: '',
			registerCardNumber: '',
			registerCardCVC: '',
			registerCardDate: ''
		}
	}

	login = async () => {
		const response = await login(
			this.state.loginEmail,
			this.state.loginPassword
		)

		if (response.status === 200) {
			this.props.history.push('/dashboard')
		}
	}

	register = async () => {
		// const date = this.state.registerCardDate.split('/')
		// const token = await createCard(
		// 	this.state.registerCardNumber,
		// 	date[0],
		// 	date[1],
		// 	this.state.registerCardCVC
		// )
		// console.log(token)
		// const response = await register(
		// 	this.state.registerName,
		// 	this.state.registerEmail,
		// 	this.state.registerPassword,
		// 	{
		// 		lat: this.state.registerLocationLat,
		// 		lon: this.state.registerLocationLon
		// 	},
		// 	token
		// )
		// console.log(response)
		// if (response.status === 200) {
		// 	this.props.history.push('/dashboard')
		// }
	}

	handleLoginPage = () => {
		this.setState({ page: 0 })
	}

	handleRegisterPage = () => {
		this.setState({ page: 1 })
	}

	handleLoginEmailChange = e => {
		this.setState({})
	}

	handleLoginEmailChange = e => {
		this.setState({ loginEmail: e.target.value })
	}
	handleLoginPasswordChange = e => {
		this.setState({ loginPassword: e.target.value })
	}

	handleRegEmailChange = e => {
		this.setState({ registerEmail: e.target.value })
	}
	handleRegNameChange = e => {
		this.setState({ registerName: e.target.value })
	}
	handleRegLatChange = e => {
		this.setState({ registerLocationLat: e.target.value })
	}
	handleRegLonChange = e => {
		this.setState({ registerLocationLon: e.target.value })
	}
	handleRegPasswordChange = e => {
		this.setState({ registerPassword: e.target.value })
	}
	handleRegConfirmPasswordChange = e => {
		this.setState({ registerConfirmPassword: e.target.value })
	}
	handleRegCardNumberChange = e => {
		this.setState({ registerCardNumber: e.target.value })
	}
	handleRegCardCVCChange = e => {
		this.setState({ registerCardCVC: e.target.value })
	}
	handleRegCardDateChange = e => {
		this.setState({ registerCardDate: e.target.value })
	}

	render() {
		return (
			<div style={{ height: '100%' }}>
				<nav
					className="footer navbar navbar-big fixed-top"
					style={{ background: 'transparent' }}>
					<a className="navbar-brand" href="#">
						Check.io
					</a>
				</nav>
				<div
					className={'animate-div' + (this.state.page === 1 ? ' signup' : '')}
				/>
				<div className="container-fluid login-view">
					<div className="row">
						<div className="col-sm-6">
							<div className="login">
								<h1>Sign In</h1>
								<div className="form-group">
									<input
										onChange={this.handleLoginEmailChange}
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleLoginPasswordChange}
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
									/>
								</div>
								<a
									onClick={this.login}
									href="#"
									className="btn btn-transparent-b">
									<h2>Login</h2>
								</a>
								<p>
									Don't have an account?{' '}
									<a href="#" onClick={this.handleRegisterPage}>
										Sign Up
									</a>
								</p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="login">
								<h1>Sign up</h1>
								<div className="form-group">
									<input
										type="email"
										onChange={this.handleRegEmailChange}
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleRegNameChange}
										type="username"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter Full Name"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleRegLonChange}
										style={{ width: '45%', float: 'left' }}
										type="number"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Lon"
									/>
									<input
										style={{ width: '45%', float: 'left', marginLeft: '10%' }}
										type="number"
										onChange={this.handleRegLatChange}
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Lat"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleRegPasswordChange}
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleRegConfirmPasswordChange}
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Confirm Password"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleRegCardNumberChange}
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Card Number"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleRegCardCVCChange}
										style={{ width: '45%', float: 'left' }}
										type="number"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="CVC"
									/>
									<input
										onChange={this.handleRegCardDateChange}
										style={{ width: '45%', float: 'left', marginLeft: '10%' }}
										type="text"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="MM/YY"
									/>
								</div>
								<a
									onClick={this.register}
									href="#"
									className="btn btn-transparent-b">
									<h2>Register</h2>
								</a>
								<p>
									Already have an account?{' '}
									<a href="#" onClick={this.handleLoginPage}>
										Sign In
									</a>
								</p>
							</div>
						</div>
					</div>
					<nav
						className="footer navbar navbar-big fixed-bottom"
						style={{ background: 'transparent' }}>
						<p className="grey">
							Copyright Young Dumb Broke High School Kids MMXVIII
						</p>
					</nav>
				</div>
			</div>
		)
	}
}
