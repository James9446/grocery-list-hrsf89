import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    // this.onAddGrocery = this.onAddGrocery.bind(this);
    this.add = this.add.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { 
      term: ''
    }
  }

  onChange(e) {
    // this will be for update the state as the user types
    this.setState({
      term: e.target.value
    });
  }

  add() {
    this.props.onAddGrocery(this.state.term)
  }

  render () {
    return (
      <div>
        {/* {console.log('AddGrocery Props:', this)} */}
        <input type="text" value={this.state.term} onChange={this.onChange} ></input>
        <button onClick={this.add}>Add Grocery</button>
      </div>
    );
  }
}

export default AddGrocery;

