import { API, request, METHOD } from '../api'

//actions
import { setLoading, setErrors, setCue } from './actions'

//constants
const ENDPOINT = API.ENDPOINT + '/cue'

export const fetchCue = () => {

	window.reduxStore.dispatch(setCue(fakeCue))

	// return request(ENDPOINT, METHOD.GET, setLoading, setErrors, { names: namesList })
	// 	.then(response => {
	// 		let cue = response.results
	// 		window.reduxStore.dispatch(setCue(cue))
	// 		return response
	// 	})
}


//TODO: REMOVE
const fakeCue = {
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
			imageURL: '/img/birdseye-maple.jpg'
		},
		inlay: {
			name: '',
			price: 0,
			material: {
				name: '',
				price: 0,
				imageURL: ''
			},
			shape: ''
		},
		points: {
			count: 4,
			shape: '',
			material: {
				name: '',
				price: 0,
				imageURL: '/img/cocobolo.jpg'
			},
			veneers: {
				count: 3,
				materials: {
					1: {
						name: '',
						price: 0,
						imageURL: '/img/light-blue-stained-maple.jpg'
					},
					2: {
						name: '',
						price: 0,
						imageURL: '/img/curly-maple.jpg'
					},
					3: {
						name: '',
						price: 0,
						imageURL: '/img/light-blue-stained-maple.jpg'
					}
				}
			}
		}
	},
	wrap: {
		name: '',
		price: 0,
		imageURL: '/img/snakewood.jpg'
	},
	sleeve: {
		window: {
			name: '',
			price: 0,
			shape: '',
			veneers: {
				count: 3,
				materials: {
					1: {
						name: '',
						price: 0,
						imageURL: '/img/light-blue-stained-maple.jpg'
					},
					2: {
						name: '',
						price: 0,
						imageURL: '/img/curly-maple.jpg'
					},
					3: {
						name: '',
						price: 0,
						imageURL: '/img/light-blue-stained-maple.jpg'
					}
				}
			}
		},
		material: {
			name: '',
			price: 0,
			imageURL: '/img/birdseye-maple.jpg'
		},
		inlay: {
			name: '',
			price: 0,
			shape: '',
			material: {
				name: '',
				price: 0,
				imageURL: ''
			}
		}
	},
	buttCap: {
		material: {
			name: '',
			price: 0,
			imageURL: '/img/purple-heart.jpg'
		}
	}
}