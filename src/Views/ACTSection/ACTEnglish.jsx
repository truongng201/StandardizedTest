import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import PassagePart from "../../components/PassagePart";
import QuestionPart from "../../components/QuestionPart";

import { Row, Col, Container } from "reactstrap";

const ACTEnglish = (props) => {
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
          </Col>
        </Row>
      </Container>
      <Pagination numberOfPagesShown={15} numberOfQuestion={75}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default ACTEnglish;
