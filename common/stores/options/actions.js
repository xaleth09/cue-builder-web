export const OPTIONS_ERRORS = 'OPTIONS_ERRORS'
export const OPTIONS_LOADING = 'OPTIONS_LOADING'
export const SET_OPTIONS = 'SET_OPTIONS'
export const SET_SELECTED_OPTIONS = 'SET_SELECTED_OPTIONS'

export const setErrors = errors => {
	return { type: OPTIONS_ERRORS, errors }
}

export const setLoading = loading => {
	return { type: OPTIONS_LOADING, loading }
}

export const setOptions = options => {
	return { type: SET_OPTIONS, options }
}

export const setSelectedOptions = options => {
	return { type: SET_SELECTED_OPTIONS, options }
}