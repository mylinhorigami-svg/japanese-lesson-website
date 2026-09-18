const LESSON_NUMBER = 16;
const LESSON_FOLDER = `lesson${LESSON_NUMBER}`;
const ASSET_BASE_PATH = "../../../../assets";

const lessonVocab = [
    {
    kana: "ながい",
    kanji: "長い",
    romaji: "nagai",
    meaning: "Dài",
    example: "このえんぴつは長いです。",
    exampleKana: "この えんぴつ は ながい です。",
    exampleMeaning: "Cây bút chì này dài."
  },
  {
    kana: "みじかい",
    kanji: "短い",
    romaji: "mijikai",
    meaning: "Ngắn",
    example: "わたしの髪は短いです。",
    exampleKana: "わたし の かみ は みじかい です。",
    exampleMeaning: "Tóc của tôi ngắn."
  },
  {
    kana: "おもい",
    kanji: "重い",
    romaji: "omoi",
    meaning: "Nặng",
    example: "この荷物は重いです。",
    exampleKana: "この にもつ は おもい です。",
    exampleMeaning: "Hành lý này nặng."
  },
  {
    kana: "かるい",
    kanji: "軽い",
    romaji: "karui",
    meaning: "Nhẹ",
    example: "このかばんは軽いです。",
    exampleKana: "この かばん は かるい です。",
    exampleMeaning: "Cái cặp này nhẹ."
  },
  {
    kana: "ひろい",
    kanji: "広い",
    romaji: "hiroi",
    meaning: "Rộng",
    example: "この部屋は広いです。",
    exampleKana: "この へや は ひろい です。",
    exampleMeaning: "Căn phòng này rộng."
  },
  {
    kana: "せまい",
    kanji: "狭い",
    romaji: "semai",
    meaning: "Hẹp",
    example: "わたしの部屋は狭いです。",
    exampleKana: "わたし の へや は せまい です。",
    exampleMeaning: "Phòng của tôi hẹp."
  },
  {
    kana: "あかるい",
    kanji: "明るい",
    romaji: "akarui",
    meaning: "Sáng",
    example: "この部屋は明るいです。",
    exampleKana: "この へや は あかるい です。",
    exampleMeaning: "Căn phòng này sáng."
  },
  {
    kana: "くらい",
    kanji: "暗い",
    romaji: "kurai",
    meaning: "Tối",
    example: "この道は暗いです。",
    exampleKana: "この みち は くらい です。",
    exampleMeaning: "Con đường này tối."
  },
  {
    kana: "わかい",
    kanji: "若い",
    romaji: "wakai",
    meaning: "Trẻ",
    example: "わたしの父は若いです。",
    exampleKana: "わたし の ちち は わかい です。",
    exampleMeaning: "Bố tôi còn trẻ."
  },
  {
    kana: "からだ",
    kanji: "体",
    romaji: "karada",
    meaning: "Cơ thể",
    example: "体が痛いです。",
    exampleKana: "からだ が いたい です。",
    exampleMeaning: "Cơ thể bị đau."
  },
  {
    kana: "かお",
    kanji: "顔",
    romaji: "kao",
    meaning: "Khuôn mặt",
    example: "顔を洗います。",
    exampleKana: "かお を あらいます。",
    exampleMeaning: "Tôi rửa mặt."
  },
  {
    kana: "め",
    kanji: "目",
    romaji: "me",
    meaning: "Mắt",
    example: "目が大きいです。",
    exampleKana: "め が おおきい です。",
    exampleMeaning: "Mắt to."
  },
  {
    kana: "はな",
    kanji: "鼻",
    romaji: "hana",
    meaning: "Mũi",
    example: "鼻が高いです。",
    exampleKana: "はな が たかい です。",
    exampleMeaning: "Mũi cao."
  },
  {
    kana: "くち",
    kanji: "口",
    romaji: "kuchi",
    meaning: "Miệng",
    example: "口をあけてください。",
    exampleKana: "くち を あけてください。",
    exampleMeaning: "Hãy há miệng ra."
  },
  {
    kana: "みみ",
    kanji: "耳",
    romaji: "mimi",
    meaning: "Tai",
    example: "耳が痛いです。",
    exampleKana: "みみ が いたい です。",
    exampleMeaning: "Đau tai."
  },
  {
    kana: "は",
    kanji: "歯",
    romaji: "ha",
    meaning: "Răng",
    example: "歯を磨きます。",
    exampleKana: "は を みがきます。",
    exampleMeaning: "Đánh răng."
  },
  {
    kana: "かみ",
    kanji: "髪",
    romaji: "kami",
    meaning: "Tóc",
    example: "髪が長いです。",
    exampleKana: "かみ が ながい です。",
    exampleMeaning: "Tóc dài."
  },
  {
    kana: "あし",
    kanji: "足",
    romaji: "ashi",
    meaning: "Chân",
    example: "足が痛いです。",
    exampleKana: "あし が いたい です。",
    exampleMeaning: "Đau chân."
  },
  {
    kana: "シャワー",
    kanji: "",
    romaji: "shawaa",
    meaning: "Vòi sen, tắm vòi sen",
    example: "シャワーを浴びます。",
    exampleKana: "シャワー を あびます。",
    exampleMeaning: "Tắm vòi sen."
  },
  {
    kana: "ハンバーグ",
    kanji: "",
    romaji: "hanbaagu",
    meaning: "Hamburger bít tết",
    example: "ハンバーグが好きです。",
    exampleKana: "ハンバーグ が すき です。",
    exampleMeaning: "Tôi thích hamburger."
  },
  {
    kana: "サービス",
    kanji: "",
    romaji: "saabisu",
    meaning: "Dịch vụ",
    example: "サービスは無料です。",
    exampleKana: "サービス は むりょう です。",
    exampleMeaning: "Dịch vụ này miễn phí."
  },
  {
    kana: "ジョギング",
    kanji: "",
    romaji: "jogingu",
    meaning: "Chạy bộ",
    example: "毎朝ジョギングをします。",
    exampleKana: "まいあさ ジョギング を します。",
    exampleMeaning: "Tôi chạy bộ mỗi sáng."
  },
  {
    kana: "みどり",
    kanji: "緑",
    romaji: "midori",
    meaning: "Màu xanh lá cây",
    example: "緑が好きです。",
    exampleKana: "みどり が すき です。",
    exampleMeaning: "Tôi thích màu xanh lá."
  },
  {
    kana: "おてら",
    kanji: "お寺",
    romaji: "otera",
    meaning: "Chùa (Phật giáo)",
    example: "このお寺はきれいです。",
    exampleKana: "この おてら は きれい です。",
    exampleMeaning: "Ngôi chùa này đẹp."
  },
  {
    kana: "じんじゃ",
    kanji: "神社",
    romaji: "jinja",
    meaning: "Đền thờ, miếu",
    example: "週末、神社へ行きます。",
    exampleKana: "しゅうまつ、じんじゃ へ いきます。",
    exampleMeaning: "Cuối tuần tôi đi đền thờ."
  },
  {
    kana: "りゅうがくせい",
    kanji: "留学生",
    romaji: "ryuugakusei",
    meaning: "Du học sinh",
    example: "彼は留学生です。",
    exampleKana: "かれ は りゅうがくせい です。",
    exampleMeaning: "Anh ấy là du học sinh."
  },
  {
    kana: "ボタン",
    kanji: "",
    romaji: "botan",
    meaning: "Cái nút",
    example: "ボタンを押します。",
    exampleKana: "ボタン を おします。",
    exampleMeaning: "Nhấn nút."
  },
  {
    kana: "アジア",
    kanji: "",
    romaji: "ajia",
    meaning: "Châu Á",
    example: "アジアへ行きたいです。",
    exampleKana: "アジア へ いきたい です。",
    exampleMeaning: "Tôi muốn đi Châu Á."
  }
];

