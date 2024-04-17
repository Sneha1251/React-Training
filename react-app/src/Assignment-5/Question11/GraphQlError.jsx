// Demonstrate how to handle errors in GraphQL queries and mutations. Create a React component that displays error messages when GraphQL requests fail and provides a way for users to retry the request.

import React from "react";
import { useQuery, gql } from "@apollo/client";

const MyQuery = gql`
  query {
    countries {
      name
      phone
      currenc
    }
  }
`;

export default function GraphQlError() {
  const { error, data = {}, loading } = useQuery(MyQuery);

  console.log(error, loading, data);

  if (loading) return "Loading...";
  if (error)
    return (
      <>
        <h2>GraphQL Error Handling</h2>
        <h2 className="error">{error.message}</h2>
      </>
    );

  return (
    <>
      <h2>GraphQl Error handling</h2>
      <div className="graphQlApi">
        {(data?.countries || []).slice(0, 12).map((country) => {
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
