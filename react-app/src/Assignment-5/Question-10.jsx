// Extend the previous assignment to allow users to perform mutations, such as adding, updating, or deleting items. Implement a form and mutation queries to interact with the GraphQL API.

import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

const MyQuery = gql`
  query {
    countries {
      name
      phone
      currency
    }
  }
`;

const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $phone: String!, $currency: String!) {
    addCountry(name: $name, phone: $phone, currency: $currency) {
      name
      phone
      currency
    }
  }
`;

const DELETE_COUNTRY = gql`
  mutation DeleteCountry($name: String!) {
    deleteCountry(name: $name) {
      name
    }
  }
`;

export default function GraphQlApi() {
  const { error, data, loading } = useQuery(MyQuery);
  const [addCountry] = useMutation(ADD_COUNTRY);
  const [deleteCountry] = useMutation(DELETE_COUNTRY);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addCountry({
        variables: { name, phone, currency },
        refetchQueries: [{ query: MyQuery }],
      });

      console.log("Added country:", data.addCountry);

      // Clear form fields
      setName("");
      setPhone("");
      setCurrency("");
    } catch (err) {
      console.error("Error adding country:", err);
    }
  };

  const handleDelete = async (name) => {
    try {
      const { data } = await deleteCountry({
        variables: { name },
        refetchQueries: [{ query: MyQuery }],
      });

      console.log("Deleted country:", data.deleteCountry);
    } catch (err) {
      console.error("Error deleting country:", err);
    }
  };

  if (loading) return "Loading...";
  if (error) return <h2 className="error">{error.message}</h2>;

  return (
    <>
      <h2>GraphQl Apollo Client</h2>
      <div className="graphQlApi">
        {data.countries.slice(0,12).map((country) => (
          <div key={country.name}>
            <h2>{country.name}</h2>
            <h3>{country.phone}</h3>
            <h3>{country.currency}</h3>
            <button onClick={() => handleDelete(country.name)}>Delete</button>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          required
        />
        <button type="submit">Add Country</button>
      </form>
    </>
  );
}

