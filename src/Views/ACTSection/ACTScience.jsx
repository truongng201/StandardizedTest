import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import PassagePart from "../../components/PassagePart";
import QuestionPart from "../../components/QuestionPart";
import Timer from "../../components/Timer";
import { Row, Col, Container } from "reactstrap";
import Answerpart from "../../components/AnswersPart";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ShowResults from "../../components/ShowResults";

const ACTScience = (props) => {
  const { data } = props;
  let { QuestionNumb, currentTest, currentSection } = useParams();
  let profile = useSelector((state) => state.firebase.profile);
  let TestDoneFilter;
  if (!profile.isEmpty) {
    TestDoneFilter = profile.TestDone.findIndex(
      (TestIsDone) =>
        TestIsDone.Test === currentTest &&
        TestIsDone.TestNumb === `${QuestionNumb}` &&
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
    case QuestionNumb <= PassBound[5]:
      PassageImgSrc = data.PassageImgSrc[5];
      break;
    case QuestionNumb <= PassBound[6]:
      PassageImgSrc = data.PassageImgSrc[6];
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
            PracticeTestIndex={QuestionNumb}
            section={currentSection}
          ></ShowResults>
        </div>
      )}
      <Pagination numberOfPagesShown={10} numberOfQuestion={40}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default ACTScience;
