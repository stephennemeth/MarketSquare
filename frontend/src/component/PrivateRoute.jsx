import React from 'react';
import { useNavigate } from 'react-router-dom';


const PrivateRoute = ({ component: Component, authState }) => {
  const navigate = useNavigate();
  if (!authState) {
    navigate('/login')
  }

  return (
    <Component />
  )
}

export default PrivateRoute;