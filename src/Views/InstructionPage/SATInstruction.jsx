import React from "react";

const SATInstruction = (props) => {
  let { section } = props;
  let Instruction;
  switch (section) {
    case "Reading":
      Instruction = (
        <div>
          <p>
            <strong>Begin Reading Test—65 minutes, 52 questions</strong>
          </p>
          <p>
            There are several passages in this test. Each passage or pair of
            passages below is followed by a number of questions. After reading
            each passage or pair, choose the best answer to each question based
            on what is stated or implied in the passage or passages and in any
            accompanying graphics (such as a table or graph)
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
    case "Writing":
      Instruction = (
        <div>
          <p>
            <strong>
              Begin Writing and Language Test—35 minutes, 44 questions
            </strong>
          </p>
          <p>
            Each passage below is accompanied by a number of questions. For some
            questions, you will consider how the passage might be revised to
            improve the expression of ideas. For other questions, you will
            consider how the passage might be edited to correct errors in
            sentence structure, usage, or punctuation. A passage or a question
            may be accompanied by one or more graphics (such as a table or
            graph) that you will consider as you make revising and editing
            decisions.
          </p>
          <p>
            Some questions will direct you to an underlined portion of a
            passage. Other questions will direct you to a location in a passage
            or ask you to think about the passage as a whole.
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
    case "Math Test No Calculator":
      Instruction = (
        <div>
          <p>
            <strong>
              Begin Math Test - No calculator —25 minutes, 20 questions
            </strong>
          </p>
          <p>
            Solve each problem, choose the correct answer, and then select your
            answer. Select the <strong>Next </strong>button.
          </p>{" "}
          <p>
            For questions 1-15, solve each problem, choose the best answer from
            the choices provided, and fill in the corresponding circle on your
            answer sheet.
          </p>{" "}
          <p>
            For questions 16-20, solve the problem and enter your answer in the
            grid on the answer sheet. Please refer to the directions before
            question 16 on how to enter your answers in the grid. You may use
            any available space in your test booklet for scratch work.
          </p>
          <p>
            Do not linger over problems that take too much time. Solve as many
            as you can; then return to the others in the time you have left for
            this test.
          </p>
          <p>
            Note: Unless otherwise stated, all of the following should be
            assumed.
          </p>
          <ol>
            <li>
              The use of a calculator <strong>is not permitted</strong>
            </li>
            <li>
              All variables and expressions used represent real numbers unless
              otherwise indicated.
            </li>
            <li>
              Figures provided in this test are drawn to scale unless otherwise
              indicated.
            </li>
            <li>All figures lie in a plane unless otherwise indicated</li>
            <li>
              Unless otherwise indicated, the domain of a given function f is
              the set of all real numbers x for which f(x) is a real number.
            </li>
          </ol>
          <p>
            Select the <strong>Next</strong> button to proceed.
          </p>
        </div>
      );
      break;
    case "Math Test Calculator":
      Instruction = (
        <div>
          <p>
            <strong>
              Begin Math Test - Calculator —55 minutes, 38 questions
            </strong>
          </p>
          <p>
            Solve each problem, choose the correct answer, and then select your
            answer. Select the <strong>Next </strong>button.
          </p>{" "}
          <p>
            For questions 1-30, solve each problem, choose the best answer from
            the choices provided, and fill in the corresponding circle on your
            answer sheet.
          </p>
          <p>
            For questions 31-38, solve the problem and enter your answer in the
            grid on the answer sheet. Please refer to the directions before
            question 31 on how to enter your answers in the grid. You may use
            any available space in your test booklet for scratch work.
          </p>
          <p>
            Do not linger over problems that take too much time. Solve as many
            as you can; then return to the others in the time you have left for
            this test.
          </p>
          <p>
            Note: Unless otherwise stated, all of the following should be
            assumed.
          </p>
          <ol>
            <li>
              The use of a calculator <strong>is permitted</strong>
            </li>
            <li>
              All variables and expressions used represent real numbers unless
              otherwise indicated.
            </li>
            <li>
              Figures provided in this test are drawn to scale unless otherwise
              indicated.
            </li>
            <li>All figures lie in a plane unless otherwise indicated</li>
            <li>
              Unless otherwise indicated, the domain of a given function f is
              the set of all real numbers x for which f(x) is a real number.
            </li>
          </ol>
          <p>
            Select the <strong>Next</strong> button to proceed.
          </p>
        </div>
      );
      break;
    default:
      break;
  }

  return <div>{Instruction}</div>;
};

export default SATInstruction;
