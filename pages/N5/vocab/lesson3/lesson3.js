const lesson3Vocab = [
  {
    kana: "きょうしつ",
    kanji: "教室",
    romaji: "kyoushitsu",
    meaning: "Lớp học, phòng học"
  },
  {
    kana: "しょくどう",
    kanji: "食堂",
    romaji: "shokudou",
    meaning: "Nhà ăn, phòng ăn"
  },
  {
    kana: "じむしょ",
    kanji: "事務所",
    romaji: "jimusho",
    meaning: "Văn phòng"
  },
  {
    kana: "かいぎしつ",
    kanji: "会議室",
    romaji: "kaigishitsu",
    meaning: "Phòng họp"
  },
  {
    kana: "おてあらい",
    kanji: "お手洗い",
    romaji: "otearai",
    meaning: "Nhà vệ sinh"
  },
  {
    kana: "トイレ",
    kanji: "",
    romaji: "toire",
    meaning: "Nhà vệ sinh"
  },
  {
    kana: "ロビー",
    kanji: "",
    romaji: "robii",
    meaning: "Phòng đợi, tiền sảnh"
  },
  {
    kana: "うけつけ",
    kanji: "受付",
    romaji: "uketsuke",
    meaning: "Quầy tiếp tân"
  },
  {
    kana: "へや",
    kanji: "部屋",
    romaji: "heya",
    meaning: "Phòng"
  },
  {
    kana: "にわ",
    kanji: "庭",
    romaji: "niwa",
    meaning: "Sân, vườn"
  },
  {
    kana: "かいだん",
    kanji: "階段",
    romaji: "kaidan",
    meaning: "Cầu thang"
  },
  {
    kana: "エレベーター",
    kanji: "",
    romaji: "erebeetaa",
    meaning: "Thang máy"
  },
  {
    kana: "エスカレーター",
    kanji: "",
    romaji: "esukareetaa",
    meaning: "Thang cuốn"
  },
  {
    kana: "うち",
    kanji: "家",
    romaji: "uchi",
    meaning: "Nhà"
  },
  {
    kana: "かいしゃ",
    kanji: "会社",
    romaji: "kaisha",
    meaning: "Công ty"
  },
  
  {
    kana: "くつ",
    kanji: "靴",
    romaji: "kutsu",
    meaning: "Giày"
  },
  {
    kana: "ネクタイ",
    kanji: "",
    romaji: "nekutai",
    meaning: "Cà vạt"
  },
  {
    kana: "ワイン",
    kanji: "",
    romaji: "wain",
    meaning: "Rượu vang"
  }
];
const lesson3Table = [
  {
    kana: "ここ",
    kanji: "",
    romaji: "koko",
    meaning: "Chỗ này, ở đây"
  },
  {
    kana: "そこ",
    kanji: "",
    romaji: "soko",
    meaning: "Chỗ đó, ở đó"
  },
  {
    kana: "あそこ",
    kanji: "",
    romaji: "asoko",
    meaning: "Chỗ kia, ở đằng kia"
  },
  {
    kana: "どこ",
    kanji: "",
    romaji: "doko",
    meaning: "Ở đâu"
  },
  {
    kana: "こちら",
    kanji: "",
    romaji: "kochira",
    meaning: "Đằng này (lịch sự của ここ)"
  },
  {
    kana: "そちら",
    kanji: "",
    romaji: "sochira",
    meaning: "Đằng đó (lịch sự của そこ)"
  },
  {
    kana: "あちら",
    kanji: "",
    romaji: "achira",
    meaning: "Đằng kia (lịch sự của あそこ)"
  },
  {
    kana: "どちら",
    kanji: "",
    romaji: "dochira",
    meaning: "Ở đâu (lịch sự của どこ)"
  },
  {
    kana: "ちか",
    kanji: "地下",
    romaji: "chika",
    meaning: "Tầng hầm"
  },
  {
    kana: "おくに",
    kanji: "お国",
    romaji: "okuni",
    meaning: "Đất nước"
  },
  {
    kana: "うりば",
    kanji: "売り場",
    romaji: "uriba",
    meaning: "Quầy bán hàng"
  },
  {
    kana: "～かい",
    kanji: "～階",
    romaji: "kai",
    meaning: "Tầng ~"
  },
  {
    kana: "なんかい",
    kanji: "何階",
    romaji: "nankai",
    meaning: "Tầng mấy"
  },
  {
    kana: "～えん",
    kanji: "～円",
    romaji: "en",
    meaning: "~ yên"
  },
  {
    kana: "ひゃく",
    kanji: "百",
    romaji: "hyaku",
    meaning: "Trăm"
  },
  {
    kana: "せん",
    kanji: "千",
    romaji: "sen",
    meaning: "Nghìn"
  },
  {
    kana: "まん",
    kanji: "万",
    romaji: "man",
    meaning: "Mười nghìn (vạn)"
  }
];

