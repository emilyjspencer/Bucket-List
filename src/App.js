import React from 'react';
import logo from './logo.svg';
import './App.css';
import BucketList from './components/BucketList';

const App = () =>  {

  const bucketListItems = [
    {id: 'i1', text: 'Karen Blixen Museum, Kenya'},
    {id: 'i1', text: 'NYC'},
    {id: 'i3', text: 'Bali'},
    {id: 'i4', text: 'Northern Lights'}
  ];


  return (
    <div className="bucket-list">
      <h2>Bucket List</h2>
      <BucketList items={bucketListItems} />
    </div>
  );
};

export default App;
