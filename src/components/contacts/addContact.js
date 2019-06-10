import React, { Component } from 'react'
import '../../css/addContact.scss';
import { Consumer } from '../../context';
import Axios from 'axios';
import BASE_URL from '../../App.constant';

class AddContactComponent extends Component {

  state = {
    name: '',
    email: '',
    phone: ''
  }

  onFieldChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      name,
      email,
      phone
    }
    
    const res = await Axios.post(BASE_URL, newContact);
    dispatch({ type: 'ADD_CONTACT', payload: res.data }) 
   
    this.setState({
      name: '',
      email: '',
      phone: ''
    })

    this.props.history.push('/');
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                Add Contact
              </div>
              <div className="card-body">
                <form className="add-contact-form" onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter a name..."
                      value={name}
                      onChange={this.onFieldChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Enter email..."
                      value={email}
                      onChange={this.onFieldChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Enter phone number..."
                      value={phone}
                      onChange={this.onFieldChange}
                    />
                  </div>
                  <button className="btn btn-success mx-auto" type="submit">Complete</button>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContactComponent;