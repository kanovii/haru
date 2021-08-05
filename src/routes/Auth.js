import React, { useState } from 'react';
import { authService, firebaseInstance } from "../firebase";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState('');

    const onChange = (e) => {
        const {target: {name , value}} = e;
        if(name === 'email') {
            setEmail(value);
        }else{
            setPassword(value);
        }
    }
    const onSubmit = async(e) => {
        e.preventDefault();
        try{
            let data;
            if(newAccount) {
                data = await authService.signInWithEmailAndPassword(email, password);
            }else{
                data = await authService.createUserWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch(error){
            setError(error.message);
        }
        
    }
    const toggleAccount = () => {
        setNewAccount((prev) => !prev);
    }
    const onSocialClick = async(e) => {
            const {target :{name}} = e;
            var provider
            if(name==='google'){
                provider = new firebaseInstance.auth.GoogleAuthProvider();
            }else if (name==='facebook') {
                provider = new firebaseInstance.auth.FacebookAuthProvider();

            }
            const data = await authService.signInWithPopup(provider);
            console.log(data);
        }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} name='email' type='text' placeholder='email' required value={email} />
                <input onChange={onChange} name='password' type='password' placeholder='password' required value={password} />
                <input type='submit' value={ newAccount ?'Sign In' : 'Create New' } />
                {error}
            </form>
            <button onClick={toggleAccount}>{newAccount ? 'Create New' : 'Sign In'}</button>
            <button onClick={onSocialClick} name='google'>Login With Google</button>
            <button onClick={onSocialClick} name='facebook'>Login With Facebook</button>
        </div>

    )
}

export default Auth;