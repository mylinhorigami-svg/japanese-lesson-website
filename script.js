console.log("Website học tiếng Nhật đã sẵn sàng!");

const kanaSpeed = 0.5;

let currentReading = "";
let currentKanaIndex = -1;
let kanaButtons = [];
const kanaAudio = new Audio();
let currentAudioName = "";

function openKana(kana, reading){

  // Lấy toàn bộ nút kana trên trang
  kanaButtons = Array.from(document.querySelectorAll(".kana-card"));

  // Xác định đang mở nút thứ mấy
  currentKanaIndex = kanaButtons.findIndex(btn=>{
    return btn.querySelector("span").textContent === kana;
  });

  document.getElementById("kanaReading").textContent = reading;
  currentReading = kana;
  currentAudioName = reading;

  const strokeArea = document.getElementById("strokeArea");
  strokeArea.innerHTML = "";

  // Chữ ghép (きゃ, しゃ...)
  if(kana.length > 1){
    strokeArea.innerHTML = `<div class="gray-kana">${kana}</div>`;
    document.getElementById("kanaModal").classList.add("show");
    playSound();
    return;
  }

  const code = kana.codePointAt(0);

  fetch(`../../../../assets/animCJK/svgsJaKana/${code}.svg?v=${Date.now()}`)
    .then(res=>{
      if(!res.ok) throw new Error("SVG not found");
      return res.text();
    })
    .then(svg=>{

      svg = svg
        .replaceAll("var(--d)",`calc(var(--d) * ${kanaSpeed})`)
        .replaceAll("var(--t)",`calc(var(--t) * ${kanaSpeed})`);

      strokeArea.innerHTML = svg;
    })
    .catch(()=>{
      strokeArea.innerHTML = `<div class="gray-kana">${kana}</div>`;
    });

  document.getElementById("kanaModal").classList.add("show");
  playSound();
}

function nextKana(){

  if(currentKanaIndex >= kanaButtons.length-1){
      currentKanaIndex = 0;
  }else{
      currentKanaIndex++;
  }

  kanaButtons[currentKanaIndex].click();
}

function prevKana(){

  if(currentKanaIndex <= 0){
      currentKanaIndex = kanaButtons.length-1;
  }else{
      currentKanaIndex--;
  }

  kanaButtons[currentKanaIndex].click();
}
function closeKana(){
  document.getElementById("kanaModal").classList.remove("show");
}

function playSound(){

  if(!currentAudioName) return;

  const btn = document.querySelector(".sound-btn");

  kanaAudio.pause();
  kanaAudio.currentTime = 0;
  kanaAudio.src = `../../../../assets/n5_vocab_audio/hiragana/${currentAudioName}.mp3`;

  btn.classList.add("playing");

  kanaAudio.play().catch(error=>{
    console.log("Không phát được âm thanh:", error);
  });

  setTimeout(()=>{
    btn.classList.remove("playing");
  }, 500);
}

function playPracticeSound(question){
  if(!question) return;

  currentAudioName = question.romaji;
  playSound();
}

/*practice*/
let currentQuestionIndex = 0;
let currentScore = 0;
let currentQuestions = [];
let currentPanel = null;

