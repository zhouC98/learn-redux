import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import axios from 'axios'
import {getListAction} from './actionCreators'
function* mySagas() {
  yield takeEvery(GET_MY_LIST, getList)
}

function*  getList(){
  const res = yield axios.get('https://www.fastmock.site/mock/af09288136e49cfadaafba2b9c91ad7b/todo/redux')
  const data = res.data
  const action = getListAction(data)
  yield put(action)
}

export default mySagas