import React from 'react';
import { connect } from 'react-redux';
import { loginStart } from '../actions/auth';

export const LoginPage = (props) => {
    return (
        <div>
            <button onClick={props.onLogin}>Login</button>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch(loginStart())
    }
}


export default connect(null, mapDispatchToProps)(LoginPage)