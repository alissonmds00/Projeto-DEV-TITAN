import {createStore} from 'redux'

const initialState = { user: undefined }

function Reducer(state = initialState, action){
    switch(action.type){
        case 'login':
            return {...state, user: action.data}
        
        case 'logout':
            return {...state, user: undefined}

        default:
            return state
    }
}

const store = createStore(Reducer)

export default store