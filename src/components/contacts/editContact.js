import React, { Component } from 'react'
import '../../css/addContact.scss';
import { Consumer } from '../../context';
import Axios from 'axios';
import BASE_URL from '../../App.constant';

class EditContactComponent extends Component {

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

  async componentDidMount() {
    const {id} = this.props.match.params;
    const res = await Axios.get(`${BASE_URL}/${id}`);
    const currentContact = res.data;
    this.setState({
      name: currentContact.name,
      email: currentContact.email,
      phone: currentContact.email
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const {name,email,phone} = this.state;
    const updateContact = {
      name,
      email,
      phone
    }
    const { id } = this.props.match.params;
    const res = await Axios.put(`${BASE_URL}/${id}`, updateContact);
    dispatch({
      type: 'UPDATE_CONTACT',
      payload: res.data
    });
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
                Edit Contact
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
                  <button className="btn btn-success mx-auto" type="submit">Update</button>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default EditContactComponent;