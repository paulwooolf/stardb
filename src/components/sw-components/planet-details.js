import {SwapiServiceConsumer} from "../swapi-service-context";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";


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
