import {SwapiServiceConsumer} from "../swapi-service-context";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";

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
