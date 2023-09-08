import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import PlayerAvatar from "../component/PlayerAvatar";

function Lineup({ clubName, name }) {
  const [loading, setLoading] = useState(true);
  const [roster, setRoster] = useState();

  const rosterArray = [];
  const lineupOrder = [
    "gk",
    "lb",
    "lcb",
    "cb",
    "rcb",
    "rb",
    "lwb",
    "ldm",
    "cdm",
    "rdm",
    "rwb",
    "lm",
    "lcm",
    "cm",
    "rcm",
    "rm",
    "lw",
    "lam",
    "cam",
    "ram",
    "rw",
    "lf",
    "cf",
    "rf",
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
    <div className="flex-col justify-center align-center">
      <div className="flex flex-row">
        {lineupOrder
          .slice(21, 24)
          .map(
            (position) =>
              roster[0][position] && (
                <PlayerAvatar
                  playerid={roster[0][position]}
                  position={position}
                />
              )
          )}
      </div>

      <div className="flex flex-row">
        {lineupOrder
          .slice(16, 21)
          .map(
            (position) =>
              roster[0][position] && (
                <PlayerAvatar
                  playerid={roster[0][position]}
                  position={position}
                />
              )
          )}
      </div>

      <div className="flex flex-row">
        {lineupOrder
          .slice(11, 16)
          .map(
            (position) =>
              roster[0][position] && (
                <PlayerAvatar
                  playerid={roster[0][position]}
                  position={position}
                />
              )
          )}
      </div>

      <div className="flex flex-row">
        {lineupOrder
          .slice(6, 11)
          .map(
            (position) =>
              roster[0][position] && (
                <PlayerAvatar
                  playerid={roster[0][position]}
                  position={position}
                />
              )
          )}
      </div>

      <div className="flex flex-row">
        {lineupOrder
          .slice(1, 6)
          .map(
            (position) =>
              roster[0][position] && (
                <PlayerAvatar
                  playerid={roster[0][position]}
                  position={position}
                />
              )
          )}
      </div>

      <div className="flex flex-row">
        {lineupOrder
          .slice(0, 1)
          .map(
            (position) =>
              roster[0][position] && (
                <PlayerAvatar
                  playerid={roster[0][position]}
                  position={position}
                />
              )
          )}
      </div>
    </div>
  );
}

export default Lineup;
