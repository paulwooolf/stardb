import React from 'react'
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import {Record} from "../item-details/item-details";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService

const PersonDetails = ({ itemId }) => {
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
const PlanetDetails = ({ itemId }) => {
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
const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails
            getData={getStarship}
            getImageUrl={getStarshipImage}
            itemId={itemId} >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
