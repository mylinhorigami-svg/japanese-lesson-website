const LESSON_NUMBER = 9;
const LESSON_FOLDER = `lesson${LESSON_NUMBER}`;
const ASSET_BASE_PATH = "../../../../assets";

const lessonVocab = [
  {
    kana: "じ",
    kanji: "字",
    romaji: "ji",
    meaning: "Chữ, chữ cái"
  },
  {
    kana: "ローマじ",
    kanji: "ローマ字",
    romaji: "roomaji",
    meaning: "Chữ La tinh"
  },
  {
    kana: "かんじ",
    kanji: "漢字",
    romaji: "kanji",
    meaning: "Chữ Kanji"
  },
  {
    kana: "りょうり",
    kanji: "料理",
    romaji: "ryouri",
    meaning: "Món ăn, việc nấu ăn"
  },
  {
    kana: "のみもの",
    kanji: "飲み物",
    romaji: "nomimono",
    meaning: "Đồ uống"
  },
  {
    kana: "ぶたにく",
    kanji: "豚肉",
    romaji: "butaniku",
    meaning: "Thịt lợn"
  },
  {
    kana: "とりにく",
    kanji: "鶏肉",
    romaji: "toriniku",
    meaning: "Thịt gà"
  },
  {
    kana: "ぎゅうにく",
    kanji: "牛肉",
    romaji: "gyuuniku",
    meaning: "Thịt bò"
  },
  {
    kana: "みかん",
    kanji: "",
    romaji: "mikan",
    meaning: "Quýt"
  },
  {
    kana: "バナナ",
    kanji: "",
    romaji: "banana",
    meaning: "Chuối"
  },
  {
  kana: "ダンス",
  kanji: "",
  romaji: "dansu",
  meaning: "Nhảy, khiêu vũ"
},
{
  kana: "ギター",
  kanji: "",
  romaji: "gitaa",
  meaning: "Đàn ghita"
},
{
  kana: "スポーツ",
  kanji: "",
  romaji: "supootsu",
  meaning: "Thể thao"
},
{
  kana: "やきゅう",
  kanji: "野球",
  romaji: "yakyuu",
  meaning: "Bóng chày"
},
{
  kana: "え",
  kanji: "絵",
  romaji: "e",
  meaning: "Tranh, bức tranh"
},
{
  kana: "こまかいおかね",
  kanji: "細かいお金",
  romaji: "komakai okane",
  meaning: "Tiền lẻ"
},
{
  kana: "チケット",
  kanji: "",
  romaji: "chiketto",
  meaning: "Vé, tấm vé"
},
{
  kana: "くすり",
  kanji: "薬",
  romaji: "kusuri",
  meaning: "Thuốc"
},
{
  kana: "あたま",
  kanji: "頭",
  romaji: "atama",
  meaning: "Đầu"
},
{
  kana: "おなか",
  kanji: "お腹",
  romaji: "onaka",
  meaning: "Bụng"
}
];

