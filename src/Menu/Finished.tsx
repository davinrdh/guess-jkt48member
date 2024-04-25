/* eslint-disable @typescript-eslint/no-explicit-any */

import { NavLink } from "react-router-dom";

export default function Finished({ correctAnswer }: any) {
  return (
    <div>
      <h1 className="text-center text-danger fw-bold">Finished!</h1>
      {correctAnswer?.length === 0 && <h1 className="text-center">You got {correctAnswer.length} correct answers! Get to know members better!</h1>}
      {correctAnswer?.length >= 1 && correctAnswer?.length <= 5 && <h1 className="text-center">Congrats, You got {correctAnswer.length} correct answers! You are a wota smart</h1>}
      {correctAnswer?.length > 5 && correctAnswer?.length < 10 && <h1 className="text-center">Congrats, You got {correctAnswer.length} correct answers! You are a wota genius</h1>}
      {correctAnswer?.length === 10 && <h1 className="text-center">Congrats, Your answers are perfect! You are a wota sevvuh</h1>}
      <p className="">Do you want to play again? <NavLink to={'/'}>Click here!</NavLink></p>
    </div>
  );
}
