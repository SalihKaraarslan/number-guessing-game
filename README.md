# Multiplier Guessing Game

Welcome to the Multiplier Guessing Game! This exciting game challenges players to predict the freezing point of a rising multiplier value. Test your intuition, strategy, and luck as you compete against other players and auto-generated opponents.

## Live Demo

Try out the game now: [Multiplier Guessing Game Live Demo](https://number-guessing-game-blond.vercel.app)

## Game Overview

In this game, players progress through a series of rounds, each presenting a unique challenge. The core mechanics include:

- A rising multiplier value displayed on a line graph
- Player predictions for the freezing point of the multiplier
- Point allocation based on predictions
- Real-time updates and interactions
- Competitive ranking system
- Chat functionality for player communication

## Features

- **Game Board**: A line graph representing the increasing multiplier value
- **Player Inputs**: Fields for entering points and predicted multiplier value
- **Current Round Display**: Table showing all active players in the current round
- **Speed Slider**: Control the rising speed of the multiplier value
- **Ranking Table**: Overall ranking of all players based on total points
- **Chat System**: Real-time chat functionality for player interaction
- **Auto-Players**: Four AI-controlled players to compete against

## Technologies Used

- Next.js
- Tailwind CSS
- WebSocket for real-time communication

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the Next.js development server:

   ```
   npm run dev
   ```

4. In a separate terminal, navigate to the server directory and start the WebSocket server:

   ```
   cd server
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to play the game.

## How to Play

1. Enter the amount of points you want to wager in the "Points" field.
2. Predict the value at which you think the multiplier will freeze in the "Multiplier" field.
3. Observe the rising multiplier value on the graph.
4. If your prediction is correct, you win points calculated by your wager multiplied by the final multiplier value.
5. Compete against other players and climb the rankings!

## Contributing

We welcome contributions to improve the game! Please feel free to submit issues or pull requests.
