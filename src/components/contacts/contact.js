import React from 'react';
import '../../css/contact.scss';
import {Consumer} from "../../context";
import Axios from 'axios';
import {Link} from 'react-router-dom';
import BASE_URL from '../../App.constant';
class ContactComponent extends React.Component {

    state = {showContactInfo: false};

    onDeleteClick = async (id, dispatch) => {
        if (window.confirm("Are you sure you want to delete this contact")) {
            await Axios.delete(`${BASE_URL}/${id}`);
            dispatch({type: 'DELETE_CONTACT', payload: id});
        }
    }

    onEditClick = (id) => {
        
    }
    render() {
        const {id, name, email, phone } = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <Consumer>
                { value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3 contact-block">
                            <h4 className="d-flex justify-content-between">
                                <span className="card-title">
                                    {name}
                                </span>
                                <span className="card-button-wrapper d-flex justify-content-between">
                                    <i className="fa fa-sort-down"
                                       onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})}></i>
                                    <span className="align-self-center h-100">
                                        <Link to={`contact/edit/${id}`}><i className="fa fa-pencil mr-2"></i></Link>
                                        <i className="fa fa-times"
                                           onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                                    </span>
                                </span>
                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group text-left">
                                    <li className="list-group-item">
                                        <strong>Phone:</strong> {phone}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Email:</strong> {email}
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                    )
                    }
                }
            </Consumer>  
        )
    }
}

export default ContactComponent;