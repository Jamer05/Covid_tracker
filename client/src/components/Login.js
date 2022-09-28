import React, { Component } from "react";
import { Row, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import './login.css';
import { useState } from 'react';
import Axios from 'axios';

class Login extends Component {

    constructor(props) {

    }
}
function LoginForm(){

    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [id, setId] = useState("");

    const addUser = () => {
        Axios.post('http://localhost:3001/create', {
            email: email,
            pass: pass
        }).then(() => {
            console.log('success');
        });
    };
    //del user by id
    const delUser = () => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            console.log(response);
        });
    };
    return (

        <div className="LoginForm"s>
            <Row>
                <form onSubmit={this.login}>
                    <FormGroup controlId="email">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="text" name="email" placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)} />

                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" name="password" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)} />

                    </FormGroup>
                    <Button type="submit" bsStyle="primary" onClick={addUser}>Sign-In</Button>
                </form>
            </Row>
        </div>
    )
}


export default Login;