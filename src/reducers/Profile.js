
const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_USER_ID':
            return { ...state, userId: action.userId }
        case 'CHANGE_FULLNAME':
            return { ...state, fullname: action.fullname }
        case 'CHANGE_DOB':
            return { ...state, dob: action.dob }
        case 'CHANGE_GENDER':
            return { ...state, gender: action.gender }
        case 'CHANGE_ADDRESS':
            return { ...state, address: action.address }
        default:
            return state
    }
}

export default profileReducer;