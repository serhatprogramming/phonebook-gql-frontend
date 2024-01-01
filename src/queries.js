import { gql } from "@apollo/client";

export const ALL_PERSONS = gql`
  query getPersons {
    allPersons {
      name
      phone
      id
    }
  }
`;

export const CREATE_PERSON = gql`
  mutation createPerson(
    $name: String!
    $street: String!
    $city: String!
    $phone: String
  ) {
    addPerson(name: $name, street: $street, city: $city, phone: $phone) {
      name
      phone
      address {
        city
        street
      }
    }
  }
`;

export const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`;

export const EDIT_NUMBER = gql`
  mutation EditNumber($editNumberName2: String!, $editNumberPhone2: String!) {
    editNumber(name: $editNumberName2, phone: $editNumberPhone2) {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`;
