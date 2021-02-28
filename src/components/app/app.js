import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";

import './app.css';
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import {Record} from "../item-details/item-details";
import {SwapiServiceProvider} from "../swapi-service-context";

import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import DummySwapiService from "../../services/dummy-swapi-service";

export default class App extends Component {

  state = {
      showRandomPlanet: true,
      swapiService: new SwapiService()
  };

  onServiceChange = () => {
      this.setState(({ swapiService }) => {
          const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
          return {
              swapiService: new Service()
          }
      })
  }

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
    } = this.state.swapiService;

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
          <SwapiServiceProvider value={this.state.swapiService}>
            <div className="stardb-app">
                <Header onServiceChange={this.onServiceChange} />

                <PersonDetails itemId={11} />
                <PlanetDetails itemId={5} />
                <StarshipDetails itemId={9} />

                <PersonList />
                <StarshipList />
                <PlanetList />
            </div>
          </SwapiServiceProvider>


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


      </ErrorBoundry>
    );
  }
}
