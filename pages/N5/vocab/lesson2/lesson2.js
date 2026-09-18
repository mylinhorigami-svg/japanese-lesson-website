const lesson2Vocab = [
  {
    kana: "ほん",
    kanji: "本",
    romaji: "hon",
    meaning: "Sách"
  },
  {
    kana: "じしょ",
    kanji: "辞書",
    romaji: "jisho",
    meaning: "Từ điển"
  },
  {
    kana: "ざっし",
    kanji: "雑誌",
    romaji: "zasshi",
    meaning: "Tạp chí"
  },
  {
    kana: "しんぶん",
    kanji: "新聞",
    romaji: "shinbun",
    meaning: "Báo"
  },
  {
    kana: "ノート",
    kanji: "",
    romaji: "nooto",
    meaning: "Vở"
  },
  {
    kana: "てちょう",
    kanji: "手帳",
    romaji: "techou",
    meaning: "Sổ tay"
  },
  {
    kana: "めいし",
    kanji: "名刺",
    romaji: "meishi",
    meaning: "Danh thiếp"
  },
  {
    kana: "カード",
    kanji: "",
    romaji: "kaado",
    meaning: "Thẻ, card"
  },
  {
    kana: "かみ",
    kanji: "紙",
    romaji: "kami",
    meaning: "Giấy"
  },
  {
    kana: "てがみ",
    kanji: "手紙",
    romaji: "tegami",
    meaning: "Thư"
  },
  {
    kana: "えんぴつ",
    kanji: "鉛筆",
    romaji: "enpitsu",
    meaning: "Bút chì"
  },
  {
    kana: "ボールペン",
    kanji: "",
    romaji: "boorupen",
    meaning: "Bút bi"
  },
  {
    kana: "シャープペンシル",
    kanji: "",
    romaji: "shaapupenshiru",
    meaning: "Bút chì kim"
  },
  {
    kana: "タバコ",
    kanji: "",
    romaji: "tabako",
    meaning: "Thuốc lá"
  },
  {
    kana: "ライター",
    kanji: "",
    romaji: "raitaa",
    meaning: "Bật lửa"
  },
  {
    kana: "はいざら",
    kanji: "灰皿",
    romaji: "haizara",
    meaning: "Gạt tàn thuốc lá"
  },
  {
    kana: "かぎ",
    kanji: "鍵",
    romaji: "kagi",
    meaning: "Chìa khóa"
  },
  {
    kana: "とけい",
    kanji: "時計",
    romaji: "tokei",
    meaning: "Đồng hồ"
  },
  {
    kana: "かばん",
    kanji: "",
    romaji: "kaban",
    meaning: "Cặp, túi xách"
  },
  {
    kana: "はこ",
    kanji: "箱",
    romaji: "hako",
    meaning: "Hộp"
  },
  {
    kana: "かさ",
    kanji: "傘",
    romaji: "kasa",
    meaning: "Cái ô"
  },
  {
    kana: "テレビ",
    kanji: "",
    romaji: "terebi",
    meaning: "Tivi"
  },
  {
    kana: "ラジオ",
    kanji: "",
    romaji: "rajio",
    meaning: "Đài radio"
  },
  {
    kana: "カメラ",
    kanji: "",
    romaji: "kamera",
    meaning: "Máy ảnh"
  },
  {
    kana: "じどうしゃ",
    kanji: "自動車",
    romaji: "jidousha",
    meaning: "Ô tô"
  },
  {
    kana: "でんわ",
    kanji: "電話",
    romaji: "denwa",
    meaning: "Điện thoại"
  },
  {
    kana: "いす",
    kanji: "椅子",
    romaji: "isu",
    meaning: "Ghế"
  },
  {
    kana: "つくえ",
    kanji: "机",
    romaji: "tsukue",
    meaning: "Bàn"
  },
  {
    kana: "まど",
    kanji: "窓",
    romaji: "mado",
    meaning: "Cửa sổ"
  },
  {
    kana: "ドア",
    kanji: "",
    romaji: "doa",
    meaning: "Cửa ra vào"
  },
  {
    kana: "チョコレート",
    kanji: "",
    romaji: "chokoreeto",
    meaning: "Sô cô la"
  },
  {
    kana: "コーヒー",
    kanji: "",
    romaji: "koohii",
    meaning: "Cà phê"
  }
];
const lesson2Table = [
  {
    kana: "これ",
    kanji: "",
    romaji: "kore",
    meaning: "Cái này"
  },
  {
    kana: "それ",
    kanji: "",
    romaji: "sore",
    meaning: "Cái đó"
  },
  {
    kana: "あれ",
    kanji: "",
    romaji: "are",
    meaning: "Cái kia"
  },
  {
    kana: "この～",
    kanji: "",
    romaji: "kono",
    meaning: "Cái ~ này"
  },
  {
    kana: "その～",
    kanji: "",
    romaji: "sono",
    meaning: "Cái ~ đó"
  },
  {
    kana: "あの～",
    kanji: "",
    romaji: "ano",
    meaning: "Cái ~ kia"
  },
  {
    kana: "テレホンカード",
    kanji: "",
    romaji: "terehonkaado",
    meaning: "Thẻ điện thoại"
  },
  {
    kana: "えいご",
    kanji: "英語",
    romaji: "eigo",
    meaning: "Tiếng Anh"
  },
  {
    kana: "にほんご",
    kanji: "日本語",
    romaji: "nihongo",
    meaning: "Tiếng Nhật"
  },
  {
    kana: "ベトナムご",
    kanji: "ベトナム語",
    romaji: "betonamugo",
    meaning: "Tiếng Việt"
  }
];

