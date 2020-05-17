import React, {useState} from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
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
    const [country, setCountry] = useState("");

    
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
            street_address: "fdsa",
            locality: "Renton",
            region: "WA",
            postal_code: "98055",
            country: "United States of America"
        } 

        try {
            /*
            const user = await Auth.signUp({
                email,
                password,
                attributes: {
                    name: name, 
                    preferred_username: username, 
                    birthdate: birthdate, 
                    phone_number: phone, 
                    address: street 
                }
            });
            */
           const user = await Auth.signUp({
                username: email,
                password: password,
                attributes: {
                    email: email,
                    name: "Michael Thomas", 
                    preferred_username: "billythemoose", 
                    birthdate: "11/29/1991", 
                    phone_number: "+1234567890", 
                    address: JSON.stringify(add)
                }
            });
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
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl 
                        type={email}
                        value={email}
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

                {/* Name Form */}
                <FormGroup controlId="name" bsSize="large">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </FormGroup>

                {/* Username Form */}
                <FormGroup controlId="username" bsSize="large">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </FormGroup>

                {/* Birthdate Form */}
                <FormGroup controlId="birthdate" bsSize="large">
                    <ControlLabel>Birthdate</ControlLabel>
                    <FormControl
                        type="date"
                        value={birthdate}
                        onChange={e => setBirthdate(e.target.value)}
                    />
                </FormGroup>
                
                {/* Phone Form */}
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
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