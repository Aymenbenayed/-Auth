/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import { MDBBtn, MDBInput } from "mdbreact";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Errors from "../../Components/Errors";

import { register, videErrors } from "../../JS/actions/user";

import "./SignUp.css";

const SignUp = ({ history }) => {
  const [user, setuser] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            {" "}
            <img src="https://i.imgur.com/uNGdWHi.png" className="image" alt="." />
          </div>{" "}
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row mb-4 px-3">
                <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                <div className="facebook text-center mr-3">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div className="twitter text-center mr-3">
                  <i class="fab fa-twitter"></i>
                </div>
                <div className="linkedin text-center mr-3">
                  <i class="fab fa-linkedin"></i>
                </div>
              </div>
              <div className="row px-3 mb-4">
                <div className="line" />{" "}
                <small className="or text-center">Or</small>
                <div className="line" />
              </div>
              
                {/* Full Name  */}
                <MDBInput label="name" icon="user"
                type="text"
                name="name"
                onChange={handleChange} />

                {/* Pseudo */}

                <MDBInput label="Pseudo" icon="user-edit"
                type="text"
                name="lastName"
                  onChange={handleChange} />

                {/* email */}

                <MDBInput label="Email" icon="at"
              type="text"
              name="email"
                  onChange={handleChange} />

                {/* Phone  */}

                <MDBInput label="phone" icon="mobile-alt"
                type="Number"
                name="phone"
                  onChange={handleChange} />
              
                {/* Password  */}

                <MDBInput label="Password" icon="unlock-alt"
                type="Password"
                name="password"
                onChange={handleChange} /> 

                {/* adress */}

                <MDBInput label="Adress" icon="map-marked"
                type="text"
                name="adress"
                onChange={handleChange} /> 
              <div className="row mb-3 px-3">
                {" "}
                <MDBBtn className="BtnSign" gradient="aqua" type="submit" 
                  onClick={() => {dispatch(register(user, history));} }  
                  >Sign In</MDBBtn>
              </div>
              <div className="row mb-4 px-3">
                {" "}
                <small className="font-weight-bold">
                  Don't have an account?{" "}
                  <Link to="/signin">
                    <a className="text-danger ">SignIn</a>
                  </Link>
                </small>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
