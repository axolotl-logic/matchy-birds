export interface Game {
  screen: GameScreen;
  life: number;
  points: number;
}

export type GameScreen = "PLAY" | "ERROR" | "GAME_OVER";
