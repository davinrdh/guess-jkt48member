/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ContainerStyled } from "../Components/styled";
import Finished from "./Finished";
import { dataMembers } from "../Components/db";

export default function Game() {
  const [value, setValue] = useState<string>("");
  const [index, setIndex] = useState<any>(
    Math.floor(Math.random() * dataMembers?.length)
  );
  const [usedIndexes, setUsedIndexes] = useState<any>([]);
  const [clickCount, setClickCount] = useState<number>(0);
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<any>([]);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [timer, setTimer] = useState<any>(30);

  console.log(clickCount)

  const generateRandomIndex = () => {
    let newIndex: any;
    do {
      newIndex = Math.floor(Math.random() * dataMembers?.length);
    } while (usedIndexes.includes(newIndex));
    setIndex(newIndex);
    setUsedIndexes([...usedIndexes, newIndex]);
    setTimer(30);
  };

  useEffect(() => {
    if (questionCount < 10) {
      const timeout = setTimeout(() => {
        generateRandomIndex();
      }, timer * 1000);

      return () => clearTimeout(timeout);
    }
  }, [questionCount, timer]);

  useEffect(() => {
    if (timer > 0 && questionCount < 10) {
      const interval = setInterval(() => {
        setTimer((prevTimer: any) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [questionCount, timer]);

  const handleSubmit = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (value.toLowerCase() === dataMembers[index]?.member) {
      setQuestionCount((prevCount) => prevCount + 1);
      setIsWrong(false);
      setCorrectAnswer((prevAnswers: any) => [...prevAnswers, true]);
      generateRandomIndex();
      setValue("");
    } else {
      setIsWrong(true);
    }
  };

  const handleChange = (e: any) => {
    setValue(e);
  };

  const handleSkip = () => {
    setValue("");
    setQuestionCount((prevCount) => prevCount + 1);
    setIsWrong(false);
    generateRandomIndex();
  };

  return (
    <>
      <ContainerStyled>
        <p>{usedIndexes?.length < 10 && timer}</p>
        <div className="mx-3">
          {usedIndexes.length === 10 ? (
            <Finished correctAnswer={correctAnswer} />
          ) : (
            <>
              <p className="mb-2">Who is she?</p>
              <img
                src={dataMembers[index]?.img}
                alt=""
                width={200}
                className="rounded"
              />
              <div className="text-danger mt-3" style={{ height: "2.5rem" }}>
                {isWrong === true ? "Wrong answer! Please try again!" : ""}
              </div>
              <Form>
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
                  <Button
                    variant="danger"
                    className="w-100"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </>
          )}
        </div>
      </ContainerStyled>
    </>
  );
}
