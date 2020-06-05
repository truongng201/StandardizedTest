import React, { useState, useEffect } from "react";
import hiddenIcon from "../img/smile.svg";
import { useDispatch } from "react-redux";
import {
  unFlaggedAll,

  // sendAnswerToFirebase,
} from "../redux/Actions";
import { Link, useParams } from "react-router-dom";

const Timer = (props) => {
  let time;

  let dispatch = useDispatch();

  let { currentTest, currentSection } = useParams();

  // let AnswersStore = useSelector((state) => state.AnswersStore);
  let [showTime, setShowTime] = useState(true);
  let [minutes, setMinutes] = useState(props.time);
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else if (minutes === 1) {
          setSeconds(59);
          setMinutes(0);
        } else if (minutes > 1) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    if (minutes === 0 && seconds === 0 && currentSection !== "") {
      dispatch(unFlaggedAll());

      // if (AnswerStore.length > 0) {
      //   dispatch(
      //     sendAnswerToFirebase(currentTestNumb, currentSection, AnswerStore)
      //   );
      // }
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, minutes, dispatch, currentSection]);

  if (showTime) {
    time = (
      <div
        style={{
          color: "White",
          background:
            "linear-gradient(to bottom, #CA005E 0%, #E4428D 70%, #E87EB0 100%)",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "14px",
          cursor: "pointer",
          position: "fixed",
          top: "100px",
          right: "50px",
        }}
      >{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div>
    );
  } else {
    time = (
      <div
        style={{
          cursor: "pointer",
          position: "fixed",
          top: "100px",
          right: "50px",
        }}
      >
        <img src={hiddenIcon} alt="icon" height="30px" width="30px"></img>
      </div>
    );
  }

  function autoClick(e) {
    if (e !== null) {
      e.click();
    }
  }
  // console.log(minutes, seconds);
  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <Link to={`/${currentTest}`} ref={autoClick}></Link>
      ) : (
        <div onClick={() => setShowTime(!showTime)}>{time}</div>
      )}
    </div>
  );
};

export default Timer;
