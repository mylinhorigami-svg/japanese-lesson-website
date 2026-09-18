const LESSON_NUMBER = 17;
const LESSON_FOLDER = `lesson${LESSON_NUMBER}`;
const ASSET_BASE_PATH = "../../../../assets";

const lessonVocab = [
    {
    kana: "ロボット",
    kanji: "",
    romaji: "robotto",
    meaning: "Người máy",
    example: "ロボットは料理ができます。",
    exampleKana: "ロボットは りょうりが できます。",
    exampleMeaning: "Người máy có thể nấu ăn."
  },
 {
    kana: "スイッチ",
    kanji: "",
    romaji: "suicchi",
    meaning: "Công tắc",
    example: "スイッチを押してください。",
    exampleKana: "スイッチを おして ください。",
    exampleMeaning: "Hãy nhấn công tắc."
  },
  {
    kana: "おふろ",
    kanji: "お風呂",
    romaji: "ofuro",
    meaning: "Bồn tắm",
    example: "お風呂に入ります。",
    exampleKana: "おふろに はいります。",
    exampleMeaning: "Ngâm bồn."
  },
  {
    kana: "うわぎ",
    kanji: "上着",
    romaji: "uwagi",
    meaning: "Áo khoác",
    example: "上着を着ます。",
    exampleKana: "うわぎを きます。",
    exampleMeaning: "Mặc áo khoác."
  },
  {
    kana: "したぎ",
    kanji: "下着",
    romaji: "shitagi",
    meaning: "Đồ lót",
    example: "下着を買います。",
    exampleKana: "したぎを かいます。",
    exampleMeaning: "Mua đồ lót."
  },
  {
    kana: "ほけんしょう",
    kanji: "保険証",
    romaji: "hokenshou",
    meaning: "Thẻ bảo hiểm",
    example: "保険証を持ってきます。",
    exampleKana: "ほけんしょうを もってきます。",
    exampleMeaning: "Mang theo thẻ bảo hiểm"
  },
  {
    kana: "おと",
    kanji: "音",
    romaji: "oto",
    meaning: "Âm thanh, tiếng động",
    example: "外で大きい音がしました。",
    exampleKana: "そとで おおきい おとが しました。",
    exampleMeaning: "Bên ngoài có một tiếng động lớn."
  },
  {
    kana: "ヒーター",
    kanji: "",
    romaji: "hiitaa",
    meaning: "Máy sưởi, lò sưởi",
    example: "ヒーターをつけます。",
    exampleKana: "ヒーターを つけます。",
    exampleMeaning: "Bật máy sưởi."
  }
];

