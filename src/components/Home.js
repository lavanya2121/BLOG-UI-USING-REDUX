import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card ,Button} from 'react-bootstrap'

function Home(){
    return(
        <div>
            {/*<h2>Home</h2>*/}
            <Card style={{ backgroundColor: '#333',color:'#fff'}}>
                <Card.Body >
                    <Card.Title>Front End App</Card.Title>
                    <Card.Text>
                    List the Users and User to view posts written by user, 
                    and view comments related to each post .

                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Home