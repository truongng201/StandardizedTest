import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import PassagePart from "../../components/PassagePart";
import QuestionPart from "../../components/QuestionPart";
import Answerpart from "../../components/AnswersPart";
import { Row, Col, Container } from "reactstrap";
import { useParams } from "react-router-dom";
import Timer from "../../components/Timer";
import { useSelector } from "react-redux";
import ShowResults from "../../components/ShowResults";

const SATReading = (props) => {
  const { data } = props;
  let {
    QuestionNumb,
    currentTest,
    currentSection,
    currentTestNumb,
  } = useParams();
  let profile = useSelector((state) => state.firebase.profile);
  let TestDoneFilter;
  if (!profile.isEmpty) {
    TestDoneFilter = profile.TestDone.findIndex(
      (TestIsDone) =>
        TestIsDone.Test === currentTest &&
        TestIsDone.TestNumb === `${currentTestNumb}` &&
        TestIsDone.Section === currentSection
    );
  }
  let PassageImgSrc;
  let PassBound = data.PassBound;
  switch (true) {
    case QuestionNumb <= PassBound[0]:
      PassageImgSrc = data.PassageImgSrc[0];
      break;
    case QuestionNumb <= PassBound[1]:
      PassageImgSrc = data.PassageImgSrc[1];
      break;
    case QuestionNumb <= PassBound[2]:
      PassageImgSrc = data.PassageImgSrc[2];
      break;
    case QuestionNumb <= PassBound[3]:
      PassageImgSrc = data.PassageImgSrc[3];
      break;
    case QuestionNumb <= PassBound[4]:
      PassageImgSrc = data.PassageImgSrc[4];
      break;
    default:
      break;
  }

  return (
    <div>
      <Container>
        <Row>
          <Col style={{ marginLeft: "-70px" }}>
            <PassagePart PassageImgSrc={PassageImgSrc}></PassagePart>
          </Col>
          <Col
            style={{
              marginRight: "-50px",
              overflowY: "auto",
              height: "450px",
            }}
          >
            <QuestionPart QuestionImgSrc={data.QuestionImgSrc}></QuestionPart>
            {TestDoneFilter === -1 && <Answerpart></Answerpart>}
          </Col>
        </Row>
      </Container>
      {TestDoneFilter === -1 && <Timer time={65}></Timer>}
      {TestDoneFilter !== -1 && (
        <div style={{ position: "fixed", top: "100px", right: "50px" }}>
          <ShowResults
            currentTest={currentTest}
            PracticeTestIndex={currentTestNumb}
            section={currentSection}
          ></ShowResults>
        </div>
      )}
      <Pagination numberOfPagesShown={13} numberOfQuestion={52}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default SATReading;
