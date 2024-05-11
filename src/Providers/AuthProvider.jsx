import {  createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.init";
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const registerUser = async (email, password, name, photoURL) => {
        setLoading(true);
        try {
            // register user if email does not exist
            const userCreadential = await createUserWithEmailAndPassword(auth, email, password);
            // update user name and photo url
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            })
            return userCreadential.user;
        } catch (error) {
            console.error(error)
        }
    }  
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(null)
        });
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        registerUser,
        loading,
    }
    return(
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
};
export default AuthProvider;