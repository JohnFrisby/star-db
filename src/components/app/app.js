import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { PeoplePage, PlanetPage, StarshipPage} from '../pages';


import { SwapiServiceProvider } from '../swapi-service-context';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    swapiService: new SwapiService()
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

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />

              <RandomPlanet />

              <Route path="/people" component={PeoplePage}/>
              <Route path="/planet" component={PlanetPage}/>
              <Route path="/starship" component={StarshipPage}/>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>

    );
  }
}