import type { Game } from "~/states/game";

const POINTS_INC = 7;
const LIFE_DEC = 1;

export type GameAction =
  | { type: "correct-guess" }
  | { type: "incorrect-guess" };

export function nextGame(game: Game, action: GameAction) {
  switch (action.type) {
    case "correct-guess":
      return { ...game, points: game.points + POINTS_INC };
    case "incorrect-guess":
      const newGame = { ...game, life: game.life - LIFE_DEC };
      if (newGame.life <= 0) {
        newGame.screen = "GAME_OVER";
      }

      return newGame;
  }
}
