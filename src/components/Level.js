import React from 'react';

const Level = (props) => {
    return (
        <div className={props.cssClassName}>
            <p>{props.name}</p>
        </div>)
}

export default Level;
