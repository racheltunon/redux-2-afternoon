import {createStore, combineReducers, applyMiddleware} from 'redux'
import budgetReducer from './redux/budgetReducer'
import userReducer from './redux/userReducer'
import promise from 'redux-promise-middleware'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promise));
