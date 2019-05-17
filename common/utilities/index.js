export function debounce (callback, delay = 500) {
	let timeout
	return function executedFunction (value, cancel = false) {
		let context = this
		const later = function () {
			timeout = null
			callback.apply(context, [value])
		}
		clearTimeout(timeout)
		timeout = !cancel ? setTimeout(later, delay) : null
	}
}

export const DateFormat = (date) => {
	if (!date) {
		return 'N/A'
	}

	let newDate = new Date(date)
	let day = newDate.getDate()
	let month = newDate.getMonth() + 1
	let year = newDate.getFullYear()

	let string = year + '-'
	string += month < 10 ? '0' + month + '-' : month + '-'
	string += day < 10 ? '0' + day : day

	return string
}

export const Strings = {
	isEmpty: (input) => {
		return isEmpty(input)
	},
	isInteger: (input) => {
		return /^[0-9]+$/.test(input)
	},
	isEmail: (input) => {
		return /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-_]+[.][a-zA-Z]{2,63}$/.test(input)
	},
	isURLSafe: (input) => {
		return /^[a-zA-Z0-9_-]*$/.test(input)
	}
}

export const isEmpty = input => {
	if (input === null) {
		return true
	}
	const obj = typeof input === 'object' ? !Object.getOwnPropertyNames(input).length : false
	const arr = Array.isArray(input) ? !input.length : false

	return !input || obj || arr
}

export const isString = string => {
	return typeof string === 'string' || string instanceof String
}

export const updateItemInArray = (arr, newValue) => {
	let updatedArr = Array.from(arr)
	for (let i = 0; i < updatedArr.length; i++) {
		if (JSON.stringify(updatedArr[i]) === JSON.stringify(newValue)) {
			updatedArr.splice(i, 1)
			return updatedArr
		}
	}

	return [...updatedArr, newValue]
}

export const updateItemsInArray = (array, items) => {
	for (let item of items) {
		array = updateItemInArray(array, item)
	}
	return array
}

export const mapFromArray = (arr) => {
	let map = {}
	if (Array.isArray(arr)) {
		map = arr.reduce((map, ele) => {
			let key = ele.hasOwnProperty('id') ? ele.id : ele.name
			map[key] = ele
			return map
		}, {})
	}

	return map
}

export const mapToArray = (obj) => {
	return Object.values(obj)
}

export const updateObject = (oldObject, newValues) => {
	return Object.assign({}, oldObject, newValues)
}

export const addToMap = (objectMap, objectItm) => {
	objectMap = Object.assign({}, objectMap)
	if (Array.isArray(objectItm)) {
		objectItm.forEach(item => {
			objectMap[item.id] = item
		})
	} else {
		objectMap[objectItm.id] = objectItm
	}

	return objectMap
}

export const removeFromMap = (objectMap, objectItm) => {
	objectMap = Object.assign({}, objectMap)
	if (Array.isArray(objectItm)) {
		objectItm.forEach(item => {
			delete objectMap[item.id]
		})
	} else {
		delete objectMap[objectItm.id]
	}

	return objectMap
}

export const filterFromMap = (objectMap, id, value) => {
	return Object.keys(objectMap)
		.filter(key => objectMap[key][id] !== value)
		.reduce((objectRes, key) => {
			objectRes[key] = objectMap[key]
			return objectRes
		}, {})
}

export const sortObjects = (array, property, secondaryProperty, reverse) => {
	array.sort((a, b) => {
		return secondaryProperty ?
			compare2(a[property], b[property], a[secondaryProperty], b[secondaryProperty], reverse)
			: compare(a[property], b[property], reverse)
	})

	return array
}

export const compare = (a, b, reverse) => {
	let order = reverse ? -1 : 1

	if (a == null && b == null) {
		return 0
	}
	if (a == null) {
		return order
	}
	if (b == null) {
		return -1 * order
	}

	if (typeof a === 'string') {
		a = a.toUpperCase()
		b = b.toUpperCase()
	}

	return a < b ? -1 * order : a > b ? order : 0
}

export const compare2 = (a, b, c, d, reverse) => {
	return a !== b ? compare(a, b, reverse) : compare(c, d)
}