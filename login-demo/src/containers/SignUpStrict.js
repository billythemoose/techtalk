import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import {Auth} from "aws-amplify";
import "./Login.css";

export default function SignUpStrict() {
    // Email state management 
    const [email, setUser] = useState("");

    // Password state management 
    const [password, setPassword] = useState("");

    // Name state management 
    const [name, setName] = useState("");

    // Preferred username state management 
    const [username, setUsername] = useState("");

    // Birthdate state management 
    const [birthdate, setBirthdate] = useState("");

    // Phone number state management 
    const [phone, setPhone] = useState("");

    // Street address state management 
    const [street, setStreet] = useState("");

    // Locality (city) address state management 
    const [locality, setLocality] = useState("");

    // Region (state) address state management 
    const [region, setRegion] = useState("");

    // Postal Code address state management 
    const [postal, setPostal] = useState("");

    // Country address state management 
    // const [country, setCountry] = useState("");

    
    // Ensure all forms are filled correctly
    function validateForm() {
        return email.length > 0 && validatePassword();
    }

    function validatePassword() {
        return validatePasswordLength();
        /*
            && validatePasswordUpper()
            && validatePasswordLower()
            && validatePasswordNumber()
            && validatePasswordSpecial()
            && validatePasswordWhitespace()
        */
    }

    function validatePasswordLength() {
        return password.length >= 16
    }

    function validatePasswordUpper() {
        var up = RegExp('[A-Z]');
        return up.test(password);
    }

    function validatePasswordLower() {
        var down = RegExp('[a-z]');
        return down.test(password);
    }

    function validatePasswordNumber() {
        var number = RegExp('\\d');
        return number.test(password);
    }

    function validatePasswordSpecial() {
        var special = RegExp('[^0-9a-zA-Z_]');
        return special.test(password);
    }

    function validatePasswordWhitespace() {
        var white = RegExp('\\S');
        return white.test(password);
    }

    // Submit login information 
    async function handleSubmit(event) {
        event.preventDefault();

        const add = {
            street_address: street,
            locality: locality,
            region: region,
            postal_code: postal,
            country: "United States of America"
        } 

        try {
            
            const signup = {
                username: email,
                password: password,
                attributes: {
                    email: email,
                    name: name, 
                    preferred_username: username, 
                    birthdate: birthdate, 
                    phone_number: `+${phone}`, 
                    address: JSON.stringify(add) 
                }
            };            
            
            const user = await Auth.signUp(signup);

            alert ("Logged in successfully");
            console.log(user);
        }
        catch (e) {
            console.log(e);
        }
    }

    // Login component structure
    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>

                {/* Email Form */}
                <Form.Group controlId="email" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type={email}
                        value={email}
                        onChange={e => setUser(e.target.value)}
                        autoFocus
                    />
                </Form.Group>

                {/* Password Form */}
                <Form.Group controlId="password" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>

                {/* Name Form */}
                <Form.Group controlId="name" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>

                {/* Username Form */}
                <Form.Group controlId="username" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>

                {/* Birthdate Form */}
                <Form.Group controlId="birthdate">
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control
                        type="date"
                        value={birthdate}
                        onChange={e => setBirthdate(e.target.value)}
                        size="lg"
                    />
                </Form.Group>
                
                {/* Phone Form */}
                <Form.Group controlId="phone" >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        placeholder="1234 Main St" 
                        value={street} 
                        onChange={e => setStreet(e.target.value)}
                    />
                </Form.Group>

                {/* Address Form */}
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                        value={locality}
                        onChange={e => setLocality(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select"
                        value={region} 
                        onChange={e => setRegion(e.target.value)}>
                        <option>WA</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control 
                        value={postal}
                        onChange={e => setPostal(e.target.value)}
                    />
                    </Form.Group>
                </Form.Row>

                {/* Submit button */}
                <Button 
                    block
                    
                    disabled={!validateForm()}
                    type="submit"
                >
                    Login
                </Button>
            </form>
        </div>
    )
}