const practiceData = {
  1: [
    { kana:"あ", romaji:"a" },
    { kana:"い", romaji:"i" },
    { kana:"う", romaji:"u" },
    { kana:"え", romaji:"e" },
    { kana:"お", romaji:"o" },
    { kana:"か", romaji:"ka" },
    { kana:"き", romaji:"ki" },
    { kana:"く", romaji:"ku" },
    { kana:"け", romaji:"ke" },
    { kana:"こ", romaji:"ko" }
  ],

  2: [
    { kana:"さ", romaji:"sa" },
    { kana:"し", romaji:"shi" },
    { kana:"す", romaji:"su" },
    { kana:"せ", romaji:"se" },
    { kana:"そ", romaji:"so" },
    { kana:"た", romaji:"ta" },
    { kana:"ち", romaji:"chi" },
    { kana:"つ", romaji:"tsu" },
    { kana:"て", romaji:"te" },
    { kana:"と", romaji:"to" }

  ],

  3: [
    { kana:"な", romaji:"na" },
    { kana:"に", romaji:"ni" },
    { kana:"ぬ", romaji:"nu" },
    { kana:"ね", romaji:"ne" },
    { kana:"の", romaji:"no" },
    { kana:"は", romaji:"ha" },
    { kana:"ひ", romaji:"hi" },
    { kana:"ふ", romaji:"fu" },
    { kana:"へ", romaji:"he" },
    { kana:"ほ", romaji:"ho" }
  ],

  4: [
    { kana:"ま", romaji:"ma" },
    { kana:"み", romaji:"mi" },
    { kana:"む", romaji:"mu" },
    { kana:"め", romaji:"me" },
    { kana:"も", romaji:"mo" },
    { kana:"や", romaji:"ya" },
    { kana:"ゆ", romaji:"yu" },
    { kana:"よ", romaji:"yo" },
    { kana:"ら", romaji:"ra" },
    { kana:"り", romaji:"ri" },
  ],

  5: [
     { kana:"る", romaji:"ru" },
     { kana:"れ", romaji:"re" },
     { kana:"ろ", romaji:"ro" },
     { kana:"わ", romaji:"wa" },
     { kana:"を", romaji:"wo" },
     { kana:"ん", romaji:"n" },
     { kana:"が", romaji:"ga" },
     { kana:"ぎ", romaji:"gi" },
     { kana:"ぐ", romaji:"gu" },
     { kana:"げ", romaji:"ge" },
  ],

  6: [
     { kana:"ご", romaji:"go" },
     { kana:"ざ", romaji:"za" },
     { kana:"じ", romaji:"ji" },
     { kana:"ず", romaji:"zu" },
     { kana:"ぜ", romaji:"ze" },
     { kana:"ぞ", romaji:"zo" },
     { kana:"だ", romaji:"da" },
     { kana:"ぢ", romaji:"di" },
     { kana:"づ", romaji:"du" },
     { kana:"で", romaji:"de" },
  ],

  7: [
     { kana:"ど", romaji:"do" },
     { kana:"ば", romaji:"ba" },
     { kana:"び", romaji:"bi" },
     { kana:"ぶ", romaji:"bu" },
     { kana:"べ", romaji:"be" },
     { kana:"ぼ", romaji:"bo" },
     { kana:"ぱ", romaji:"pa" },
     { kana:"ぴ", romaji:"pi" },
     { kana:"ぷ", romaji:"pu" },
     { kana:"ぺ", romaji:"pe" },
  ],

  8: [
     { kana:"ぽ", romaji:"po" },
     { kana:"きゃ", romaji:"kya" },
     { kana:"きゅ", romaji:"kyu" },
     { kana:"きょ", romaji:"kyo" },
     { kana:"しゃ", romaji:"sha" },
     { kana:"しゅ", romaji:"shu" },
     { kana:"しょ", romaji:"sho" },
     { kana:"ちゃ", romaji:"cha" },
     { kana:"ちゅ", romaji:"chu" },
     { kana:"ちょ", romaji:"cho" },
  ],

  9: [
    { kana:"にゃ", romaji:"nya" },
    { kana:"にゅ", romaji:"nyu" },
    { kana:"にょ", romaji:"nyo" },
    { kana:"ひゃ", romaji:"hya" },
    { kana:"ひゅ", romaji:"hyu" },
    { kana:"ひょ", romaji:"hyo" },
    { kana:"みゃ", romaji:"mya" },
    { kana:"みゅ", romaji:"myu" },
    { kana:"みょ", romaji:"myo" },
    { kana:"りゃ", romaji:"rya" }
  ],
  10: [
      { kana:"りゅ", romaji:"ryu" },
      { kana:"りょ", romaji:"ryo" },
      { kana:"ぎゃ", romaji:"gya" },
      { kana:"ぎゅ", romaji:"gyu" },
      { kana:"ぎょ", romaji:"gyo" },
      { kana:"じゃ", romaji:"ja" },
      { kana:"じゅ", romaji:"ju" },
      { kana:"じょ", romaji:"jo" },
      { kana:"びゃ", romaji:"bya" },
      { kana:"びゅ", romaji:"byu" },
      { kana:"びょ", romaji:"byo" },
      { kana:"ぴゃ", romaji:"pya" },
      { kana:"ぴゅ", romaji:"pyu" },
      { kana:"ぴょ", romaji:"pyo" }
  ]
};

