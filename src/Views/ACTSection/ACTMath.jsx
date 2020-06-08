import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import QuestionPart from "../../components/QuestionPart";
import { Row, Col, Container } from "reactstrap";
import AnswersPart from "../../components/AnswersPart";
import Timer from "../../components/Timer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowResults from "../../components/ShowResults";

const ACTMath = (props) => {
  const { data } = props;
  let { currentTest, currentSection, currentTestNumb } = useParams();
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
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <QuestionPart
              QuestionImgSrc={data}
              style={{ overflowY: "auto", height: "450px" }}
            ></QuestionPart>
          </Col>
          <Col style={{ overflowY: "auto", height: "450px" }}>
            {TestDoneFilter === -1 && <AnswersPart></AnswersPart>}
          </Col>
        </Row>
      </Container>
      {TestDoneFilter === -1 && <Timer time={60}></Timer>}
      {TestDoneFilter !== -1 && (
        <div style={{ position: "fixed", top: "100px", right: "50px" }}>
          <ShowResults
            currentTest={currentTest}
            PracticeTestIndex={currentTestNumb}
            section={currentSection}
          ></ShowResults>
        </div>
      )}
      <Pagination numberOfPagesShown={15} numberOfQuestion={60}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default ACTMath;
