document.addEventListener(
  "DOMContentLoaded",
  initializeGrammarLesson
);


/* ==========================================================
   KHỞI TẠO BÀI HỌC
========================================================== */

function initializeGrammarLesson() {
  if (
    typeof grammarLessonData === "undefined"
  ) {
    console.error(
      "Không tìm thấy grammarLessonData."
    );

    return;
  }

  updateGrammarLessonTitle();
  updateGrammarLessonNavigation();
  renderGrammarPatternList();
}


/* ==========================================================
   TIÊU ĐỀ
========================================================== */

function updateGrammarLessonTitle() {
  const lessonTitle =
    document.getElementById(
      "grammarLessonTitle"
    );

  if (!lessonTitle) {
    return;
  }

  const title =
    grammarLessonData.title ||
    `Ngữ pháp ${grammarLessonData.level} - Bài ${grammarLessonData.lessonNumber}`;

  lessonTitle.textContent = title;
  document.title = title;
}


/* ==========================================================
   ĐIỀU HƯỚNG BÀI HỌC
========================================================== */

function updateGrammarLessonNavigation() {
  const previousLessonBtn =
    document.getElementById(
      "previousLessonBtn"
    );

  const nextLessonBtn =
    document.getElementById(
      "nextLessonBtn"
    );

  updateNavigationButton(
    previousLessonBtn,
    grammarLessonData.previousLesson
  );

  updateNavigationButton(
    nextLessonBtn,
    grammarLessonData.nextLesson
  );
}


function updateNavigationButton(
  button,
  lessonData
) {
  if (!button) {
    return;
  }

  if (
    !lessonData ||
    !lessonData.href
  ) {
    button.removeAttribute("href");

    button.classList.add(
      "is-disabled"
    );

    button.setAttribute(
      "aria-disabled",
      "true"
    );

    return;
  }

  button.href = lessonData.href;

  button.classList.remove(
    "is-disabled"
  );

  button.removeAttribute(
    "aria-disabled"
  );

  if (lessonData.label) {
    button.title = lessonData.label;
  }
}


/* ==========================================================
   TẠO DANH SÁCH MẪU CÂU
========================================================== */

function renderGrammarPatternList() {
  const patternList =
    document.getElementById(
      "grammarPatternList"
    );

  if (!patternList) {
    return;
  }

  const patterns =
    grammarLessonData.patterns;

  if (
    !Array.isArray(patterns) ||
    patterns.length === 0
  ) {
    patternList.innerHTML = `
      <p class="grammar-empty-message">
        Bài học này chưa có dữ liệu mẫu câu.
      </p>
    `;

    return;
  }

  patternList.innerHTML =
    patterns
      .map((item, index) => {
        return createGrammarPatternHTML(
          item,
          index
        );
      })
      .join("");

  attachGrammarPatternEvents();
  attachTranslationEvents();
  attachAudioEvents();
}


/* ==========================================================
   TẠO MỘT THẺ MẪU CÂU
========================================================== */

function createGrammarPatternHTML(
  item,
  index
) {
  const patternNumber =
    item.number ?? index + 1;

  return `
    <article
      class="grammar-pattern-item"
      data-pattern-index="${index}"
    >

      <button
        type="button"
        class="grammar-pattern-button"
        aria-expanded="false"
        aria-controls="grammarPatternDetail${index}"
      >

        <span class="grammar-pattern-number">
          ${patternNumber}
        </span>

        <span class="grammar-pattern-text">
          ${escapeHTML(item.pattern)}
        </span>

      </button>

      <div
        id="grammarPatternDetail${index}"
        class="grammar-pattern-detail"
        hidden
      >
        ${createGrammarDetailHTML(item)}
      </div>

    </article>
  `;
}


/* ==========================================================
   TẠO NỘI DUNG CHI TIẾT
========================================================== */

function createGrammarDetailHTML(item) {
  const detail = item.detail;

  if (!detail) {
    return `
      <p class="grammar-detail-empty">
        Nội dung của mẫu câu này sẽ được cập nhật sau.
      </p>
    `;
  }

  const extraTableHTML =
    createExtraTableHTML(
      detail.extraTable
    );

  return `
    <div class="grammar-detail-top-layout">

      <div class="grammar-detail-block grammar-meaning-block">

        <h3 class="grammar-detail-section-title">

          <span class="grammar-section-icon">
            ✨
          </span>

          <span>
            Ý nghĩa
          </span>

        </h3>

        <div class="grammar-meaning-text">
          ${escapeHTML(detail.meaning)}
        </div>

        ${createTextListHTML(
          detail.explanations,
          "grammar-explanation-list"
        )}

      </div>


      <div class="grammar-detail-side">

        <div class="grammar-detail-block grammar-usage-block">

          <h3 class="grammar-detail-section-title">

            <span class="grammar-section-icon">
              🛠️
            </span>

            <span>
              Cách dùng
            </span>

          </h3>

          ${createTextListHTML(
            detail.usages,
            "grammar-usage-list"
          )}

        </div>


        ${
          Array.isArray(detail.notes) &&
          detail.notes.length > 0
            ? `
              <div class="grammar-detail-block grammar-note-block">

                <h3 class="grammar-detail-section-title">

                  <span class="grammar-section-icon">
                    🔔
                  </span>

                  <span>
                    Lưu ý
                  </span>

                </h3>

                ${createTextListHTML(
                  detail.notes,
                  "grammar-note-list"
                )}

              </div>
            `
            : ""
        }

      </div>

    </div>


    ${extraTableHTML}


    <div class="grammar-detail-block grammar-example-block">

      <h3 class="grammar-detail-section-title">

        <span class="grammar-section-icon">
          🧩
        </span>

        <span>
          Ví dụ
        </span>

      </h3>

      <div class="grammar-example-list">
        ${createExamplesHTML(
          detail.examples
        )}
      </div>

    </div>
  `;
}


