// utils
import { createReducer } from '../utils'
import { sortObjects, updateObject } from '../../utilities'

// actions
import {
	USER_ERRORS,
	USER_LOADING,
	SET_SELF
} from './actions'

const initialState = {
	errors: null,
	loading: false,
	user: null
}

const setErrors = (state, action) => {
	return updateObject(state, { errors: action.errors })
}

const setLoading = (state, action) => {
	return updateObject(state, { loading: action.loading })
}

const setTrades = (state, action) => {
	return updateObject(state, { user: action.user })
}

const user_reducer = createReducer(
	initialState,
	{
		[USER_ERRORS]: setErrors,
		[USER_LOADING]: setLoading,
		[SET_SELF]: setTrades
	}
)

export default user_reducer