import React from "react";

export default function Flag({ flag }) {
  return (
    <li className="flag-card">
      <div className="flag-img-container">
        <img src={flag.flags.png} alt="" />
      </div>
      <div className="flag-content">
        <h2>{flag.name.common}</h2>
        <p>Population: {flag.population}</p>
        <p>Region: {flag.region}</p>
        <p>Capital: {flag.capital}</p>
      </div>
    </li>
  );
}
