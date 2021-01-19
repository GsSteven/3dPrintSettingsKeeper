import React from 'react';
//import SavedDesigns from '../SavedDesigns/SavedDesigns';
import NewDesign from '../NewDesign/NewDesign';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prints: []
    }
  }



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
        <NewDesign />
      </div>
    );
  }
};

export default App;
