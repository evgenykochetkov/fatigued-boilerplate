import { call, put } from 'redux-saga/effects'

import { actionTypes } from './rootReducer'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default function * () {
  console.log('Hello Sagas!')
  yield call(delay, 2500)
  yield put({
    type: actionTypes.SET_GREETING,
    payload: 'Delayed hello from saga'
  })
}
