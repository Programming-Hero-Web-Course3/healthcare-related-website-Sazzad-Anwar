import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import initializeAuth from './Firebase/firebase.initialize';
import { useState } from 'react';
initializeAuth();

export default function Login() {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser({
                    token: user.refreshToken,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                })
            }).catch((error) => {
                console.log(error.message)
            });
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.log(error.message)
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                {user.email ? <>
                    <h1>Name: {user.name}</h1>
                    <img src={user.photo} alt={user.name} />
                    <button className='border rounded py-2 px-3' onClick={handleSignOut}>Sign Out</button>
                </> : <button className='border rounded py-2 px-3' onClick={signInWithGoogle}>Google Sign In</button>}

            </header>
        </div>
    );
};