const testListScreen =
  document.getElementById("testListScreen");

const testQuestionScreen =
  document.getElementById("testQuestionScreen");

const testResultScreen =
  document.getElementById("testResultScreen");

const testPageTitle =
  document.getElementById("testPageTitle");

const testList =
  document.getElementById("testList");

const testInstruction =
  document.getElementById("testInstruction");

const testQuestionCounter =
  document.getElementById("testQuestionCounter");

const testQuestionText =
  document.getElementById("testQuestionText");

const testAnswerList =
  document.getElementById("testAnswerList");

const testNextBtn =
  document.getElementById("testNextBtn");

const testResultTitle =
  document.getElementById("testResultTitle");

const testResultQuestionList =
  document.getElementById("testResultQuestionList");

const testCloseBtn =
  document.getElementById("testCloseBtn");


let currentTest = null;

let currentTestPanel = null;

let currentQuestionIndex = 0;

let selectedAnswerIndex = null;

let userAnswers = [];


const answerLetters = [
  "A",
  "B",
  "C",
  "D"
];


/* =========================
   KHỞI TẠO
========================= */

function initializeTestPage() {
  if (
    typeof testPageConfig === "undefined"
  ) {
    console.error(
      "Không tìm thấy testPageConfig."
    );

    return;
  }

  testPageTitle.textContent =
    testPageConfig.title;

  testInstruction.textContent =
    testPageConfig.instruction ||
    "Chọn đáp án đúng";

  /*
    Ban đầu chỉ hiện danh sách đề
  */
  testQuestionScreen.hidden = true;
  testResultScreen.hidden = true;

  renderTestList();
}


/* =========================
   TẠO DANH SÁCH ĐỀ
========================= */

function renderTestList() {
  testList.innerHTML = "";

  testPageConfig.tests.forEach(test => {
    const testItem =
      document.createElement("div");

    testItem.className = "test-item";

    const button =
      document.createElement("button");

    button.type = "button";
    button.className = "test-open-btn";

    button.textContent =
      `${testPageConfig.testLabel || "Đề số"} ${test.id}`;

    const panel =
      document.createElement("div");

    panel.className = "test-panel";
    panel.hidden = true;

    button.addEventListener(
      "click",
      () => {
        startTest(test.id, panel);
      }
    );

    testItem.appendChild(button);
    testItem.appendChild(panel);

    testList.appendChild(testItem);
  });
}
/* =========================
   BẮT ĐẦU ĐỀ
========================= */

function startTest(testId, selectedPanel) {
  currentTest =
    testPageConfig.tests.find(
      test => test.id === testId
    );

  if (!currentTest) {
    return;
  }

  /*
    Đóng tất cả các khung đề đang mở
  */
  document
    .querySelectorAll(".test-panel")
    .forEach(panel => {
      panel.hidden = true;
      panel.classList.remove("active");
    });

  document
    .querySelectorAll(".test-open-btn")
    .forEach(button => {
      button.classList.remove("active");
    });

  currentTestPanel = selectedPanel;

  /*
    Chuyển khung câu hỏi và kết quả
    vào ngay dưới thẻ đề được chọn
  */
  currentTestPanel.appendChild(
    testQuestionScreen
  );

  currentTestPanel.appendChild(
    testResultScreen
  );

  currentTestPanel.hidden = false;
  currentTestPanel.classList.add("active");

  const currentButton =
    currentTestPanel.previousElementSibling;

  if (currentButton) {
    currentButton.classList.add("active");
  }

  currentQuestionIndex = 0;
  selectedAnswerIndex = null;
  userAnswers = [];

  testResultScreen.hidden = true;
  testQuestionScreen.hidden = false;

  showQuestion();
}

/* =========================
   HIỂN THỊ CÂU HỎI
========================= */

