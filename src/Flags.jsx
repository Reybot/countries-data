import React, { useState, useEffect } from "react";
import Flag from "./Flag";

export default function Flags() {
  const [flags, setFlags] = useState([]);

  async function getFlags() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    console.log(data);
    setFlags(data);
  }

  useEffect(() => {
    getFlags();
  }, []);

  return (
    <div>
      Flags - {flags.length}
      <ul className="flags-container">
        {flags.map((flag) => (
          <Flag flag={flag} />
        ))}
      </ul>
    </div>
  );
}
