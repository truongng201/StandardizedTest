import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import QuestionPart from "../../components/QuestionPart";
import Answerpart from "../../components/AnswersPart";
import Timer from "../../components/Timer";
import { Row, Col, Container } from "reactstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TypeAnswerPart from "../../components/TypeAnswerPart";
import ShowResults from "../../components/ShowResults";

const SATMathNoCal = (props) => {
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
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <QuestionPart
              QuestionImgSrc={data}
              style={{
                overflowY: "auto",
                overflowX: "hidden",
                height: "500px",
              }}
            ></QuestionPart>
          </Col>
          <Col
            style={{
              overflowY: "auto",
              overflowX: "auto",
              height: "450px",
              marginTop: "20px",
            }}
          >
            {TestDoneFilter === -1 && QuestionNumb < 16 && (
              <Answerpart></Answerpart>
            )}
            {TestDoneFilter === -1 && QuestionNumb > 15 && (
              <TypeAnswerPart></TypeAnswerPart>
            )}
          </Col>
        </Row>
      </Container>
      {TestDoneFilter === -1 && <Timer time={25}></Timer>}
      {TestDoneFilter !== -1 && (
        <div style={{ position: "fixed", top: "100px", right: "50px" }}>
          <ShowResults
            currentTest={currentTest}
            PracticeTestIndex={QuestionNumb}
            section={currentSection}
          ></ShowResults>
        </div>
      )}
      <Pagination numberOfPagesShown={10} numberOfQuestion={20}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default SATMathNoCal;