const lessonTable = [
  {
    kana: "あるきます",
    kanji: "歩きます",
    romaji: "arukimasu",
    meaning: "Đi bộ",
    example: "毎朝駅まで歩きます。",
    exampleKana: "まいあさ えき まで あるきます。",
    exampleMeaning: "Mỗi sáng tôi đi bộ đến nhà ga."
  },
  {
    kana: "のります",
    kanji: "乗ります",
    romaji: "norimasu",
    meaning: "Lên, đi bằng (phương tiện)",
    example: "バスに乗ります。",
    exampleKana: "バス に のります。",
    exampleMeaning: "Lên xe buýt."
  },
  {
    kana: "おります",
    kanji: "降ります",
    romaji: "orimasu",
    meaning: "Xuống (phương tiện)",
    example: "電車を降ります。",
    exampleKana: "でんしゃ を おります。",
    exampleMeaning: "Xuống tàu."
  },
  {
    kana: "のりかえます",
    kanji: "乗り換えます",
    romaji: "norikaemasu",
    meaning: "Đổi, chuyển tuyến (phương tiện)",
    example: "新幹線に乗り換えます。",
    exampleKana: "しんかんせん に のりかえます。",
    exampleMeaning: "Đổi sang tàu Shinkansen."
  },
  {
    kana: "しょくじします",
    kanji: "食事します",
    romaji: "shokujishimasu",
    meaning: "Ăn uống, dùng bữa",
    example: "家族と食事します。",
    exampleKana: "かぞく と しょくじ します。",
    exampleMeaning: "Tôi dùng bữa cùng gia đình."
  },
  {
    kana: "あらいます",
    kanji: "洗います",
    romaji: "araimasu",
    meaning: "Rửa, giặt",
    example: "手を洗います。",
    exampleKana: "て を あらいます。",
    exampleMeaning: "Rửa tay."
  },
  {
    kana: "あびます",
    kanji: "浴びます",
    romaji: "abimasu",
    meaning: "Tắm",
    example: "シャワーを浴びます。",
    exampleKana: "シャワー を あびます。",
    exampleMeaning: "Tắm vòi sen."
  },
  {
    kana: "いれます",
    kanji: "入れます",
    romaji: "iremasu",
    meaning: "Cho vào, bỏ vào",
    example: "かばんに本を入れます。",
    exampleKana: "かばん に ほん を いれます。",
    exampleMeaning: "Cho sách vào cặp."
  },
  {
    kana: "だします",
    kanji: "出します",
    romaji: "dashimasu",
    meaning: "Lấy ra, đưa ra",
    example: "財布からお金を出します。",
    exampleKana: "さいふ から おかね を だします。",
    exampleMeaning: "Lấy tiền ra khỏi ví."
  },
  {
    kana: "はいります",
    kanji: "入ります",
    romaji: "hairimasu",
    meaning: "Vào, đi vào",
    example: "部屋に入ります。",
    exampleKana: "へや に はいります。",
    exampleMeaning: "Vào phòng."
  },
  {
    kana: "でます",
    kanji: "出ます",
    romaji: "demasu",
    meaning: "Ra, đi ra",
    example: "家を出ます。",
    exampleKana: "いえ を でます。",
    exampleMeaning: "Rời khỏi nhà."
  },
  {
    kana: "やめます",
    kanji: "止めます",
    romaji: "yamemasu",
    meaning: "Dừng, bỏ, thôi",
    example: "たばこをやめます。",
    exampleKana: "たばこ を やめます。",
    exampleMeaning: "Bỏ hút thuốc."
  },
  {
    kana: "おします",
    kanji: "押します",
    romaji: "oshimasu",
    meaning: "Ấn, nhấn, đẩy",
    example: "このボタンを押してください。",
    exampleKana: "この ボタン を おして ください。",
    exampleMeaning: "Hãy nhấn nút này."
  },
  {
    kana: "まず",
    kanji: "",
    romaji: "mazu",
    meaning: "Trước hết, đầu tiên",
    example: "まず名前を書いてください。",
    exampleKana: "まず なまえ を かいて ください。",
    exampleMeaning: "Trước hết hãy viết tên của bạn."
  },
  {
    kana: "キャッシュカード",
    kanji: "",
    romaji: "kyasshu kaado",
    meaning: "Thẻ ATM, thẻ rút tiền",
    example: "キャッシュカードを入れてください。",
    exampleKana: "キャッシュカード を いれて ください。",
    exampleMeaning: "Xin hãy đưa thẻ ATM vào."
  },
  {
    kana: "あんしょうばんごう",
    kanji: "暗証番号",
    romaji: "anshou bangou",
    meaning: "Mã PIN, mật mã",
    example: "暗証番号を入力します。",
    exampleKana: "あんしょうばんごう を にゅうりょく します。",
    exampleMeaning: "Tôi nhập mã PIN."
  },
  {
    kana: "かくにん",
    kanji: "確認",
    romaji: "kakunin",
    meaning: "Sự xác nhận, kiểm tra",
    example: "レポートの内容を確認します。",
    exampleKana: "レポート の ないよう を かくにん します。",
    exampleMeaning: "Tôi kiểm tra nội dung báo cáo."
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