function showQuestion() {
  selectedAnswerIndex = null;

  testNextBtn.disabled = true;

  const question =
    currentTest.questions[
      currentQuestionIndex
    ];

  testQuestionCounter.textContent =
    `Câu ${currentQuestionIndex + 1} / ${currentTest.questions.length}`;

  testQuestionText.textContent =
    question.question;

  testAnswerList.innerHTML = "";

  question.answers.forEach(
    (answer, answerIndex) => {

      const option =
        document.createElement("div");

      option.className =
        "test-answer-option";

      option.innerHTML = `
        <span class="test-answer-radio"></span>

        <span class="test-answer-letter">
          ${answerLetters[answerIndex]}.
        </span>

        <span class="test-answer-text">
          ${answer}
        </span>
      `;

      option.addEventListener(
        "click",
        () => {
          chooseAnswer(
            answerIndex,
            option
          );
        }
      );

      testAnswerList.appendChild(option);
    }
  );

  const isLastQuestion =
    currentQuestionIndex ===
    currentTest.questions.length - 1;

  testNextBtn.textContent =
    isLastQuestion
      ? "Xem kết quả"
      : "Next";
}


/* =========================
   CHỌN ĐÁP ÁN
========================= */

function chooseAnswer(
  answerIndex,
  selectedOption
) {
  selectedAnswerIndex = answerIndex;

  const options =
    testAnswerList.querySelectorAll(
      ".test-answer-option"
    );

  options.forEach(option => {
    option.classList.remove("selected");
  });

  selectedOption.classList.add("selected");

  testNextBtn.disabled = false;
}


/* =========================
   NEXT
========================= */

testNextBtn.addEventListener(
  "click",
  () => {

    if (selectedAnswerIndex === null) {
      return;
    }

    userAnswers.push(selectedAnswerIndex);

    const isLastQuestion =
      currentQuestionIndex ===
      currentTest.questions.length - 1;

    if (isLastQuestion) {
      showResult();

      return;
    }

    currentQuestionIndex++;

    showQuestion();
  }
);


/* =========================
   KẾT QUẢ
========================= */

function showResult() {
  testQuestionScreen.hidden = true;
  testResultScreen.hidden = false;

  let score = 0;

  currentTest.questions.forEach(
    (question, questionIndex) => {
      if (
        userAnswers[questionIndex] ===
        question.correct
      ) {
        score++;
      }
    }
  );

  testResultTitle.textContent =
    `Kết quả: ${score}/${currentTest.questions.length}`;

  renderResultQuestions();
}


/* =========================
   CHI TIẾT 10 CÂU
========================= */

function renderResultQuestions() {
  testResultQuestionList.innerHTML = "";

  currentTest.questions.forEach(
    (question, questionIndex) => {

      const userAnswer =
        userAnswers[questionIndex];

      const questionBox =
        document.createElement("div");

      questionBox.className =
        "test-result-question";

      const answersHTML =
        question.answers
          .map(
            (answer, answerIndex) => {

              const isCorrect =
                answerIndex ===
                question.correct;

              const isSelected =
                answerIndex ===
                userAnswer;

              let answerClass = "";
              let icon = "";

              if (isSelected && isCorrect) {
                answerClass =
                  "correct-selected";

                icon = "✓";
              } else if (
                isSelected &&
                !isCorrect
              ) {
                answerClass =
                  "incorrect-selected";

                icon = "✕";
              } else if (
                isCorrect &&
                userAnswer !== question.correct
              ) {
                answerClass =
                  "correct-answer";

                icon = "✓";
              }

              return `
                <div
                  class="
                    test-result-answer
                    ${answerClass}
                  "
                >
                  <span class="test-result-icon">
                    ${icon}
                  </span>

                  <span>
                    ${answerLetters[answerIndex]}.
                    ${answer}
                  </span>
                </div>
              `;
            }
          )
          .join("");

      questionBox.innerHTML = `
        <div class="test-result-question-title">
          <span>${questionIndex + 1}.</span> ${question.question}
        </div>

        <div class="test-result-answer-list">
          ${answersHTML}
        </div>
      `;

      testResultQuestionList.appendChild(
        questionBox
      );
    }
  );
}


/* =========================
   CLOSE
========================= */

testCloseBtn.addEventListener(
  "click",
  () => {

    currentTest = null;
    currentQuestionIndex = 0;
    selectedAnswerIndex = null;
    userAnswers = [];

    testQuestionScreen.hidden = true;
    testResultScreen.hidden = true;

    if (currentTestPanel) {
      currentTestPanel.hidden = true;
      currentTestPanel.classList.remove(
        "active"
      );

      const currentButton =
        currentTestPanel.previousElementSibling;

      if (currentButton) {
        currentButton.classList.remove(
          "active"
        );
      }
    }

    currentTestPanel = null;
  }
);


initializeTestPage();