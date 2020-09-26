import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        // this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        // this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handlerChange(event) {
        // console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handlerUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // handlerPasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    loginClicked() {
        //in28minutes, dummy
        // if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`);
        //     // this.setState({ showSuccessMessage: true })
        //     // this.setState({ hasLoginFailed: false })
        // }
        // else {
        //     console.log('Failed')
        //     this.setState({ showSuccessMessage: false })
        //     this.setState({ hasLoginFailed: true })
        // }

        AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`);
            })
            .catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })

        // console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credential</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handlerChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handlerChange} />
                    <button onClick={this.loginClicked} className="btn btn-primary">Login</button>
                </div>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credential</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default LoginComponent