import React from 'react';
import { withSwapiService } from '../hoc-helper';
import ItemDetails, { Record } from '../item-details/item-details';

const PersonDetails = (props) => {
    return (

        <ItemDetails {...props}>

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye color" />
        </ItemDetails>

    );
};

const mapMethodsToProps = (SwapiService) => {
    return {
        getData: SwapiService.getPerson,
        getImageUrl: SwapiService.getPersonImage
    }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);