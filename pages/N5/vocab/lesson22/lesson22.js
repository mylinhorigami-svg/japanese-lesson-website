const LESSON_NUMBER = 22;
const LESSON_FOLDER = `lesson${LESSON_NUMBER}`;
const ASSET_BASE_PATH = "../../../../assets";

const lessonVocab = [
   {
    kana: "きます",
    kanji: "着ます",
    romaji: "kimasu",
    meaning: "Mặc (áo)",
    example: "毎日シャツを着ます。",
    exampleKana: "まいにち シャツを きます。",
    exampleMeaning: "Mặc áo sơ mi mỗi ngày."
  },
  {
    kana: "はきます",
    kanji: "履きます",
    romaji: "hakimasu",
    meaning: "Mặc, đi (quần, váy, giày,...)",
    example: "くつを履きます。",
    exampleKana: "くつを はきます。",
    exampleMeaning: "Mang giầy."
  },
  {
    kana: "かぶります",
    kanji: "被ります",
    romaji: "kaburimasu",
    meaning: "Đội (mũ, nón,...)",
    example: "帽子を被ります。",
    exampleKana: "ぼうしを かぶります。",
    exampleMeaning: "Đội mũ."
  },
  {
    kana: "かけます",
    kanji: "掛けます",
    romaji: "kakemasu",
    meaning: "Đeo, treo (kính,...)",
    example: "眼鏡を掛けます。",
    exampleKana: "めがねを かけます。",
    exampleMeaning: "Đeo kính."
  },
  {
    kana: "うまれます",
    kanji: "生まれます",
    romaji: "umaremasu",
    meaning: "Được sinh ra",
    example: "妹は日本で生まれました。",
    exampleKana: "いもうとは にほんで うまれました。",
    exampleMeaning: "Em gái tôi được sinh ra ở Nhật Bản."
  },
  {
    kana: "さがします",
    kanji: "探します",
    romaji: "sagashimasu",
    meaning: "Tìm, tìm kiếm",
    example: "かばんを探しています。",
    exampleKana: "かばんを さがしています。",
    exampleMeaning: "Tôi đang tìm chiếc cặp."
  },
  {
    kana: "おろします",
    kanji: "下ろします",
    romaji: "oroshimasu",
    meaning: "Rút (tiền)",
    example: "銀行でお金を下ろします。",
    exampleKana: "ぎんこうで おかねを おろします。",
    exampleMeaning: "Rút tiền ở ngân hàng."
  },
  {
    kana: "コート",
    kanji: "",
    romaji: "kooto",
    meaning: "Áo khoác",
    example: "寒い時、コートを着ます。",
    exampleKana: "さむいとき、コートを きます。",
    exampleMeaning: "Mặc áo khoác khi trời lạnh."
  },
  {
    kana: "セーター",
    kanji: "",
    romaji: "seetaa",
    meaning: "Áo len",
    example: "新しいセーターをもらいました。",
    exampleKana: "あたらしい セーターを もらいました。",
    exampleMeaning: "Tôi được tặng chiếc áo len mới."
  },
  {
    kana: "スーツ",
    kanji: "",
    romaji: "suutsu",
    meaning: "Bộ com-lê, bộ vét",
    example: "会社へスーツを着て行きます。",
    exampleKana: "かいしゃへ スーツを きて いきます。",
    exampleMeaning: "Tôi mặc com-lê đến công ty."
  },
  {
    kana: "ぼうし",
    kanji: "帽子",
    romaji: "boushi",
    meaning: "Mũ, nón",
    example: "赤い帽子が好きです。",
    exampleKana: "あかい ぼうしが すきです。",
    exampleMeaning: "Tôi thích chiếc mũ màu đỏ."
  },
  {
    kana: "めがね",
    kanji: "眼鏡",
    romaji: "megane",
    meaning: "Kính",
    example: "眼鏡を掛けています。",
    exampleKana: "めがねを かけています。",
    exampleMeaning: "Đeo kính."
  },
  {
    kana: "「お」べんとう",
    kanji: "「お」弁当",
    romaji: "obentou",
    meaning: "Cơm hộp",
    example: "お弁当を買いに行きます。",
    exampleKana: "おべんとうを かいに いきます。",
    exampleMeaning: "Đi mua cơm hộp."
  },
  {
    kana: "わしつ",
    kanji: "和室",
    romaji: "washitsu",
    meaning: "Phòng kiểu Nhật",
    example: "和室で休みます。",
    exampleKana: "わしつで やすみます。",
    exampleMeaning: "Tôi nghỉ ngơi trong phòng kiểu Nhật."
  },
  {
    kana: "おしいれ",
    kanji: "押し入れ",
    romaji: "oshiire",
    meaning: "Tủ âm tường",
    example: "布団は押し入れにあります。",
    exampleKana: "ふとんは おしいれに あります。",
    exampleMeaning: "Chăn đệm ở trong tủ âm tường."
  },
  {
    kana: "ふとん",
    kanji: "布団",
    romaji: "futon",
    meaning: "Chăn đệm kiểu Nhật",
    example: "このふとんは 柔らかいです。",
    exampleKana: "このふとんは やわらかいです。",
    exampleMeaning: "Nệm này rất mềm."
  },
  {
    kana: "うみ",
    kanji: "海",
    romaji: "umi",
    meaning: "Biển",
    example: "夏に海へ行きます。",
    exampleKana: "なつに うみへ いきます。",
    exampleMeaning: "Mùa hè tôi đi biển."
  },
  {
    kana: "コンサート",
    kanji: "",
    romaji: "konsaato",
    meaning: "Buổi hòa nhạc",
    example: "来週コンサートがあります。",
    exampleKana: "らいしゅう コンサートが あります。",
    exampleMeaning: "Tuần sau có buổi hòa nhạc."
  },
  {
    kana: "カレー",
    kanji: "",
    romaji: "karee",
    meaning: "Món cà ri",
    example: "カレーを食べました。",
    exampleKana: "カレーを たべました。",
    exampleMeaning: "Tôi đã ăn món cà ri."
  },
  {
    kana: "コンビニ",
    kanji: "",
    romaji: "konbini",
    meaning: "Cửa hàng tiện lợi",
    example: "コンビニで飲み物を買います。",
    exampleKana: "コンビニで のみものを かいます。",
    exampleMeaning: "Mua đồ uống ở cửa hàng tiện lợi."
  }
];

