import React, { useState } from "react";
import Die from "./Die";
import "./RollDice.css";

const RollDice = ({ sides }) => {
  const [state, setState] = useState({
    die1: "six",
    die2: "six",
    rolling: false,
    totalScore: 12,
    averageScore: 6,
  });

  const { die1, die2, rolling, totalScore, averageScore } = state;

  const roll = () => {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    const score1 = Object.values(newDie1);
    const score2 = Object.values(newDie2);

    setState({
      die1: Object.keys(newDie1),
      die2: Object.keys(newDie2),
      rolling: true,
      totalScore: score1[0] + score2[0],
      averageScore: (score1[0] + score2[0]) / 2,
    });

    console.log(score1[0]);
    console.log(Object.keys(newDie1));
    console.log(Object.values(newDie1));


    setTimeout(() => {
      setState((prevState) => ({ ...prevState, rolling: false }));
    }, 500);
  };

  return (
    <div className="rolldice">
      <div className="rolldice__container">
        <Die face={String(die1)} rolling={rolling} />
        <Die face={String(die2)} rolling={rolling} />
      </div>
      <button onClick={roll} disabled={rolling}>
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>

      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Dice 1</th>
            <th>Dice 2</th>
            <th>Total</th>
            <th>Average</th>
            <th>Low</th>
            <th>High</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{die1}</td>
            <td>{die2}</td>
            <td>{totalScore}</td>
            <td>{averageScore}</td>
            <td>{die1 > die2 ? roll.newDie1 : die2}</td>
            <td>{die1 > die2 ? die2 : die1}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

RollDice.defaultProps = {
  sides: [
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
  ],
};

export default RollDice;
