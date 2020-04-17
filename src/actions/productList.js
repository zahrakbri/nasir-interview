import axios from 'axios'

export const GET_DATA_BEGIN = 'GET_DATA_BEGIN'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE'
export const SELECT_TO_COMPARE = 'SELECT_TO_COMPARE'

export const getDataBegin = () => ({
  type: GET_DATA_BEGIN
})

export const getDataSuccess = data => ({
  type: GET_DATA_SUCCESS,
  payload: data
})

export const getDataFailure = error => ({
  type: GET_DATA_FAILURE,
  payload: { error }
})

export function getData () {
  return dispatch => {
    dispatch(getDataBegin())
    return axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(function (response) {
        console.log('###', response.data.data)
        dispatch(getDataSuccess(response.data.data))
      })
      .catch(error => {
        dispatch(getDataFailure(error))
        console.log('###eee', error)
      })
  }
}

export const selectToCompare = product => ({
  type: SELECT_TO_COMPARE,
  payload: product
})
