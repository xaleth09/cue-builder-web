// redux
import { combineReducers } from 'redux'

// reducers
import userReducer from 'stores/user/reducer'
import customersReducer from 'stores/customers/reducer'
import optionsReducer from 'stores/options/reducer'

const appReducer = combineReducers({
	user: userReducer,
	customers: customersReducer,
	options: optionsReducer
})

export default appReducer