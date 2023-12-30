import React from "react";
import { gql, useQuery } from "@apollo/client";
import Persons from "./Persons";
import PersonForm from "./PersonForm";

const ALL_PERSONS = gql`
  query getPersons {
    allPersons {
      name
      phone
      id
    }
  }
`;

const App = () => {
  const result = useQuery(ALL_PERSONS, { pollInterval: 2000 });
  if (result.loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Persons persons={result.data.allPersons} />
      <PersonForm />
    </div>
  );
};

export default App;
