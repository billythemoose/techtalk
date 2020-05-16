import React, {useState} from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default function Login() {
    // Email state management 
    const [email, setEmail] = useState("");

    // Password state management 
    const [password, setPassword] = useState("");

    // Ensure all forms are filled correctly
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    // Submit login information 
    function handleSubmit(event) {
        event.preventDefault();
    }

    // Login component structure
    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>

                {/* Email Form */}
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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