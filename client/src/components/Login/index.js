import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/index';

import './styles.css';

class Login extends Component {

    state = {
        email       : '',
        password    : '',
        error       : '',
        success     : false
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.user.login.isAuth) {
            this.props.history.push('/')
        }
    }

    handleInputEmail    = (event) => { this.setState({ email    : event.target.value })}
    handleInputPassword = (event) => { this.setState({ password : event.target.value })}

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch( loginUser(
            this.state
        ));
    }

    render() {
        return (
            <div className="bg-gradient-primary" style={{fontFamily:'Nunito'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-12 col-xl-10" style={{marginTop: "10%", marginBottom: "10%"}}>
                            <div className="card shadow-lg o-hidden border-0 my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-flex">
                                            <div 
                                                className="flex-grow-1 bg-login-image"
                                                style={{backgroundImage:`url('assets/img/AuthBackground/image3.jpeg')`}}/>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h4 className="text-dark mb-4">Welcome Back!</h4>
                                                </div>
                                                <form className="user" onSubmit={ this.submitForm }>
                                                    <div className="mb-3">
                                                        <input
                                                            className   = "form-control form-control-user"
                                                            type        = "email"
                                                            id          = "exampleInputEmail"
                                                            aria-describedby = "emailHelp"
                                                            placeholder = "Enter Email Address..."
                                                            name        = "email"
                                                            value       = { this.state.email }
                                                            onChange    = { this.handleInputEmail }
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            className   = "form-control form-control-user"
                                                            type        = "password"
                                                            id          = "exampleInputPassword"
                                                            placeholder = "Password"
                                                            name        = "password"
                                                            value       = { this.state.password }
                                                            onChange    = { this.handleInputPassword }

                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="custom-control custom-checkbox small">
                                                            <div className="form-check">
                                                                <input
                                                                    className   = "form-check-input custom-control-input"
                                                                    type        = "checkbox"
                                                                    id          = "formCheck-1"
                                                                />
                                                                <label 
                                                                    className="form-check-label custom-control-label" 
                                                                    htmlFor="formCheck-1"
                                                                >
                                                                    Remeber Me
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className   = "btn btn-primary d-block btn-user w-100"
                                                        type        = "submit"
                                                        style       = {{color: '#fff', backgroundColor: '#4e73df', borderColor: '#4e73df'}}
                                                    >Login</button>
                                                    <hr/>
                                                    <a 
                                                        className   = "btn btn-primary d-block btn-google btn-user w-100 mb-2" 
                                                        role        = "button"
                                                    >
                                                        <i className="fab fa-google"></i>
                                                        &nbsp; Login with Google
                                                    </a>
                                                    <a
                                                        className   = "btn btn-primary d-block btn-facebook btn-user w-100"
                                                        role        = "button"
                                                    >
                                                            <i className="fab fa-facebook-f"></i>
                                                            &nbsp; Login with Facebook
                                                    </a>
                                                    <hr/>
                                                </form>
                                                <div className="text-center"><a className="small" href="/forgot-password">Forgot Password?</a></div>
                                                <div className="text-center"><a className="small" href="/register">Create an Account!</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Login)