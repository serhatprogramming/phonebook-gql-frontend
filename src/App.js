import { useState } from "react";
import { useQuery } from "@apollo/client";
import Persons from "./Persons";
import PersonForm from "./PersonForm";
import PhoneForm from "./PhoneForm";
import Notify from "./Notify";
import { ALL_PERSONS } from "./queries";

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const result = useQuery(ALL_PERSONS);
  if (result.loading) {
    return <div>loading...</div>;
  }

  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  return (
    <div>
      <Notify errorMessage={errorMessage} />
      <Persons persons={result.data.allPersons} />
      <PersonForm setError={notify} />
      <PhoneForm setError={notify} />
    </div>
  );
};

export default App;
