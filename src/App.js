import React from 'react';
import './App.css';
import { Provider } from './context';
import { ContactsComponent } from './components/contacts/contacts'
import { HeaderComponent } from "./components/layouts/header";
import AddContactComponent from './components/contacts/addContact';
import AboutComponent from './components/layouts/about';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NotFoundComponent from './components/layouts/notFound';
import EditContactComponent from './components/contacts/editContact';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
            <HeaderComponent />
            <div className="container mt-5">
              <Switch>
                <Route exact path='/' component={ContactsComponent}></Route>
                <Route exact path='/contact/add' component={AddContactComponent}></Route>
                <Route exact path='/contact/edit/:id' component={EditContactComponent}></Route>
                <Route exact path='/about' component={AboutComponent}></Route>
                <Route component={NotFoundComponent}></Route>
              </Switch>
            </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
