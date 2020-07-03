import React, { Component } from 'react';
import './App.css';

import Brandon from './images/Brandon.jpg';
import Lauren from './images/Lauren.jpg';
import Sarah from './images/Sarah.jpg';

const options = [
  { name: 'Brandon', image: Brandon },
  { name: 'Lauren', image: Lauren },
  { name: 'Sarah', image: Sarah },
];

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

class App extends Component {
  constructor() {
    super();
    this.state = {
      added: [],
      options: shuffle(options),
    };
  }

  handleAdd = ({ target }) => {
    const { name } = target;
    const { image } = this.state.options.find((item) => item.name === name);
    const added = this.state.added.slice();

    const isAlreadyAdded =
      added.filter((item) => item.name === name).length === 1;

    !isAlreadyAdded && added.push({ name, image });

    const options = this.state.options.filter((item) => item.name !== name);

    this.setState({ added, options });
  };

  handleRemove = ({ target }) => {
    const { name } = target;
    const { image } = this.state.added.find((item) => item.name === name);

    const options = this.state.options.slice();
    options.push({ name, image });

    const added = this.state.added.filter((item) => item.name !== name);

    this.setState({ added, options });
  };

  render() {
    return (
      <div className="App">
        <h1>Chat</h1>
        <div className="added">
          {this.state.added.map(({ name, image }) => (
            <div key={name} className="cast">
              <img src={image} alt={name} className="cast-image" />
              <div className="cast-text">{name}</div>

              <button
                className="btn-remove"
                name={name}
                onClick={this.handleRemove}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <h1>Others</h1>
        <div className="added">
          {this.state.options.map(({ name, image }) => (
            <div key={name} className="cast">
              <img src={image} alt={name} className="cast-image" />
              <div className="cast-text">{name}</div>
              <button className="btn-add" name={name} onClick={this.handleAdd}>
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
