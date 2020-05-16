import React, {useState} from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Auth} from "aws-amplify";
import "./Login.css";

export default function Login() {
    // Username state management 
    const [username, setUser] = useState("");

    // Password state management 
    const [password, setPassword] = useState("");

    // Ensure all forms are filled correctly
    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    // Submit login information 
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const user = await Auth.signIn(username, password);
            alert ("Logged in successfully");
            console.log(user);
        }
        catch (e) {
            alert(e.message);
        }
    }

    // Login component structure
    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>

                {/* Username Form */}
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl 
                        value={username}
                        onChange={e => setUser(e.target.value)}
                        autoFocus
                    />
                </FormGroup>

                {/* Password Form */}
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>

                {/* Submit button */}
                <Button 
                    block
                    bsSize="large"
                    disabled={!validateForm()}
                    type="submit"
                >
                    Login
                </Button>
            </form>
        </div>
    )
}