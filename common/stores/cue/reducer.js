// utils
import { createReducer } from '../utils'
import { sortObjects, updateObject } from 'utilities'

// actions
import {
	CUE_ERRORS,
	CUE_LOADING,
	SET_CUE
} from './actions'

const initialState = {
	errors: null,
	loading: false,
	config: {
		joint: {
			name: '',
			price: 0,
			imageURL: ''
		},
		rings: {
			collar: {
				name: '',
				price: 0,
				imageURL: ''
			},
			wrap: {
				name: '',
				price: 0,
				imageURL: ''
			},
			sleeve: {
				name: '',
				price: 0,
				imageURL: ''
			}
		},
		forearm: {
			material: {
				name: '',
				price: 0,
				imageURL: ''
			},
			inlay: {
				name: '',
				price: 0,
				material: {
					name: '',
					price: 0,
					imageURL: ''
				},
				svg: ''
			},
			points: {
				count: 4,
				style: '',
				material: {
					name: '',
					price: 0,
					imageURL: ''
				}
			},
			veneers: {
				count: 3,
				materials: {
					1: {
						name: '',
						price: 0,
						imageURL: ''
					},
					2: {
						name: '',
						price: 0,
						imageURL: ''
					},
					3: {
						name: '',
						price: 0,
						imageURL: ''
					}
				}
			}
		},
		wrap: {
			name: '',
			price: 0,
			imageURL: ''
		},
		sleeve: {
			windowShape: {
				name: '',
				price: 0,
				svg: ''
			},
			material: {
				name: '',
				price: 0,
				imageURL: ''
			},
			inlay: {
				name: '',
				price: 0,
				svg: '',
				material: {
					name: '',
					price: 0,
					imageURL: ''
				}
			},
			veneers: {
				count: 3,
				materials: {
					1: {
						name: '',
						price: 0,
						imageURL: ''
					},
					2: {
						name: '',
						price: 0,
						imageURL: ''
					},
					3: {
						name: '',
						price: 0,
						imageURL: ''
					}
				}
			}
		},
		buttCap: {
			material: {
				name: '',
				price: 0,
				imageURL: ''
			}
		}
	}
}

const setErrors = (state, action) => {
	return updateObject(state, { errors: action.errors })
}

const setLoading = (state, action) => {
	return updateObject(state, { loading: action.loading })
}

const setCue = (state, action) => {
	return updateObject(state, { config: action.cue })
}

const cue_reducer = createReducer(
	initialState,
	{
		[CUE_ERRORS]: setErrors,
		[CUE_LOADING]: setLoading,
		[SET_CUE]: setCue
	}
)

export default cue_reducer