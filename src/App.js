import React from 'react';
import { BrowserRouter,Link,Route} from 'react-router-dom'
import UsersList from './components/UsersList'
import UsersShow from './components/UsersShow'
import UsersComment from './components/UsersComment';
import PostsList from './components/PostsList'
import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,NavItem } from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
        <div > 
        <Navbar bg="light" bexpand="lg">
        <NavItem>
          <Link className="nav-link " to = "/home">BLOG UI</Link>
        </NavItem>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavItem>
          <Link className="nav-link " to = "/home">HOME</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link " to = "/users">USERS</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link " to = "/posts">POSTS</Link>
        </NavItem>
        
    </Nav>
  </Navbar.Collapse>
</Navbar>
          {/*
          <h2>BLOG UI</h2>
          <Link to="/home">HOME</Link>
          <Link to="/users">USERS</Link>
          <Link to="/posts">POSTS</Link>
           */}

          <Route path="/home" component={Home} exact={true}/>
          <Route path="/users" component={UsersList} exact={true}/>
          <Route path="/users/:id" component={UsersShow}  />
          <Route path="/posts/:id" component={UsersComment} />
          <Route path="/posts" component={PostsList} exact={true}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
