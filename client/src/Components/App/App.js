import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className='appWrapper'>
        <header>
          <h1>3d designs keeper</h1>
        </header>
        <ul className="navBar">
          <li id="SavedDesigns">Saved designs</li>
          <li id="NewDesign">New design</li>
        </ul>
        <div className="savedDesigns">
        </div>
      </div>
    );
  }
};

export default App;
