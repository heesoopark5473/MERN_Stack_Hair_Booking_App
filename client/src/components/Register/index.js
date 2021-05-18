import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userRegister } from '../../actions/index';

import './styles.css';

class Register extends Component {

    state = {
        firstname       : '',
        lastname        : '',
        email           : '',
        password        : '',
        repeatPassword  : '',
        error           : '',
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.user.register === false) {
            this.setState({ error : nextProps.user.message })
        } else {
            this.props.history.push('/')
        }
    }

    handleInputEmail            = (event) => { this.setState({ email            : event.target.value }) }
    handleInputFirstName        = (event) => { this.setState({ firstname        : event.target.value }) }
    handleInputLastName         = (event) => { this.setState({ lastname         : event.target.value }) }
    handleInputPassword         = (event) => { this.setState({ password         : event.target.value }) }
    handleInputRepeatPassword   = (event) => { this.setState({ repeatPassword   : event.target.value }) }

    submitForm = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.repeatPassword) {
            this.setState({ error : '' })
            this.props.dispatch( userRegister(
                this.state
            ))
        } else {
            this.setState({ error : 'Password Does Not Match'})
        }
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
                                        <div className="col-lg-5 d-none d-lg-flex">
                                            <div 
                                                className="flex-grow-1 bg-register-image"
                                                style={{backgroundImage:`url('assets/img/AuthBackground/image2.jpeg')`}}/>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h4 className="text-dark mb-4">Create an Account!</h4>
                                                </div>
                                                <form className="user" onSubmit={ this.submitForm }>
                                                    <div className="row mb-3">

                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input
                                                                className   = "form-control form-control-user"
                                                                type        = "text"
                                                                id          = "exampleFirstName"
                                                                placeholder = "First Name"
                                                                name        = "first_name"
                                                                value       = { this.state.firstname }
                                                                onChange    = { this.handleInputFirstName }
                                                            />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className   = "form-control form-control-user"
                                                                type        = "text"
                                                                id          = "exampleLastName"
                                                                placeholder = "Last Name"
                                                                name        = "last_name"
                                                                value       = { this.state.lastname }
                                                                onChange    = { this.handleInputLastName }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <input
                                                            className   = "form-control form-control-user"
                                                            type        = "email"
                                                            id          = "exampleInputEmail"
                                                            aria-describedby = "emailHelp"
                                                            placeholder = "Email Address"
                                                            name        = "email"
                                                            value       = { this.state.email }
                                                            onChange    = { this.handleInputEmail }
                                                        />
                                                    </div>

                                                    <div className="row mb-3">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input
                                                                className   = "form-control form-control-user"
                                                                type        = "password"
                                                                id          = "examplePasswordInput"
                                                                placeholder = "Password"
                                                                name        = "password"
                                                                value       = { this.state.password }
                                                                onChange    = { this.handleInputPassword }
                                                            />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className   = "form-control form-control-user"
                                                                type        = "password"
                                                                id          = "exampleRepeatPasswordInput"
                                                                placeholder = "Repeat Password"
                                                                name        = "password_repeat"
                                                                value       = { this.state.repeatPassword }
                                                                onChange    = { this.handleInputRepeatPassword }
                                                            />
                                                        </div>
                                                    </div>
                                                    <button 
                                                        className   = "btn btn-primary d-block btn-user w-100"
                                                        type        = "submit"
                                                        style       = {{color: '#fff', backgroundColor: '#4e73df', borderColor: '#4e73df'}}
                                                    >Register Account</button>

                                                    <div className="error">
                                                        { this.state.error }
                                                    </div>

                                                    <hr/>
                                                    <a 
                                                        className   = "btn btn-primary d-block btn-google btn-user w-100 mb-2"
                                                        role        = "button"
                                                    >
                                                        <i className="fab fa-google"></i>
                                                        &nbsp; Register with Google
                                                    </a>
                                                    <a 
                                                        className   = "btn btn-primary d-block btn-facebook btn-user w-100 mb-2"
                                                        role        = "button"
                                                    >
                                                        <i className="fab fa-facebook-f"></i>
                                                        &nbsp; Register with Facebook
                                                    </a>
                                                    <hr/>
                                                </form>
                                                <div className="text-center"><a className="small" href="/forgot-password">Forgot Password?</a></div>
                                                <div className="text-center"><a className="small" href="/login">Already have an account? Login!</a></div>
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

export default connect(mapStateToProps)(Register)