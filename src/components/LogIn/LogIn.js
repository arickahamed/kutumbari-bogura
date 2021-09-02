import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import firebaseConfig from './firebase.config';

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            console.log(signedInUser.name);
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            console.log(errorCode, errorMessage, email);
        });
    }

    return (
        <div>
            <h1>Here comes the login</h1>
            <button onClick={handleGoogleSignIn}>Google SignIn</button>
        </div>
    );
};

export default LogIn;