
import React, { Component } from 'react';

class ResultItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            elHovered: false
        };
    }
    render(){
        return (
            <li onMouseEnter={() => this.setState({elHovered: true})}
                onMouseLeave={() => this.setState({elHovered: false})}
                onClick={this.props.handleClickItem}
                className={this.state.elHovered && !this.props.active ? 'list-group-item list-group-item-secondary' : this.props.active ? 'list-group-item list-group-item-danger' : 'list-group-item'}>
                    <div className="d-inline-block col-md-6 text-left">{this.props.name}</div>
                    <div className="d-inline-block col-md-6 text-right">{this.props.price}</div>
                </li>
        );
    }
}

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex: false
        }
    }

    handleClickItem(index) {
        if(this.state.activeIndex === index){
            this.setState({ activeIndex: false });
            this.props.SetSelectedItem(false);
        }else{
            this.setState({ activeIndex: index });
            this.props.SetSelectedItem(index);
        }
    }

    render(){
        const listItems = this.props.SearchInput.records.map((record, index) => {
            const active = this.state.activeIndex === index && this.props.SelectedItem !== false ? true : false;
            return (
                <ResultItem key={index}
                    id={record.id}
                    name={record.make + ' - ' + record.model}
                    price={record.price}
                    active={active}
                    handleClickItem={this.handleClickItem.bind(this, index)}>
                </ResultItem>);
        });
        return(
            <div>
                <ul className="list-group mt-5">
                    {listItems}
                </ul>
                <div className="mt-3 mb-5 text-right">
                    <button type="button"
                            className={ this.props.CurrentPage===1 ? 'btn btn-danger hidden': 'btn btn-danger' }
                            onClick={this.props.GoToPrevious}>Previous</button>
                    <button type="button"
                            className="btn btn-danger"
                            onClick={this.props.GoToNext}>Next</button>
                </div>
            </div>
        );
    }
}

export default Search;