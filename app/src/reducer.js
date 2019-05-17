// redux
import { combineReducers } from 'redux'

// reducers
import customersReducer from 'stores/customers/reducer'
import profilesReducer from 'stores/profiles/reducer'
import locationsReducer from 'stores/locations/reducer'
import tradesReducer from 'stores/trades/reducer'
import providersReducer from 'stores/providers/reducer'
import sortsReducer from 'stores/sorts/reducer'
import geographiesReducer from 'stores/geographies/reducer'
import metricsReducer from 'stores/metrics/reducer'
import userReducer from 'stores/user/reducer'
import defaultsReducer from 'stores/defaults/reducer'

const appReducer = combineReducers({
	sorts: sortsReducer,
	customers: customersReducer,
	profiles: profilesReducer,
	locations: locationsReducer,
	trades: tradesReducer,
	providers: providersReducer,
	geographies: geographiesReducer,
	metrics: metricsReducer,
	user: userReducer,
	defaults: defaultsReducer
})

export default appReducer