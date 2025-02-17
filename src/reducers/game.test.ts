import { test, expect } from "vitest";
import type { Game } from "~/states/game";
import { nextGame } from "./game";

test("correct guess increment points", () => {
  let game: Game = { screen: "PLAY", points: 0, life: 3 };

  const startingPoints = game.points;

  // Good guess gives points
  game = nextGame(game, { type: "correct-guess" });
  expect(game.points).toBeGreaterThan(startingPoints);

  // Bad
});

test("incorrect guess will kill player", () => {
  let game: Game = { screen: "PLAY", points: 0, life: 3 };

  const startingLife = game.life;

  for (let i = 0; i < startingLife; i++) {
    expect(game.screen).toBe("PLAY");
    game = nextGame(game, { type: "incorrect-guess" });
  }

  expect(game.screen).toBe("GAME_OVER");
});
