import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";
import './app.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {LoginPage, PeoplePage, PlanetPage, SecretPage, StarshipPage} from "../pages";
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {

  state = {
      swapiService: new SwapiService(),
      isLoggedIn: false
  };

  onLogin = () => {
      this.setState({
          isLoggedIn: true
      })
  }

  onServiceChange = () => {
      this.setState(({ swapiService }) => {
          const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
          return {
              swapiService: new Service()
          }
      })
  }

  render() {

      const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
              <Router>
                  <div className="stardb-app">
                    <Header onServiceChange={this.onServiceChange} />
                    <RandomPlanet />
                    <Switch>
                    <Route path="/" render={() => <h2>Welcome to starDB</h2>} exact />
                        <Route path="/people/:id?" component={PeoplePage} />
                      <Route path="/people" render={() => <h2>People</h2>} />
                    <Route path="/planets" component={PlanetPage} />
                    <Route path="/starships" exact component={StarshipPage} />
                    <Route path="/starships/:id"
                        render={({match}) => {
                            const { id } = match.params;
                            return <StarshipDetails itemId={id} />
                        }} />
                    <Route
                        path="/login"
                        render={() => (
                            <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                        )}
                    />
                    <Route
                        path="/secret"
                        render={() => (
                            <SecretPage isLoggedIn={isLoggedIn} />
                        )}
                    />
                        <Route render={() => <h2>Page not found</h2>} />
                        {/*<Redirect to="/" />*/}
                    </Switch>

                 </div>
              </Router>
          </SwapiServiceProvider>

      </ErrorBoundry>
    );
  }
}
