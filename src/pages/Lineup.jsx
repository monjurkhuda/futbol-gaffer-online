import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import PlayerAvatar from "../component/PlayerAvatar";
import { GiSoccerBall } from "react-icons/gi";

function Lineup({ homeClubName, awayClubName, name }) {
  const [loading, setLoading] = useState(true);
  const [homeRoster, setHomeRoster] = useState();
  const [awayRoster, setAwayRoster] = useState();
  const [lineupScreen, setLineupScreen] = useState("roster");

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

    "rw",
    "ram",
    "cam",
    "lam",
    "lw",

    "rm",
    "rcm",
    "cm",
    "lcm",
    "lm",

    "rwb",
    "rdm",
    "cdm",
    "ldm",
    "lwb",

    "rb",
    "rcb",
    "cb",
    "lcb",
    "lb",

    "gk",
  ];

  const zoneMapper = {
    gk: 1,
    lb: 2,
    lcb: 3,
    cb: 3,
    rcb: 3,
    rb: 4,
    lwb: 2,
    ldm: 5,
    cdm: 5,
    rdm: 5,
    rwb: 4,
    lm: 6,
    lcm: 7,
    cm: 7,
    rcm: 7,
    rm: 8,
    lw: 9,
    lam: 10,
    cam: 10,
    ram: 10,
    rw: 11,
    lf: 12,
    cf: 12,
    rf: 12,
  };

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

  console.log(lineupScreen);

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

  if (loading) return <span className="loading loading-ring loading-lg"></span>;

  return (
    <div className="flex-col justify-center align-center w-full ">
      <div className="flex flex-row justify-center align-center">
        <button
          className={`rounded-tr-none rounded-br-none btn ${
            lineupScreen == "roster" ? "btn-active btn-accent" : "btn-outline"
          }`}
          onClick={() => setLineupScreen("roster")}
        >
          ROSTER
        </button>
        <button
          className={`rounded-tl-none rounded-bl-none btn ${
            lineupScreen == "nextmatch"
              ? "btn-active btn-accent"
              : "btn-outline"
          }`}
          onClick={() => setLineupScreen("nextmatch")}
        >
          NEXT MATCH
        </button>
      </div>
      <GiSoccerBall />
      <div className="bg-green-800 m-4 border-2 border-solid border-white">
        <div className="flex flex-row justify-evenly">
          {awayLineupOrder
            .slice(23, 24)
            .map(
              (position) =>
                awayRoster[0][position] && (
                  <PlayerAvatar
                    playerid={awayRoster[0][position]}
                    position={position}
                    color={"blue"}
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
                    color={"blue"}
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
                    color={"red"}
                    imgSrc="https://www.dsmpartnership.com/downtowndsmusa/filesimages/BLOGS/2021%20Headshots/AuthorProfileImage-01.jpg"
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
                    color={"red"}
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
                    color={"blue"}
                    imgSrc="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
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
                    color={"blue"}
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
                    color={"red"}
                    imgSrc="https://www.dsmpartnership.com/downtowndsmusa/filesimages/BLOGS/2021%20Headshots/AuthorProfileImage-01.jpg"
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
                    color={"red"}
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
                    color={"blue"}
                    imgSrc="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
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
                    color={"blue"}
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
                    color={"red"}
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
                    color={"red"}
                    imgSrc="https://www.dsmpartnership.com/downtowndsmusa/filesimages/BLOGS/2021%20Headshots/AuthorProfileImage-01.jpg"
                  />
                )
            )}
        </div>
      </div>
    </div>
  );
}

export default Lineup;