// Mảng kết hợp cho flashcard
const allFlashcardData = [...lesson2Vocab, ...lesson2Table];
const lesson2PracticeAllWords = [...lesson2Vocab, ...lesson2Table];

function renderLesson2Vocab() {
  const grid = document.getElementById("lesson2VocabGrid");
  if (!grid) return;

  grid.innerHTML = "";

  lesson2Vocab.forEach(item => {
    const card = document.createElement("div");
    card.className = "vocab-card";

    const kanjiHtml = item.kanji
      ? `<div class="vocab-kanji">${item.kanji}</div>`
      : "";

    card.innerHTML = `
      <img 
        class="vocab-img" 
        src="../../../../assets/images/lesson2/${item.romaji}.jpg" 
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

function renderLesson2Table() {
  const tableBody = document.getElementById("lesson2TableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  lesson2Table.forEach(item => {
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
  const audio = new Audio(`../../../../assets/n5_vocab_audio/lesson2/${romaji}.mp3`);

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

  const audio = new Audio(`../../../../assets/n5_vocab_audio/lesson2/${romaji}.mp3`);

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
const lesson2PracticeWords = {
  1: allFlashcardData.slice(0, 10),
  2: allFlashcardData.slice(10, 20),
  3: allFlashcardData.slice(20, 30),
  4: allFlashcardData.slice(30, 42)
};
let currentPracticeNumber = null;
let currentPracticeQuestions = [];
let currentPracticeQuestionIndex = 0;
let currentPracticeScore = 0;
let currentPracticePanel = null;
let lesson2AnswerLocked = false;

const lesson2PracticeAudio = new Audio();
function shuffleLesson2Array(array) {
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
function createLesson2PracticeAnswers(
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
    shuffleLesson2Array(wrongAnswers).slice(0, 3);

  return shuffleLesson2Array([
    correctAnswer,
    ...selectedWrongAnswers
  ]);
}
function createLesson2PracticeQuestions(
  practiceNumber
) {
  const words = lesson2PracticeWords[practiceNumber];

  if (!words || words.length < 10) {
    return [];
  }

  const questions = [];
  words.slice(0, 8).forEach(word => {
    questions.push({
      type: "kanaToMeaning",
      question: word.kana,
      correct: word.meaning,
      answers: createLesson2PracticeAnswers(
        word,
        "meaning"
      ),
      word: word
    });
  });
    words.slice(2, 10).forEach(word => {
    questions.push({
      type: "meaningToKana",
      question: word.meaning,
      correct: word.kana,
      answers: createLesson2PracticeAnswers(
        word,
        "kana"
      ),
      word: word
    });
  });
 const audioWords =
    shuffleLesson2Array(words).slice(0, 4);

  audioWords.forEach(word => {
    questions.push({
      type: "audioToMeaning",
      question: "",
      correct: word.meaning,
      answers: createLesson2PracticeAnswers(
        word,
        "meaning"
      ),
      word: word
    });
  });
    return shuffleLesson2Array(questions);
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

  lesson2PracticeAudio.pause();
  lesson2PracticeAudio.currentTime = 0;

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

  startLesson2Practice();
}

function startLesson2Practice() {
  currentPracticeQuestions =
    createLesson2PracticeQuestions(
      currentPracticeNumber
    );

  if (currentPracticeQuestions.length === 0) {
    currentPracticePanel.innerHTML = `
      <div class="practice-box">

        <div class="practice-box-title">
          Luyện tập ${currentPracticeNumber}
        </div>

        <div class="practice-empty">

          <div class="practice-empty-icon">
            📝
          </div>

          <p>
            Phần luyện tập này chưa đủ 10 từ.
          </p>

          <button
            class="practice-restart-btn"
            onclick="showLesson2PracticeStart()"
          >
            Quay lại
          </button>

        </div>

      </div>
    `;

    return;
  }

  currentPracticeQuestionIndex = 0;
  currentPracticeScore = 0;
  lesson2AnswerLocked = false;

  showLesson2PracticeQuestion();
}
function showLesson2PracticeQuestion() {
  const question =
    currentPracticeQuestions[
      currentPracticeQuestionIndex
    ];

  if (!question) {
    showLesson2PracticeResult();
    return;
  }

  lesson2AnswerLocked = false;

  lesson2PracticeAudio.pause();
  lesson2PracticeAudio.currentTime = 0;

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
          onclick="playLesson2PracticeQuestionAudio(this)"
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
          onclick="checkLesson2PracticeAnswer(this)"
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
        Từ vựng bài 2
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
      playLesson2PracticeQuestionAudio();
    }, 500);
  }
}
function checkLesson2PracticeAnswer(button) {
  if (lesson2AnswerLocked) {
    return;
  }

  lesson2AnswerLocked = true;

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
    showLesson2PracticeResult();
  }, 1000);

} else {

  nextArea.innerHTML = `
    <button
      class="practice-next-btn"
      onclick="nextLesson2PracticeQuestion()"
    >
      Next
    </button>
  `;
}
}
function nextLesson2PracticeQuestion() {
  lesson2PracticeAudio.pause();
  lesson2PracticeAudio.currentTime = 0;

  currentPracticeQuestionIndex++;

  if (
    currentPracticeQuestionIndex >=
    currentPracticeQuestions.length
  ) {
    showLesson2PracticeResult();
    return;
  }

  showLesson2PracticeQuestion();
}
function showLesson2PracticeResult() {
  lesson2PracticeAudio.pause();
  lesson2PracticeAudio.currentTime = 0;

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
            onclick="startLesson2Practice()"
          >
            Làm lại
          </button>

          <button
            class="practice-close-btn"
            onclick="closeLesson2Practice()"
          >
            Đóng
          </button>

        </div>

      </div>

    </div>
  `;
}
function closeLesson2Practice() {
  lesson2PracticeAudio.pause();
  lesson2PracticeAudio.currentTime = 0;

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
function playLesson2PracticeQuestionAudio(
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

  lesson2PracticeAudio.pause();
  lesson2PracticeAudio.currentTime = 0;

  lesson2PracticeAudio.src =
    `../../../../assets/n5_vocab_audio/lesson2/${romaji}.mp3`;


  if (button) {
    button.classList.add("playing");
  }


  lesson2PracticeAudio
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


  lesson2PracticeAudio.onended = () => {
    if (button) {
      button.classList.remove("playing");
    }
  };

  lesson2PracticeAudio.onerror = () => {
    if (button) {
      button.classList.remove("playing");
    }

    console.log(
      `Không tìm thấy file: ${romaji}.mp3`
    );
  };
}

document.addEventListener("DOMContentLoaded", () => {
  renderLesson2Vocab();
  renderLesson2Table();
  initFlashcards();
});