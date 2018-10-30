import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import pokemonReducer from '../reducer/pokemonReducer'

const rootReducers = combineReducers({
    pokemonReducer
})

const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

export default store