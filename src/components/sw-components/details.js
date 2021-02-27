import React from 'react'
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import {Record} from "../item-details/item-details";

import {SwapiServiceConsumer} from "../swapi-service-context";

const swapiService = new SwapiService();

const {
    getPlanet,
    getStarship,
    getPlanetImage,
    getStarshipImage
} = swapiService

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return (
                        <ItemDetails
                            getData={getPerson}
                            getImageUrl={getPersonImage}
                            itemId={itemId} >
                            <Record field="gender" label="Gender" />
                            <Record field="eyeColor" label="Eye Color" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}
const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return (
                        <ItemDetails
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}
                            itemId={itemId} >
                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotation Period" />
                            <Record field="diameter" label="Diameter" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}
const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
                    return (
                        <ItemDetails
                            getData={getStarship}
                            getImageUrl={getStarshipImage}
                            itemId={itemId}>
                            <Record field="model" label="Model"/>
                            <Record field="length" label="Length"/>
                            <Record field="costInCredits" label="Cost"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
