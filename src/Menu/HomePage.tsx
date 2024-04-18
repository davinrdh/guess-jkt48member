/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "react-bootstrap";
import { ContainerStyled } from "../Components/styled";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {

  useEffect(() => {
    localStorage.setItem("filter", 'all');
  }, [])
  

  // const handleChange = (event: any) => {
  //   setActiveFilters(event.target.value);
  //   localStorage.setItem('filter', event.target.value);
  // }

  return (
    <div>
      <>
        <ContainerStyled>
          {/* <h3 className="mt-5">Welcome to Guess JKT48 Member!</h3> */}
          <p>Can you guess the JKT48 members from the clues given?</p>
          <img src="/img/guess.png" height={250} className="mb-3" alt="" />
          {/* <Form.Select aria-label="Default select example" onChange={(e) => handleChange(e)}>
            <option value="all">Member Status</option>
            <option value="member">Active Member</option>
            <option value="trainee">Trainee</option>
          </Form.Select> */}
          <p>Click the button to get started!</p>
          <NavLink to={"/game"}>
            <Button className="w-75 py-2 rounded-pills" variant="danger">
              Start
            </Button>
          </NavLink>
        </ContainerStyled>
      </>
    </div>
  );
}
