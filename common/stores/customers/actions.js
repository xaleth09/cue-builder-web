export const CUSTOMERS_ERRORS = 'CUSTOMERS_ERRORS'
export const CUSTOMERS_LOADING = 'CUSTOMERS_LOADING'
export const SET_CUSTOMERS = 'SET_CUSTOMERS'
export const SET_SELECTED_CUSTOMERS = 'SET_SELECTED_CUSTOMERS'

export const setErrors = errors => {
	return { type: CUSTOMERS_ERRORS, errors }
}

export const setLoading = loading => {
	return { type: CUSTOMERS_LOADING, loading }
}

export const setCustomers = customers => {
	return { type: SET_CUSTOMERS, customers }
}

export const setSelectedCustomers = customers => {
	return { type: SET_SELECTED_CUSTOMERS, customers }
}