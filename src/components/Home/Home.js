
import React, { Component } from 'react';

class Home extends Component{

    render(){
        return(
            <div className="input-group mt-5">
                <span className="input-group-addon">Manufacturer:</span>
                <input type="text"
                    className="form-control"
                    placeholder="Audi, Volvo, BMW..."
                    onChange={this.props.SearchChange}
                    onKeyUp={this.props.SearchChange}
                    onKeyDown={this.props.SearchChange}
                    value={this.props.SearchInput} />
                <span className="input-group-btn">
                    <button className="btn btn-secondary"
                            type="button"
                            onClick={this.props.SearchAction}>
                                <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>
        );
    }
}

export default Home;