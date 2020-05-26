import React from 'react';

import './BucketList.css';


const BucketList = (props) => {
    return (
        <ul className="bucket-list">
            {props.items.map(item => {
                return <li key={item.id}>{item.text}</li>;
            })} 
        </ul>
    );
};

export default BucketList