import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { filterPost } from '../selectors/postSelector'
import { findUser } from '../selectors/userSelector'

function UsersShow(props){ 
console.log("user",props.user)
console.log("post",props.posts)
    return(
        <div>
           
            {
                props.user && props.posts?(
                   <div>
                        <h2> NAME -{props.user.name}</h2>
                        <h3>POSTS WRITTEN BY USER </h3>
                        <ul>
                            {
                                props.posts.map(post => {
                                return <li key={post.id}><Link to={`/posts/${post.userId}`}>{post.title}</Link></li>
                                })
                            }
                        </ul>
                   </div>
                ):(
                    <p>loading....</p>
                )
            }
        </div>
    )
}
const mapStateToProps = (state,props) =>{
    const id = props.match.params.id
    return {
        user : findUser(state.users,id),
        posts : filterPost(state.posts,id)
        
    }
}
export default connect(mapStateToProps)(UsersShow)