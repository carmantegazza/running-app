const initialState = {
    showNav: false,
    snackbar: {
        view: false,
        message: '',
        success: true
    },
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'showNav':
            return {
                ...state,
                showNav: action.payload,
            }
        case 'message':
            return {
                ...state,
                snackbar: action.payload,
            }

        default:
            return state
    }
}
export default appReducer