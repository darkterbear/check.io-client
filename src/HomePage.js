import React, { Component } from 'react'

export default class HomePage extends Component {
	render() {
		return (
			<div class="mainbody">
				<div class="hero">
					<nav
						class="footer navbar navbar-big fixed-top"
						style={{ background: 'transparent' }}>
						<a class="navbar-brand" href="#">
							Check.io
						</a>
						<div class="loginsignup">
							<a class="block-link padding-left" href="/login">
								Login
							</a>

							<a class="block-link" href="/login" style={{ marginLeft: '1em' }}>
								Sign Up
							</a>
						</div>
					</nav>
					<div class="slogan container">
						<div class="row align-middle align-items-center">
							<div class="col align-middle">
								<h1>Welcome to the future of restaurants.</h1>
								<div class="spacing" />
								<h4 class="slogantext">
									Ever been to a restaurant where you had to wait 10 minutes
									just for the bill? Yeah. It sucks. It's time we changed that
									with some 2018 technology. Check.io allows users to better
									engage with the restaurant experience while streamlining the
									process. You don't have to take our their phone <i>at all</i>{' '}
									when going to a restaurant. This is the walk in, eat, walk out
									philosophy.
								</h4>
								<div class="spacing" />
								<button class="btn btn-brand">Check us out</button>
							</div>
							<div class="col align-middle">
								<img src="images/macbook mockup.png" />
							</div>
						</div>
					</div>
					<nav
						class="footer navbar navbar-big fixed-bottom"
						style={{ background: 'transparent' }}>
						<p class="grey">
							Copyright Young Dumb Broke High School Kids MMXVIII
						</p>
					</nav>
				</div>
			</div>
		)
	}
}
