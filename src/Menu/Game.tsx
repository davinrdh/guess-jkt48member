/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { ContainerStyled, ImageMember } from "../Components/styled";
import Finished from "./Finished";
import { dataMembers } from "../Components/db";
import { NavLink } from "react-router-dom";

export default function Game() {
  const [value, setValue] = useState<string>("");
  const [usedIndexes, setUsedIndexes] = useState<any>([]);
  // const [clickCount, setClickCount] = useState<number>(0);
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<any>([]);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const time = 30;
  const [timer, setTimer] = useState<any>(time);

  const filterMember = localStorage.getItem("filter");
  const data =
    filterMember === "all"
      ? dataMembers
      : dataMembers.filter((data) => data.status === filterMember);

  const [index, setIndex] = useState<any>(
    Math.floor(Math.random() * data?.length)
  );

  // console.log(clickCount)

  const generateRandomIndex = () => {
    if(usedIndexes.length >= 10) {
      return 
    }

    let newIndex: any;
    do {
      newIndex = Math.floor(Math.random() * data?.length);
    } while (usedIndexes.includes(newIndex));
    
    setIndex(newIndex);
    setUsedIndexes([...usedIndexes, newIndex]);
    setTimer(time);
    setIsWrong(false);
  };

  useEffect(() => {
    if (questionCount < 10) {
      const timeout = setTimeout(() => {
        generateRandomIndex();
      }, timer * 1000);

      return () => clearTimeout(timeout);
    }
  }, [questionCount, timer]);

  console.log(timer)

  useEffect(() => {
    if (timer > 0 && questionCount < 10) {
      const interval = setInterval(() => {
        setTimer((prevTimer: any) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [questionCount, timer]);

  useEffect(() => {
    if (timer == time - 1) {
      setValue("");
    }
  }, [timer]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // setClickCount((prevCount) => prevCount + 1);
    e.preventDefault();
    if (value.toLowerCase() === data[index]?.member) {
      setQuestionCount((prevCount) => prevCount + 1);
      setCorrectAnswer((prevAnswers: any) => [...prevAnswers, true]);
      generateRandomIndex();
      setValue("");
    } else {
      setIsWrong(true);
      setValue("");
    }

    if(usedIndexes?.length === 10){
      window.location.href = '/score'
    }
  };

  const handleChange = (e: any) => {
    setValue(e);
  };

  const handleSkip = () => {
    setValue("");
    setQuestionCount((prevCount) => prevCount + 1);
    generateRandomIndex();
  };

  useEffect(() => {
    const timerWrong = setTimeout(() => {
      setIsWrong(false);
    }, 3000); 

    return () => {
      clearTimeout(timerWrong);
    };
  }, [isWrong]);

  return (
    <>
      {filterMember === "" ? (
        <Alert key="warning" variant="warning" className="bg-transparent border-0 text-center">
          Please select member status first then press start! <br />
          <NavLink to="/">&larr; Go back</NavLink>
        </Alert>
      ) : (
        <ContainerStyled>
          <p>{usedIndexes?.length < 10 && <Button variant="outline-danger" className="rounded-circle" style={{width: '50px', height: '50px'}} disabled>{timer}</Button>}</p>
          <div className="mx-3">
            {usedIndexes.length === 10 ? (
              <Finished correctAnswer={correctAnswer} hidden />
            ) : (
              <>
                <p className="mb-2">Question No {usedIndexes.length + 1}</p>
                {/* <p className="mb-2">Pertanyaan No {usedIndexes.length + 1}</p> */}
                <ImageMember
                  src={data[index]?.img}
                  alt=""
                  className="rounded"
                />
                <div className="text-danger mt-3" style={{ height: "2.5rem" }}>
                  {isWrong === true ? "Wrong answer! Please try again!" : ""}
                  {/* {isWrong === true ? "Jawaban salah! Ayo coba lagi!" : ""} */}
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      value={value}
                      onChange={({ target }) => handleChange(target.value)}
                      type="text"
                      placeholder="Enter name..."
                      className=""
                      required
                    />
                  </Form.Group>
                  <div className="d-flex gap-3">
                    <Button
                      className="w-100"
                      variant="outline-danger"
                      onClick={handleSkip}
                    >
                      Skip
                    </Button>
                    <Button variant="danger" className="w-100" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </>
            )}
          </div>
        </ContainerStyled>
      )}
    </>
  );
}