/* ==========================================================
   TẠO DANH SÁCH GIẢI THÍCH
========================================================== */

function formatText(text) {
  return String(text ?? "")
    .trim()
    .replace(/\n/g, "<br>");
}


function createTextListHTML(
  items,
  className
) {
  if (
    !Array.isArray(items) ||
    items.length === 0
  ) {
    return "";
  }

  return `
    <div class="${className}">
      ${items
        .map((item) => {
          return `
            <div class="grammar-text-item">
              ${formatText(item)}
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}


/* ==========================================================
   TẠO BẢNG NỘI DUNG BỔ SUNG
========================================================== */
function createExtraTableHTML(extraTable) {
  if (
    !extraTable ||
    !Array.isArray(extraTable.rows) ||
    extraTable.rows.length === 0
  ) {
    return "";
  }

  return `
    <div class="grammar-detail-block grammar-extra-table-block">

      ${
        extraTable.title
          ? `
            <h3 class="grammar-detail-section-title">

              <span class="grammar-section-icon">
                📚
              </span>

              <span>
                ${escapeHTML(
                  extraTable.title
                )}
              </span>

            </h3>
          `
          : ""
      }

      <div class="grammar-extra-table-wrapper">

        <table class="grammar-extra-table">

          <thead>
            <tr>

              <th scope="col">
                Số
              </th>

              <th scope="col">

                <span class="grammar-extra-header-content">

                  <span>
                    Cách đọc số
                  </span>

                  ${
                    extraTable.numberReadingAudio
                      ? `
                        <button
                          type="button"
                          class="grammar-extra-audio-btn"
                          data-audio="${escapeHTML(
                            extraTable.numberReadingAudio
                          )}"
                          aria-label="Phát toàn bộ cách đọc số"
                          title="Nghe toàn bộ cách đọc số"
                        >
                          🔊
                        </button>
                      `
                      : ""
                  }

                </span>

              </th>

              <th scope="col">
                Số tuổi
              </th>

              <th scope="col">

                <span class="grammar-extra-header-content">

                  <span>
                    Cách đọc số tuổi
                  </span>

                  ${
                    extraTable.ageReadingAudio
                      ? `
                        <button
                          type="button"
                          class="grammar-extra-audio-btn"
                          data-audio="${escapeHTML(
                            extraTable.ageReadingAudio
                          )}"
                          aria-label="Phát toàn bộ cách đọc số tuổi"
                          title="Nghe toàn bộ cách đọc số tuổi"
                        >
                          🔊
                        </button>
                      `
                      : ""
                  }

                </span>

              </th>

            </tr>
          </thead>

          <tbody>

            ${extraTable.rows
              .map((row) => {
                return `
                  <tr>

                    <td class="grammar-extra-number-cell">
                      ${row.number}
                    </td>

                    <td class="grammar-extra-reading-cell">
                      ${row.numberReading}
                    </td>

                    <td class="grammar-extra-age-cell">
                      ${row.age}
                    </td>

                    <td class="grammar-extra-reading-cell">
                      ${row.ageReading}
                    </td>

                  </tr>
                `;
              })
              .join("")}

          </tbody>

        </table>

      </div>

    </div>
  `;
}

/* ==========================================================
   TẠO CÁC CÂU VÍ DỤ
========================================================== */

function createExamplesHTML(examples) {
  if (
    !Array.isArray(examples) ||
    examples.length === 0
  ) {
    return `
      <p class="grammar-detail-empty">
        Chưa có câu ví dụ.
      </p>
    `;
  }

  return examples
    .map((example, index) => {
      const exampleNumber =
        index + 1;

      const answerHTML =
        example.answer
          ? `
            <div class="grammar-example-item grammar-example-answer">

              <div class="grammar-example-main">

                <span class="grammar-example-number">
                  ➡
                </span>

                <div class="grammar-example-content">

                  <span class="grammar-example-sentence">
                    ${createSentenceHTML(
                      example.answer.sentenceParts
                    )}
                  </span>

                  ${
                    example.answer.audio
                      ? `
                        <button
                          type="button"
                          class="grammar-example-audio-btn"
                          data-audio="${escapeHTML(
                            example.answer.audio
                          )}"
                          aria-label="Phát câu trả lời ${exampleNumber}"
                          title="Nghe câu trả lời"
                        >
                          🔊
                        </button>
                      `
                      : ""
                  }

                </div>

              </div>

              ${
                example.answer.meaning
                  ? `
                    <div class="grammar-example-translation">

                      <button
                        type="button"
                        class="grammar-translation-btn"
                        aria-expanded="false"
                      >
                        Nghĩa tiếng Việt
                      </button>

                      <span
                        class="grammar-translation-text"
                        hidden
                      >
                        ${escapeHTML(
                          example.answer.meaning
                        )}
                      </span>

                    </div>
                  `
                  : ""
              }

            </div>
          `
          : "";

      return `
        <div class="grammar-example-pair">

          <div class="grammar-example-item">

            <div class="grammar-example-main grammar-example-main-question">

              <div class="grammar-example-content">

                <span class="grammar-example-sentence">
                  ${createSentenceHTML(
                    example.sentenceParts
                  )}
                </span>

                ${
                  example.audio
                    ? `
                      <button
                        type="button"
                        class="grammar-example-audio-btn"
                        data-audio="${escapeHTML(
                          example.audio
                        )}"
                        aria-label="Phát câu ví dụ ${exampleNumber}"
                        title="Nghe câu ví dụ"
                      >
                        🔊
                      </button>
                    `
                    : ""
                }

              </div>

            </div>

            ${
              example.meaning
                ? `
                  <div class="grammar-example-translation">

                    <button
                      type="button"
                      class="grammar-translation-btn"
                      aria-expanded="false"
                    >
                      Nghĩa tiếng Việt
                    </button>

                    <span
                      class="grammar-translation-text"
                      hidden
                    >
                      ${escapeHTML(
                        example.meaning
                      )}
                    </span>

                  </div>
                `
                : ""
            }

          </div>

          ${answerHTML}

        </div>
      `;
    })
    .join("");
}


