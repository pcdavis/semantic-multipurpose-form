import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/nav/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import HomePage from './components/HomePage/HomePage'
import ServiceForm3 from './components/forms/formTemplates/ServiceForm3'
import FieldArraysForm from './components/forms/formTemplates/FieldArraysForm'
import Test_ServiceForm from './components/forms/formTemplates/Test_ServiceFrom'
import TestComponent from './components/testArea/TestComponent';
import YoForm from './components/forms/formTemplates/YoForm';

/*  Examples of other routes
<Route path="/test" component={TestComponent} />
<Route path="/event/:id" component={EventDetailedPage} />
<Route path="/manage/:id" component={EventForm} />
<Route path="/people" component={PeopleDashboard} />
<Route path="/profile/:id" component={UserDetailedPage} />
<Route path="/settings" component={SettingsDashboard} />

<Route path="/events" exact component={EventDashboard} />
<Route path="/event/:id" exact component={EventDetailedPage} />
<Route path="/people" exact component={PeopleDashboard} />
<Route path="/profile/:id" exact component={UserDetailedPage} />
<Route path="/settings" exact component={SettingsDashboard} />
<Route path="/createEvent" exact component={EventForm} />
*/

class App extends Component {
  render() {
    return (
      <Fragment>

        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <Navbar />
              <Container className="main">
                <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/test" component={TestComponent} />
            <Route path="/YoForm" component={YoForm} />
            <Route path="/createForm" component={ServiceForm3} />
            <Route path="/FieldArraysForm" component={FieldArraysForm} />
            <Route path="/testForm" component={Test_ServiceForm} />
                 
                </Switch>
              </Container>
              </div>
          )}
        />

      </Fragment>
    );
  }
}

export default App;