const lessonTable = [
 {
  kana: "つごう",
  kanji: "都合",
  romaji: "tsugou",
  meaning: "Sự thuận tiện, sự thích hợp",
  example: "あしたは都合がいいです。",
  exampleKana: "あしたは つごうが いいです。",
  exampleMeaning: "Ngày mai tôi rảnh / tiện."
},
{
  kana: "やちん",
  kanji: "家賃",
  romaji: "yachin",
  meaning: "Tiền thuê nhà",
  example: "この部屋は家賃が高いです。",
  exampleKana: "この へやは やちんが たかいです。",
  exampleMeaning: "Căn phòng này tiền thuê rất cao."
},
{
  kana: "かいもの",
  kanji: "買い物",
  romaji: "kaimono",
  meaning: "Mua sắm",
  example: "母と買い物へ行きます。",
  exampleKana: "ははと かいものへ いきます。",
  exampleMeaning: "Đi mua sắm với mẹ."
},
{
  kana: "やくそく",
  kanji: "約束",
  romaji: "yakusoku",
  meaning: "Cuộc hẹn, lời hứa",
  example: "友達と約束があります。",
  exampleKana: "ともだちと やくそくが あります。",
  exampleMeaning: "Có hẹn với bạn."
},
{
  kana: "ようじ",
  kanji: "用事",
  romaji: "youji",
  meaning: "Có việc, công việc cần làm",
  example: "午後は用事があります。",
  exampleKana: "ごごは ようじが あります。",
  exampleMeaning: "Buổi chiều tôi có việc."
},
{
  kana: "ゆめ",
  kanji: "夢",
  romaji: "yume",
  meaning: "Giấc mơ, ước mơ",
  example: "わたしの夢は先生になることです。",
  exampleKana: "わたしの ゆめは せんせいに なることです。",
  exampleMeaning: "Ước mơ của tôi là trở thành giáo viên."
},
{
  kana: "よく",
  kanji: "",
  romaji: "yoku",
  meaning: "Thường, hay",
  example: "わたしはよく本を読みます。",
  exampleKana: "わたしは よく ほんを よみます。",
  exampleMeaning: "Tôi thường đọc sách."
},
{
  kana: "えーと",
  kanji: "",
  romaji: "eeto",
  meaning: "Ờ..., à..., để xem...",
  example: "えーと、名前は何でしたか。",
  exampleKana: "えーと、なまえは なんでしたか。",
  exampleMeaning: "Ờ..., tên là gì nhỉ?"
}
];

