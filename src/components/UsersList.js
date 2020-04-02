import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Card,Col,Row} from 'react-bootstrap'

function UsersList(props){
    return(
        <div>
            <h2 style={{textAlign:'center',padding:'15px'}}>USER LIST-{props.users.length}</h2>
            {/*
                <ul>
            {
                 props.users.map( user => {
                return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                })
            }   
            </ul>
            */}
            <div className="container" >
            <Row>
            {
                 props.users.map( user => {
                     return(
                       <Col md="3" className="mb-3" key={user.id}>
                          <Card>
                            <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png"  alt="Card image cap" />
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/users/${user.id}`}>
                                        {user.name}
                                    </Link>
                                </Card.Title>
                            </Card.Body>
            
                           </Card>
                        </Col>
                 )})
            }
            </Row>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}
export default connect(mapStateToProps)(UsersList)