practiceData.test = [
  ...practiceData[1],
  ...practiceData[2],
  ...practiceData[3],
  ...practiceData[4],
  ...practiceData[5],
  ...practiceData[6],
  ...practiceData[7],
  ...practiceData[8],
  ...practiceData[9],
  ...practiceData[10]
];

const katakanaPracticeData = {
  1: [
    { kana:"ア", romaji:"a" },
    { kana:"イ", romaji:"i" },
    { kana:"ウ", romaji:"u" },
    { kana:"エ", romaji:"e" },
    { kana:"オ", romaji:"o" },
    { kana:"カ", romaji:"ka" },
    { kana:"キ", romaji:"ki" },
    { kana:"ク", romaji:"ku" },
    { kana:"ケ", romaji:"ke" },
    { kana:"コ", romaji:"ko" }
  ],
  2: [
    { kana:"サ", romaji:"sa" },
    { kana:"シ", romaji:"shi" },
    { kana:"ス", romaji:"su" },
    { kana:"セ", romaji:"se" },
    { kana:"ソ", romaji:"so" },
    { kana:"タ", romaji:"ta" },
    { kana:"チ", romaji:"chi" },
    { kana:"ツ", romaji:"tsu" },
    { kana:"テ", romaji:"te" },
    { kana:"ト", romaji:"to" }
  ],
  3: [
    { kana:"ナ", romaji:"na" },
    { kana:"ニ", romaji:"ni" },
    { kana:"ヌ", romaji:"nu" },
    { kana:"ネ", romaji:"ne" },
    { kana:"ノ", romaji:"no" },
    { kana:"ハ", romaji:"ha" },
    { kana:"ヒ", romaji:"hi" },
    { kana:"フ", romaji:"fu" },
    { kana:"ヘ", romaji:"he" },
    { kana:"ホ", romaji:"ho" }
  ],
  4: [
    { kana:"マ", romaji:"ma" },
    { kana:"ミ", romaji:"mi" },
    { kana:"ム", romaji:"mu" },
    { kana:"メ", romaji:"me" },
    { kana:"モ", romaji:"mo" },
    { kana:"ヤ", romaji:"ya" },
    { kana:"ユ", romaji:"yu" },
    { kana:"ヨ", romaji:"yo" },
    { kana:"ラ", romaji:"ra" },
    { kana:"リ", romaji:"ri" }
  ],
  5: [
    { kana:"ル", romaji:"ru" },
    { kana:"レ", romaji:"re" },
    { kana:"ロ", romaji:"ro" },
    { kana:"ワ", romaji:"wa" },
    { kana:"ヲ", romaji:"wo" },
    { kana:"ン", romaji:"n" },
    { kana:"ガ", romaji:"ga" },
    { kana:"ギ", romaji:"gi" },
    { kana:"グ", romaji:"gu" },
    { kana:"ゲ", romaji:"ge" }
  ],
  6: [
    { kana:"ゴ", romaji:"go" },
    { kana:"ザ", romaji:"za" },
    { kana:"ジ", romaji:"ji" },
    { kana:"ズ", romaji:"zu" },
    { kana:"ゼ", romaji:"ze" },
    { kana:"ゾ", romaji:"zo" },
    { kana:"ダ", romaji:"da" },
    { kana:"ヂ", romaji:"di" },
    { kana:"ヅ", romaji:"du" },
    { kana:"デ", romaji:"de" }
  ],
  7: [
    { kana:"ド", romaji:"do" },
    { kana:"バ", romaji:"ba" },
    { kana:"ビ", romaji:"bi" },
    { kana:"ブ", romaji:"bu" },
    { kana:"ベ", romaji:"be" },
    { kana:"ボ", romaji:"bo" },
    { kana:"パ", romaji:"pa" },
    { kana:"ピ", romaji:"pi" },
    { kana:"プ", romaji:"pu" },
    { kana:"ペ", romaji:"pe" }
  ],
  8: [
    { kana:"ポ", romaji:"po" },
    { kana:"キャ", romaji:"kya" },
    { kana:"キュ", romaji:"kyu" },
    { kana:"キョ", romaji:"kyo" },
    { kana:"シャ", romaji:"sha" },
    { kana:"シュ", romaji:"shu" },
    { kana:"ショ", romaji:"sho" },
    { kana:"チャ", romaji:"cha" },
    { kana:"チュ", romaji:"chu" },
    { kana:"チョ", romaji:"cho" }
  ],
  9: [
    { kana:"ニャ", romaji:"nya" },
    { kana:"ニュ", romaji:"nyu" },
    { kana:"ニョ", romaji:"nyo" },
    { kana:"ヒャ", romaji:"hya" },
    { kana:"ヒュ", romaji:"hyu" },
    { kana:"ヒョ", romaji:"hyo" },
    { kana:"ミャ", romaji:"mya" },
    { kana:"ミュ", romaji:"myu" },
    { kana:"ミョ", romaji:"myo" },
    { kana:"リャ", romaji:"rya" }
  ],
  10: [
    { kana:"リュ", romaji:"ryu" },
    { kana:"リョ", romaji:"ryo" },
    { kana:"ギャ", romaji:"gya" },
    { kana:"ギュ", romaji:"gyu" },
    { kana:"ギョ", romaji:"gyo" },
    { kana:"ジャ", romaji:"ja" },
    { kana:"ジュ", romaji:"ju" },
    { kana:"ジョ", romaji:"jo" },
    { kana:"ビャ", romaji:"bya" },
    { kana:"ビュ", romaji:"byu" },
    { kana:"ビョ", romaji:"byo" },
    { kana:"ピャ", romaji:"pya" },
    { kana:"ピュ", romaji:"pyu" },
    { kana:"ピョ", romaji:"pyo" }
  ]
};

