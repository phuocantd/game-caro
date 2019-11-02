const initState = {
    fetching: false,
    fetched: false,
    data: {},
    error: null
}

const dataQueryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_PENDING':
            return { ...state, fetching: true }

        case 'FETCH_DATA_REJECTED':
            return { ...state, fetching: false, error: action.payload }

        case 'FETCH_DATA_FULFILLED':
            return { ...state, fetching: false, fetched: true, data: action.payload }
        default:
            return state
    }

}

export default dataQueryReducer