// redux
import { combineReducers } from 'redux'

// reducers
import userReducer from 'stores/user/reducer'
import customersReducer from 'stores/customers/reducer'
import optionsReducer from 'stores/options/reducer'
import cueReducer from 'stores/cue/reducer'

const appReducer = combineReducers({
	user: userReducer,
	customers: customersReducer,
	options: optionsReducer,
	cue: cueReducer
})

export default appReducer