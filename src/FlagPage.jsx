import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function FlagPage() {
  const { name } = useParams();
  const [flag, setFlag] = useState(null);
  const navigate = useNavigate();

  async function getFlag() {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    console.log(data[0]);
    setFlag(data[0]);
  }
  useEffect(() => {
    getFlag();
  }, []);

  if (!flag) return <div>Loading...</div>;

  return (
    <div className="flag-page">
      <div>
        <img src={flag.flags.png} alt="" />
        <h1>{flag.name.common}</h1>

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          {"<-"} go back
        </button>
      </div>
    </div>
  );
}
