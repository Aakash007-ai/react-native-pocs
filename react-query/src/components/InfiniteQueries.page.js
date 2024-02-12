import axios from "axios";
import { useQuery, useInfiniteQuery } from "react-query";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

import React from "react";

export const InfiniteQueriespAGE = () => {
  //   const { isLoading, isError, error, data } = useQuery([
  //     ["colors"],
  //     fetchColors,
  //   ]);

  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, page) => {
      if (page.length < 4) {
        return page.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>InfiniteQueriespAGE</div>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {/* <div key={color.id}>
                <h2>
                  {color.id}. {color.name}
                </h2>
              </div> */}
              {group.data.map((color) => {
                return (
                  <div key={color.id}>
                    <h2>
                      {color.id}. {color.name}
                    </h2>
                  </div>
                );
              })}
            </Fragment>
          );
        })}
      </div>
      <div>
        <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
          Load More
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching...." : null}</div>
    </>
  );
};