const lessonTable = [
  {
  kana: "わかります",
  kanji: "分かります",
  romaji: "wakarimasu",
  meaning: "Hiểu, biết"
},
{
  kana: "あります",
  kanji: "",
  romaji: "arimasu",
  meaning: "Có (nói về sự sở hữu)"
},
{
  kana: "すき（な）",
  kanji: "好き（な）",
  romaji: "suki",
  meaning: "Thích"
},
{
  kana: "きらい（な）",
  kanji: "嫌い（な）",
  romaji: "kirai",
  meaning: "Ghét"
},
{
  kana: "じょうず（な）",
  kanji: "上手（な）",
  romaji: "jouzu",
  meaning: "Khéo, giỏi"
},
{
  kana: "へた（な）",
  kanji: "下手（な）",
  romaji: "heta",
  meaning: "Kém, vụng"
},
{
  kana: "いたい",
  kanji: "痛い",
  romaji: "itai",
  meaning: "Đau, nhức"
},
{
  kana: "おんがく",
  kanji: "音楽",
  romaji: "ongaku",
  meaning: "Âm nhạc"
},
{
  kana: "うた",
  kanji: "歌",
  romaji: "uta",
  meaning: "Bài hát"
},
{
  kana: "クラシック",
  kanji: "",
  romaji: "kurashikku",
  meaning: "Nhạc cổ điển"
},
{
  kana: "ジャズ",
  kanji: "",
  romaji: "jazu",
  meaning: "Nhạc Jazz"
},
{
  kana: "コンサート",
  kanji: "",
  romaji: "konsaato",
  meaning: "Hòa nhạc"
},
{
  kana: "カラオケ",
  kanji: "",
  romaji: "karaoke",
  meaning: "Karaoke"
},
{
  kana: "かぶき",
  kanji: "歌舞伎",
  romaji: "kabuki",
  meaning: "Kịch Kabuki"
},
{
  kana: "じかん",
  kanji: "時間",
  romaji: "jikan",
  meaning: "Thời gian"
},
{
  kana: "たくさん",
  kanji: "",
  romaji: "takusan",
  meaning: "Nhiều"
},
{
  kana: "すこし",
  kanji: "少し",
  romaji: "sukoshi",
  meaning: "Ít, một ít, một chút"
},
{
  kana: "よく",
  kanji: "",
  romaji: "yoku",
  meaning: "Hay, thường, giỏi"
},
{
  kana: "だいたい",
  kanji: "大体",
  romaji: "daitai",
  meaning: "Khoảng, độ, đại khái"
},
{
  kana: "ぜんぜん",
  kanji: "全然",
  romaji: "zenzen",
  meaning: "Hoàn toàn không (đi với phủ định)"
},

{
  kana: "はやく",
  kanji: "早く / 速く",
  romaji: "hayaku",
  meaning: "Sớm / Nhanh"
},
{
  kana: "もちろん",
  kanji: "",
  romaji: "mochiron",
  meaning: "Tất nhiên"
},
{
  kana: "びょうき",
  kanji: "病気",
  romaji: "byouki",
  meaning: "Bệnh, ốm"
}
];

// Mảng kết hợp cho flashcard
const allFlashcardData = [...lessonVocab, ...lessonTable];
function getLessonElement(commonId, numberedId) {
  return (
    document.getElementById(commonId) ||
    document.getElementById(numberedId)
  );
}

function renderVocab() {
  const grid = getLessonElement(
    "lessonVocabGrid",
    `lesson${LESSON_NUMBER}VocabGrid`
  );

  if (!grid) {
    console.log(
      "Không tìm thấy khu vực hiển thị thẻ từ vựng."
    );
    return;
  }

  grid.innerHTML = "";

  lessonVocab.forEach(item => {
    const card = document.createElement("div");

    card.className = "vocab-card";

    const kanjiHTML = item.kanji
      ? `
        <div class="vocab-kanji">
          ${item.kanji}
        </div>
      `
      : "";

    card.innerHTML = `
      <img
        class="vocab-img"
        src="${ASSET_BASE_PATH}/images/${LESSON_FOLDER}/${item.romaji}.jpg"
        alt="${item.kana}"
        loading="lazy"
      >

      ${kanjiHTML}

      <div class="vocab-kana-row">

        <div class="vocab-kana">
          ${item.kana}
        </div>

        <button
          type="button"
          class="vocab-sound-btn"
          data-romaji="${item.romaji}"
          aria-label="Phát âm ${item.kana}"
        >
          🔊
        </button>

      </div>

      <div class="vocab-romaji">
        ${item.romaji}
      </div>

      <div class="vocab-meaning">
        ${item.meaning}
      </div>
    `;

    const soundButton = card.querySelector(
      ".vocab-sound-btn"
    );

    if (soundButton) {
      soundButton.addEventListener("click", event => {
        event.stopPropagation();

        playVocabSound(
          item.romaji,
          soundButton
        );
      });
    }

    grid.appendChild(card);
  });
}

function renderTable() {
  const tableBody = getLessonElement(
    "lessonTableBody",
    `lesson${LESSON_NUMBER}TableBody`
  );

  if (!tableBody) {
    console.log(
      "Không tìm thấy phần tbody của bảng từ vựng."
    );
    return;
  }

  tableBody.innerHTML = "";

  lessonTable.forEach(item => {
    const row = document.createElement("tr");

    const kanjiCell = item.kanji
      ? item.kanji
      : "&nbsp;";

    row.innerHTML = `
      <td class="table-kana">
        ${item.kana}
      </td>

      <td class="table-kanji">
        ${kanjiCell}
      </td>

      <td class="table-romaji">
        ${item.romaji}
      </td>

      <td class="table-meaning">
        ${item.meaning}
      </td>

      <td>
        <button
          type="button"
          class="table-sound-btn"
          data-romaji="${item.romaji}"
          aria-label="Phát âm ${item.kana}"
        >
          🔊
        </button>
      </td>
    `;

    const soundButton = row.querySelector(
      ".table-sound-btn"
    );

    if (soundButton) {
      soundButton.addEventListener("click", () => {
        playVocabSound(
          item.romaji,
          soundButton
        );
      });
    }

    tableBody.appendChild(row);
  });
}
const vocabAudio = new Audio();

