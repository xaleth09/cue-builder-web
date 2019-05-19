export const CUE_ERRORS = 'CUE_ERRORS'
export const CUE_LOADING = 'CUE_LOADING'
export const SET_CUE = 'SET_CUE'

export const setErrors = errors => {
	return { type: CUE_ERRORS, errors }
}

export const setLoading = loading => {
	return { type: CUE_LOADING, loading }
}

export const setCue = cue => {
	return { type: SET_CUE, cue }
}