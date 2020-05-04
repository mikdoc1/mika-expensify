import React from 'react';
import { connect } from 'react-redux';
import  { Route, Redirect } from 'react-router-dom';

const PublicRoute  = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    return (
        <Route  {...rest} component={(props) => {
            return isAuth ? (
                <div>
                    <Redirect to="/dashboard" />                  
                </div>              
            ) : (
                <Component {...props}/>
            )   
        }}/>
    )
};

const mapStateToProps = state => {
    return {
        isAuth: !!state.auth.uid
    }
};

export default connect(mapStateToProps)(PublicRoute)