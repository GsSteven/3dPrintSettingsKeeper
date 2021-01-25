import React from 'react';
import SavedDesigns from '../SavedDesigns/SavedDesigns';
import NewDesign from '../NewDesign/NewDesign';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prints: [],
      currentPage: 'SavedDesigns'
    }
    this.changeDisplay = this.changeDisplay.bind(this);
    this.displayPage = this.displayPage.bind(this);
  }

  changeDisplay(e) {
    this.setState({ currentPage: e.target.id });
  }

  displayPage() {
    switch (this.state.currentPage) {
      case 'SavedDesigns':
        return <SavedDesigns />;
      case 'NewDesign':
        return <NewDesign />;
      default:
        return <h1>error</h1>
    }
  }



  render() {
    return (
      <div className='appWrapper'>
        <header>
          <h1>3d designs keeper</h1>
        </header>
        <ul className="navBar">
          <li id="SavedDesigns" onClick={this.changeDisplay}>Saved designs</li>
          <li id="NewDesign" onClick={this.changeDisplay}>New design</li>
        </ul>
        {this.displayPage()}
        <footer>Created By: Steven Gsell</footer>
      </div>
    );
  }
};

export default App;
