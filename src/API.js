const BASE_URL = 'http://localhost:3001'

exports.BASE_URL = BASE_URL

const GET_HEADERS = {
	Accept: 'application/json'
}
const POST_HEADERS = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
}

const post = (path, body) => {
	return fetch(BASE_URL + path, {
		method: 'POST',
		headers: POST_HEADERS,
		body: JSON.stringify(body),
		credentials: 'include'
	})
}

exports.login = (email, password) => {
	return post('/restaurant/login', { email, password })
}

exports.register = (
	name,
	email,
	password,
	location,
	cardNumber,
	month,
	year,
	cvc
) => {
	return post('/restaurant/register', {
		name,
		email,
		password,
		location,
		cardNumber,
		month,
		year,
		cvc
	})
}

exports.checkInUser = userId => {
	return post('/restaurant/check-in-user', { userId })
}

exports.checkOutUser = userId => {
	return post('/restaurant/check-out-user', { userId })
}

exports.billUser = (userId, amount) => {
	return post('/restaurant/bill-user', { userId, amount, description: '' })
}

exports.getRestaurant = () => {
	return fetch(BASE_URL + '/restaurant/get', {
		method: 'GET',
		headers: GET_HEADERS,
		credentials: 'include'
	})
}
