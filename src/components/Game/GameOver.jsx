import { Link } from "react-router-dom";
import GameState from "./GameState";

function GameOver({ gameState }) {
    switch (gameState) {
        case GameState.inProgress:
            return <></>;
        case GameState.playerOWins:
            return <div className="game-over">O Wins</div>;
        case GameState.playerXWins:
            return <div className="game-over">X Wins</div>;
        case GameState.draw:
            return <div className="game-over"><Link to="/admin">Draw</Link></div>;
        default:
            return <></>;
    }
}

export default GameOver;