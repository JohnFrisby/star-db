import React from 'react';
import { 
    withData, 
    withSwapiService,
    withChildFunction,
    compose } from '../hoc-helper';
import ItemList from '../item-list/item-list';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiServise) => {
    return {
        getData: swapiServise.getAllPeople
    };
}

const mapPlanetMethodsToProps = (swapiServise) => {
    return {
        getData: swapiServise.getAllPlanets
    };
}

const mapStarshipMethodsToProps = (swapiServise) => {
    return {
        getData: swapiServise.getAllStarships
    };
}

const PersonList = compose(
            withSwapiService(mapPersonMethodsToProps),
            withData,
            withChildFunction(renderName)
            )(ItemList);

const PlanetList = compose(
            withSwapiService(mapPlanetMethodsToProps),
            withData,
            withChildFunction(renderName)
            )(ItemList);

const StarshipList = compose(
            withSwapiService(mapStarshipMethodsToProps),
            withData,
            withChildFunction(renderModelAndName)
            )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}