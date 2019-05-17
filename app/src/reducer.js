// redux
import { combineReducers } from 'redux'

// reducers
import customersReducer from 'stores/customers/reducer'
import userReducer from 'stores/user/reducer'

const appReducer = combineReducers({
	customers: customersReducer,
	user: userReducer
})

export default appReducer