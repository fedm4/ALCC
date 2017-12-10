import React, { Component } from 'react';

class DetailItem extends Component{
    render(){
        return(
            <li className="list-group-item">
                <label className="d-block bold">{this.props.title}</label>
                <span>{this.props.value}</span>
            </li>
        );
    }
}

class Details extends Component{
    render(){
        return(
            <div className={!this.props.SelectedItem ? 'modal hidden' : 'modal shown'}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Audi</h5>
                            <button type="button" className="close">
                            <span aria-hidden="true" onClick={this.props.closeModal}>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group">
                                <DetailItem title="Manufacturer" value="Audi"></DetailItem>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.props.closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;