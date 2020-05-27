import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BucketList from './components/BucketList/BucketList';
import AddItem from './components/AddItem/AddItem';
import Header from './components/Header/Header';

const App = () =>  {

  const [bucketListItems, setBucketListItems] = useState([
   
  ]);

const addNewItemHandler = (newItem) => {
  setBucketListItems(bucketListItems.concat(newItem));
};

  return (
    <div className="bucket-list">
      <Header />
      <p><strong>My Bucket List</strong></p>
      <AddItem onAddItem={addNewItemHandler} />
      <BucketList items={bucketListItems} />
    </div>
  );
};

export default App;
