import {  createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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

    //email & password login
    const signInWithEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const signInWithGoogle = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    // logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
            
    };

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
        signInWithEmailPass,
        signInWithGoogle,
        logout,
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