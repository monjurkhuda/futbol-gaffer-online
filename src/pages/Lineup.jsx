import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import PlayerAvatar from "../component/PlayerAvatar";

function Lineup({ homeClubName, awayClubName, name }) {
  const [loading, setLoading] = useState(true);
  const [homeRoster, setHomeRoster] = useState();
  const [awayRoster, setAwayRoster] = useState();

  const homeRosterArray = [];
  const homeLineupOrder = [
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
  const awayRosterArray = [];
  const awayLineupOrder = [
    "rf",
    "cf",
    "lf",

    "lw",
    "lam",
    "cam",
    "ram",
    "rw",

    "lm",
    "lcm",
    "cm",
    "rcm",
    "rm",

    "lwb",
    "ldm",
    "cdm",
    "rdm",
    "rwb",

    "lb",
    "lcb",
    "cb",
    "rcb",
    "rb",

    "gk",
  ];

  async function getClubRosters() {
    setLoading(true);
    let { data: homeRoster, error } = await supabase
      .from("clubs")
      .select("*")
      .eq("name", homeClubName);
    setHomeRoster(homeRoster);

    let { data: awayRoster, awayError } = await supabase
      .from("clubs")
      .select("*")
      .eq("name", awayClubName);
    setAwayRoster(awayRoster);

    setLoading(false);
  }

  console.log(awayRoster);

  useEffect(() => {
    getClubRosters();

    homeRoster &&
      homeLineupOrder.forEach((position) => {
        homeRosterArray.push(homeRoster[0][position]);
      });

    awayRoster &&
      awayLineupOrder.forEach((position) => {
        awayRosterArray.push(awayRoster[0][position]);
      });
  }, []);

  console.log("awayRosterArray", awayRosterArray);

  if (loading) return <span className="loading loading-ring loading-lg"></span>;

  return (
    <div className="flex-col justify-center align-center">
      <div className="flex flex-row justify-evenly">
        {awayLineupOrder
          .slice(23, 24)
          .map(
            (position) =>
              awayRoster[0][position] && (
                <PlayerAvatar
                  playerid={awayRoster[0][position]}
                  position={position}
                  imgSrc="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
                />
              )
          )}
      </div>

      <div className="flex flex-row justify-evenly">
        {awayLineupOrder
          .slice(18, 23)
          .map(
            (position) =>
              awayRoster[0][position] && (
                <PlayerAvatar
                  playerid={awayRoster[0][position]}
                  position={position}
                  imgSrc="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
                />
              )
          )}
      </div>

      <div className="flex flex-row justify-evenly">
        {homeLineupOrder
          .slice(21, 24)
          .map(
            (position) =>
              homeRoster[0][position] && (
                <PlayerAvatar
                  playerid={homeRoster[0][position]}
                  position={position}
                  imgSrc="https://www.dsmpartnership.com/downtowndsmusa/filesimages/BLOGS/2021%20Headshots/AuthorProfileImage-01.jpg"
                />
              )
          )}
      </div>

      <div className="flex flex-row justify-evenly">
        {awayLineupOrder
          .slice(13, 18)
          .map(
            (position) =>
              awayRoster[0][position] && (
                <PlayerAvatar
                  playerid={awayRoster[0][position]}
                  position={position}
                  imgSrc="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
                />
              )
          )}
      </div>

      <div className="flex flex-row justify-evenly">
        {homeLineupOrder
          .slice(16, 21)
          .map(
            (position) =>
              homeRoster[0][position] && (
                <PlayerAvatar
                  playerid={homeRoster[0][position]}
                  position={position}
                  imgSrc="https://www.dsmpartnership.com/downtowndsmusa/filesimages/BLOGS/2021%20Headshots/AuthorProfileImage-01.jpg"
                />
              )
          )}
      </div>

      <div className="flex flex-row justify-evenly">
        {awayLineupOrder
          .slice(8, 13)
          .map(
            (position) =>
              awayRoster[0][position] && (
                <PlayerAvatar
                  playerid={awayRoster[0][position]}
                  position={position}
                  imgSrc="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
                />
              )
          )}
      </div>

      <div className="flex flex-row justify-evenly">
        {homeLineupOrder
          .slice(11, 16)
          .map(
            (position) =>
              homeRoster[0][position] && (
                <PlayerAvatar
                  playerid={homeRoster[0][position]}
                  position={position}
                  imgSrc="https://www.dsmpartnership.com/downtowndsmusa/filesimages/BLOGS/2021%20Headshots/AuthorProfileImage-01.jpg"
                />
              )
          )}
      </div>

      <div className="flex flex-row justify-evenly">
        {awayLineupOrder
          .slice(3, 8)
          .map(
            (position) =>
              awayRoster[0][position] && (
                <PlayerAvatar
                  playerid={awayRoster[0][position]}
                  position={position}
                  imgSrc="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
                />
              )
          )}
      </div>

      <div className="flex flex-row justify-evenly">
        {homeLineupOrder
          .slice(6, 11)
          .map(
            (position) =>
              homeRoster[0][position] && (
                <PlayerAvatar
                  playerid={homeRoster[0][position]}
                  position={position}
                  imgSrc="https://www.dsmpartnership.com/downtowndsmusa/filesimages/BLOGS/2021%20Headshots/AuthorProfileImage-01.jpg"
                />
              )
          )}
      </div>

      <div className="flex flex-row justify-evenly">
        {awayLineupOrder
          .slice(0, 3)
          .map(
            (position) =>
              awayRoster[0][position] && (
                <PlayerAvatar
                  playerid={awayRoster[0][position]}
                  position={position}
                  imgSrc="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
                />
              )
          )}
      </div>

      <div className="flex flex-row justify-evenly">
        {homeLineupOrder
          .slice(1, 6)
          .map(
            (position) =>
              homeRoster[0][position] && (
                <PlayerAvatar
                  playerid={homeRoster[0][position]}
                  position={position}
                  imgSrc="https://www.dsmpartnership.com/downtowndsmusa/filesimages/BLOGS/2021%20Headshots/AuthorProfileImage-01.jpg"
                />
              )
          )}
      </div>

      <div className="flex flex-row justify-evenly">
        {homeLineupOrder
          .slice(0, 1)
          .map(
            (position) =>
              homeRoster[0][position] && (
                <PlayerAvatar
                  playerid={homeRoster[0][position]}
                  position={position}
                  imgSrc="https://www.dsmpartnership.com/downtowndsmusa/filesimages/BLOGS/2021%20Headshots/AuthorProfileImage-01.jpg"
                />
              )
          )}
      </div>
    </div>
  );
}

export default Lineup;
