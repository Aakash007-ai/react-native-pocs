import { useQuery } from "react-query";
import axios from "axios";

import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
//whenever we want to fetch data sequentially from an apis

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCourseByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channel/${channelId}`);
};
export const DependentQueriesPage = () => {
  const email = useParams().email;
  const { data: user } = useQuery(
    ["user", email],
    () => fetchUserByEmail(email) //get user from this email
  );
  const channelId = user?.data.channelId;

  useQuery(["courses", channelId], () => fetchCourseByChannelId(channelId), {
    enabled: !!channelId, //double negation convert the value to boolean
    //now it will only run once we get channel id
  });

  return <div>DependentQueriesPage</div>;
};
