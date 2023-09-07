import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

function Lineup({ clubName, name }) {
  const [loading, setLoading] = useState(true);
  const [roster, setRoster] = useState();

  useEffect(() => {
    async function getClubRoster() {
      setLoading(true);
      let { data: clubRoster, error } = await supabase
        .from("clubs")
        .select(`*`)
        .eq("name", clubName);
      setRoster(clubRoster);
    }
    getClubRoster();
    setLoading(false);
  }, []);

  const rosterArray = [];

  const lineupOrder = [
    "gk",
    "rb",
    "rcb",
    "cb",
    "lcb",
    "lb",
    "rwb",
    "rdm",
    "cdm",
    "ldm",
    "lwb",
    "rm",
    "rcm",
    "cm",
    "lcm",
    "lm",
    "rw",
    "ram",
    "cam",
    "lam",
    "lw",
    "rf",
    "cf",
    "lf",
  ];

  roster &&
    lineupOrder.forEach((position) => {
      rosterArray.push(roster[0][position]);
    });

  //console.log(rosterArray);

  if (loading) return <></>;

  return (
    <div className="avatar flex-row">
      {rosterArray.map((playerid) => (
        <div className="avatar flex-col">
          <div className="w-10 rounded-full">
            <img
              alt="avatar"
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            />
          </div>
          <p>{playerid}</p>
        </div>
      ))}
    </div>
  );
  // <div className="avatar flex-col">
  //   <div className="w-24 rounded-full">
  //     <img
  //       alt="avatar"
  //       src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
  //     />
  //   </div>
  //   <p>{clubName}</p>
  // </div>
}

export default Lineup;
