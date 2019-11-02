function changeUserId(userId) {
    return { type: 'CHANGE_USER_ID', userId }
}

function changeUserName(username) {
    return { type: 'CHANGE_USERNAME', username }
}

function changePassword(password) {
    return { type: 'CHANGE_PASSWORD', password }
}

module.exports = { changeUserId, changeUserName, changePassword }