import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import QuestionPart from "../../components/QuestionPart";
import { Row, Col, Container } from "reactstrap";
import AnswersPart from "../../components/AnswersPart";
import Timer from "../../components/Timer";

const ACTMath = (props) => {
  const { data } = props;
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
            <AnswersPart></AnswersPart>
          </Col>
        </Row>
      </Container>
      <Timer time={60}></Timer>
      <Pagination numberOfPagesShown={15} numberOfQuestion={60}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default ACTMath;
