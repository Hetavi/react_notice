import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar1 from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Dashboard1 from './components/dashboard/Dashboard1'

import NoticeDetails from './components/projects/NoticeDetails'
import CreateNotice from './components/projects/CreateNotice'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

import CreatingHosp from './components/projects/CreateHosp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar1 />
          <Switch>
           <Route exact path='/'component={Dashboard} />
            <Route  exact path='/edit'component={Dashboard1} />
            
       
            <Route path='/edit/:id' component={NoticeDetails} />
             <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateNotice} />
            <Route path='/createHosp' component={CreatingHosp} />
          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
