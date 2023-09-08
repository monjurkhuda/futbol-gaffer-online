import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import PlayerAvatar from "../component/PlayerAvatar";

function Lineup({ clubName, name }) {
  const [loading, setLoading] = useState(true);
  const [roster, setRoster] = useState();

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

  async function getClubRoster() {
    setLoading(true);
    let { data: clubRoster, error } = await supabase
      .from("clubs")
      .select("*")
      .eq("name", clubName);
    setRoster(clubRoster);
    setLoading(false);
  }

  useEffect(() => {
    getClubRoster();

    roster &&
      lineupOrder.forEach((position) => {
        rosterArray.push(roster[0][position]);
      });
  }, []);

  console.log("roster", roster);

  if (loading) return <span className="loading loading-ring loading-lg"></span>;

  return (
    <div className="avatar flex-row flex-wrap">
      {lineupOrder.map(
        (position) =>
          roster[0][position] && <PlayerAvatar playerid={roster[0][position]} />
      )}
    </div>
  );
}

export default Lineup;
