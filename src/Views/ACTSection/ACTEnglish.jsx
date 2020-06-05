import React from "react";
import Pagination from "../../components/PaginationPart";
import Tools from "../../components/Tools";
import PassagePart from "../../components/PassagePart";
import QuestionPart from "../../components/QuestionPart";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import Timer from "../../components/Timer";

const ACTEnglish = (props) => {
  const { data } = props;
  let { QuestionNumb } = useParams();
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
      <Timer time={45}></Timer>
      <Pagination numberOfPagesShown={15} numberOfQuestion={75}></Pagination>
      <Tools></Tools>
    </div>
  );
};

export default ACTEnglish;
