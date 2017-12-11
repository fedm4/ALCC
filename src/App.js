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
    if(this.state.price_min !== ''){
      filters += '&price_min='+this.state.price_min;
    }
    if(this.state.price_max !== ''){
      filters += '&price_max='+this.state.price_max;
    }
    fetch('https://autolist-test.herokuapp.com/search?page='+this.state.currentPage + filters)
    .then(results => {return results.json()})
    .then(data => this.setState({data: data}));

  }

  componentDidMount(){
    this.fetchData({})
  }

  setSelectedItem = (index) => {
    this.setState({selectedItem: this.state.data.records[index] || false});
  }

  handleSearchInputChange = event => {
    this.setState({searchInput: event.target.value});
    this.setState({filter_make: this.state.searchInput});
  };

  handlePriceMinChange = event => {
    this.setState({price_min: event.target.value});
  };
  handlePriceMaxChange = event => {
    this.setState({price_max: event.target.value});
  };

  handleSearch = () => this.fetchData();

  closeModal = () => this.setState({selectedItem: false});

  setCurrentPage = page => this.setState({currentPage: page});

  goToPrevious = () => {
    this.setState({currentPage: this.state.currentPage - 1});
    this.fetchData();
  }
  goToNext     = () => {
    this.setState({currentPage: this.state.currentPage + 1});
    this.fetchData();
  }

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
                  SetSelectedItem={this.setSelectedItem}
                  SelectedItem={this.state.selectedItem}
                  GoToPrevious={this.goToPrevious}
                  GoToNext={this.goToNext}
                  CurrentPage={this.state.currentPage}
                  FetchData={this.handleSearch}
                  PriceMinChange={this.handlePriceMinChange}
                  PriceMinInput={this.state.price_min}
                  PriceMaxChange={this.handlePriceMaxChange}
                  PriceMaxInput={this.state.price_max}></Search>
          <Details SelectedItem={this.state.selectedItem} closeModal={this.closeModal}></Details>
        </main>
      </div>
    );
  }
}

export default App;
