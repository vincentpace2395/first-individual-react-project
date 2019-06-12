import React from 'react';
import './UserOutput.css'

const userOutput = props => {
    return (
        <div className="user-output">
            <p>User Output</p>
            <p>Username is {props.username}</p>
        </div>
    );
};

export default userOutput;