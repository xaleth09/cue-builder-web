// utils
import { createReducer } from '../utils'
import { sortObjects, updateObject } from 'utilities'

// actions
import {
	CUSTOMERS_ERRORS,
	CUSTOMERS_LOADING,
	SET_CUSTOMERS,
	SET_SELECTED_CUSTOMERS
} from './actions'

const initialState = {
	errors: null,
	loading: false,
	list: [],
	selected: {}
}

const setErrors = (state, action) => {
	return updateObject(state, { errors: action.errors })
}

const setLoading = (state, action) => {
	return updateObject(state, { loading: action.loading })
}

const setCustomers = (state, action) => {
	return updateObject(state, { list: action.customers })
}

const setSelectedCustomers = (state, action) => {
	return updateObject(state, { selected: action.customers })
}

const customers_reducer = createReducer(
	initialState,
	{
		[CUSTOMERS_ERRORS]: setErrors,
		[CUSTOMERS_LOADING]: setLoading,
		[SET_CUSTOMERS]: setCustomers,
		[SET_SELECTED_CUSTOMERS]: setSelectedCustomers
	}
)

export default customers_reducer