/* ==========================================================
   TẠO CÂU CÓ FURIGANA
========================================================== */

function createSentenceHTML(parts) {
  if (!Array.isArray(parts)) {
    return "";
  }

  return parts
    .map((part) => {
      if (
        part.kanji &&
        part.reading
      ) {
        return `
          <ruby>
            ${escapeHTML(part.kanji)}
            <rt>
              ${escapeHTML(part.reading)}
            </rt>
          </ruby>
        `;
      }

      return escapeHTML(
        part.text || ""
      );
    })
    .join("");
}

/* ==========================================================
   SỰ KIỆN MỞ VÀ ĐÓNG MẪU CÂU
========================================================== */

function attachGrammarPatternEvents() {
  const patternButtons =
    document.querySelectorAll(
      ".grammar-pattern-button"
    );

  patternButtons.forEach((button) => {
    button.addEventListener(
      "click",
      () => {
        const patternItem =
          button.closest(
            ".grammar-pattern-item"
          );

        if (!patternItem) {
          return;
        }

        toggleGrammarPattern(
          patternItem
        );
      }
    );
  });
}


function toggleGrammarPattern(
  selectedItem
) {
  const selectedButton =
    selectedItem.querySelector(
      ".grammar-pattern-button"
    );

  const selectedDetail =
    selectedItem.querySelector(
      ".grammar-pattern-detail"
    );

  if (
    !selectedButton ||
    !selectedDetail
  ) {
    return;
  }

  const isOpen =
    selectedItem.classList.contains(
      "is-open"
    );

  closeAllGrammarPatterns();

  if (!isOpen) {
    selectedItem.classList.add(
      "is-open"
    );

    selectedButton.setAttribute(
      "aria-expanded",
      "true"
    );

    selectedDetail.hidden = false;
  }
}


function closeAllGrammarPatterns() {
  const patternItems =
    document.querySelectorAll(
      ".grammar-pattern-item"
    );

  patternItems.forEach((item) => {
    const button =
      item.querySelector(
        ".grammar-pattern-button"
      );

    const detail =
      item.querySelector(
        ".grammar-pattern-detail"
      );

    item.classList.remove(
      "is-open"
    );

    if (button) {
      button.setAttribute(
        "aria-expanded",
        "false"
      );
    }

    if (detail) {
      detail.hidden = true;
    }
  });
}


/* ==========================================================
   HIỆN VÀ ẨN DỊCH NGHĨA
========================================================== */

function attachTranslationEvents() {
  const translationButtons =
    document.querySelectorAll(
      ".grammar-translation-btn"
    );

  translationButtons.forEach((button) => {
    button.addEventListener(
      "click",
      () => {
        const translationText =
          button.nextElementSibling;

        if (!translationText) {
          return;
        }

        const isOpen =
          button.getAttribute(
            "aria-expanded"
          ) === "true";

        button.setAttribute(
          "aria-expanded",
          String(!isOpen)
        );

        translationText.hidden =
          isOpen;
      }
    );
  });
}


/* ==========================================================
   PHÁT ÂM THANH
========================================================== */

function attachAudioEvents() {
  const audioButtons =
    document.querySelectorAll(
      `
        .grammar-example-audio-btn,
        .grammar-extra-audio-btn
      `
    );

  audioButtons.forEach((button) => {
    button.addEventListener(
      "click",
      () => {
        const audioName =
          button.dataset.audio;

        if (!audioName) {
          return;
        }

        playGrammarAudio(
          audioName,
          button
        );
      }
    );
  });
}


let currentGrammarAudio = null;

let currentGrammarAudioButton = null;


function playGrammarAudio(
  audioName,
  button
) {
  if (currentGrammarAudio) {
    currentGrammarAudio.pause();
    currentGrammarAudio.currentTime = 0;
  }

  if (currentGrammarAudioButton) {
    currentGrammarAudioButton.classList.remove(
      "is-playing"
    );
  }

  const lessonNumber =
    grammarLessonData.lessonNumber;

  const audioPath =
    `../../../../assets/n5_grammar_audio/lesson${lessonNumber}/${audioName}.mp3`;

  currentGrammarAudio =
    new Audio(audioPath);

  currentGrammarAudioButton =
    button;

  button.classList.add(
    "is-playing"
  );

  currentGrammarAudio
    .play()
    .catch((error) => {
      console.error(
        "Không thể phát âm thanh:",
        error
      );

      button.classList.remove(
        "is-playing"
      );
    });

  currentGrammarAudio.addEventListener(
    "ended",
    () => {
      button.classList.remove(
        "is-playing"
      );

      currentGrammarAudio = null;
      currentGrammarAudioButton = null;
    }
  );
}


