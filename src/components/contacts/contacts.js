import React from 'react';
import {Consumer} from '../../context';
import ContactComponent from './contact';

export class ContactsComponent extends React.Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const {contacts} = value;
                    return (
                        <React.Fragment>
                            {contacts.map(contact => (
                                <ContactComponent key={contact.id} contact={contact}/>
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}