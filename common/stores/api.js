// endpoint
import { isString } from '../utilities'

let host = window.location.hostname
if (!host.includes('localhost')) {
	let parts = host.split('.')
	if (parts.length > 1) {
		parts.shift()
		host = `api.${parts.join('.')}`
	}
} else {
	host = `${host}${API_PORT}`
}

export const API = {
	ENDPOINT: `${window.location.protocol}//${host}`
}

export const METHOD = {
	GET: 'GET',
	PUT: 'PUT',
	POST: 'POST',
	DELETE: 'DELETE'
}

const STATUS = {
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	TIMEOUT: 408
}

let REQUEST_IDX = 0
const REQUEST_KEYS = {}

export const request = (route, method = METHOD.GET, setLoading, setErrors, query = null, body = null, token = 'token1337', redirect = true) => {
	let request_idx = REQUEST_IDX++
	REQUEST_KEYS[route] = request_idx

	let options = {
		mode: 'cors',
		credentials: 'include',
		method: method,
		body: body ? JSON.stringify(body) : undefined,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'no-cache, no-store',
			'Pragma': 'no-cache',
			'Authorization': token ? 'Token ' + token : undefined
		}
	}

	let routeQuery = route
	if (query) {
		query = Object.entries(query).map(([param, value]) => `${param}=${encodeURIComponent(isString(value) ? value : JSON.stringify(value))}`).join('&')
		routeQuery = `${route}?${query}`
	}

	window.reduxStore.dispatch(setLoading(true))
	return fetch(routeQuery, options)
		.then(response => {
			if (REQUEST_KEYS[route] !== request_idx) {
				throw { status: STATUS.TIMEOUT }
			}
			return Promise.all([response.status, response.json()])
		})
		.then(([status, body]) => {
			if (status >= STATUS.BAD_REQUEST) {
				throw { status: status, errors: body.errors }
			}
			window.reduxStore.dispatch(setLoading(false))
			return body
		})
		.catch(error => {
			if (error.status !== STATUS.TIMEOUT) {
				if (redirect && error.status === STATUS.UNAUTHORIZED) {
					window.location.reload()
				} else {
					if (error instanceof Error) {
						error.status = 599
						error.errors = [error.message]
					}
					window.reduxStore.dispatch(setErrors(error.status, error.errors))
				}
				window.reduxStore.dispatch(setLoading(false))
			}
			throw error
		})
}