/* ==========================================================
   CHỐNG CHÈN HTML TỪ DỮ LIỆU
========================================================== */

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   LUYỆN TẬP NGỮ PHÁP
========================================================= */

/*
  Trạng thái chung của phần luyện tập.

  currentPartIndex:
  - Phần luyện tập đang mở.
  - Bắt đầu từ 0.

  isPanelOpen:
  - false: chỉ hiện thẻ LUYỆN TẬP.
  - true: mở khung làm bài.

  partStates:
  - Lưu câu trả lời và kết quả của từng phần.
  - Khi chuyển sang phần khác, dữ liệu cũ vẫn được giữ lại.
*/
const grammarPracticeState = {
    currentPartIndex: 0,
    isPanelOpen: false,
    partStates: []
};


/* =========================================================
   KHỞI TẠO DỮ LIỆU TRẠNG THÁI
========================================================= */

function initializeGrammarPracticeState() {
    const practiceData = grammarLessonData.practice || [];

    grammarPracticeState.partStates = practiceData.map((part) => ({
        /*
          answers:
          Lưu câu trả lời người học nhập.
        */
        answers: part.questions.map(() => ""),

        /*
          checked:
          Đã bấm Kiểm tra hay chưa.
        */
        checked: false,

        /*
          showingAnswers:
          Đang hiển thị đáp án hay không.
        */
        showingAnswers: false,

        /*
          results:
          Kết quả đúng/sai của từng câu.
          null: chưa kiểm tra.
        */
        results: part.questions.map(() => null),

        /*
          completed:
          Phần này đã được kiểm tra hay chưa.
        */
        completed: false,

        /*
          allCorrect:
          true nếu tất cả câu đều đúng.
        */
        allCorrect: false
    }));
}


/* =========================================================
   HIỂN THỊ TOÀN BỘ PHẦN LUYỆN TẬP
========================================================= */

function renderGrammarPractice() {
    const section = document.getElementById(
        "grammarPracticeSection"
    );

    if (!section) {
        console.error(
            "Không tìm thấy #grammarPracticeSection"
        );
        return;
    }

    const practiceData =
        grammarLessonData.practice;

    if (
        !Array.isArray(practiceData) ||
        practiceData.length === 0
    ) {
        section.innerHTML = "";
        return;
    }

    section.innerHTML = `
        <article
            class="
                grammar-pattern-item
                grammar-practice-card
                ${
                    grammarPracticeState.isPanelOpen
                        ? "is-open"
                        : ""
                }
            "
        >

            <button
                id="grammarPracticeToggle"
                type="button"
                class="
                    grammar-pattern-button
                    grammar-practice-toggle
                "
                aria-expanded="${
                    grammarPracticeState.isPanelOpen
                }"
                aria-controls="grammarPracticePanel"
            >

                <span class="grammar-pattern-text">
                    ✍️ LUYỆN TẬP
                </span>

            </button>

            <div
                id="grammarPracticePanel"
                class="
                    grammar-pattern-detail
                    grammar-practice-panel
                "
                ${
                    grammarPracticeState.isPanelOpen
                        ? ""
                        : "hidden"
                }
            >

                ${createGrammarPracticePanelHTML()}

            </div>

        </article>
    `;

    addGrammarPracticeEvents();
}


/* =========================================================
   TẠO NỘI DUNG KHUNG LUYỆN TẬP
========================================================= */

function createGrammarPracticePanelHTML() {
    const practiceData = grammarLessonData.practice;

    const currentPart =
        practiceData[
            grammarPracticeState.currentPartIndex
        ];

    const currentState =
        grammarPracticeState.partStates[
            grammarPracticeState.currentPartIndex
        ];

    if (!currentPart || !currentState) {
        return "";
    }

    return `
        <div class="grammar-practice-box">
            ${createPracticeProgressHTML()}

            ${
                currentPart.example
                    ? createPracticeExampleHTML(
                        currentPart.example
                    )
                    : ""
            }

            <div class="grammar-practice-question-list">
                ${currentPart.questions
                    .map((question, questionIndex) =>
                        createPracticeQuestionHTML(
                            question,
                            questionIndex,
                            currentState
                        )
                    )
                    .join("")}
            </div>

            <div
                id="grammarPracticeMessage"
                class="grammar-practice-message"
                aria-live="polite"
            ></div>

            ${createPracticeButtonsHTML(currentState)}

        </div>
    `;
}


/* =========================================================
   THANH TIẾN ĐỘ
========================================================= */

function createPracticeProgressHTML() {
    const practiceData =
        grammarLessonData.practice;

    return `
        <div class="grammar-practice-progress">

            ${practiceData
                .map((part, index) => {

                    const partState =
                        grammarPracticeState
                            .partStates[index];

                    const isActive =
                        index ===
                        grammarPracticeState
                            .currentPartIndex;

                    let statusClass = "";

                    if (partState?.checked) {
                        statusClass =
                            partState.allCorrect
                                ? "is-correct"
                                : "has-error";
                    }

                    return `
                        <button
                            type="button"
                            class="
                                grammar-practice-step
                                ${
                                    isActive
                                        ? "is-active"
                                        : ""
                                }
                                ${statusClass}
                            "
                            data-practice-step="${index}"
                            aria-label="Luyện tập ${index + 1}"
                            title="Luyện tập ${index + 1}"
                        >

                            ${
                                isActive
                                    ? `
                                        <span
                                            class="grammar-practice-step-number"
                                        >
                                            ${index + 1}
                                        </span>
                                    `
                                    : ""
                            }

                        </button>
                    `;
                })
                .join("")}

        </div>
    `;
}


