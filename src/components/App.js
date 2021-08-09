import React, {useEffect, useState} from 'react';
import {authService} from '../firebase';
import AppRouter from './Router';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
        setUserObj(user);
      }else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
    
  })

  return (
    <>
      <div className="containers"> 
        {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/> : "로그인 확인중"}
      <footer>&copy; haru {new Date().getFullYear()}</footer>
      </div>
     
      
    </>
  );
}

export default App;
