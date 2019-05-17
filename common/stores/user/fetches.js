// API
import { API, request, METHOD } from 'stores/api'

//actions
import { setErrors, setLoading, setSelf } from './actions'

// constants
const ENDPOINT = `${API.ENDPOINT}/users`

export const getSelf = token => {
	return request(`${ENDPOINT}/self`, METHOD.GET, setLoading, setErrors, null, null, token)
		.then(response => {
			window.reduxStore.dispatch(setSelf(response))
			return response
		})
}