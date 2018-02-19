import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (
  <div className="groceries">
    {console.log('GroceryList Props:', props)}
    {props.groceries.map((grocery, index) => {
      return <GroceryItem value={grocery} key={index} />
    })}
  </div> 
);

export default GroceryList;