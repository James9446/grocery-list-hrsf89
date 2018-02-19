import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    // this.onAddGrocery = this.onAddGrocery.bind(this);
    this.add = this.add.bind(this);
    this.onChangeTerm = this.onChangeTerm.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.state = { 
      term: '',
      quantity: ''
    }
  }

  onChangeTerm(e) {
    // this will be for update the state as the user types
    this.setState({
      term: e.target.value
    });
  }

  onChangeQuantity(e) {
    // this will be for update the state as the user types
    this.setState({
      quantity: e.target.value
    });
  }

  add() {
    let inputValue = {
      description: this.state.term,
      quantity: this.state.quantity
    }
    this.props.onAddGrocery(inputValue);
  }

  render () {
    return (
      <div>
        {/* {console.log('AddGrocery Props:', this)} */}
        <div>
          Description<input type="text" value={this.state.term} onChange={this.onChangeTerm} ></input>
        </div>
        <div>
          Quantity<input type="number" value={this.state.quantity} onChange={this.onChangeQuantity} ></input>
        </div>
        <button onClick={this.add}>Add Grocery</button>
      </div>
    );
  }
}

export default AddGrocery;

