import React, { Component } from 'react'
import { login, register } from './API'
export default class LoginPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			page: 0
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
		const date = this.state.cardDate.split('/')

		// const token = await createCard(
		// 	this.state.cardNumber,
		// 	date[0],
		// 	date[1],
		// 	this.state.cardCVC
		// )
		// console.log(token)
		// const response = await register(
		// 	this.state.name,
		// 	this.state.email,
		// 	this.state.password,
		// 	{
		// 		lat: this.state.lat,
		// 		lon: this.state.lon
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

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value })
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
							<form className="login">
								<h1>Sign In</h1>
								<div className="form-group">
									<input
										onChange={this.handleInputChange}
										name="loginEmail"
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleInputChange}
										name="loginPassword"
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
							</form>
						</div>
						<div className="col-sm-6">
							<form className="login">
								<h1>Sign up</h1>
								<div className="form-group">
									<input
										type="email"
										name="email"
										onChange={this.handleInputChange}
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleInputChange}
										name="name"
										type="username"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter Full Name"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleInputChange}
										style={{ width: '45%', float: 'left' }}
										name="lon"
										type="number"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Lon"
									/>
									<input
										style={{ width: '45%', float: 'left', marginLeft: '10%' }}
										type="number"
										name="lat"
										onChange={this.handleInputChange}
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Lat"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleInputChange}
										type="password"
										name="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleInputChange}
										type="password"
										name="confirmPassword"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Confirm Password"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleInputChange}
										type="password"
										name="cardNumber"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Card Number"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={this.handleInputChange}
										style={{ width: '45%', float: 'left' }}
										type="number"
										name="cardCVC"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="CVC"
									/>
									<input
										onChange={this.handleInputChange}
										style={{ width: '45%', float: 'left', marginLeft: '10%' }}
										type="text"
										name="cardDate"
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
							</form>
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
