const lesson5Vocab = [
  {
    kana: "いきます",
    kanji: "行きます",
    romaji: "ikimasu",
    meaning: "Đi"
  },
  {
    kana: "きます",
    kanji: "来ます",
    romaji: "kimasu",
    meaning: "Đến"
  },
  {
    kana: "かえります",
    kanji: "帰ります",
    romaji: "kaerimasu",
    meaning: "Về, trở về"
  },
  {
    kana: "ひこうき",
    kanji: "飛行機",
    romaji: "hikouki",
    meaning: "Máy bay"
  },
  {
    kana: "ふね",
    kanji: "船",
    romaji: "fune",
    meaning: "Tàu thủy"
  },
  {
    kana: "でんしゃ",
    kanji: "電車",
    romaji: "densha",
    meaning: "Tàu điện"
  },
  {
    kana: "ちかてつ",
    kanji: "地下鉄",
    romaji: "chikatetsu",
    meaning: "Tàu điện ngầm"
  },
  {
    kana: "しんかんせん",
    kanji: "新幹線",
    romaji: "shinkansen",
    meaning: "Tàu siêu tốc"
  },
  {
    kana: "バス",
    kanji: "",
    romaji: "basu",
    meaning: "Xe buýt"
  },
  {
    kana: "タクシー",
    kanji: "",
    romaji: "takushii",
    meaning: "Taxi"
  },
  {
    kana: "じてんしゃ",
    kanji: "自転車",
    romaji: "jitensha",
    meaning: "Xe đạp"
  },
  {
    kana: "あるいて",
    kanji: "歩いて",
    romaji: "aruite",
    meaning: "Đi bộ (chỉ phương tiện)"
  }
];
const lesson5Table = [
  {
    kana: "にち",
    kanji: "日",
    romaji: "nichi",
    meaning: "Ngày",
  },
  {
    kana: "がつ",
    kanji: "月",
    romaji: "gatsu",
    meaning: "Tháng",
  },
  {
    kana: "ねん",
    kanji: "年",
    romaji: "nen",
    meaning: "Năm",
  },
  {
    kana: "こんしゅう",
    kanji: "今週",
    romaji: "konshuu",
    meaning: "Tuần này"
  },
  {
    kana: "らいしゅう",
    kanji: "来週",
    romaji: "raishuu",
    meaning: "Tuần sau"
  },
  {
    kana: "せんげつ",
    kanji: "先月",
    romaji: "sengetsu",
    meaning: "Tháng trước"
  },
  {
    kana: "こんげつ",
    kanji: "今月",
    romaji: "kongetsu",
    meaning: "Tháng này"
  },
  {
    kana: "らいげつ",
    kanji: "来月",
    romaji: "raigetsu",
    meaning: "Tháng sau"
  },
  {
    kana: "きょねん",
    kanji: "去年",
    romaji: "kyonen",
    meaning: "Năm ngoái"
  },
  {
    kana: "ことし",
    kanji: "今年",
    romaji: "kotoshi",
    meaning: "Năm nay"
  },
  {
    kana: "らいねん",
    kanji: "来年",
    romaji: "rainen",
    meaning: "Năm sau"
  },
  {
    kana: "つぎ",
    kanji: "次",
    romaji: "tsugi",
    meaning: "Tiếp theo"
  },
  {
    kana: "たんじょうび",
    kanji: "誕生日",
    romaji: "tanjoubi",
    meaning: "Sinh nhật"
  },
  {
    kana: "ひとり",
    kanji: "一人",
    romaji: "hitori",
    meaning: "Một người, một mình"
  },
  {
    kana: "ともだち",
    kanji: "友達",
    romaji: "tomodachi",
    meaning: "Bạn, bạn bè"
  },
  {
    kana: "こいびと",
    kanji: "恋人",
    romaji: "koibito",
    meaning: "Người yêu"
  },
  {
    kana: "かれ",
    kanji: "彼",
    romaji: "kare",
    meaning: "Anh ấy"
  },
  {
    kana: "かのじょ",
    kanji: "彼女",
    romaji: "kanojo",
    meaning: "Cô ấy"
  },
  {
    kana: "かぞく",
    kanji: "家族",
    romaji: "kazoku",
    meaning: "Gia đình"
  }
];

// Mảng kết hợp cho flashcard
const allFlashcardData = [...lesson5Vocab, ...lesson5Table];
const lesson5PracticeAllWords = [...lesson5Vocab, ...lesson5Table];

