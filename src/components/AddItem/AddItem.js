import React from 'react';
import './AddItem.css';

const AddItem = (props) => {

    let userInput = '';

    const addItemHandler = (event) => {
        event.preventDefault();
        const newItem = {
            id: Math.random().toString(),
            text: userInput
          };

          console.log(userInput);

          console.log(newItem);
          props.onAddItem(newItem);
    };

    const textChangeHandler = event => {
        userInput = event.target.value;
    }

  return (
    <form className="new-item" onSubmit={addItemHandler}>
      <input type="text" onChange={textChangeHandler} />
      <button type="Submit">Add Item</button>
    </form>
  )

}

export default AddItem;