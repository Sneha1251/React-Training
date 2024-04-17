// set up a GraphQL client library like Apollo Client. Create a simple component that uses the client to fetch and display data from a GraphQL API.

import React from "react";
import { useQuery, gql } from "@apollo/client";

const MyQuery = gql`
  query {
    countries {
      name
      phone
      currency
    }
  }
`;

export default function GraphQlApi() {
  const { error, data={}, loading } = useQuery(MyQuery);

  console.log(error, loading, data);
  if (loading) return "Loading...";
  if (error) return <h2 className="error">{error.message}</h2>;

  return (
    <>
      <h2>GraphQl Apollo Client</h2>
      <div className="graphQlApi">
        {(data?.countries || []).slice(0,12).map((country) => {
          return (
            <div>
              <h2>{country?.name}</h2>
              <h3>{country?.phone}</h3>
              <h3>{country?.currency}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}
