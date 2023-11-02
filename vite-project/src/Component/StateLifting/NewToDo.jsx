/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const NewToDo = (props) => {
    props.hanDleData({
        title : "New todao create done"
    })
    return (
        <div>
            <h1>NewToDo</h1>
        </div>
    );
};

export default NewToDo;