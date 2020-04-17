import {
  GET_DATA_BEGIN,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  SELECT_TO_COMPARE
} from '../actions/productList.js'

const INIT = {
  data: [],
  compareList: [],
  loading: true,
  error: null
}

const product = (state = INIT, action) => {
  switch (action.type) {
    case GET_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: []
      }

    case SELECT_TO_COMPARE:
      return {
        ...state,
        compareList: [ ...state.compareList, action.payload ]
      }
    default:
      return state
  }
}
export default product
