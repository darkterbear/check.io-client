const BASE_URL = 'https://b04901b8.ngrok.io'

exports.BASE_URL = BASE_URL

const GET_HEADERS = {
	Accept: 'application/json'
}
const POST_HEADERS = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
}

exports.login = (email, password) => {
	return fetch(BASE_URL + '/restaurant/login', {
		method: 'POST',
		headers: POST_HEADERS,
		body: JSON.stringify({
			email,
			password
		}),
		credentials: 'include'
	})
}

exports.register = (name, email, password, location, accountToken) => {
	return fetch(BASE_URL + '/restaurant/register', {
		method: 'POST',
		headers: POST_HEADERS,
		body: JSON.stringify({
			name,
			email,
			password,
			location,
			accountToken
		}),
		credentials: 'include'
	})
}

exports.checkInUser = userId => {
	return fetch(BASE_URL + '/restaurant/check-in-user', {
		method: 'POST',
		headers: POST_HEADERS,
		body: JSON.stringify({
			userId
		}),
		credentials: 'include'
	})
}

exports.checkOutUser = userId => {
	return fetch(BASE_URL + '/restaurant/check-out-user', {
		method: 'POST',
		headers: POST_HEADERS,
		body: JSON.stringify({
			userId
		}),
		credentials: 'include'
	})
}

exports.billUser = (userId, amount) => {
	return fetch(BASE_URL + '/restaurant/bill-user', {
		method: 'POST',
		headers: POST_HEADERS,
		body: JSON.stringify({
			userId,
			amount,
			description: ''
		}),
		credentials: 'include'
	})
}

exports.getRestaurant = () => {
	return fetch(BASE_URL + '/restaurant/get', {
		method: 'GET',
		headers: GET_HEADERS,
		credentials: 'include'
	})
}
