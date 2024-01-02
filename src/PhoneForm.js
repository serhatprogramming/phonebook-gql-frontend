import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
// queries
import { EDIT_NUMBER } from "./queries";

const PhoneForm = ({ setError }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [changeNumber, result] = useMutation(EDIT_NUMBER);

  useEffect(() => {
    if (result.data && result.data.editNumber === null) {
      setError("person not found");
    } else if (result.data && result.data.editNumber) {
      setError(
        `${result.data.editNumber.name}'s phone number is updated successfully`
      );
    }
  }, [result.data]);

  const submit = (event) => {
    event.preventDefault();

    changeNumber({ variables: { name, phone } });

    setName("");
    setPhone("");
  };

  return (
    <div>
      <h2>Change Number</h2>
      <form onSubmit={submit}>
        <div>
          name
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          phone
          <input
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <button type="submit">change number</button>
      </form>
    </div>
  );
};

export default PhoneForm;
