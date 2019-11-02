import { applyMiddleware, createStore, compose } from "redux";
import axios from 'axios'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware'

const init = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}

const reducer = (state = init, action) => {
    switch (action.type) {
        case 'FETCH_USERS_PENDING':
            return { ...state, fetching: true }

        case 'FETCH_USERS_REJECTED':
            return { ...state, fetching: false, error: action.payload }

        case 'FETCH_USERS_FULFILLED':
            return { ...state, fetching: false, fetched: true, users: action.payload }

        default:
            return state
    }
}
const middleware = applyMiddleware(createPromise(), thunk, createLogger())
const store = createStore(reducer, compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f))

store.dispatch({
    type: 'FETCH_USERS',
    payload: axios.get(`http://localhost:3000/me`, { headers: { Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBodW9jYW50ZCIsInVzZXJJZCI6IjVkYjljMTRkMjM0MzkzMzRmMDc2NWJlZCIsImlhdCI6MTU3MjQ1NTI5NSwiZXhwIjoxNTcyNDU4ODk1fQ.EoD0Bh-u3O28_LxIUZSfu8VKQCsEvUqO3dB-77n8400'}` } })
})
