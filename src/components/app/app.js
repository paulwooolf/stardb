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
import {Record} from "../item-details/item-details";
import ItemList from "../item-list";
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from "../sw-components";

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
        getAllPeople,
        getAllPlanets,
        getStarship,
        getStarshipImage,
        getPersonImage,
    } = this.swapiService;

    const personDetails = (
        <ItemDetails
            getData={getPerson}
            getImageUrl={getPersonImage}
            itemId={11} >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    )

      const starshipDetails = (
          <ItemDetails
              getData={getStarship}
              getImageUrl={getStarshipImage}
              itemId={5} >
              <Record field="model" label="Model" />
              <Record field="length" label="Length" />
              <Record field="costInCredits" label="Cost" />
          </ItemDetails>
      )

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList />
          <StarshipList />
          <PlanetList />


            {/*<PersonDetails />*/}

            {/*<ItemList*/}
            {/*    onItemSelected={() => {}}*/}
            {/*    getData={getAllPlanets}>*/}
            {/*    { ({name}) => <span>{name}</span>}*/}
            {/*</ItemList>*/}

          {/*<Row*/}
          {/*  left={personDetails}*/}
          {/*  right={starshipDetails}*/}
          {/*/>*/}
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
