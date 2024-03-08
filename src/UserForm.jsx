import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
        setfirstname("");
        setlastname("");
        setEmail("");
        setPassword("");
        setconfirmPassword("");
    };

    return (
        <form onSubmit={createUser}>
            {
                hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>firstname: </label>
                <input type="text" onChange={(e) => setfirstname(e.target.value)} value={firstname} />
            </div>
            <div>
                <label>lasttname: </label>
                <input type="text" onChange={(e) => setlastname(e.target.value)} value={lastname} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div>
                <label>ConfirmPassword: </label>
                <input type="text" onChange={(e) => setconfirmPassword(e.target.value)} value={confirmpassword} />
            </div>
            <input type="submit" value="Create User" />
            <div>
                <h1>First Name: {firstname} </h1>
                <h1>Last Name: {lastname}</h1>
                <h1>Email: {email}</h1>
                <h1>Password: {password}</h1>
                <h1>ConfirmPasword: {confirmpassword}</h1>
            </div>
        </form>

    );

};

export default UserForm;