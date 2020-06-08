import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import PassagePart from "../../components/PassagePart";
import QuestionPart from "../../components/QuestionPart";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import Timer from "../../components/Timer";
import Answerpart from "../../components/AnswersPart";
import { useSelector } from "react-redux";
import ShowResults from "../../components/ShowResults";

const ACTReading = (props) => {
  const { data } = props;
  let PassageImgSrc;
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

  switch (true) {
    case QuestionNumb <= 10:
      PassageImgSrc = data.PassageImgSrc[0];
      break;
    case QuestionNumb <= 20:
      PassageImgSrc = data.PassageImgSrc[1];
      break;
    case QuestionNumb <= 30:
      PassageImgSrc = data.PassageImgSrc[2];
      break;
    case QuestionNumb <= 40:
      PassageImgSrc = data.PassageImgSrc[3];
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
      {TestDoneFilter === -1 && <Timer time={35}></Timer>}
      {TestDoneFilter !== -1 && (
        <div style={{ position: "fixed", top: "100px", right: "50px" }}>
          <ShowResults
            currentTest={currentTest}
            PracticeTestIndex={currentTestNumb}
            section={currentSection}
          ></ShowResults>
        </div>
      )}
      <Pagination numberOfPagesShown={10} numberOfQuestion={40}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default ACTReading;
