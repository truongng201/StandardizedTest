import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import QuestionPart from "../../components/QuestionPart";
import Answerpart from "../../components/AnswersPart";

import { Row, Col, Container } from "reactstrap";

const SATMathNoCal = (props) => {
  const { data } = props;

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
            style={{ overflowY: "auto", height: "450px", marginTop: "20px" }}
          >
            <Answerpart></Answerpart>
          </Col>
        </Row>
      </Container>
      <Pagination numberOfPagesShown={10} numberOfQuestion={20}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default SATMathNoCal;
