import { API, request, METHOD } from '../api'

//actions
import { setLoading, setErrors, setOptions } from './actions'

//constants
const ENDPOINT = API.ENDPOINT + '/options'

export const searchOptions = names => {
	let namesList = names.split('\n')

	return request(ENDPOINT, METHOD.GET, setLoading, setErrors, { names: namesList })
		.then(response => {
			let options = response.results
			window.reduxStore.dispatch(setOptions(options))
			return response
		})
}