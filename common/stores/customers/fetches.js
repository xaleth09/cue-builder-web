import { API, request, METHOD } from '../api'

//actions
import { setLoading, setErrors, setCustomers } from './actions'

//constants
const ENDPOINT = API.ENDPOINT + '/customers'

export const searchCustomers = names => {
	let namesList = names.split('\n')

	return request(ENDPOINT, METHOD.GET, setLoading, setErrors, { names: namesList })
		.then(response => {
			let customers = response.results
			window.reduxStore.dispatch(setCustomers(customers))
			return response
		})
}