function renderLesson5Vocab() {
  const grid = document.getElementById("lesson5VocabGrid");
  if (!grid) return;

  grid.innerHTML = "";

  lesson5Vocab.forEach(item => {
    const card = document.createElement("div");
    card.className = "vocab-card";

    const kanjiHtml = item.kanji
      ? `<div class="vocab-kanji">${item.kanji}</div>`
      : "";

    card.innerHTML = `
      <img 
        class="vocab-img" 
        src="../../../../assets/images/lesson5/${item.romaji}.jpg" 
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

function renderLesson5Table() {
  const tableBody = document.getElementById("lesson5TableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  lesson5Table.forEach(item => {
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
  const audio = new Audio(`../../../../assets/n5_vocab_audio/lesson5/${romaji}.mp3`);

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

  const audio = new Audio(`../../../../assets/n5_vocab_audio/lesson5/${romaji}.mp3`);

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
const lesson5PracticeWords = {
  1: allFlashcardData.slice(0, 10),
  2: allFlashcardData.slice(10, 20),
  3: allFlashcardData.slice(20, 30),
};
let currentPracticeNumber = null;
let currentPracticeQuestions = [];
let currentPracticeQuestionIndex = 0;
let currentPracticeScore = 0;
let currentPracticePanel = null;
let lesson5AnswerLocked = false;

const lesson5PracticeAudio = new Audio();
function shuffleLesson5Array(array) {
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
function createLesson5PracticeAnswers(
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
    shuffleLesson5Array(wrongAnswers).slice(0, 3);

  return shuffleLesson5Array([
    correctAnswer,
    ...selectedWrongAnswers
  ]);
}
function createLesson5PracticeQuestions(practiceNumber) {
  const words = lesson5PracticeWords[practiceNumber];

  if (!words || words.length === 0) {
    return [];
  }

  const questions = [];

  const shuffledWords = shuffleLesson5Array([
    ...words
  ]);

  const kanaWords = shuffledWords.slice(
    0,
    Math.min(8, shuffledWords.length)
  );

  const meaningWords = shuffleLesson5Array([
    ...words
  ]).slice(
    0,
    Math.min(8, words.length)
  );

  const audioWords = shuffleLesson5Array([
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
      answers: createLesson5PracticeAnswers(
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
      answers: createLesson5PracticeAnswers(
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
      answers: createLesson5PracticeAnswers(
        word,
        "meaning"
      ),
      word: word
    });
  });

  return shuffleLesson5Array(questions);
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

  lesson5PracticeAudio.pause();
  lesson5PracticeAudio.currentTime = 0;

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

  startLesson5Practice();
}

function startLesson5Practice() {
  currentPracticeQuestions =
    createLesson5PracticeQuestions(
      currentPracticeNumber
    );

  currentPracticeQuestionIndex = 0;
  currentPracticeScore = 0;
  lesson5AnswerLocked = false;

  showLesson5PracticeQuestion();
}
function showLesson5PracticeQuestion() {
  const question =
    currentPracticeQuestions[
      currentPracticeQuestionIndex
    ];

  if (!question) {
    showLesson5PracticeResult();
    return;
  }

  lesson5AnswerLocked = false;

  lesson5PracticeAudio.pause();
  lesson5PracticeAudio.currentTime = 0;

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
          onclick="playLesson5PracticeQuestionAudio(this)"
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
          onclick="checkLesson5PracticeAnswer(this)"
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
        Từ vựng bài 5
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
      playLesson5PracticeQuestionAudio();
    }, 500);
  }
}
function checkLesson5PracticeAnswer(button) {
  if (lesson5AnswerLocked) {
    return;
  }

  lesson5AnswerLocked = true;

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
    showLesson5PracticeResult();
  }, 1000);

} else {

  nextArea.innerHTML = `
    <button
      class="practice-next-btn"
      onclick="nextLesson5PracticeQuestion()"
    >
      Next
    </button>
  `;
}
}
function nextLesson5PracticeQuestion() {
  lesson5PracticeAudio.pause();
  lesson5PracticeAudio.currentTime = 0;

  currentPracticeQuestionIndex++;

  if (
    currentPracticeQuestionIndex >=
    currentPracticeQuestions.length
  ) {
    showLesson5PracticeResult();
    return;
  }

  showLesson5PracticeQuestion();
}
function showLesson5PracticeResult() {
  lesson5PracticeAudio.pause();
  lesson5PracticeAudio.currentTime = 0;

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
            onclick="startLesson5Practice()"
          >
            Làm lại
          </button>

          <button
            class="practice-close-btn"
            onclick="closeLesson5Practice()"
          >
            Đóng
          </button>

        </div>

      </div>

    </div>
  `;
}
function closeLesson5Practice() {
  lesson5PracticeAudio.pause();
  lesson5PracticeAudio.currentTime = 0;

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
function playLesson5PracticeQuestionAudio(
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

  lesson5PracticeAudio.pause();
  lesson5PracticeAudio.currentTime = 0;

  lesson5PracticeAudio.src =
    `../../../../assets/n5_vocab_audio/lesson5/${romaji}.mp3`;


  if (button) {
    button.classList.add("playing");
  }


  lesson5PracticeAudio
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


  lesson5PracticeAudio.onended = () => {
    if (button) {
      button.classList.remove("playing");
    }
  };

  lesson5PracticeAudio.onerror = () => {
    if (button) {
      button.classList.remove("playing");
    }

    console.log(
      `Không tìm thấy file: ${romaji}.mp3`
    );
  };
}

document.addEventListener("DOMContentLoaded", () => {
  renderLesson5Vocab();
  renderLesson5Table();
  initFlashcards();
});