// Ghi nhớ nút đang phát
let currentVocabSoundButton = null;


function resetVocabSoundButton() {
  if (!currentVocabSoundButton) {
    return;
  }

  currentVocabSoundButton.classList.remove(
    "playing"
  );

  currentVocabSoundButton = null;
}

function playVocabSound(romaji, button = null) {
  if (!romaji) {
    console.log(
      "Từ vựng chưa có dữ liệu romaji."
    );
    return;
  }

  // Dừng file đang phát
  vocabAudio.pause();
  vocabAudio.currentTime = 0;

  // Bỏ hiệu ứng nút cũ
  resetVocabSoundButton();

  // Gắn file âm thanh mới
  vocabAudio.src =
    `${ASSET_BASE_PATH}/audio/${LESSON_FOLDER}/${romaji}.mp3`;

  if (button) {
    currentVocabSoundButton = button;

    button.classList.add("playing");
  }

  vocabAudio
    .play()
    .catch(error => {
      resetVocabSoundButton();

      console.log(
        `Không phát được âm thanh: ${romaji}.mp3`,
        error
      );
    });
}


vocabAudio.addEventListener("ended", () => {
  resetVocabSoundButton();
});


vocabAudio.addEventListener("error", () => {
  const audioFile =
    vocabAudio.src.split("/").pop();

  resetVocabSoundButton();

  console.log(
    `Không tìm thấy file âm thanh: ${audioFile}`
  );
});


/* =====================================================
   ÂM THANH FLASHCARD
===================================================== */

const flashcardAudio = new Audio();


function playFlashcardSound(romaji) {
  if (!romaji) {
    return;
  }

  flashcardAudio.pause();
  flashcardAudio.currentTime = 0;

  flashcardAudio.src =
    `${ASSET_BASE_PATH}/audio/${LESSON_FOLDER}/${romaji}.mp3`;

  flashcardAudio
    .play()
    .catch(error => {
      console.log(
        `Không phát được âm thanh flashcard: ${romaji}.mp3`,
        error
      );
    });
}

let flashcardIndex = 0;
let flashcardFlipped = false;
let flashcardVisible = false;

/* Hiển thị flashcard */

function renderFlashcard() {

    const content =
        document.getElementById("flashcardContent");

    const hint =
        document.getElementById("flashcardHint");

    const container =
        document.getElementById("flashcardContainer");

    const counter =
        document.getElementById("flashcardCounter");

    if (
        !content ||
        !hint ||
        !container
    ) {
        return;
    }
    if (allFlashcardData.length === 0) {
        return;
    }
    const item =
        allFlashcardData[flashcardIndex];
    flashcardFlipped = false;
    flashcardVisible = true;
    container.hidden = false;
    if (counter) {
        counter.textContent =
            `${flashcardIndex + 1} / ${allFlashcardData.length}`;
    }

    content.innerHTML = `

        <div class="flashcard-face">
            <div class="flashcard-main">

                ${item.kana}
            </div>
        </div>
    `;
    hint.textContent = "Nhấn để lật thẻ";

    playFlashcardSound(item.romaji);

}


/* Lật flashcard*/

function toggleFlashcard() {

    const content =
        document.getElementById("flashcardContent");

    const hint =
        document.getElementById("flashcardHint");

    if (
        !content ||
        !hint
    ) {
        return;
    }
    const item =
        allFlashcardData[flashcardIndex];

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
        hint.textContent =
            "Nhấn để quay lại";
        flashcardFlipped = true;
    }

    else {
        content.innerHTML = `
            <div class="flashcard-face">
                <div class="flashcard-main">
                    ${item.kana}
                </div>
            </div>
        `;
        hint.textContent =
            "Nhấn để lật thẻ";
        flashcardFlipped = false;
    }
}

