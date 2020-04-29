import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h2>Info</h2>
        <p>Details : {props.isAuth ? props.info : 'only auth users can see details'}</p>
    </div>
);

const requireAuth = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <WrappedComponent {...props}/>
                <p>{props.isAuth && 'user successfully logged'}</p>
             </div>
        )
    }
};

const AuthInfo = requireAuth(Info)



export default AuthInfo;