katakanaPracticeData.test = [
  ...katakanaPracticeData[1],
  ...katakanaPracticeData[2],
  ...katakanaPracticeData[3],
  ...katakanaPracticeData[4],
  ...katakanaPracticeData[5],
  ...katakanaPracticeData[6],
  ...katakanaPracticeData[7],
  ...katakanaPracticeData[8],
  ...katakanaPracticeData[9],
  ...katakanaPracticeData[10]
];

const pagePracticeType = document.body.dataset.practice || "hiragana";
function getPracticeData(){
  return pagePracticeType === "katakana" ? katakanaPracticeData : practiceData;
}

function togglePractice(part, button){
  const allPanels = document.querySelectorAll(".practice-panel");
  const allButtons = document.querySelectorAll(".practice-title-btn");

  allPanels.forEach(panel => {
    panel.classList.remove("open");
    panel.innerHTML = "";
  });

  allButtons.forEach(btn => {
    btn.classList.remove("active");
    btn.textContent = btn.textContent.replace("▼", "▶");
  });

  const panel = button.nextElementSibling;
  panel.classList.add("open");

  button.classList.add("active");
  button.textContent = button.textContent.replace("▶", "▼");

  currentPanel = panel;
  startPractice(part);
}

function startPractice(part){
  currentPart = part;
  currentQuestionIndex = 0;
  currentScore = 0;

  const dataSet = getPracticeData();
  const baseData = shuffleArray([...dataSet[part]]).slice(0, 10);

  const romajiToKana = baseData.map(item => ({
    ...item,
    type: "romajiToKana"
  }));

  const kanaToRomaji = baseData.map(item => ({
    ...item,
    type: "kanaToRomaji"
  }));

  currentQuestions = [
    ...romajiToKana,
    ...kanaToRomaji
  ];

  showQuestion();
}