/* Chuyển flashcard */

function changeFlashcard(step) {

    if (
        allFlashcardData.length === 0
    ) {
        return;
    }
    flashcardIndex =
        (
            flashcardIndex +
            step +
            allFlashcardData.length
        )
        %
        allFlashcardData.length;
    renderFlashcard();
}

/* Khởi tạo flashcard */

function initFlashcards() {
    const toggleButton =
        document.getElementById(
            "flashcardToggleBtn"
        );

    const container =
        document.getElementById(
            "flashcardContainer"
        );

    const card =
        document.getElementById(
            "flashcardCard"
        );

    const prevButton =
        document.getElementById(
            "flashcardPrev"
        );

    const nextButton =
        document.getElementById(
            "flashcardNext"
        );
    if (
        !toggleButton ||
        !container ||
        !card ||
        !prevButton ||
        !nextButton
    ) {
        return;
    }
    container.hidden = true;
    toggleButton.addEventListener(
        "click",
        () => {
            if (flashcardVisible) {
                flashcardVisible = false;
                container.hidden = true;
            }
            else {
                renderFlashcard();
            }
        }
    );

    card.addEventListener(
        "click",
        toggleFlashcard
    );

    card.addEventListener(
        "keydown",
        (event) => {
            switch (event.key) {
                case "Enter":

                case " ":
                    event.preventDefault();
                    toggleFlashcard();
                    break;

                case "ArrowLeft":
                    event.preventDefault();
                    changeFlashcard(-1);
                    break;

                case "ArrowRight":
                    event.preventDefault();
                    changeFlashcard(1);
                    break;
            }
        }
    );

    prevButton.addEventListener(
        "click",
        (event) => {
            event.stopPropagation();
            changeFlashcard(-1);
        }
    );

    nextButton.addEventListener(
        "click",
        (event) => {
            event.stopPropagation();
            changeFlashcard(1);
        }
    );
}

/*Practice*/
const WORDS_PER_PRACTICE = 10;
const practiceWords = {};

for (
  let startIndex = 0, practiceNumber = 1;
  startIndex < allFlashcardData.length;
  startIndex += WORDS_PER_PRACTICE, practiceNumber++
) {
  practiceWords[practiceNumber] =
    allFlashcardData.slice(
      startIndex,
      startIndex + WORDS_PER_PRACTICE
    );
}
let currentPracticeNumber = null;
let currentPracticeQuestions = [];
let currentPracticeQuestionIndex = 0;
let currentPracticeScore = 0;
let currentPracticePanel = null;
let practiceAnswerLocked = false;

const practiceAudio = new Audio();
function shuffleArray(array) {
  const newArray = [...array];

  for (
    let index = newArray.length - 1;
    index > 0;
    index--
  ) {
    const randomIndex = Math.floor(
      Math.random() * (index + 1)
    );

    [
      newArray[index],
      newArray[randomIndex]
    ] = [
      newArray[randomIndex],
      newArray[index]
    ];
  }

  return newArray;
}
function createPracticeAnswers(
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
    shuffleArray(wrongAnswers).slice(0, 3);

  return shuffleArray([
    correctAnswer,
    ...selectedWrongAnswers
  ]);
}

function createPracticeQuestions(practiceNumber) {
  const words = practiceWords[practiceNumber];

  if (!words || words.length === 0) {
    return [];
  }

  const questions = [];

  const kanaWords = shuffleArray(words).slice(
    0,
    Math.min(8, words.length)
  );

  const meaningWords = shuffleArray(words).slice(
    0,
    Math.min(8, words.length)
  );

  const audioWords = shuffleArray(words).slice(
    0,
    Math.min(4, words.length)
  );


  /* Kana → Nghĩa */
  kanaWords.forEach(word => {
    questions.push({
      type: "kanaToMeaning",
      question: word.kana,
      correct: word.meaning,
      answers: createPracticeAnswers(
        word,
        "meaning"
      ),
      word
    });
  });

  /* Nghĩa → Kana */
  meaningWords.forEach(word => {
    questions.push({
      type: "meaningToKana",
      question: word.meaning,
      correct: word.kana,

      answers: createPracticeAnswers(
        word,
        "kana"
      ),
      word
    });
  });


  /* Âm thanh → Nghĩa */
  audioWords.forEach(word => {
    questions.push({
      type: "audioToMeaning",
      question: "",
      correct: word.meaning,

      answers: createPracticeAnswers(
        word,
        "meaning"
      ),

      word
    });
  });

  return shuffleArray(questions);
}

