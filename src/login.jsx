import './login.css';
import React, { useState } from 'react';
import Showicon from '@mui/icons-material/Visibility';
import Hideicon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  var show = <Showicon />,
    hide = <Hideicon />;
  const [eye, setEye] = useState(show);
  const togglePasswordVisiblity = () => {
    if (passwordShown === false) {
      setEye(hide);
      setPasswordShown(true);
    } else if (passwordShown === true) {
      setPasswordShown(false);
      setEye(show);
    }
  };
  return (
    <>
      <div className="studentDetails">
        <div className="inputbox">
          <input type="text" required="required" />
          <span>Employee ID </span>
        </div>
        <div className="inputbox">
          <input type="text" required="required" />
          <span>First Name</span>
        </div>
        <div className="inputbox">
          <input type="text" required="required" />
          <span>Last Name </span>
        </div>
        <div className="inputbox">
          <input type="text" required="required" />
          <span>Email </span>
        </div>
        <div className="inputbox">
          <input type="text" required="required" />
          <span>City Name </span>
        </div>
        <div className="inputbox">
          <input
            type={passwordShown ? 'text' : 'password'}
            required="required"
          />
          <span>Password </span>
          <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>
        <input type="submit" value="Sign Out" />
      </div>
    </>
  );
};

export default Login;
