import React, { Component } from 'react';
import './App.css';
import Popup from 'reactjs-popup';

import Brandon from './images/Brandon.jpg';
import Lauren from './images/Lauren.jpg';
import Sarah from './images/Sarah.jpg';
import Dan from './images/Dan.jpg';
import Doug from './images/Doug.jpg';
import Travis from './images/Travis.jpg';
import Juan from './images/Juan.jpg';
import Chris from './images/Chris.jpg';
import Lia from './images/Lia.jpg';
import Annie from './images/Annie.jpg';
import Alex from './images/Alex.jpg';
import Conor from './images/Conor.jpg';
import Eli from './images/Eli.jpg';
import Felipe from './images/Felipe.jpg';
import Jordan from './images/Jordan.jpg';
import Katelyn from './images/Katelyn.jpg';
import Michael from './images/Michael.jpg';
import Paul from './images/Paul.jpg';
import Emily from './images/Emily.jpg';
import Ryan from './images/Ryan.jpg';
import John from './images/John.jpg';
import Gears from './images/Gears.jpg';
import AdrianaO from './images/AdrianaO.jpg';
import Adriana from './images/Adriana.jpg';
import Corn from './images/Corn.jpg';
import Natalie from './images/Natalie.jpg';
import JordanK from './images/JordanK.jpg';
import Zach from './images/Zach.jpg';
import JohnJohn from './images/JohnJohn.jpg';
import Chelsea from './images/Chelsea.jpg';
import SarahG from './images/SarahG.jpg';
import Taylor from './images/Taylor.jpg';
import Billy from './images/Billy.jpg';
import Dakota from './images/Dakota.jpg';
import Charlie from './images/Charlie.jpg';
import Jess from './images/Jess.jpg';
import Kiyoshi from './images/Kiyoshi.jpg';
import Bryce from './images/Bryce.jpg';
import CharlieBurg from './images/CharlieBurg.jpg';
import Shawna from './images/Shawna.jpg';

const options = [
  { name: 'Brandon', image: Brandon },
  { name: 'Lauren', image: Lauren },
  { name: 'Sarah Yelle', image: Sarah },
  { name: 'Dan', image: Dan },
  { name: 'Doug', image: Doug },
  { name: 'Travis', image: Travis },
  { name: 'Juan', image: Juan },
  { name: 'Chris', image: Chris },
  { name: 'Lia', image: Lia },
  { name: 'Annie', image: Annie },
  { name: 'Alex', image: Alex },
  { name: 'Conor', image: Conor },
  { name: 'Eli', image: Eli },
  { name: 'Felipe', image: Felipe },
  { name: 'Jordan', image: Jordan },
  { name: 'Katelyn', image: Katelyn },
  { name: 'Michael', image: Michael },
  { name: 'Paul', image: Paul },
  { name: 'Emily', image: Emily },
  { name: 'Ryan', image: Ryan },
  { name: 'John', image: John },
  { name: 'Gears', image: Gears },
  { name: 'Adriana O', image: AdrianaO },
  { name: 'Adriana', image: Adriana },
  { name: 'Corn', image: Corn },
  { name: 'Natalie Horny', image: Natalie },
  { name: 'Jordan Kalish', image: JordanK },
  { name: 'Zach', image: Zach },
  { name: 'John John', image: JohnJohn },
  { name: 'Chelsea', image: Chelsea },
  { name: 'Sarah G', image: SarahG },
  { name: 'Taylor', image: Taylor },
  { name: 'Billy', image: Billy },
  { name: 'Dakota', image: Dakota },
  { name: 'Charlie', image: Charlie },
  { name: 'Jess', image: Jess },
  { name: 'Kiyoshi', image: Kiyoshi },
  { name: 'Bryce Williams', image: Bryce },
  { name: 'Charlie Burg', image: CharlieBurg },
  { name: 'Shawna', image: Shawna },
];

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

class App extends Component {
  constructor() {
    super();
    this.state = {
      added: [],
      options: shuffle(options),
      error: '',
    };
  }

  handleAdd = ({ target }) => {
    const { name } = target;
    const { image } = this.state.options.find((item) => item.name === name);
    const added = this.state.added.slice();

    if (this.state.added.length < 12) {
      const isAlreadyAdded =
        added.filter((item) => item.name === name).length === 1;

      !isAlreadyAdded && added.push({ name, image });

      const options = this.state.options.filter((item) => item.name !== name);

      this.setState({ added, options });
    } else {
      this.setState({ error: 'Full chat' });
    }
  };

  handleRemove = ({ target }) => {
    const { name } = target;
    const { image } = this.state.added.find((item) => item.name === name);

    const options = this.state.options.slice();
    options.push({ name, image });

    const added = this.state.added.filter((item) => item.name !== name);

    this.setState({ added, options });

    if (this.state.added.length <= 2) {
      this.setState({ error: '' });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Chat</h1>
        <div>Number: {this.state.added.length}</div>
        <Popup open={this.state.error}>
          <div>Chat is full!</div>
        </Popup>
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