function togglePractice(
  practiceNumber,
  button = null
) {

  if (!button) {
    const buttons =
      document.querySelectorAll(
        ".practice-title-btn"
      );

    button =
      buttons[Number(practiceNumber) - 1] ||
      buttons[0];
  }

  if (!button) {
    return;
  }

  const practiceItem =
    button.closest(".practice-item");

  if (!practiceItem) {
    return;
  }

  const panel =
    practiceItem.querySelector(
      ".practice-panel"
    );

  if (!panel) {
    return;
  }

  const isOpen =
    panel.classList.contains("open");

  practiceAudio.pause();
  practiceAudio.currentTime = 0;

  document
    .querySelectorAll(".practice-panel")
    .forEach(item => {
      item.classList.remove("open");
      item.innerHTML = "";
    });

  document
    .querySelectorAll(".practice-title-btn")
    .forEach((practiceButton, index) => {
      practiceButton.classList.remove("active");

      practiceButton.textContent =
        `📝 Luyện tập ${index + 1}`;
    });

  if (isOpen) {
    currentPracticePanel = null;
    currentPracticeNumber = null;

    return;
  }

  currentPracticeNumber =
    Number(practiceNumber);

  currentPracticePanel = panel;

  button.classList.add("active");

  button.textContent =
    `▼ Luyện tập ${currentPracticeNumber}`;

  panel.classList.add("open");

  startPractice();
}

function startPractice() {
  currentPracticeQuestions =
    createPracticeQuestions(
      currentPracticeNumber
    );

  currentPracticeQuestionIndex = 0;
  currentPracticeScore = 0;
  practiceAnswerLocked = false;

  showPracticeQuestion();
}

