import { GET_MY_LIST, CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

export const inputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})
export const addItemAction = (value) => ({
  type: ADD_ITEM,

})
export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})
export const getListAction = (data) => ({
  type: GET_LIST,
  data
})
export const getTodoList = () => {
  return async (dispatch) => {
    const res = await axios.get('https://www.fastmock.site/mock/af09288136e49cfadaafba2b9c91ad7b/todo/redux')
    const data = res.data
    const action = getListAction(data)
    dispatch(action)
  }
}
export const getMyListAction = (data) => ({
  type: GET_MY_LIST,
  data
})