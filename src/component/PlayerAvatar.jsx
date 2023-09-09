import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function PlayerAvatar({ playerid, position, imgSrc }) {
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
    <div className="flex-col p-2">
      <div className="avatar">
        <div className="w-6 rounded-full">
          <img alt="avatar" src={imgSrc} />
        </div>
      </div>
      <p class="text-xs">{player && player[0]?.Name}</p>
      {/* <p class="text-xs">{position}</p> */}
    </div>
  );
}

export default PlayerAvatar;
