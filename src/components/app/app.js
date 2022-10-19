import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { 
  PeoplePage, 
  PlanetPage, 
  StarshipPage,
  LoginPage,
  SecretPage } from '../pages';


import { SwapiServiceProvider } from '../swapi-service-context';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './app.css';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    swapiService: new SwapiService(),
    isLogginedIn: false
  };

  onLogin = () => {
    this.setState({
      isLogginedIn: true
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
        DummySwapiService : SwapiService;
      console.log('switched to', Service.name);

      return {
        swapiService: new Service()
      };
    });
  };

  render() {

    const { isLogginedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>
                <Route path="/"
                  render={() => <h2>Welcome to StarDB</h2>}
                  exact />
                <Route path="/people/:id?" exact component={PeoplePage} />
                <Route path="/planet" component={PlanetPage} />
                <Route path="/starships" exact component={StarshipPage} />
                <Route path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                  }} />

                <Route path="/login"
                  render={() => (
                    <LoginPage
                      isLogginedIn={isLogginedIn}
                      onLogin={this.onLogin} />
                  )} />
                <Route path="/secret"
                  render={() => (<SecretPage isLogginedIn={isLogginedIn} />)} />
                <Route render={() => <h2>Page not Found</h2>} />
              </Switch>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>

    );
  }
}