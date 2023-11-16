const initialState = {
    user: undefined,
    userChange: false,

}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'user':
            return {
                
                ...state,
                user: action.payload,
            }
            case 'userChange':
            return {
                
                ...state,
                userChange: action.payload,
            }

        default:
            return state
    }
}
export default userReducer