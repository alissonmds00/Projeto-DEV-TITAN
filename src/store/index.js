import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = { user: undefined, update: false }

function Reducer(state = initialState, action){
    switch(action.type){
        case 'login':
            return {...state, user: action.data}
        
        case 'logout':
            return {...state, user: undefined}

        case 'update':
            return {...state, update: !state.update}

        default:
            return state
    }
}

const store = createStore(
    Reducer,
    composeWithDevTools()
  )

export default store