import React, { Component, createRef } from 'react';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  handleClick = () => {
    const inputValue = this.inputRef.current.value;
    if (inputValue === '') {
      this.inputRef.current.focus();
      return;
    }
    const numberOfItems = parseInt(inputValue, 10);
    if (!isNaN(numberOfItems) && numberOfItems > 0) {
      this.setState({ numberOfItems });
    }
  };

  state = {
    numberOfItems: 0,
  };

  render() {
    return (
      <div>
        <input id="input" ref={this.inputRef} type="text" placeholder="Enter a number" />
        <button id="button" onClick={this.handleClick}>
          Click
        </button>
        <List numberOfItems={this.state.numberOfItems} />
      </div>
    );
  }
}

export default App;
