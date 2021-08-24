import * as types from './actionTypes';

export default function productReducer(state = [], action) {
  switch(action.type) {
    case types.ADD_PRODUCT:
      return [...state, {...action.product}];
    case types.DELETE_PRODUCT:
      return state;
    default:
      return state;
  }
}