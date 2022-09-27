import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helper';

const PlanetDetails = (props) => {

    return (
        <ItemDetails
            {...props}>

            <Record field="diameter" label="Diameter" />
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (SwapiService) => {
    return {
        getData: SwapiService.getPlanet,
        getImageUrl: SwapiService.getPlanetImage
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
