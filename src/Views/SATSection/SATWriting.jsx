import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import PassagePart from "../../components/PassagePart";
import QuestionPart from "../../components/QuestionPart";
import Answerpart from "../../components/AnswersPart";
import { Row, Col, Container } from "reactstrap";
import { useParams } from "react-router-dom";

const SATWriting = (props) => {
  const { data } = props;
  let { QuestionNumb } = useParams();
  let PassageImgSrc;
  switch (true) {
    case QuestionNumb < 12:
      PassageImgSrc = data.PassageImgSrc[0];
      break;
    case QuestionNumb < 23:
      PassageImgSrc = data.PassageImgSrc[1];
      break;
    case QuestionNumb < 34:
      PassageImgSrc = data.PassageImgSrc[2];
      break;
    case QuestionNumb < 45:
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
            <Answerpart></Answerpart>
          </Col>
        </Row>
      </Container>
      <Pagination numberOfPagesShown={11} numberOfQuestion={44}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default SATWriting;
