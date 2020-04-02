import React from 'react'
import {connect} from 'react-redux'
import { findPost } from '../selectors/postSelector'

function UsersComment(props){
    
   return(
        <div>
            { 
             props.post &&  props.comments ? (
                <div>
                   <h3>TITLE -{props.post.title}</h3>
                    <h3>BODY -{props.post.body}</h3>
                    <hr/>
                    <h3>COMMENTS </h3>
                    <ul>
                        {
                            props.comments.map(comment => {
                            return <li key={comment.id}>{comment.body}</li>
                            })
                        }
                    </ul>
                </div>
                
             ):(
                 <p>loading</p>
             )
             }
        </div>
    )
}
const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        post : findPost(state.posts,id),
       // user : findUser(state.users,id),
        comments : state.comments.filter(comment => comment.postId === parseInt(id)),
        
    }
   
}
export default connect(mapStateToProps)(UsersComment)