/* =========================================================
   VÍ DỤ
========================================================= */

function createPracticeExampleHTML(example) {
    return `
        <div class="grammar-practice-example">

            <div class="grammar-practice-example-label">
                Ví dụ
            </div>

            <div class="grammar-practice-example-content">
                ${example.content}
            </div>

        </div>
    `;
}


/* =========================================================
   TẠO MỘT CÂU HỎI
========================================================= */

function createPracticeQuestionHTML(
    question,
    questionIndex,
    currentState
) {
    const savedAnswer =
        currentState.answers[questionIndex] || "";

    const result =
        currentState.results[questionIndex];

    const isLocked =
        currentState.showingAnswers ||
        currentState.checked;

    let resultClass = "";
    let resultIcon = "";

    if (result === true) {
        resultClass = "is-correct";
        resultIcon = "✓";
    }

    if (result === false) {
        resultClass = "is-wrong";
        resultIcon = "✕";
    }

    const answerText =
        Array.isArray(question.answers) &&
        question.answers.length > 0
            ? question.answers[0]
            : "";

    return `
        <div class="grammar-practice-question">

            <div class="grammar-practice-question-left">
                <span class="grammar-practice-question-prompt">
                   ${String(question.prompt || "")
                  .trim()
                  .replace(/\n/g, "<br>")}
                </span>

            </div>

            <div class="grammar-practice-question-right">

                <div
                    class="
                        grammar-practice-input-wrapper
                        ${resultClass}
                    "
                >

                    <input
                        type="text"
                        class="grammar-practice-input"
                        data-practice-input="${questionIndex}"
                        value="${escapePracticeAttribute(
                            savedAnswer
                        )}"
                        autocomplete="off"
                        spellcheck="false"
                        ${
                            isLocked
                                ? "disabled"
                                : ""
                        }
                    >

                    <span class="grammar-practice-result-icon">
                        ${resultIcon}
                    </span>

                </div>

                <div
                    class="
                        grammar-practice-correct-answer
                        ${
                            currentState.showingAnswers
                                ? "is-visible"
                                : ""
                        }
                    "
                >
                    <span class="grammar-practice-answer-label">
                        Đáp án:
                    </span>

                    <span>
                        ${escapePracticeHTML(answerText)}
                    </span>
                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   TẠO CÁC NÚT
========================================================= */

function createPracticeButtonsHTML(currentState) {
    const answers =
        Array.isArray(currentState.answers)
            ? currentState.answers
            : [];

    const hasAnyAnswer =
        answers.some(
            (answer) =>
                String(answer || "").trim() !== ""
        );

    const allAnswersFilled =
        answers.length > 0 &&
        answers.every(
            (answer) =>
                String(answer || "").trim() !== ""
        );

    const isFinished =
        isGrammarPracticeFinished();

    /*
      Xem đáp án chỉ bật sau khi
      phần hiện tại đã được kiểm tra.
    */
    const canShowAnswer =
        currentState.checked;

    /*
      Khi hoàn thành toàn bộ:
      nút giữa chỉ bật nếu có phần sai.
    */
    const hasWrongPart =
        grammarPracticeState.partStates.some(
            (partState) =>
                partState.checked &&
                !partState.allCorrect
        );

    /*
      Trạng thái bình thường:
      Làm lại phần hiện tại.
    */
    const canRetryCurrent =
        hasAnyAnswer ||
        currentState.checked ||
        currentState.showingAnswers;

    /*
      Nút bên phải:
      - Kiểm tra
      - Tiếp theo
      - Đóng
    */
    let primaryAction = "check";
    let primaryText = "Kiểm tra";
    let canUsePrimary = allAnswersFilled;

    if (currentState.checked) {
        if (isFinished) {
            primaryAction = "close";
            primaryText = "Đóng";
            canUsePrimary = true;
        } else {
            primaryAction = "next";
            primaryText = "Tiếp theo";
            canUsePrimary = true;
        }
    }

    /*
      Nút giữa:
      - Chưa hoàn thành: Làm lại phần hiện tại
      - Đã hoàn thành: Làm lại phần sai
    */
    const retryButtonId =
        isFinished
            ? "grammarPracticeRetryWrongBtn"
            : "grammarPracticeRetryBtn";

    const retryButtonText =
        isFinished
            ? "Làm lại phần sai"
            : "Làm lại";

    const canRetry =
        isFinished
            ? hasWrongPart
            : canRetryCurrent;

    return `
        <div class="grammar-practice-actions">

            <button
                type="button"
                id="grammarPracticeShowAnswerBtn"
                class="
                    grammar-practice-btn
                    grammar-practice-answer-btn
                "
                ${canShowAnswer ? "" : "disabled"}
            >
                ${
                    currentState.showingAnswers
                        ? "Ẩn đáp án"
                        : "Xem đáp án"
                }
            </button>

            <button
                type="button"
                id="${retryButtonId}"
                class="
                    grammar-practice-btn
                    grammar-practice-retry-btn
                "
                ${canRetry ? "" : "disabled"}
            >
                ${retryButtonText}
            </button>

            <button
                type="button"
                id="grammarPracticePrimaryBtn"
                class="
                    grammar-practice-btn
                    grammar-practice-check-btn
                "
                data-action="${primaryAction}"
                ${canUsePrimary ? "" : "disabled"}
            >
                ${primaryText}
            </button>

        </div>
    `;
}


function updateGrammarPracticeButtonStates() {
    const currentState =
        grammarPracticeState.partStates[
            grammarPracticeState.currentPartIndex
        ];

    if (!currentState) {
        return;
    }

    const answers =
        Array.isArray(currentState.answers)
            ? currentState.answers
            : [];

    const hasAnyAnswer =
        answers.some(
            answer =>
                String(answer || "").trim() !== ""
        );

    const allAnswersFilled =
        answers.length > 0 &&
        answers.every(
            answer =>
                String(answer || "").trim() !== ""
        );

    const retryButton =
        document.getElementById(
            "grammarPracticeRetryBtn"
        );

    const primaryButton =
        document.getElementById(
            "grammarPracticePrimaryBtn"
        );

    if (retryButton) {
        retryButton.disabled =
            !hasAnyAnswer &&
            !currentState.checked;
    }

    if (
        primaryButton &&
        primaryButton.dataset.action === "check"
    ) {
        primaryButton.disabled =
            !allAnswersFilled;
    }
}
/* =========================================================
   GẮN SỰ KIỆN
========================================================= */

function addGrammarPracticeEvents() {
    /*
      Mở hoặc đóng khung luyện tập.
    */
    const toggleButton =
        document.getElementById(
            "grammarPracticeToggle"
        );

    if (toggleButton) {
        toggleButton.addEventListener(
            "click",
            toggleGrammarPracticePanel
        );
    }

    /*
      Gắn sự kiện cho từng phần
      trên thanh tiến độ.
    */
    document
        .querySelectorAll(
            "[data-practice-step]"
        )
        .forEach((stepButton) => {
            stepButton.addEventListener(
                "click",
                handlePracticeStepClick
            );
        });

    /*
      Lưu câu trả lời ngay khi
      người học nhập vào ô.
    */
    document
    .querySelectorAll("[data-practice-input]")
    .forEach((input) => {

        input.addEventListener(
            "input",
            saveGrammarPracticeInput
        );

        input.addEventListener(
            "keydown",
            handlePracticeInputKeyDown
        );

    });

    /*
      Nút Xem đáp án / Ẩn đáp án.
    */
    const showAnswerButton =
        document.getElementById(
            "grammarPracticeShowAnswerBtn"
        );

    if (showAnswerButton) {
        showAnswerButton.addEventListener(
            "click",
            toggleGrammarPracticeAnswers
        );
    }

    /*
      Nút Làm lại phần hiện tại.
    */
    const retryButton =
        document.getElementById(
            "grammarPracticeRetryBtn"
        );

    if (retryButton) {
        retryButton.addEventListener(
            "click",
            retryGrammarPractice
        );
    }

    /*
      Nút dùng chung:
      - Kiểm tra
      - Tiếp theo
    */
    const primaryButton =
        document.getElementById(
            "grammarPracticePrimaryBtn"
        );

    if (primaryButton) {
        primaryButton.addEventListener(
            "click",
            handleGrammarPracticePrimaryButton
        );
    }

    /*
      Sau khi hoàn thành tất cả phần:
      chỉ làm lại những phần còn sai.
    */
    const retryWrongButton =
        document.getElementById(
            "grammarPracticeRetryWrongBtn"
        );

    if (retryWrongButton) {
        retryWrongButton.addEventListener(
            "click",
            retryWrongGrammarPracticeParts
        );
    }

    /*
      Đóng khung luyện tập.
    */
    const closeButton =
        document.getElementById(
            "grammarPracticeCloseBtn"
        );

    if (closeButton) {
        closeButton.addEventListener(
            "click",
            closeGrammarPractice
        );
    }
}


/* =========================================================
   MỞ / ĐÓNG KHUNG LUYỆN TẬP
========================================================= */

function toggleGrammarPracticePanel() {
    grammarPracticeState.isPanelOpen =
        !grammarPracticeState.isPanelOpen;

    renderGrammarPractice();

    /*
      Khi mở khung, tự đưa trang đến phần luyện tập.
    */
    if (grammarPracticeState.isPanelOpen) {
        const panel = document.getElementById(
            "grammarPracticePanel"
        );

        if (panel) {
            panel.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
}

/*kiểm tra đã hoàn thành*/
function isGrammarPracticeFinished() {
    const partStates =
        grammarPracticeState.partStates;

    return (
        Array.isArray(partStates) &&
        partStates.length > 0 &&
        partStates.every(
            partState => partState.checked
        )
    );
}

/*xử lý nút kiểm tra/tiếp theo*/
function handleGrammarPracticePrimaryButton() {
    const button = document.getElementById(
        "grammarPracticePrimaryBtn"
    );

    if (!button || button.disabled) {
        return;
    }

    const action = button.dataset.action;

    if (action === "check") {
        checkGrammarPractice();
        return;
    }

    if (action === "next") {
        goToNextGrammarPractice();
        return;
    }

    if (action === "close") {
        closeGrammarPractice();
        return;
    }
}
/* =========================================================
   LƯU CÂU TRẢ LỜI
========================================================= */

function saveGrammarPracticeInput(event) {
    const input = event.currentTarget;

    const questionIndex = Number(
        input.dataset.practiceInput
    );

    const currentState =
        grammarPracticeState.partStates[
            grammarPracticeState.currentPartIndex
        ];

    if (!currentState) {
        return;
    }

    currentState.answers[questionIndex] =
        input.value;

      updateGrammarPracticeButtonStates();
}

/* =========================================================
Chuyển con trỏ khi bấm enter trong ô nhập
========================================================= */
function handlePracticeInputKeyDown(event) {

    if (event.key !== "Enter") {
        return;
    }

    event.preventDefault();

    const currentInput =
        event.currentTarget;

    const currentIndex =
        Number(
            currentInput.dataset.practiceInput
        );

    const allInputs =
        Array.from(
            document.querySelectorAll(
                "[data-practice-input]"
            )
        );

    /*
      Nếu còn ô tiếp theo
      thì chuyển sang ô đó.
    */
    const nextInput =
        allInputs[currentIndex + 1];

    if (nextInput) {

        nextInput.focus();

        nextInput.select();

        return;
    }

    /*
      Nếu đang ở ô cuối cùng
      thì chuyển sang nút Kiểm tra.
    */
    const primaryButton =
        document.getElementById(
            "grammarPracticePrimaryBtn"
        );

    if (
        primaryButton &&
        !primaryButton.disabled
    ) {
        primaryButton.focus();
    }
}

/* =========================================================
   CHUYỂN PHẦN BẰNG THANH TIẾN ĐỘ
========================================================= */

function handlePracticeStepClick(event) {
    /*
      Lưu các ô nhập hiện tại trước khi chuyển phần.
    */
    saveAllCurrentPracticeInputs();

    const newPartIndex = Number(
        event.currentTarget.dataset.practiceStep
    );

    if (
        Number.isNaN(newPartIndex) ||
        !grammarLessonData.practice[newPartIndex]
    ) {
        return;
    }

    grammarPracticeState.currentPartIndex =
        newPartIndex;

    renderGrammarPractice();
}


/* =========================================================
   LƯU TẤT CẢ Ô NHẬP CỦA PHẦN HIỆN TẠI
========================================================= */

function saveAllCurrentPracticeInputs() {
    const currentState =
        grammarPracticeState.partStates[
            grammarPracticeState.currentPartIndex
        ];

    if (!currentState) {
        return;
    }

    document
        .querySelectorAll("[data-practice-input]")
        .forEach((input) => {
            const questionIndex = Number(
                input.dataset.practiceInput
            );

            currentState.answers[questionIndex] =
                input.value;
        });
}


/* =========================================================
   KIỂM TRA ĐÃ NHẬP ĐỦ CÂU HAY CHƯA
========================================================= */

function areAllPracticeAnswersFilled() {
    saveAllCurrentPracticeInputs();

    const currentState =
        grammarPracticeState.partStates[
            grammarPracticeState.currentPartIndex
        ];

    if (!currentState) {
        return false;
    }

    return currentState.answers.every(
        (answer) => answer.trim() !== ""
    );
}


/* =========================================================
   HIỂN THỊ THÔNG BÁO
========================================================= */

function showGrammarPracticeMessage(
    message,
    type = ""
) {
    const messageBox = document.getElementById(
        "grammarPracticeMessage"
    );

    if (!messageBox) {
        return;
    }

    messageBox.textContent = message;

    messageBox.className =
        "grammar-practice-message";

    if (type) {
        messageBox.classList.add(
            `is-${type}`
        );
    }
}


/* =========================================================
   XEM ĐÁP ÁN
========================================================= */

function toggleGrammarPracticeAnswers() {
    const currentState =
        grammarPracticeState.partStates[
            grammarPracticeState.currentPartIndex
        ];

    if (!currentState) {
        return;
    }

    /*
      Chỉ được xem đáp án sau khi
      đã nhấn Kiểm tra.
    */
    if (!currentState.checked) {
        showGrammarPracticeMessage(
            "Vui lòng kiểm tra bài trước khi xem đáp án.",
            "warning"
        );

        return;
    }

    /*
      Chuyển đổi giữa:
      - Xem đáp án
      - Ẩn đáp án
    */
    currentState.showingAnswers =
        !currentState.showingAnswers;

    renderGrammarPractice();

    if (currentState.showingAnswers) {
        showGrammarPracticeMessage(
            " ",
            "info"
        );
    }
}


/* =========================================================
   KIỂM TRA ĐÁP ÁN
========================================================= */

function checkGrammarPractice() {
    /*
      Không cho kiểm tra khi chưa nhập đủ.
    */
    if (!areAllPracticeAnswersFilled()) {
        showGrammarPracticeMessage(
            "Vui lòng nhập đầy đủ tất cả câu trả lời trước khi kiểm tra.",
            "warning"
        );

        focusFirstEmptyPracticeInput();
        return;
    }

    const currentPart =
        grammarLessonData.practice[
            grammarPracticeState.currentPartIndex
        ];

    const currentState =
        grammarPracticeState.partStates[
            grammarPracticeState.currentPartIndex
        ];

    if (!currentPart || !currentState) {
        return;
    }

    let correctCount = 0;

    currentState.results =
        currentPart.questions.map(
            (question, questionIndex) => {
                const userAnswer =
                    currentState.answers[
                        questionIndex
                    ];

                const acceptedAnswers =
                    Array.isArray(question.answers)
                        ? question.answers
                        : [];

                /*
                  So sánh câu trả lời đã chuẩn hóa.

                  Chấp nhận:
                  - Có hoặc không có khoảng trắng.
                  - Khoảng trắng tiếng Nhật.
                  - Có hoặc không có dấu chấm cuối câu.
                  - Chữ Latin hoa hoặc thường.

                  Kanji và hiragana phải được khai báo
                  thành các đáp án khác nhau trong data.
                */
                const isCorrect =
                    acceptedAnswers.some(
                        (acceptedAnswer) =>
                            normalizePracticeAnswer(
                                userAnswer
                            ) ===
                            normalizePracticeAnswer(
                                acceptedAnswer
                            )
                    );

                if (isCorrect) {
                    correctCount += 1;
                }

                return isCorrect;
            }
        );

    currentState.checked = true;
    currentState.showingAnswers = false;
    currentState.completed = true;

    currentState.allCorrect =
        correctCount ===
        currentPart.questions.length;

    renderGrammarPractice();

    if (currentState.allCorrect) {
        showGrammarPracticeMessage(
            `Bạn đã trả lời đúng tất cả ${correctCount} câu.`,
            "success"
        );
    } else {
        showGrammarPracticeMessage(
            `Bạn trả lời đúng ${correctCount}/${currentPart.questions.length} câu.`,
            "error"
        );
    }
}


/* =========================================================
   CHUẨN HÓA ĐÁP ÁN
========================================================= */

function normalizePracticeAnswer(value) {
    return String(value || "")
        /*
          Chuẩn hóa ký tự Unicode.
        */
        .normalize("NFKC")

        /*
          Bỏ tất cả khoảng trắng:
          - Khoảng trắng thường.
          - Tab.
          - Xuống dòng.
          - Khoảng trắng toàn chiều rộng tiếng Nhật.
        */
        .replace(/[\s\u3000]+/g, "")

        /*
          Bỏ các dấu kết thúc câu.
        */
        .replace(/[。．.!！?？、,，]/g, "")

        /*
          Không phân biệt chữ Latin hoa/thường.
        */
        .toLowerCase()

        .trim();
}


/* =========================================================
   LÀM LẠI PHẦN HIỆN TẠI
========================================================= */

function retryGrammarPractice() {
    const currentPart =
        grammarLessonData.practice[
            grammarPracticeState.currentPartIndex
        ];

    const currentState =
        grammarPracticeState.partStates[
            grammarPracticeState.currentPartIndex
        ];

    if (!currentPart || !currentState) {
        return;
    }

    /*
      Xóa câu trả lời của phần hiện tại.
      Không ảnh hưởng đến các phần khác.
    */
    currentState.answers =
        currentPart.questions.map(() => "");

    currentState.results =
        currentPart.questions.map(() => null);

    currentState.checked = false;
    currentState.showingAnswers = false;
    currentState.completed = false;
    currentState.allCorrect = false;

    renderGrammarPractice();

    const firstInput = document.querySelector(
        "[data-practice-input='0']"
    );

    if (firstInput) {
        firstInput.focus();
    }
}


/* =========================================================
   CHUYỂN SANG PHẦN TIẾP THEO
========================================================= */

function goToNextGrammarPractice() {
    const practiceData =
        grammarLessonData.practice;

    const partStates =
        grammarPracticeState.partStates;

    const currentIndex =
        grammarPracticeState.currentPartIndex;

    /*
      Tìm phần chưa kiểm tra tiếp theo,
      bắt đầu từ phía sau phần hiện tại.
    */
    let nextIndex = -1;

    for (
        let index = currentIndex + 1;
        index < practiceData.length;
        index += 1
    ) {
        if (!partStates[index].checked) {
            nextIndex = index;
            break;
        }
    }

    /*
      Nếu phía sau không còn phần chưa làm,
      tìm lại từ đầu.
    */
    if (nextIndex === -1) {
        for (
            let index = 0;
            index < currentIndex;
            index += 1
        ) {
            if (!partStates[index].checked) {
                nextIndex = index;
                break;
            }
        }
    }

    /*
      Nếu tất cả đã kiểm tra thì chỉ render lại
      để hiện Làm lại phần sai và Đóng.
    */
    if (nextIndex === -1) {
        renderGrammarPractice();
        return;
    }

    grammarPracticeState.currentPartIndex =
        nextIndex;

    renderGrammarPractice();
}

/*làm lại những phần sai*/
function retryWrongGrammarPracticeParts() {
    const wrongPartIndexes = [];

    grammarPracticeState.partStates.forEach(
        (partState, index) => {
            if (
                partState.checked &&
                !partState.allCorrect
            ) {
                wrongPartIndexes.push(index);

                /*
                  Đặt lại toàn bộ trạng thái
                  của phần bị sai.
                */
                partState.answers =
                    partState.answers.map(
                        () => ""
                    );

                partState.results =
                    partState.results.map(
                        () => null
                    );

                partState.checked = false;
                partState.completed = false;
                partState.allCorrect = false;
                partState.showingAnswers = false;
            }
        }
    );

    if (wrongPartIndexes.length === 0) {
        return;
    }

    /*
      Mở phần sai đầu tiên.
    */
    grammarPracticeState.currentPartIndex =
        wrongPartIndexes[0];

    renderGrammarPractice();

    focusFirstEmptyPracticeInput();
}

/*đóng luyện tập*/

function closeGrammarPractice() {
    grammarPracticeState.isPanelOpen = false;

    renderGrammarPractice();
}
/* =========================================================
   ĐƯA CON TRỎ ĐẾN Ô CHƯA NHẬP ĐẦU TIÊN
========================================================= */

function focusFirstEmptyPracticeInput() {
    const emptyInput = Array.from(
        document.querySelectorAll(
            "[data-practice-input]"
        )
    ).find(
        (input) => input.value.trim() === ""
    );

    if (emptyInput) {
        emptyInput.focus();

        emptyInput.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


/* =========================================================
   CHỐNG LỖI HTML KHI HIỂN THỊ DỮ LIỆU
========================================================= */

function escapePracticeHTML(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function escapePracticeAttribute(value) {
    return escapePracticeHTML(value);
}


/* =========================================================
   KHỞI CHẠY PHẦN LUYỆN TẬP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        initializeGrammarPracticeState();
        renderGrammarPractice();
    }
);