const lessonTable = [
  {
    kana: "わすれます",
    kanji: "忘れます",
    romaji: "wasuremasu",
    meaning: "Quên",
    example: "かさを忘れました。",
    exampleKana: "かさを わすれました。",
    exampleMeaning: "Tôi đã quên cái ô."
  },
  {
    kana: "なくします",
    kanji: "無くします",
    romaji: "nakushimasu",
    meaning: "Làm mất",
    example: "かぎを無くしました。",
    exampleKana: "かぎを なくしました。",
    exampleMeaning: "Tôi đã làm mất chìa khóa."
  },
  {
    kana: "しんぱいします",
    kanji: "心配します",
    romaji: "shinpai shimasu",
    meaning: "Lo, lo lắng",
    example: "家族を心配しています。",
    exampleKana: "かぞくを しんぱいして います。",
    exampleMeaning: "Tôi đang lo lắng cho gia đình."
  },
  {
    kana: "きをつけます",
    kanji: "気をつけます",
    romaji: "ki o tsukemasu",
    meaning: "Chú ý, cẩn thận",
    example: "気をつけてください。",
    exampleKana: "きをつけて ください。",
    exampleMeaning: "Hãy cẩn thận."
  },
  
  {
    kana: "かえします",
    kanji: "返します",
    romaji: "kaeshimasu",
    meaning: "Trả lại",
    example: "図書館に本を返します。",
    exampleKana: "としょかんに ほんを かえします。",
    exampleMeaning: "Trả lại sách cho thư viện."
  },
  {
    kana: "はらいます",
    kanji: "払います",
    romaji: "haraimasu",
    meaning: "Trả tiền, nộp tiền",
    example: "お金を払います。",
    exampleKana: "おかねを はらいます。",
    exampleMeaning: "Trả tiền."
  },
  {
    kana: "ぬぎます",
    kanji: "脱ぎます",
    romaji: "nugimasu",
    meaning: "Cởi quần áo, giày dép",
    example: "靴を脱ぎます。",
    exampleKana: "くつを ぬぎます。",
    exampleMeaning: "Cởi giầy."
  },
  {
    kana: "さわります",
    kanji: "触ります",
    romaji: "sawarimasu",
    meaning: "Sờ, chạm vào",
    example: "ここに触らないでください。",
    exampleKana: "ここに さわらないで ください。",
    exampleMeaning: "Xin đừng chạm vào đây."
  },
  {
    kana: "でかけます",
    kanji: "出かけます",
    romaji: "dekakemasu",
    meaning: "Đi ra ngoài",
    example: "午後、買い物に出かけます。",
    exampleKana: "ごご、かいものに でかけます。",
    exampleMeaning: "Buổi chiều tôi đi ra ngoài mua sắm."
  },
  {
    kana: "もっていきます",
    kanji: "持って行きます",
    romaji: "motteikimasu",
    meaning: "Mang đi, đem đi",
    example: "会社へ資料を持って行きます。",
    exampleKana: "かいしゃへ しりょうを もっていきます。",
    exampleMeaning: "Tôi mang tài liệu đến công ty."
  },
  {
    kana: "もってきます",
    kanji: "持って来ます",
    romaji: "mottekimasu",
    meaning: "Mang đến, đem đến",
    example: "パスポートを忘れないでください。",
    exampleKana: "パスポートを わすれないで ください。",
    exampleMeaning: "Đừng quên hộ chiếu."
  },
  {
    kana: "ざんぎょうします",
    kanji: "残業します",
    romaji: "zangyou shimasu",
    meaning: "Tăng ca",
    example: "今日は二時間残業します。",
    exampleKana: "きょうは にじかん ざんぎょうします。",
    exampleMeaning: "Hôm nay tăng ca 2 tiếng."
  },
  {
    kana: "しゅっちょうします",
    kanji: "出張します",
    romaji: "shucchou shimasu",
    meaning: "Đi công tác",
    example: "来週大阪へ出張します。",
    exampleKana: "らいしゅう おおさかへ しゅっちょうします。",
    exampleMeaning: "Tuần sau tôi đi công tác Osaka."
  },
  {
    kana: "たいせつ（な）",
    kanji: "大切（な）",
    romaji: "taisetsu",
    meaning: "Quan trọng, quý giá",
    example: "これは大切な写真です。",
    exampleKana: "これは たいせつな しゃしんです。",
    exampleMeaning: "Đây là bức ảnh quý giá."
  },
  {
    kana: "だいじょうぶ（な）",
    kanji: "大丈夫（な）",
    romaji: "daijoubu",
    meaning: "Ổn, không sao",
    example: "大丈夫です。",
    exampleKana: "だいじょうぶです。",
    exampleMeaning: "Tôi không sao."
  },
  {
    kana: "すごい",
    kanji: "",
    romaji: "sugoi",
    meaning: "Tuyệt vời, giỏi, ghê",
    example: "このロボットはすごいです。",
    exampleKana: "この ロボットは すごいですね。",
    exampleMeaning: "Người máy này thật tuyệt vời nhỉ."
  },
  {
    kana: "あぶない",
    kanji: "危ない",
    romaji: "abunai",
    meaning: "Nguy hiểm",
    example: "ここで危ないです。",
    exampleKana: "ここであぶないです。",
    exampleMeaning: "Ở đây rất nguy hiểm."
  },
  
  {
    kana: "きょか",
    kanji: "許可",
    romaji: "kyoka",
    meaning: "Sự cho phép",
    example: "許可をもらいました。",
    exampleKana: "きょかを もらいました。",
    exampleMeaning: "Tôi đã nhận được sự cho phép."
  },
  
  {
    kana: "もんだい",
    kanji: "問題",
    romaji: "mondai",
    meaning: "Câu hỏi, vấn đề",
    example: "この問題は難しいです。",
    exampleKana: "この もんだいは むずかしいです。",
    exampleMeaning: "Câu hỏi này khó."
  },
  {
    kana: "こたえ",
    kanji: "答え",
    romaji: "kotae",
    meaning: "Câu trả lời",
    example: "答えをノートに書きます。",
    exampleKana: "こたえを のーとに かきます。",
    exampleMeaning: "Tôi viết câu trả lời vào vở."
  },
  
  {
    kana: "かぜ",
    kanji: "風邪",
    romaji: "kaze",
    meaning: "Cảm cúm",
    example: "風邪をひきました。",
    exampleKana: "かぜを ひきました。",
    exampleMeaning: "Tôi bị cảm."
  },
  {
    kana: "ねつ",
    kanji: "熱",
    romaji: "netsu",
    meaning: "Sốt",
    example: "熱があります。",
    exampleKana: "ねつが あります。",
    exampleMeaning: "Bị sốt."
  },
  {
    kana: "のど",
    kanji: "喉",
    romaji: "nodo",
    meaning: "Cổ họng",
    example: "のどが痛いです。",
    exampleKana: "のどが いたいです。",
    exampleMeaning: "Đau họng."
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