import React from 'react';
import './DeleteItem.css';

const DeleteItem = (props) => {

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
      <input id="enter" type="text" onChange={textChangeHandler} />
      <button type="Submit">Delete All</button>
    </form>
  )

}

export default DeleteItem;