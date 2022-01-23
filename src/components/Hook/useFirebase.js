import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/FirebaseInitialize/FirebaseInitialize";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, getAuth } from "firebase/auth";


// firebase initalize
FirebaseInitialize();

const useFirebase = () => {

    // state
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();


    const googleProvider = new GoogleAuthProvider();


    // google sing in
    const handleGoogleSign = () => {

        signInWithPopup(auth, googleProvider)

            .then((result) => {
                setUser(result.user);
                setLoading(false);
                setSuccess(`Your account register successfully.`);
            }).catch((error) => {
                setError(error.message);
            });
    };

    // on auth stae changed

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setLoading(true);
            if (user) {
                setUser(user);
            } else {
                setUser({});
            };
            setLoading(false);
        });
    }, [auth]);

    // log out method

    const handleLogOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError("");
                setSuccess("");
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    };

    return {
        handleGoogleSign,
        user,
        error,
        success,
        handleLogOut,
        loading
    };
};

export default useFirebase;