function showPracticeQuestion() {
  const question =
    currentPracticeQuestions[
      currentPracticeQuestionIndex
    ];

  if (!question) {
    showPracticeResult();
    return;
  }

  practiceAnswerLocked = false;

  practiceAudio.pause();
  practiceAudio.currentTime = 0;

  const totalQuestions =
    currentPracticeQuestions.length;

  const questionNumber =
    currentPracticeQuestionIndex + 1;

  const progressPercent =
    (questionNumber / totalQuestions) * 100;

  let instruction = "Chọn đáp án đúng";

  let questionHTML = `
    <div class="practice-question-text">
      ${question.question}
    </div>
  `;

  /* Nếu là câu hỏi âm thanh */
  if (question.type === "audioToMeaning") {
    questionHTML = `
      <div class="practice-audio-area">

        <button
          type="button"
          class="practice-audio-btn"
          onclick="playPracticeQuestionAudio(this)"
          aria-label="Phát âm câu hỏi"
        >
          <span class="practice-speaker">
            🔊
          </span>
        </button>

      </div>
    `;
  }


  /*  Danh sách đáp án*/

  const answersHTML = question.answers
    .map((answer, index) => {
      return `
        <button
          type="button"
          class="practice-answer-btn"
          data-answer="${encodeURIComponent(answer)}"
          onclick="checkPracticeAnswer(this)"
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
        Từ vựng bài ${LESSON_NUMBER}
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
      playPracticeQuestionAudio();
    }, 500);
  }
}

function checkPracticeAnswer(button) {
  if (practiceAnswerLocked) {
    return;
  }

  practiceAnswerLocked = true;

  const question =
    currentPracticeQuestions[
      currentPracticeQuestionIndex
    ];

  if (!question || !currentPracticePanel) {
    return;
  }

  const selectedAnswer = decodeURIComponent(
    button.dataset.answer
  );

  const answerButtons =
    currentPracticePanel.querySelectorAll(
      ".practice-answer-btn"
    );

  /* =========================
     Khóa các nút đáp án
  ========================= */

  answerButtons.forEach(answerButton => {
    answerButton.disabled = true;

    const answer = decodeURIComponent(
      answerButton.dataset.answer
    );

    // Luôn hiển thị đáp án đúng
    if (answer === question.correct) {
      answerButton.classList.add("correct");
    }
  });


  /* =========================
     Hiển thị kết quả trả lời
  ========================= */

  const feedback =
    currentPracticePanel.querySelector(
      "#practiceFeedback"
    );

  if (!feedback) {
    return;
  }

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

  /* =========================
     Kiểm tra câu cuối cùng
  ========================= */

  const nextArea =
    currentPracticePanel.querySelector(
      "#practiceNextArea"
    );

  const isLastQuestion =
    currentPracticeQuestionIndex ===
    currentPracticeQuestions.length - 1;

  if (isLastQuestion) {
    // Tự động hiển thị kết quả sau 1 giây
    setTimeout(() => {
      showPracticeResult();
    }, 1000);

    return;
  }

  if (!nextArea) {
    return;
  }

  nextArea.innerHTML = `
    <button
      type="button"
      class="practice-next-btn"
      onclick="nextPracticeQuestion()"
    >
      Next
    </button>
  `;
}


/* =====================================================
   CHUYỂN SANG CÂU TIẾP THEO
===================================================== */

function nextPracticeQuestion() {
  practiceAudio.pause();
  practiceAudio.currentTime = 0;

  currentPracticeQuestionIndex++;
  if (
    currentPracticeQuestionIndex >=
    currentPracticeQuestions.length
  ) {
    showPracticeResult();
    return;
  }
  showPracticeQuestion();
}

function showPracticeResult() {
  practiceAudio.pause();
  practiceAudio.currentTime = 0;

  const totalQuestions =
    currentPracticeQuestions.length;

  const percent =
    totalQuestions > 0
      ? Math.round(
          (currentPracticeScore / totalQuestions) * 100
        )
      : 0;

  let resultEmoji = "";
  let resultMessage = "";

  if (percent === 100) {
    resultEmoji = "🏆";
    resultMessage = "Xuất sắc!";
  } else if (percent >= 80) {
    resultEmoji = "🎉";
    resultMessage = "Tuyệt vời!";
  } else if (percent >= 60) {
    resultEmoji = "👍";
    resultMessage = "Rất tốt!";
  } else {
    resultEmoji = "💪";
    resultMessage = "Cố lên!";
  }

  if (!currentPracticePanel) {
    return;
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
            type="button"
            class="practice-restart-btn"
            onclick="startPractice()"
          >
            Làm lại
          </button>

          <button
            type="button"
            class="practice-close-btn"
            onclick="closePractice()"
          >
            Đóng
          </button>

        </div>

      </div>

    </div>
  `;
}

/* ĐÓNG PHẦN LUYỆN TẬP */

function closePractice() {
  practiceAudio.pause();
  practiceAudio.currentTime = 0;

  if (!currentPracticePanel) {
    return;
  }

  const practiceItem =
    currentPracticePanel.closest(
      ".practice-item"
    );

  const button =
    practiceItem
      ? practiceItem.querySelector(
          ".practice-title-btn"
        )
      : null;

  currentPracticePanel.classList.remove(
    "open"
  );

  currentPracticePanel.innerHTML = "";

  if (button) {
    button.classList.remove("active");

    button.textContent =
      `📝 Luyện tập ${currentPracticeNumber}`;
  }

  currentPracticePanel = null;
  currentPracticeNumber = null;
  currentPracticeQuestions = [];
  currentPracticeQuestionIndex = 0;
  currentPracticeScore = 0;
  practiceAnswerLocked = false;
}

/* PHÁT ÂM THANH CÂU HỎI */

function playPracticeQuestionAudio(
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

  practiceAudio.pause();
  practiceAudio.currentTime = 0;

  practiceAudio.src =
    `${ASSET_BASE_PATH}/audio/${LESSON_FOLDER}/${romaji}.mp3`;

  if (button) {
    button.classList.add("playing");
  }

  practiceAudio
    .play()
    .catch(error => {
      console.log(
        `Không phát được âm thanh: ${romaji}.mp3`,
        error
      );

      if (button) {
        button.classList.remove("playing");
      }
    });

  practiceAudio.onended = () => {
    if (button) {
      button.classList.remove("playing");
    }
  };

  practiceAudio.onerror = () => {
    if (button) {
      button.classList.remove("playing");
    }

    console.log(
      `Không tìm thấy file: ${romaji}.mp3`
    );
  };
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    renderVocab();
    renderTable();
    initFlashcards();
  }
);