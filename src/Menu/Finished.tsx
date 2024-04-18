/* eslint-disable @typescript-eslint/no-explicit-any */

import { NavLink } from "react-router-dom";

export default function Finished({ correctAnswer }: any) {
  return (
    <div>
      <h1 className="text-center text-danger fw-bold">Finished!</h1>
      <h1 className="text-center">You got {correctAnswer.length} correct answers!</h1>
      <p className="">Do you want to play again? <NavLink to={'/'}>Klik here!</NavLink></p>
    </div>
  );
}
