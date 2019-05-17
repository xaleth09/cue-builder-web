// utils
import { createReducer } from '../utils'
import { sortObjects, updateObject } from 'utilities'

// actions
import {
	OPTIONS_ERRORS,
	OPTIONS_LOADING,
	SET_OPTIONS,
	SET_SELECTED_OPTIONS
} from './actions'

const initialState = {
	errors: null,
	loading: false,
	list: [
		{
			image: '',
			name: '',
			price: 0
		},
		{
			image: '',
			name: '',
			price: 0
		},
		{
			image: '',
			name: '',
			price: 0
		},
		{
			image: '',
			name: '',
			price: 0
		},
		{
			image: '',
			name: '',
			price: 0
		}
	],
	selected: {}
}

const setErrors = (state, action) => {
	return updateObject(state, { errors: action.errors })
}

const setLoading = (state, action) => {
	return updateObject(state, { loading: action.loading })
}

const setOptions = (state, action) => {
	return updateObject(state, { list: action.options })
}

const setSelectedOptions = (state, action) => {
	return updateObject(state, { selected: action.options })
}

const options_reducer = createReducer(
	initialState,
	{
		[OPTIONS_ERRORS]: setErrors,
		[OPTIONS_LOADING]: setLoading,
		[SET_OPTIONS]: setOptions,
		[SET_SELECTED_OPTIONS]: setSelectedOptions
	}
)

export default options_reducer