import React from 'react';

const Child = (props) => {
    const childData = "I am child data "
    const {data} = props;
    props.onData(childData)
    return (
        <div>
            <h1>Child component</h1>
            <h1>
                {data}
            </h1>
        </div>
    );
};

export default Child;