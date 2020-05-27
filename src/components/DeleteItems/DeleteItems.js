import React from 'react';
import './DeleteItems.css';

const DeleteItems = (props) => {

    let userInput = '';

    const removeItemsHandler = (event) => {
        event.preventDefault();
        const itemAdded = {
            id: Math.random().toString(),
            text: userInput
          };
          props.onDeleteItem(itemAdded);
    };

    const textChangeHandler = event => {
        userInput = event.target.value;
    }

  return (
    <form className="new-item" onSubmit={removeItemsHandler}>
     
      <button type="Submit" onChange={textChangeHandler}>Delete All </button>
    </form>
  )

}

export default DeleteItems;