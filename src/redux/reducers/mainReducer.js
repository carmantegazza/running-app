import { combineReducers } from 'redux'
import userReducer from './userReducer'
import appReducer from './appReducer'

const mainReducer = combineReducers({
    userReducer,
    appReducer
})
export default mainReducer