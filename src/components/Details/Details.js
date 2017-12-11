import React, { Component } from 'react';

class DetailItem extends Component{
    render(){
        return(
            <li className="list-group-item">
                <label className="d-inline font-weight-bold">{this.props.title}: </label>
                <span className="font-italic font-weight-light">{this.props.value}</span>
            </li>
        );
    }
}

class Details extends Component{
    render(){
        var detailClass = 'detail border border-danger bg-light ';
        return(
            <div className={!this.props.SelectedItem ? detailClass+'hidden' : detailClass+'shown'}>
                <div className="content text-left">
                    <button type="button" className="close-panel text-danger">
                        <span aria-hidden="true" onClick={this.props.closeModal}>&times;</span>
                    </button>
                    <div className="body text-center">
                    <ul className="list-group">
                            <DetailItem title="Manufacturer" value={this.props.SelectedItem.make}></DetailItem>
                            <DetailItem title="Model" value={this.props.SelectedItem.model}></DetailItem>
                            <DetailItem title="Price" value={this.props.SelectedItem.price}></DetailItem>
                            <DetailItem title="Condition" value={this.props.SelectedItem.mileage}></DetailItem>
                        </ul>
                        <img alt="thumbnail" className="detail-thumbnail" src={this.props.SelectedItem.thumbnail_url} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;