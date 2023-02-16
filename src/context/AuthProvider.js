import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
import { useEffect } from 'react';
import { useState } from 'react';

const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    //user state 
    const [user, setUser] = useState('');

    //fix loading problem
    const [loading, setLoading] = useState(true);


    //email password authen tication

    //sign up
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login 
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //display users updating

    const displayUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    //logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }



    //email verification

    //forget password

    //user auth change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);

            }
            setLoading(false);
        });

        return () => unSubscribe();
    }, []);

    const getInfo = { createUser, login, logout, user, setUser, displayUser, loading, setLoading };

    return (
        <AuthContext.Provider value={getInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const AuthState = () => {
    return useContext(AuthContext);
}
