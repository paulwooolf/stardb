import React from 'react'
import ItemList from "../item-list/item-list";
import SwapiService from "../../services/swapi-service";
import withData from "../hoc-helpers";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>{fn}</Wrapped>
        )
    }
}

const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const ListWithChildren = withChildFunction(
    ItemList,
    ({name}) => <span>{name}</span>
)

const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getAllPeople);
const PlanetList = withData(
    withChildFunction(ItemList, renderName),
    getAllPlanets);
const StarshipList = withData(
    withChildFunction(ItemList, renderModelAndName),
    getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}