function showQuestion(){
  const q = currentQuestions[currentQuestionIndex];
  const practiceTitle = pagePracticeType === "katakana" ? "Katakana" : "Hiragana";

  const questionMain =
    q.type === "romajiToKana" ? q.romaji : q.kana;

  currentPanel.innerHTML = `
    <div class="practice-box">
      <div class="practice-box-title">${practiceTitle}</div>

      <div class="practice-bar">
        Câu ${currentQuestionIndex + 1} / ${currentQuestions.length}
      </div>

      <div class="practice-content">
        <p class="question-text">Chọn đáp án đúng.</p>

        <div class="question-main">${questionMain}</div>

        <div class="answer-grid" id="answerArea"></div>

        <div class="result-row">
          <p id="answerResult" class="answer-result"></p>

          <button class="next-question-btn"
                  id="nextQuestionBtn"
                  onclick="nextQuestion()"
                  disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  `;

  makeAnswers(q);
  playPracticeSound(q);
}
function makeAnswers(question){
  const answerArea = document.getElementById("answerArea");

  let choices = [question];

  if(pagePracticeType === "katakana" && question.type === "romajiToKana"){
    const katakanaPool = getPracticeData().test.filter(item => item.kana !== question.kana);
    const hiraganaPool = practiceData.test.filter(item => item.romaji !== question.romaji);

    while(choices.length < 3){
      const randomItem = katakanaPool[Math.floor(Math.random() * katakanaPool.length)];
      if(!choices.some(item => item.kana === randomItem.kana)){
        choices.push(randomItem);
      }
    }

    const hiraganaChoice = hiraganaPool[Math.floor(Math.random() * hiraganaPool.length)];
    choices.push(hiraganaChoice);
  } else {
    const allData = getPracticeData().test;

    while(choices.length < 4){
      const randomItem = allData[Math.floor(Math.random() * allData.length)];

      if(!choices.some(item => item.kana === randomItem.kana)){
        choices.push(randomItem);
      }
    }
  }

  choices = shuffleArray(choices);

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";

    const answerText =
      question.type === "romajiToKana" ? choice.kana : choice.romaji;

    const correctAnswer =
      question.type === "romajiToKana" ? question.kana : question.romaji;

    btn.textContent = answerText;
    btn.onclick = () => checkAnswer(btn, answerText, correctAnswer);

    answerArea.appendChild(btn);
  });
}

function checkAnswer(button, selected, correct){
  const buttons = document.querySelectorAll(".answer-btn");
  const resultText = document.getElementById("answerResult");

  buttons.forEach(btn => {
    btn.disabled = true;

    if(btn.textContent === correct){
      btn.classList.add("correct");
    }

    if(btn === button && selected !== correct){
      btn.classList.add("wrong");
    }
  });

 if(selected === correct){
  currentScore++;
  resultText.innerHTML = `<div class="result-emoji">😊🎉</div>`;
}else{
  resultText.innerHTML = `<div class="result-emoji">😢</div>`;
}

document.getElementById("nextQuestionBtn").disabled = false;
}

function nextQuestion(){
  currentQuestionIndex++;

  if(currentQuestionIndex < currentQuestions.length){
    showQuestion();
  }else{
    showResult();
  }
}

function showResult(){

  let title = "";
  let message = "";

  const percent = currentScore / currentQuestions.length;

  if(percent === 1){
    title = "🌟 Tuyệt vời!";
  }
  else if(percent >= 0.8){
    title = "🎉 Rất tốt!";
  }
  else if(percent >= 0.6){
    title = "👍 Khá lắm!";
  }
  else if(percent >= 0.4){
    title = "😊 Cố gắng thêm nhé!";
  }
  else{
    title = "💪 Đừng nản! Thử lại nào";
  }

  currentPanel.innerHTML = `
    <div class="practice-box">

      <div class="practice-box-title">
        Kết quả
      </div>

      <div class="practice-bar">
        ${title}
      </div>

      <div class="practice-content">

        <div class="question-main">
          ${currentScore} / ${currentQuestions.length}
        </div>

        <p class="answer-result">
          ${message}
        </p>

        <button class="next-question-btn"
                style="display:block;"
                onclick="restartPractice()">
          Làm lại
        </button>

      </div>

    </div>
  `;
}
function restartPractice(){
  startPractice(currentPart);
}
function shuffleArray(array){
  return array.sort(() => Math.random() - 0.5);
}