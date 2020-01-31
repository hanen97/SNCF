import React, {Component} from "react";
import {LoginCall} from "./LoginApi";


export default class LoginSncf extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            password: "",
            status: "",
            isLog: false
        };
        this.setLoggedIn = this.setLoggedIn.bind(this);
        this.lunchLogin = this.lunchLogin.bind(this);
    }

    async setLoggedIn(isLog: boolean) {
        this.setState({isLog: isLog});
    }

    async lunchLogin() {
        let isConnected = await LoginCall(this.state.email, this.state.password);
        this.props.setLoggedIn(isConnected);
        isConnected ? this.setState({status: true}) : this.setState({status: false});
    }
    

    render() {
        if (!this.props.loggedIn) {
           
            return (
                <form>
    
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    onChange={e => this.setState({email: e.target.value})} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    onChange={e => this.setState({password: e.target.value})}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.lunchLogin}>Submit</button>

            </form>
            );
            
        } else {
            return (
                <p>Welcome</p>
            )
        }

    }
}
