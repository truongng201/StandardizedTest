import React from "react";

const ToeflInstruction = (props) => {
  let { section } = props;
  let Instruction;
  switch (section) {
    case "Reading":
      Instruction = (
        <div>
          <p>
            <strong>Begin Reading Test—54 minutes, 30 questions</strong>
          </p>
          <p>
            Most questions are worth 1 point but the last question in this set
            is worth more than 1 point. The directions indicate how many points
            you may receive.
          </p>
          <p>
            When you want to move to the next question, click on
            <strong>Next</strong>&nbsp;button. You may skip questions and go
            back to them later if you want to return to previous questions,
            click on <strong>Back</strong>&nbsp;button.You may refer to the
            passages as often as necessary.
          </p>
          <p>
            Select the <strong>Next </strong>button to proceed.
          </p>
        </div>
      );
      break;
    case "Listening":
      Instruction = (
        <div>
          <p>
            <strong>Begin Listening Test</strong>
          </p>
          <p>
            This test measures your ability to understand conversations and
            lectures in English.
          </p>
          <p>
            The Listening section is divided into 2 separately timed parts. [In
            the first part, you will listen to 1 conversation and 1 lecture. In
            the second part, you will listen to 1 conversation and 2 lectures.]
          </p>
          <p>
            In each part, you will hear each conversation or lecture only one
            time. After each conversation or lecture, you will answer some
            questions about it. The questions typically ask about the main idea
            and supporting details. Some questions ask about a speaker’s purpose
            or attitude. Answer the questions based on what is stated or implied
            by the speakers.
          </p>
          <p>
            You may take notes while you listen. You may use your notes to help
            you answer the questions. Your notes will not be scored. If you need
            to change the volume while you listen, click on the Volume icon at
            the top of the screen.
          </p>
          <p>
            In some questions, you will see this icon: [a headphone]. This means
            that you will hear, but not see, part of the question.
          </p>
          <p>
            Most questions are worth 1 point. If a question is worth more than 1
            point, it will have special directions that indicate how many points
            you can receive.
          </p>
          <p>
            You must answer each question. After you answer, click on Next. Then
            click on OK to confirm your answer and go on to the next question.
            After you click on OK you cannot return to previous questions.
          </p>
          <p>
            A clock at the top of the screen will show you how much time is
            remaining, the clock will not count down while you are listening.
            The clock will count down only when you are listening to the
            questions.
          </p>
          <p>
            Select the <strong>Next </strong>button to proceed.
          </p>
        </div>
      );
      break;
    case "Speaking":
      Instruction = (
        <div>
          <p>
            <strong>Begin Speaking Test</strong>
          </p>
          <p>
            In this Speaking practice test, YOU will be able to demonstrate your
            ability to speak about a variety of topics. You will answer six
            questions by speaking into a microphone. Answer each of the
            questions as completely as possible.
          </p>
          <p>
            In questions 1, you will speak about familiar topics. Your response
            will be scored on your ability to speak clearly and coherently about
            the topics.
          </p>
          <p>
            In questions 2 and 3, you will first read a short text. The text
            will go away and you will then listen to a talk on the same topic.
            You will then be asked a question about what you have read and
            heard. You will need to combine appropriate information from the
            text and the talk to provide a complete answer to the question Your
            response will be scored on your ability to speak clearly and
            coherently and on your ability to accurately convey information
            about what you have read and heard.
          </p>
          <p>
            In questions 4, you will listen to part of a conversation or a
            lecture. You will then be asked a question about what you have
            heard. Your response will be scored on your ability to speak clearly
            and coherently and on your ability to accurately convey information
            about what you heard.
          </p>
          <p>
            In questions 2 through 4, you may take notes while you read and
            while you listen to the conversations and lectures. You may use your
            notes to help prepare your response.
          </p>
          <p>
            Listen carefully to the directions for each question. The directions
            will not be written on the screen. For each question, you will be
            given a short time to prepare your response (15 to 30 seconds,
            depending on the question). A clock will show how much preparation
            time is remaining. When the preparation time is up, you will be told
            to begin your response. A clock will show how much response time is
            remaining. A message will appear on the screen when the response
            time has ended.
          </p>
          <p>
            Select the <strong>Next </strong>button to proceed.
          </p>
        </div>
      );
      break;
    case "Integrated Writing":
      Instruction = (
        <div>
          <p>
            <strong>Begin Integrated Writing Test</strong>
          </p>
          <p>
            For this task, you will read a passage about an academic topic. A
            clock at the top of the screen will show how much time you have to
            read. You may take notes on the passage while you read. The passage
            will then be removed and you will listen to a lecture about the same
            topic. While you listen, you may also take notes. You will be able
            to see the reading passage again when it is time for you to write.
            You may use your notes to help you answer the question.
          </p>
          <p>
            In an actual test, you will then have 20 minutes to write a response
            to a question that asks you about the relationship between the
            lecture you heard and the reading passage. Try to answer the
            question as completely as possible using information from the
            reading passage and lecture. The question does not ask you to
            express your personal opinion. Typically, an effective response will
            be 150 to 225 words.
          </p>
          <p>
            Your response will be judged on the quality of your writing and on
            the completeness and accuracy of the content
          </p>
          <p>
            Now you will see the reading passage for minutes. Remember that it
            will be available to you again when you write. Immediately after the
            reading time ends, the lecture will begin, so keep your headset on
            until the lecture is over.
          </p>

          <p>
            Select the <strong>Next </strong>button to proceed.
          </p>
        </div>
      );
      break;
    case "Independent Writing":
      Instruction = (
        <div>
          <p>
            <strong>Begin Independent Writing Test</strong>
          </p>
          <p>
            For this task, you will write an essay in response to a question
            that asks you to state, explain, and support your opinion on an
            issue. In an actual test, you will have 30 minutes to write your
            essay.
          </p>
          <p>
            Typically, an effective essay will contain a minimum of 300 words.
            Your essay will be judged on the quality of your writing. This
            includes the development of your ideas, the organization of your
            essay, and the quality and accuracy of the language you use to
            express your ideas.
          </p>
          <p>
            Select the <strong>Next </strong>button to proceed.
          </p>
        </div>
      );
      break;
    default:
      break;
  }
  return <div>{Instruction}</div>;
};

export default ToeflInstruction;
