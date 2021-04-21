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
    this.search = this.search.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  async getPrints() {
    await axios.get("/api/prints").then((response) => {
      this.setState({ prints: response.data });
    });
  }

  handleChange(e) {
    const search = e.target.value;
    if (search) {
      this.setState({
        searchQuery: search,
      });
    } else {
      this.getPrints();
    }
  }

  search() {
    const filteredPrints = this.state.prints.filter((print) => {
      const printTitle = print.printSettings.title.toLowerCase();
      const query = this.state.searchQuery.toLowerCase();
      return printTitle.indexOf(query) !== -1;
    });
    this.setState({
      prints: filteredPrints,
    });
  }

  handleKeyPress(e) {
    const keyChar = e.charCode;
    if (keyChar === 13) {
      this.search();
    }
  }

  componentDidMount() {
    this.getPrints();
  }

  render() {
    const prints = this.state.prints.map((print) => {
      return (
        <Print
          printSettings={print.printSettings}
          id={print._id}
          refresh={this.getPrints}
          key={print._id}
        />
      );
    });

    return (
      <div className="savedDesignsWrapper">
        <h1 className="saved">
          <u>Saved</u>
        </h1>
        <div className="searchBox" onKeyPress={this.handleKeyPress}>
          <img src={searchIcon} alt="search Icon" />
          <input
            type="text"
            className="searchBar"
            onChange={this.handleChange}
          />
          <button type="button" className="searchButton" onClick={this.search}>
            Search
          </button>
        </div>
        <div className="designs">{prints}</div>
      </div>
    );
  }
}

export default SavedDesigns;
