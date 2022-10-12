import React from "react";
import { PersonList } from '../sw-components';
import { withRouter } from "react-router-dom";

const PeoplePage = ({ history }) => {

        return (
            <PersonList 
            onItemSelected={(id) => {history.push(`/people/${id}`)}} />
        );
    };
export default withRouter(PeoplePage);