import React from "react";

const ACTInstruction = (props) => {
  let { section } = props;
  let Instruction;
  switch (section) {
    case "English":
      Instruction = (
        <div>
          <p>
            <strong>Begin English Test—45 minutes, 75 questions</strong>
          </p>
          <p>
            In the five passages that follow, certain words and phrases are
            underlined and highlighted. On the right-hand side of the screen,
            you will find alternatives for the underlined and highlighted part.
            In most cases, you are to choose the one that best expresses the
            idea, makes the statement appropriate for standard written English,
            or is worded most consistently with the style and tone of the
            passage as a whole. If you think the original version is best,
            choose “NO CHANGE.” In some cases, you will find on the right-hand
            side of the screen a question about the underlined and highlighted
            part. You are to choose the best answer to the question.
          </p>
          <p>
            You will also find questions about a section of the passage, or
            about the passage as a whole. These questions do not refer to an
            underlined portion of the passage, but rather refer to a letter or
            letters, a number or numbers, or an asterisk within square brackets
            [ ].
          </p>
          <p>
            For each question, choose the alternative you consider best, select
            the circle next to your answer, then select the{" "}
            <strong>Next </strong>
            button. Read each passage through once, using the scroll bar to see
            the entire passage, before you begin to answer the questions that
            accompany the passage. For many of the questions, you must read
            several sentences beyond the question to determine the answer. Be
            sure that you have read far enough ahead each time you choose an
            alternative.
          </p>
          <p>
            Select the <strong>Next</strong> button to proceed.
          </p>
        </div>
      );
      break;
    case "Mathematics":
      Instruction = (
        <div>
          <p>
            <strong>Begin Mathematics Test—60 minutes, 60 questions</strong>
          </p>
          <p>
            Solve each problem, choose the correct answer, and then select your
            answer. Select the <strong>Next </strong>button.
          </p>
          <p>
            Do not linger over problems that take too much time. Solve as many
            as you can; then return to the others in the time you have left for
            this test.
          </p>
          <p>
            You may use your calculator for any problems you choose, but some of
            the problems may best be done without using a calculator.
          </p>
          <p>
            Note: Unless otherwise stated, all of the following should be
            assumed.
          </p>
          <ol>
            <li>Illustrative figures are NOT necessarily drawn to scale.</li>
            <li>Geometric figures lie in a plane.</li>
            <li>
              The word <em>line </em>indicates a straight line.
            </li>
            <li>
              The word <em>average </em>indicates arithmetic mean.
            </li>
          </ol>
          <p>
            Select the <strong>Next</strong> button to proceed.
          </p>
        </div>
      );
      break;
    case "Science":
      Instruction = (
        <div>
          <p>
            <strong>Begin Science Test—35 minutes, 40 questions</strong>
          </p>
          <p>
            There are several passages in this section. Each passage is followed
            by several questions. Read each passage through once, using the
            scroll bar to see the entire passage, before you begin to answer the
            questions that accompany it. After reading a passage, choose the
            best answer to each question, select the circle next to it, then
            select the <strong>Next</strong>
            &nbsp;button. You may refer to the passages as often as necessary.
          </p>
          <p>You are NOT permitted to use a calculator on this section.</p>
          <p>
            Select the <strong>Next</strong> button to proceed.
          </p>
        </div>
      );
      break;
    case "Reading":
      Instruction = (
        <div>
          <p>
            <strong>Begin Reading Test—35 minutes, 40 questions</strong>
          </p>
          <p>
            There are several passages in this test. Each passage is accompanied
            by several questions. Some passages are grouped within a single
            scrollable window and the corresponding questions will refer to
            Passage A, Passage B, or both passages.
          </p>
          <p>
            Read each passage through once, using the scroll bar to see the
            entire passage, before you begin to answer the questions that
            accompany the passage. After reading a passage, choose the best
            answer to each question, select the circle next to it, then select
            the <strong>Next</strong>&nbsp;button. You may refer to the passages
            as often as necessary.
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

export default ACTInstruction;
