import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Search from './components/Search/Search.js';
import Details from './components/Details/Details.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: "",
      data: { records: []},
      selectedItem: false,
      currentPage: 1,
      filter_make:  '',
      price_min: '',
      price_max: ''
    }
  }

  fetchData(){
    var filters = '';
    if(this.state.filter_make.length >= 3){
      filters += '&make='+this.state.filter_make;
    }
    fetch('https://autolist-test.herokuapp.com/search?page='+this.state.currentPage + filters)
    .then(results => {return results.json()})
    .then(data => this.setState({data: data}));

  }

  componentDidMount(){
    this.fetchData({})
  }

  setSelectedItem = (index) => {
    this.setState({selectedItem: this.state.data.records[index]});
  }

  handleSearchInputChange = event => {
    this.setState({searchInput: event.target.value});
    this.setState({filter_make: this.state.searchInput});
  };

  handleSearch = () => this.fetchData();

  closeModal = () => this.setState({selectedItem: false});

  render() {
    return (
      <div className="App">
        <header className="mt-3 ml-3 text-left">
          <a href="/">
            <img src="/autolistlogo.png" alt="Autolist" />
          </a>
        </header>

        <main className="col-md-8 offset-md-2 mb-5">
          <Home SearchAction={this.handleSearch}
                          SearchChange={this.handleSearchInputChange}
                          SearchInput={this.state.searchInput}></Home>
          <Search SearchInput={this.state.data}
                  SetSelectedItem={this.setSelectedItem}></Search>
          <Details SelectedItem={this.state.selectedItem} closeModal={this.closeModal}></Details>
        </main>
      </div>
    );
  }
}

export default App;