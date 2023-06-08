import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const phones = useLoaderData();
  return (
    <div>
      <h6>Grab the latest phone of future</h6>
      <p>Now We have {phones.length} phones</p>
      {
        phones.map(ph=><li key={ph.id}>
            <Link to={`/phones/${ph.id}`}>{ph.name}</Link>
        </li>)
      }
    </div>
  );
};

export default Home;
