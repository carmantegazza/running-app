const initialState = {
    user: undefined,

}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'user':
            return {
                ...state,
                user: action.payload,
            }

        default:
            return state
    }
}
export default userReducer