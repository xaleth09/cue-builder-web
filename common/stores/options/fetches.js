import { API, request, METHOD } from '../api'

//actions
import { setLoading, setErrors, setOptions } from './actions'

//constants
const ENDPOINT = API.ENDPOINT + '/options'

export const fetchOptions = names => {

	window.reduxStore.dispatch(setOptions(fakeOptions))

	// return request(ENDPOINT, METHOD.GET, setLoading, setErrors, { names: namesList })
	// 	.then(response => {
	// 		let options = response.results
	// 		window.reduxStore.dispatch(setOptions(options))
	// 		return response
	// 	})
}


//TODO: REMOVE
const fakeOptions = {
	pointCount: [0, 4, 6, 8],
	materials: [
		{
			imageURL: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			imageURL: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			imageURL: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			imageURL: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			imageURL: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			imageURL: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	],
	inlayCounts: [0, 1, 2, 3, 4],
	inlays: [
		{
			shape: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			shape: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			shape: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			shape: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			shape: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			shape: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	],
	rings: [
		{
			imageURL: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			imageURL: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			imageURL: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			imageURL: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			imageURL: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			imageURL: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	],
	joints: [
		{
			imageURL: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			imageURL: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			imageURL: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			imageURL: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			imageURL: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			imageURL: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	],
	wraps: [
		{
			imageURL: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			imageURL: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			imageURL: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			imageURL: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			imageURL: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			imageURL: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	],
	buttCaps: [
		{
			imageURL: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			imageURL: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			imageURL: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			imageURL: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			imageURL: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			imageURL: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	]
}