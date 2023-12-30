import React from "react";
import { useQuery } from "@apollo/client";
import Persons from "./Persons";
import PersonForm from "./PersonForm";
import { ALL_PERSONS } from "./queries";

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
