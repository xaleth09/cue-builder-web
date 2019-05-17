export const USER_ERRORS = 'USER_ERRORS'
export const USER_LOADING = 'USER_LOADING'
export const SET_SELF = 'SET_SELF'

export const setErrors = errors => {
	return { type: USER_ERRORS, errors }
}

export const setLoading = loading => {
	return { type: USER_LOADING, loading }
}

export const setSelf = user => {
	return { type: SET_SELF, user }
}