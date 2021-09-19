import React, { Link } from "react";
import ScoreBoardTitle from "./ScoreBoardTitle";
import ScoreBoardUser from "./ScoreBoardUser";

function ScoreBoard({ players }) {
  return (
    <div className="scoreBoard">
      <ScoreBoardTitle />
      {players &&
        players.map((player, index) => (
          <ScoreBoardUser
            score={player.score}
            name={player.name}
            index={index}
          />
        ))}
    </div>
  );
}

export default ScoreBoard;
