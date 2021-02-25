import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import ErrorBoundry from "../error-boundry";

import './app.css';
import ItemDetails from "../item-details";
import Row from "../row";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    const {getPerson,
        getStarship,
        getStarshipImage,
        getPersonImage,
    } = this.swapiService;

    const personDetails = (
        <ItemDetails
            getData={getPerson}
            getImageUrl={getPersonImage}
            itemId={11} />
    )

      const starshipDetails = (
          <ItemDetails
              getData={getStarship}
              getImageUrl={getStarshipImage}
              itemId={5} />
      )

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <Row
            left={personDetails}
            right={starshipDetails}
          />
          {/*{ planet }*/}

          {/*<div className="row mb2 button-row">*/}
          {/*  <button*/}
          {/*    className="toggle-planet btn btn-warning btn-lg"*/}
          {/*    onClick={this.toggleRandomPlanet}>*/}
          {/*    Toggle Random Planet*/}
          {/*  </button>*/}
          {/*  <ErrorButton />*/}
          {/*</div>*/}

          {/*<PeoplePage />*/}

        </div>
      </ErrorBoundry>
    );
  }
}
