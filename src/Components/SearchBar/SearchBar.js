import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange=this.handleTermChange.bind(this);
  }
  // Step 69
  // In SearchBar.js, create a method called search that passes the state of the term to this.props.onSearch.
  search() {
      this.props.onSearch(this.state.term);
  }

  // Step 71
  // In SearchBar.js create a method called handleTermChange with the following functionality:
  //     Accepts an event argument
  //     Sets the state of the search bar's term to the event target's value.

  handleTermChange(event) {
      this.setState({ term: event.target.value });
  }
  /*search(){
    this.state.search(this.props.onSearch);
  }
  handleTermChange(event){
    this.state.search(event.target.value);
  }*/
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
