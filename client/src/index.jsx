import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
      // list: [
      //   {id: 1, quantity: 5, description: "frozen pizza"},
      //   {id: 2, quantity: 10, description: "greek yogurt"},
      //   {id: 3, quantity: 2, description: "wine"},
      //   {id: 4, quantity: 1, description: "iced coffee"}
      // ]
    }
  }

  // addGrocery(groceryItem) {
  //   $.ajax({
  //     type: "POST",
  //     url: '/list',
  //     data: JSON.stringify({ data: groceryItem }),
  //     contentType: 'application/json',
  //     success: (success) => {
  //       console.log('successful POST sent to server', success);
  //       // call getList() after success
  //     },
  //     error: (error) => {
  //       console.error('There was an error with the POST request', error);
  //     }
  //   });
  // }

  getList() {
    $.ajax({
      type: "GET",
      url: '/list',
      data: JSON.stringify({ data: groceryItem }),
      contentType: 'application/json',
      success: (success) => {
        console.log('successful POST sent to server', success);
      },
      error: (error) => {
        console.error('There was an error with the POST request', error);
      }
    })
  }

  addGrocery(inputValue) {
    console.log('event has made it back up!!!', inputValue);
    let itemInList = false;
    const newList = this.state.list.slice();
    if(inputValue.description !== '') {
      newList.forEach((listItem) => {
        if (listItem.description === inputValue.description && inputValue.quantity === '') {
          listItem.quantity++;
          itemInList = true;
        } else if (listItem.description === inputValue.description && inputValue.quantity !== '') {
          listItem.quantity = inputValue.quantity;
          itemInList = true;
        }
      });
      if (!itemInList && inputValue.quantity === '') {
        newList.push({id: newList.length + 1, quantity: 1, description: inputValue.description });
      } else if (!itemInList && inputValue.quantity !== ''){
        newList.push({id: newList.length + 1, quantity: inputValue.quantity, description: inputValue.description });
      }
      this.setState({
      list: newList
      });
    }
  }

  
  render () {
    return (
      <div>
        <AddGrocery onAddGrocery={this.addGrocery.bind(this)}/>
        <GroceryList groceries={this.state.list} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));