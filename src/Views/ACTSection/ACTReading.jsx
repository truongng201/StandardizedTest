import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import PassagePart from "../../components/PassagePart";
import QuestionPart from "../../components/QuestionPart";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";

const ACTReading = (props) => {
  const { data } = props;
  let PassageImgSrc;
  let { QuestionNumb } = useParams();

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
          </Col>
        </Row>
      </Container>
      <Pagination numberOfPagesShown={10} numberOfQuestion={40}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default ACTReading;
