import * as types from './actionTypes';

export const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  product
}) 

export const deleteProduct = (product) => ({
  type: types.DELETE_PRODUCT,
  product
})