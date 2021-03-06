import { ActionTypes } from "../constants/product-action-types"

export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	}
}

export const seletedProduct = (product) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: product,
	}
}

export const removeSeletedProduct = (product) => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCT,
	}
}