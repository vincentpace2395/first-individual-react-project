import React from 'react';

// UserInput component taking text to update username
const userInput = props => {
    const style = {
        border: '2px solid blue'
    };

    return (
        <input
            type="text"
            style={style}
            onChange={props.changed}
            value={props.currentName}
         />
    );
}

export default userInput;