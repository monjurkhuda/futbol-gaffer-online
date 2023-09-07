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

  console.log(player[0]);

  return (
    <div className="flex-col">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img
            alt="avatar"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
          />
        </div>
        <p>{player[0].Name}</p>
      </div>
    </div>
  );
}

export default PlayerAvatar;
