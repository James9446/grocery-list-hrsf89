import React from 'react';

const GroceryItem = (props) => (
  <div>{props.value.description} {props.value.quantity}</div>
)

export default GroceryItem;