// Mảng kết hợp cho flashcard
const vocabAudio = new Audio(); 
const exampleAudio = new Audio(); 
let currentVocabSoundButton = null; 
let currentExampleSoundButton = null; 

const allFlashcardData = [ ...lessonVocab, ...lessonTable ]; 


function getLessonElement( commonId, numberedId ) { 
    return ( document.getElementById(commonId) || document.getElementById(numberedId) );
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

  lessonVocab.forEach((item, index) => {
    const exampleAudioName =
  `lesson${LESSON_NUMBER}_${String(index + 1).padStart(3, "0")}`;
  
    const card = document.createElement("div");

    card.className = "vocab-card";

    const kanjiHTML = item.kanji
      ? `
        <div class="vocab-kanji">
          ${item.kanji}
        </div>
      `
      : "";

    const exampleHTML = item.example
  ? `
    <div class="vocab-example-wrapper">

      <div class="vocab-example">

        <span class="vocab-example-text">
          ${item.example}
        </span>

        <button
          type="button"
          class="example-sound-btn"
          data-example="${exampleAudioName}"
          aria-label="Phát câu ví dụ"
        >
          🔊
        </button>

      </div>

      ${
  item.exampleKana || item.exampleMeaning
    ? `
      <div class="vocab-example-tooltip">

        ${
          item.exampleKana
            ? `
              <div class="vocab-example-kana">
                ${item.exampleKana}
              </div>
            `
            : ""
        }

        ${
          item.exampleMeaning
            ? `
              <div class="vocab-example-meaning">
                ${item.exampleMeaning}
              </div>
            `
            : ""
        }

      </div>
    `
    : ""
}

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

      ${exampleHTML}
    `;

    const soundButton =
      card.querySelector(".vocab-sound-btn");

    if (soundButton) {
      soundButton.addEventListener(
        "click",
        event => {
          event.stopPropagation();

          playVocabSound(
            item.romaji,
            soundButton
          );
        }
      );
    }

      const exampleSoundButton =
      card.querySelector(".example-sound-btn");

    if (exampleSoundButton) {
      exampleSoundButton.addEventListener(
        "click",
        event => {
          event.stopPropagation();

          playExampleSound(
            index,
            exampleSoundButton
          );
        }
      );
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

  lessonTable.forEach((item, index) => {
    const exampleAudioName =
  `lesson${LESSON_NUMBER}_${String(
      lessonVocab.length + index + 1
  ).padStart(3, "0")}`;

    const row = document.createElement("tr");

    const kanjiCell = item.kanji
      ? item.kanji
      : "&nbsp;";

    const exampleCell = item.example
  ? `
    <div class="table-example-wrapper">

      <div class="table-example">

        <span class="table-example-text">
          ${item.example}
        </span>

        <button
          type="button"
          class="table-example-sound-btn"
          data-example="${exampleAudioName}"
          aria-label="Phát câu ví dụ"
        >
          🔊
        </button>

      </div>

      ${
        item.exampleMeaning || item.exampleKana
          ? `
            <div class="table-example-tooltip">

              ${
                item.exampleKana
                  ? `
                    <div class="table-example-kana">
                      ${item.exampleKana}
                    </div>
                  `
                  : ""
              }

              ${
                item.exampleMeaning
                  ? `
                    <div class="table-example-meaning">
                      ${item.exampleMeaning}
                    </div>
                  `
                  : ""
              }

            </div>
          `
          : ""
      }

    </div>
  `
  : "&nbsp;";

    row.innerHTML = `
      <td class="table-kana">

        <div class="table-kana-row">

          <span class="table-kana-text">
            ${item.kana}
          </span>

          <button
            type="button"
            class="table-sound-btn"
            data-romaji="${item.romaji}"
            aria-label="Phát âm ${item.kana}"
          >
            🔊
          </button>

        </div>

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

      <td class="table-example-cell">
        ${exampleCell}
      </td>
    `;

    const soundButton =
      row.querySelector(".table-sound-btn");

    if (soundButton) {
      soundButton.addEventListener(
        "click",
        event => {
          event.stopPropagation();

          playVocabSound(
            item.romaji,
            soundButton
          );
        }
      );
    }

          const exampleSoundButton =
        row.querySelector(
          ".table-example-sound-btn"
        );

      if (exampleSoundButton) {
        exampleSoundButton.addEventListener(
          "click",
          event => {
            event.stopPropagation();

            playExampleSound(
              lessonVocab.length + index,
              exampleSoundButton
            );
          }
        );
      }

    tableBody.appendChild(row);
  });
}

function resetVocabSoundButton() {
  if (!currentVocabSoundButton) {
    return;
  }

  currentVocabSoundButton.classList.remove(
    "playing"
  );

  currentVocabSoundButton = null;
}

function getVocabAudioFileName(
  vocabAudioName
) {
  if (!vocabAudioName) {
    return "";
  }

  return vocabAudioName.endsWith(".mp3")
    ? vocabAudioName
    : `${vocabAudioName}.mp3`;
}

function playVocabSound(
  vocabAudioName,
  button = null
) {
  if (!vocabAudioName) {
    console.log(
      "Từ vựng chưa có file âm thanh."
    );
    return;
  }

  /*
    Dừng câu ví dụ nếu đang phát
  */
  exampleAudio.pause();
  exampleAudio.currentTime = 0;

  resetExampleSoundButton();

  /*
    Dừng âm thanh từ vựng cũ
  */
  vocabAudio.pause();
  vocabAudio.currentTime = 0;

  resetVocabSoundButton();

  const audioFileName =
    getVocabAudioFileName(
      vocabAudioName
    );

  vocabAudio.src =
    `${ASSET_BASE_PATH}/audio/${LESSON_FOLDER}/${audioFileName}`;

  if (button) {
    currentVocabSoundButton = button;

    button.classList.add("playing");
  }

  vocabAudio
    .play()
    .catch(error => {
      resetVocabSoundButton();

      console.log(
        `Không phát được từ vựng: ${audioFileName}`,
        error
      );
    });
}

vocabAudio.addEventListener(
  "ended",
  () => {
    resetVocabSoundButton();
  }
);

vocabAudio.addEventListener(
  "error",
  () => {
    const audioFile =
      vocabAudio.src
        .split("/")
        .pop();

    resetVocabSoundButton();

    console.log(
      `Không tìm thấy file từ vựng: ${audioFile}`
    );
  }
);

function resetExampleSoundButton() {
  if (!currentExampleSoundButton) {
    return;
  }

  currentExampleSoundButton.classList.remove(
    "playing"
  );

  currentExampleSoundButton = null;
}

function getExampleAudioFileName(
  exampleAudioName
) {
  if (!exampleAudioName) {
    return "";
  }

  return exampleAudioName.endsWith(".mp3")
    ? exampleAudioName
    : `${exampleAudioName}.mp3`;
}

function playExampleSound(
  index,
  button = null
) {
  /*
    Dừng âm thanh từ vựng nếu đang phát
  */
  vocabAudio.pause();
  vocabAudio.currentTime = 0;

  resetVocabSoundButton();

  /*
    Dừng câu ví dụ cũ nếu đang phát
  */
  exampleAudio.pause();
  exampleAudio.currentTime = 0;

  resetExampleSoundButton();

  const exampleNumber =
    String(index + 1).padStart(3, "0");

  const audioFileName =
    `${LESSON_FOLDER}_${exampleNumber}.mp3`;

  exampleAudio.src =
    `${ASSET_BASE_PATH}/audio/${LESSON_FOLDER}/${audioFileName}`;

  if (button) {
    currentExampleSoundButton = button;
    button.classList.add("playing");
  }

  exampleAudio
    .play()
    .catch(error => {
      resetExampleSoundButton();

      console.log(
        `Không phát được câu ví dụ: ${audioFileName}`,
        error
      );
    });
}

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