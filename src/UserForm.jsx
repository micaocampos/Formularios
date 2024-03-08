import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firsterror, setfirstError] = useState("");
    const [lasterror, setlastError] = useState("");
    const [emailerror, setemailError] = useState("");
    const [passerror, setpassError] = useState("");
    const [confirmerror, setconfirmError] = useState("");
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

    const handlefirstname = (e) => {
        setfirstname(e.target.value);
        if (e.target.value.length < 1) {
            setfirstError("Title is required!");
        } else if (e.target.value.length < 3) {
            setfirstError("Title must be 2 characters or longer!");
        } else {
            setfirstError('');
        }
    }
    const handlelastname = (e) => {
        setlastname(e.target.value);
        if (e.target.value.length < 1) {
            setlastError("Lastname is required!");
        } else if (e.target.value.length < 3) {
            setlastError("Lastname must be 2 characters or longer!");
        } else {
            setlastError('');
        }
    }
    const handleemail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setemailError("Email is required!");
        } else if (e.target.value.length < 3) {
            setemailError("Lastname must be 2 characters or longer!");
        } else {
            setemailError('');
        }
    }
    const handlepassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setpassError("password is required!");
        } else if (e.target.value.length < 3) {
            setpassError("password must be 2 characters or longer!");
        } else {
            setlastError('');
        }
    }
    const handleconfirm = (e) => {
        setconfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setconfirmError("Confirm is required!");
        } else if (e.target.value.length < 3) {
            setconfirmError("Conf must be 2 characters or longer!");
        } else {
            setconfirmError('');
        }
    }
    return (
        <form onSubmit={createUser}>
            {
                hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>firstname: </label>
                <input type="text" onChange={handlefirstname} />
                {
                    firsterror ?
                        <p style={{ color: 'red' }}>{firsterror}</p> :
                        ''

                }
            </div>
            <div>
                <label>lasttname: </label>
                <input type="text" onChange={handlelastname} />
                {
                    lasterror ?
                        <p style={{ color: 'red' }}>{lasterror}</p> :
                        ''

                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={handleemail} />
                {
                    emailerror ?
                        <p style={{ color: 'red' }}>{emailerror}</p> :
                        ''

                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={handlepassword} />
                {
                    passerror ?
                        <p style={{ color: 'red' }}>{passerror}</p> :
                        ''

                }
            </div>
            <div>
                <label>ConfirmPassword: </label>
                <input type="text" onChange={handleconfirm} />
                {
                    confirmerror ?
                        <p style={{ color: 'red' }}>{confirmerror}</p> :
                        ''

                }
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