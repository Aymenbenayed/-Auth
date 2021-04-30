import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout } from '../../JS/actions/user';
import "./Navbar.css"

const Navbarr = () => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
    return (
        <div>
            <div>
              <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/">Authentification</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {isAuth ? <Nav.Link href="/Profile">Profile</Nav.Link> : null }
              </Nav>
              <Form inline>
    {  isAuth ? (
        <div>
        <h1>
              Welcome <br /> <span>{user && user.pseudo}</span>
            </h1>
              <Link to="/" onClick={() => dispatch(logout())}>
              {" "}
              <a href="#" className="btn-area">Logout</a>
        </Link>
        </div>
        
      ) : (
        <div className="btns">
          <Link to="/signup">
            {" "}
            <a href="#" className="btn-area">SignUp</a>
          </Link>

          <Link to="/signin">
            <a href="#" className="btn-area" >
              SignIn
            </a>
          </Link>
        </div>
      )}
    </Form>
  </Navbar>
    </div>
        </div>
    )
}

export default Navbarr
