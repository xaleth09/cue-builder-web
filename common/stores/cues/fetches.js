import { API, request, METHOD } from '../api'

//actions
import { setLoading, setErrors, setOptions } from './actions'

//constants
const ENDPOINT = API.ENDPOINT + '/options'

export const searchOptions = names => {


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
	woods: [
		{
			image: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			image: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			image: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			image: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			image: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			image: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	],
	inlayCounts: [0, 1, 2, 3, 4],
	inlays: [
		{
			image: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			image: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			image: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			image: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			image: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			image: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	],
	rings: [
		{
			image: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			image: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			image: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			image: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			image: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			image: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	],
	joints: [
		{
			image: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			image: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			image: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			image: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			image: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			image: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	],
	wraps: [
		{
			image: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			image: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			image: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			image: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			image: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			image: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	],
	buttCaps: [
		{
			image: '/img/cocobolo.jpg',
			name: 'Cocobolo',
			price: 100
		},
		{
			image: '/img/snakewood.jpg',
			name: 'Snakewood',
			price: 100
		},
		{
			image: '/img/birdseye-maple.jpg',
			name: 'Birdseye Maple',
			price: 75
		},
		{
			image: '/img/curly-maple.jpg',
			name: 'Curly Maple',
			price: 50
		},
		{
			image: '/img/light-blue-stained-maple.jpg',
			name: 'Light Blue Stained Maple',
			price: 75
		},
		{
			image: '/img/purple-heart.jpg',
			name: 'Purple Heart',
			price: 100
		}
	]
}