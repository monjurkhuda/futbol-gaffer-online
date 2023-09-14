import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { GiSoccerBall } from "react-icons/gi";
import blueJersey from "../images/soccer-jersey.png";
import redJersey from "../images/red-soccer-jersey.png";

function PlayerAvatar({ playerid, color, position, imgSrc }) {
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState();

  async function getPlayer() {
    setLoading(true);
    let {
      data: player,
      imgSrc,
      error,
    } = await supabase.from("players").select("*").eq("UID", playerid);
    setPlayer(player);
    setLoading(false);
  }

  useEffect(() => {
    getPlayer();
  }, []);

  if (loading) return <span className="loading loading-ring loading-lg"></span>;

  return (
    <div className="flex flex-col justify-center items-center w-20">
      <div className="w-6">
        {color == "blue" ? <img src={blueJersey} alt="Logo" /> : <></>}
        {color == "red" ? <img src={redJersey} alt="Logo" /> : <></>}
      </div>
      <div>
        <p class="text-xs">{player && player[0]?.Name}</p>
      </div>
      {/* <p class="text-xs">{position}</p> */}
    </div>
  );
}

export default PlayerAvatar;
