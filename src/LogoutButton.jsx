import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './redux/actions';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Other logout actions specific to MFE1
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;