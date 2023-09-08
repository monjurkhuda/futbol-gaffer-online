import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function PlayerAvatar({ playerid }) {
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState();

  async function getPlayer() {
    setLoading(true);
    let { data: player, error } = await supabase
      .from("players")
      .select("*")
      .eq("UID", playerid);
    setPlayer(player);
    setLoading(false);
  }

  useEffect(() => {
    getPlayer();
  }, []);

  console.log(player);

  if (loading) return <span className="loading loading-ring loading-lg"></span>;

  return (
    <div className="flex-col p-2">
      <div className="avatar">
        <div className="w-6 rounded-full">
          <img
            alt="avatar"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
          />
        </div>
      </div>
      <p class="text-xs">{player && player[0]?.Name}</p>
    </div>
  );
}

export default PlayerAvatar;
