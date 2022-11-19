import React from "react";
import { Link } from "react-router-dom";

export default function Flag({ flag }) {
  return (
    <li className="flag-card">
      <Link to={`/flags/${flag.name.common}`}>
        <div className="flag-img-container">
          <img src={flag.flags.png} alt="" />
        </div>
        <div className="flag-content">
          <h2>{flag.name.common}</h2>
          <p>Population: {flag.population}</p>
          <p>Region: {flag.region}</p>
          <p>Capital: {flag.capital}</p>
        </div>
      </Link>
    </li>
  );
}
