// Create a React component that makes GraphQL queries to retrieve a list of items (e.g., a list of books, movies, or products) from a GraphQL API. Implement pagination for large datasets and display the data in a user-friendly way.

import React, { useState } from "react";
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

export default function GraphQlPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;

  const { error, data, loading } = useQuery(MyQuery);

  console.log(error, loading, data);
  if (loading) return "Loading...";
  if (error) return <h2 className="error">{error.message}</h2>;

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const miniData = data.countries.slice(startIndex, endIndex);

  return (
    <>
      <h2>GraphQl Pagination</h2>
      <div className="graphQlApi">
        {miniData.slice(0, 12).map((countries) => {
          return (
            <div>
              <h2>{countries.name}</h2>
              <h3>{countries.phone}</h3>
              <h3>{countries.currency}</h3>
            </div>
          );
        })}
        <div className="pageButton">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endIndex >= data.countries.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
