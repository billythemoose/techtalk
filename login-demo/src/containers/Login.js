import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
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
                <Form.Group controlId="email" bsSize="large">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        value={username}
                        onChange={e => setUser(e.target.value)}
                        autoFocus
                    />
                </Form.Group>

                {/* Password Form */}
                <Form.Group controlId="password" bsSize="large">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>

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