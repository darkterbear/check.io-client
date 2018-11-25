import io from 'socket.io-client'
import { BASE_URL } from './API'

const socket = io(BASE_URL, { secure: true })

const Socket = {
	subscribeUserNearby: c => {
		socket.on('userNearby', c)
	},
	subscribeUserLeft: c => {
		socket.on('userLeft', c)
	},
	unsubscribeUserNearby: () => {
		socket.on('userNearby', () => {})
	},
	unsubscribeUserLeft: () => {
		socket.on('userLeft', () => {})
	}
}

export default Socket
