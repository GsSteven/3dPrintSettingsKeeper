import React from "react";
import axios from "axios";
import "./SavedDesigns.css";
import Print from "../Print/Print";
import searchIcon from "./../../images/searchIcon.png";

class SavedDesigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prints: [],
      searchQuery: "",
    };
    this.getPrints = this.getPrints.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.displayPrints = this.displayPrints.bind(this);
  }

  async getPrints() {
    await axios.get("/api/prints").then((response) => {
      this.setState({ prints: response.data });
    });
  }

  handleChange(e) {
    const search = e.target.value;
    this.setState({
      searchQuery: search,
    });
  }

  displayPrints() {
    let prints = [];
    //return all prints if no query
    if (!this.state.searchQuery) {
      prints = this.state.prints.map((print) => {
        return (
          <Print
            printSettings={print.printSettings}
            id={print._id}
            refresh={this.getPrints}
            key={print._id}
          />
        );
      });
    } else {
      //return filtered prints
      const filteredPrints = this.state.prints.filter((print) => {
        const printTitle = print.printSettings.title.toLowerCase();
        const query = this.state.searchQuery.toLowerCase();
        return printTitle.indexOf(query) !== -1;
      });
      prints = filteredPrints.map((print) => {
        return (
          <Print
            printSettings={print.printSettings}
            id={print._id}
            refresh={this.getPrints}
            key={print._id}
          />
        );
      });
    }
    return prints;
  }

  componentDidMount() {
    this.getPrints();
  }

  render() {
    return (
      <div className="savedDesignsWrapper">
        <h1 className="saved">
          <u>Saved</u>
        </h1>
        <div className="searchBox">
          <img src={searchIcon} alt="search Icon" />
          <input
            type="text"
            className="searchBar"
            onChange={this.handleChange}
          />
        </div>
        <div className="designs">{this.displayPrints()}</div>
      </div>
    );
  }
}

export default SavedDesigns;
