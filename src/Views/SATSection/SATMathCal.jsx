import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import QuestionPart from "../../components/QuestionPart";
import { Row, Col, Container } from "reactstrap";

const SATMathCal = (props) => {
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
            {/* {Answerpart} */}
          </Col>
        </Row>
      </Container>
      <Pagination numberOfPagesShown={19} numberOfQuestion={38}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default SATMathCal;
