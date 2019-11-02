function changeUserId(userId) {
    return { type: 'CHANGE_USER_ID', userId }
}

function changeFullName(fullname) {
    return { type: 'CHANGE_FULLNAME', fullname }
}

function changeDoB(dob) {
    return { type: 'CHANGE_DOB', dob }
}

function changeGender(gender) {
    return { type: 'CHANGE_GENDER', gender }
}

function changeAddress(address) {
    return { type: 'CHANGE_ADDRESS', address }
}

module.exports = { changeUserId, changeFullName, changeDoB, changeGender, changeAddress }