// Mảng kết hợp cho flashcard
const allFlashcardData = [...lesson3Vocab, ...lesson3Table];
const lesson3PracticeAllWords = [...lesson3Vocab, ...lesson3Table];

function renderLesson3Vocab() {
  const grid = document.getElementById("lesson3VocabGrid");
  if (!grid) return;

  grid.innerHTML = "";

  lesson3Vocab.forEach(item => {
    const card = document.createElement("div");
    card.className = "vocab-card";

    const kanjiHtml = item.kanji
      ? `<div class="vocab-kanji">${item.kanji}</div>`
      : "";

    card.innerHTML = `
      <img 
        class="vocab-img" 
        src="../../../../assets/images/lesson3/${item.romaji}.jpg" 
        alt="${item.kana}"
      >

      ${kanjiHtml}

      <div class="vocab-kana-row">

    <div class="vocab-kana">
        ${item.kana}
    </div>

    <button class="vocab-sound-btn"
            onclick="playVocabSound('${item.romaji}', this)">
        🔊
    </button>

</div>

      <div class="vocab-romaji">${item.romaji}</div>

      <div class="vocab-meaning">${item.meaning}</div>
    `;

    grid.appendChild(card);
  });
}

function renderLesson3Table() {
  const tableBody = document.getElementById("lesson3TableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  lesson3Table.forEach(item => {
    const row = document.createElement("tr");

    const kanjiCell = item.kanji ? item.kanji : "&nbsp;";

    row.innerHTML = `
      <td class="table-kana">${item.kana}</td>
      <td class="table-kanji">${kanjiCell}</td>
      <td class="table-romaji">${item.romaji}</td>
      <td class="table-meaning">${item.meaning}</td>
      <td>
        <button class="table-sound-btn"
                onclick="playVocabSound('${item.romaji}', this)">
          🔊
        </button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function playVocabSound(romaji, btn) {
  const audio = new Audio(`../../../../assets/n5_vocab_audio/lesson3/${romaji}.mp3`);

  btn.classList.add("playing");

  audio.play();

  audio.onended = () => {
    btn.classList.remove("playing");
  };

  audio.onerror = () => {
    btn.classList.remove("playing");
    alert("Không tìm thấy file âm thanh: " + romaji + ".mp3");
  };
}

function playFlashcardSound(romaji) {
  if (!romaji) return;

  const audio = new Audio(`../../../../assets/n5_vocab_audio/lesson3/${romaji}.mp3`);

  audio.play().catch(() => {
    console.log("Không phát được âm thanh flashcard:", romaji);
  });
}

let flashcardIndex = 0;
let flashcardFlipped = false;
let flashcardVisible = false;

function renderFlashcard() {
  const content = document.getElementById("flashcardContent");
  const hintEl = document.getElementById("flashcardHint");
  const container = document.getElementById("flashcardContainer");

  if (!content || !container || !hintEl) return;
  if (!allFlashcardData || allFlashcardData.length === 0) return;

  const item = allFlashcardData[flashcardIndex];

  flashcardFlipped = false;
  flashcardVisible = true;
  container.hidden = false;
  const counter = document.getElementById("flashcardCounter");

    if (counter) {
    counter.textContent = `${flashcardIndex + 1} / ${allFlashcardData.length}`;
    }
  content.innerHTML = `
    <div class="flashcard-face">
      
      <div class="flashcard-main">
        ${item.kana}
      </div>
    </div>
  `;

  hintEl.textContent = "Nhấn để lật thẻ";

  playFlashcardSound(item.romaji);
}

function toggleFlashcard() {
  const content = document.getElementById("flashcardContent");
  const hintEl = document.getElementById("flashcardHint");

  if (!content || !hintEl) return;
  if (!allFlashcardData || allFlashcardData.length === 0) return;

  const item = allFlashcardData[flashcardIndex];

  if (!flashcardFlipped) {
    content.innerHTML = `
      <div class="flashcard-face">

        <div class="flashcard-kanji">
         ${item.kanji || ""}
        </div>

        <div class="flashcard-kana">
          ${item.kana}
        </div>

        <div class="flashcard-romaji">
          ${item.romaji}
        </div>

        <div class="flashcard-meaning">
          ${item.meaning}
        </div>
      </div>
    `;

    hintEl.textContent = "Nhấn để quay lại";
    flashcardFlipped = true;

  } else {
    content.innerHTML = `
      <div class="flashcard-face">

        <div class="flashcard-main">
          ${item.kana}
        </div>
      </div>
    `;

    hintEl.textContent = "Nhấn để lật thẻ";
    flashcardFlipped = false;
  }
}

function changeFlashcard(step) {
  if (!allFlashcardData || allFlashcardData.length === 0) return;

  flashcardIndex =
    (flashcardIndex + step + allFlashcardData.length) % allFlashcardData.length;

  renderFlashcard();
}

function initFlashcards() {
  const toggleBtn = document.getElementById("flashcardToggleBtn");
  const container = document.getElementById("flashcardContainer");
  const card = document.getElementById("flashcardCard");
  const prevBtn = document.getElementById("flashcardPrev");
  const nextBtn = document.getElementById("flashcardNext");

  if (!toggleBtn || !container || !card || !prevBtn || !nextBtn) return;

  container.hidden = true;

  toggleBtn.addEventListener("click", () => {
    if (flashcardVisible) {
      flashcardVisible = false;
      container.hidden = true;
      toggleBtn.textContent = "🃏 Flashcard";
    } else {
      renderFlashcard();
      toggleBtn.textContent = "🃏 Flashcard";
    }
  });

  card.addEventListener("click", toggleFlashcard);

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlashcard();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeFlashcard(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      changeFlashcard(1);
    }
  });

  prevBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    changeFlashcard(-1);
  });

  nextBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    changeFlashcard(1);
  });
}

/*Practice*/
const lesson3PracticeWords = {
  1: allFlashcardData.slice(0, 10),
  2: allFlashcardData.slice(10, 20),
  3: allFlashcardData.slice(20, 30),
  4: allFlashcardData.slice(30, 35)
};
let currentPracticeNumber = null;
let currentPracticeQuestions = [];
let currentPracticeQuestionIndex = 0;
let currentPracticeScore = 0;
let currentPracticePanel = null;
let lesson3AnswerLocked = false;

const lesson3PracticeAudio = new Audio();
function shuffleLesson3Array(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [newArray[i], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[i]
    ];
  }

  return newArray;
}
function createLesson3PracticeAnswers(
  correctWord,
  answerType
) {
  const correctAnswer =
    answerType === "meaning"
      ? correctWord.meaning
      : correctWord.kana;

  const wrongAnswers = allFlashcardData
    .filter(word => {
      return word.kana !== correctWord.kana;
    })
    .map(word => {
      return answerType === "meaning"
        ? word.meaning
        : word.kana;
    })
    .filter((answer, index, array) => {
      return (
        answer &&
        answer !== correctAnswer &&
        array.indexOf(answer) === index
      );
    });

  const selectedWrongAnswers =
    shuffleLesson3Array(wrongAnswers).slice(0, 3);

  return shuffleLesson3Array([
    correctAnswer,
    ...selectedWrongAnswers
  ]);
}
function createLesson3PracticeQuestions(practiceNumber) {
  const words = lesson3PracticeWords[practiceNumber];

  if (!words || words.length === 0) {
    return [];
  }

  const questions = [];

  const shuffledWords = shuffleLesson3Array([
    ...words
  ]);

  const kanaWords = shuffledWords.slice(
    0,
    Math.min(8, shuffledWords.length)
  );

  const meaningWords = shuffleLesson3Array([
    ...words
  ]).slice(
    0,
    Math.min(8, words.length)
  );

  const audioWords = shuffleLesson3Array([
    ...words
  ]).slice(
    0,
    Math.min(4, words.length)
  );

  kanaWords.forEach(word => {
    questions.push({
      type: "kanaToMeaning",
      question: word.kana,
      correct: word.meaning,
      answers: createLesson3PracticeAnswers(
        word,
        "meaning"
      ),
      word: word
    });
  });

  meaningWords.forEach(word => {
    questions.push({
      type: "meaningToKana",
      question: word.meaning,
      correct: word.kana,
      answers: createLesson3PracticeAnswers(
        word,
        "kana"
      ),
      word: word
    });
  });

  audioWords.forEach(word => {
    questions.push({
      type: "audioToMeaning",
      question: "",
      correct: word.meaning,
      answers: createLesson3PracticeAnswers(
        word,
        "meaning"
      ),
      word: word
    });
  });

  return shuffleLesson3Array(questions);
}
function togglePractice(practiceNumber, button) {
  if (!button) {
    const btns = document.querySelectorAll(".practice-title-btn");
    button = btns[Number(practiceNumber) - 1] || btns[0];
  }

  if (!button) return;

  const practiceItem = button.closest(".practice-item");
  if (!practiceItem) return;

  const panel = practiceItem.querySelector(".practice-panel");
  if (!panel) return;

  const isOpen = panel.classList.contains("open");

  lesson3PracticeAudio.pause();
  lesson3PracticeAudio.currentTime = 0;

  document.querySelectorAll(".practice-panel").forEach(item => {
    item.classList.remove("open");
    item.innerHTML = "";
  });

  document.querySelectorAll(".practice-title-btn").forEach((practiceButton, index) => {
    practiceButton.classList.remove("active");
    practiceButton.textContent = `📝 Luyện tập ${index + 1}`;
  });

  if (isOpen) {
    currentPracticePanel = null;
    currentPracticeNumber = null;
    return;
  }

  currentPracticeNumber = Number(practiceNumber);
  currentPracticePanel = panel;

  button.classList.add("active");
  button.textContent = `▼ Luyện tập ${currentPracticeNumber}`;

  panel.classList.add("open");

  startLesson3Practice();
}

function startLesson3Practice() {
  currentPracticeQuestions =
    createLesson3PracticeQuestions(
      currentPracticeNumber
    );

  currentPracticeQuestionIndex = 0;
  currentPracticeScore = 0;
  lesson3AnswerLocked = false;

  showLesson3PracticeQuestion();
}
function showLesson3PracticeQuestion() {
  const question =
    currentPracticeQuestions[
      currentPracticeQuestionIndex
    ];

  if (!question) {
    showLesson3PracticeResult();
    return;
  }

  lesson3AnswerLocked = false;

  lesson3PracticeAudio.pause();
  lesson3PracticeAudio.currentTime = 0;

  const totalQuestions =
    currentPracticeQuestions.length;

  const questionNumber =
    currentPracticeQuestionIndex + 1;

  const progressPercent =
    (questionNumber / totalQuestions) * 100;


  let instruction = "";

  if (question.type === "kanaToMeaning") {
    instruction =
      "Chọn đáp án đúng";
  }

  if (question.type === "meaningToKana") {
    instruction =
      "Chọn đáp án đúng";
  }

  if (question.type === "audioToMeaning") {
    instruction =
      "Chọn đáp án đúng";
  }


  let questionHTML = `
    <div class="practice-question-text">
      ${question.question}
    </div>
  `;


  if (question.type === "audioToMeaning") {
    questionHTML = `
      <div class="practice-audio-area">

        <button
          class="practice-audio-btn"
          onclick="playLesson3PracticeQuestionAudio(this)"
        >
          <span class="practice-speaker">
            🔊
          </span>
        </button>

      </div>
    `;
  }


  const answersHTML = question.answers
    .map((answer, index) => {
      return `
        <button
          class="practice-answer-btn"
          data-answer="${encodeURIComponent(answer)}"
          onclick="checkLesson3PracticeAnswer(this)"
        >

          <span class="answer-letter">
            ${String.fromCharCode(65 + index)}
          </span>

          <span class="answer-text">
            ${answer}
          </span>

        </button>
      `;
    })
    .join("");


  currentPracticePanel.innerHTML = `
    <div class="practice-box">

      <div class="practice-box-title">
        Từ vựng bài 3
      </div>

      <div class="practice-progress-info">

        <span>
          Câu ${questionNumber}/${totalQuestions}
        </span>

        <span>
          Điểm: ${currentPracticeScore}
        </span>

      </div>

      <div class="practice-progress-track">

        <div
          class="practice-progress-fill"
          style="width: ${progressPercent}%"
        >
        </div>

      </div>

      <div class="practice-content">

        <div class="practice-instruction">
          ${instruction}
        </div>

        ${questionHTML}

        <div class="practice-answer-list">
          ${answersHTML}
        </div>

        <div
          id="practiceFeedback"
          class="practice-feedback"
        >
        </div>

        <div
          id="practiceNextArea"
          class="practice-next-area"
        >
        </div>

      </div>

    </div>
  `;
   if (question.type === "audioToMeaning") {
    setTimeout(() => {
      playLesson3PracticeQuestionAudio();
    }, 500);
  }
}
function checkLesson3PracticeAnswer(button) {
  if (lesson3AnswerLocked) {
    return;
  }

  lesson3AnswerLocked = true;

  const question =
    currentPracticeQuestions[
      currentPracticeQuestionIndex
    ];

  const selectedAnswer = decodeURIComponent(
    button.dataset.answer
  );

  const answerButtons =
    currentPracticePanel.querySelectorAll(
      ".practice-answer-btn"
    );


  answerButtons.forEach(answerButton => {
    answerButton.disabled = true;

    const answer = decodeURIComponent(
      answerButton.dataset.answer
    );

    if (answer === question.correct) {
      answerButton.classList.add("correct");
    }
  });


  const feedback =
    currentPracticePanel.querySelector(
      "#practiceFeedback"
    );


  if (selectedAnswer === question.correct) {
    currentPracticeScore++;

    button.classList.add("correct");

    feedback.innerHTML = `
      <div class="feedback-correct">
        😊🎉
      </div>
    `;
  } else {
    button.classList.add("wrong");

    feedback.innerHTML = `
      <div class="feedback-wrong">
       😢
      </div>
    `;
  }


  const nextArea =
    currentPracticePanel.querySelector(
      "#practiceNextArea"
    );

  const isLastQuestion =
  currentPracticeQuestionIndex ===
  currentPracticeQuestions.length - 1;

if (isLastQuestion) {

  // Hiện kết quả sau 1 giây
  setTimeout(() => {
    showLesson3PracticeResult();
  }, 1000);

} else {

  nextArea.innerHTML = `
    <button
      class="practice-next-btn"
      onclick="nextLesson3PracticeQuestion()"
    >
      Next
    </button>
  `;
}
}
function nextLesson3PracticeQuestion() {
  lesson3PracticeAudio.pause();
  lesson3PracticeAudio.currentTime = 0;

  currentPracticeQuestionIndex++;

  if (
    currentPracticeQuestionIndex >=
    currentPracticeQuestions.length
  ) {
    showLesson3PracticeResult();
    return;
  }

  showLesson3PracticeQuestion();
}
function showLesson3PracticeResult() {
  lesson3PracticeAudio.pause();
  lesson3PracticeAudio.currentTime = 0;

  const totalQuestions =
    currentPracticeQuestions.length;

  const percent = Math.round(
    (currentPracticeScore / totalQuestions) * 100
  );

  let resultEmoji = "";
let resultMessage = "";

if (percent === 100) {
    resultEmoji = "🏆";
    resultMessage = "Xuất sắc!";
}
else if (percent >= 80) {
    resultEmoji = "🎉";
    resultMessage = "Tuyệt vời!";
}
else if (percent >= 60) {
    resultEmoji = "👍";
    resultMessage = "Rất tốt!";
}
else {
    resultEmoji = "💪";
    resultMessage = "Cố lên!";
}

  currentPracticePanel.innerHTML = `
    <div class="practice-box">

      <div class="practice-box-title">
        Kết quả luyện tập ${currentPracticeNumber}
      </div>

      <div class="practice-result">

        <div class="practice-result-icon">
          ${resultEmoji}
        </div>

        <div class="practice-result-score">
          ${currentPracticeScore}/${totalQuestions}
        </div>

        <div class="practice-result-message">
          ${resultMessage}
        </div>

        <div class="practice-result-buttons">

          <button
            class="practice-restart-btn"
            onclick="startLesson3Practice()"
          >
            Làm lại
          </button>

          <button
            class="practice-close-btn"
            onclick="closeLesson3Practice()"
          >
            Đóng
          </button>

        </div>

      </div>

    </div>
  `;
}
function closeLesson3Practice() {
  lesson3PracticeAudio.pause();
  lesson3PracticeAudio.currentTime = 0;

  if (!currentPracticePanel) {
    return;
  }

  const practiceItem =
    currentPracticePanel.closest(".practice-item");

  const button =
    practiceItem.querySelector(
      ".practice-title-btn"
    );

  currentPracticePanel.classList.remove("open");
  currentPracticePanel.innerHTML = "";

  button.classList.remove("active");
  button.textContent =
    `▶ Luyện tập ${currentPracticeNumber}`;

  currentPracticePanel = null;
  currentPracticeNumber = null;
}
function playLesson3PracticeQuestionAudio(
  button = null
) {
  const question =
    currentPracticeQuestions[
      currentPracticeQuestionIndex
    ];

  if (!question || !question.word) {
    return;
  }

  const romaji = question.word.romaji;

  if (!romaji) {
    console.log(
      "Từ này chưa có dữ liệu romaji."
    );

    return;
  }

  lesson3PracticeAudio.pause();
  lesson3PracticeAudio.currentTime = 0;

  lesson3PracticeAudio.src =
    `../../../../assets/n5_vocab_audio/lesson3/${romaji}.mp3`;


  if (button) {
    button.classList.add("playing");
  }


  lesson3PracticeAudio
    .play()
    .catch(error => {
      console.log(
        "Không phát được âm thanh:",
        romaji,
        error
      );

      if (button) {
        button.classList.remove("playing");
      }
    });


  lesson3PracticeAudio.onended = () => {
    if (button) {
      button.classList.remove("playing");
    }
  };

  lesson3PracticeAudio.onerror = () => {
    if (button) {
      button.classList.remove("playing");
    }

    console.log(
      `Không tìm thấy file: ${romaji}.mp3`
    );
  };
}

document.addEventListener("DOMContentLoaded", () => {
  renderLesson3Vocab();
  renderLesson3Table();
  initFlashcards();
});