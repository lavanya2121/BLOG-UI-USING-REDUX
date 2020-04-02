import { createStore,combineReducers,applyMiddleware} from 'redux'
import usersReducer from '../reducers/usersReducer'
import thunk from 'redux-thunk'
import postsReducer from '../reducers/postsReducer' 
import commentsReducer from '../reducers/commentsReducer'

const configureStore =  () => {
    const store = createStore(combineReducers({
        users : usersReducer,
        posts : postsReducer,
        comments : commentsReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore
