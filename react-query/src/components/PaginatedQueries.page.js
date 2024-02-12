import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
const fetchColors = (pageNumber) => {
  return axios.get(
    `http://localhost:4000/colors?_limnit=2&_page=${pageNumber}`
  );
};

export const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = React.useState(1);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true, //keep this data until new data is getting fetched
    }
  );
  //   const { isLoading, isError, error, data } = useQuery("colors", fetchColors);

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>PaginatedQueriesPage</div>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id}. {color.name}
              </h2>
            </div>
          );
        })}
      </div>

      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev Page
        </button>
        <buttton
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next Page
        </buttton>
      </div>
      {isFetching && <div>Loading...</div>}
    </>
  );
};
