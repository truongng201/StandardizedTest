import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import PassagePart from "../../components/PassagePart";
import QuestionPart from "../../components/QuestionPart";
import Timer from "../../components/Timer";
import { Row, Col, Container } from "reactstrap";
import Answerpart from "../../components/AnswersPart";

const ACTScience = (props) => {
  const { data } = props;
  return (
    <div>
      <Container>
        <Row>
          <Col style={{ marginLeft: "-70px" }}>
            <PassagePart PassageImgSrc={data.PassageImgSrc}></PassagePart>
          </Col>
          <Col
            style={{
              marginRight: "-50px",
              overflowY: "auto",
              height: "450px",
            }}
          >
            <QuestionPart QuestionImgSrc={data.QuestionImgSrc}></QuestionPart>
            <Answerpart></Answerpart>
          </Col>
        </Row>
      </Container>
      <Timer time={35}></Timer>
      <Pagination numberOfPagesShown={10} numberOfQuestion={40}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default ACTScience;
