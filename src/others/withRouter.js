import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    // const id = id;
        return (
      <Component
        navigate={navigate}
        params={params}
        {...{props, match:{params}}}
        />
    );
  };
  
  return Wrapper;
};