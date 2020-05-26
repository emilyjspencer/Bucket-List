import React from 'react';

import './BucketList.css';



const BucketList = (props) => {
    return (
        <div>
        <ul className="bucket-list">
            {props.items.map(item => {
                return <li key={item.id}>{item.text}</li>;
            })} 
        </ul>
        </div>
    );
};

export default BucketList