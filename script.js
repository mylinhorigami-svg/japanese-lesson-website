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
    return;
  }

  const code = kana.codePointAt(0);

  fetch(`../../../assets/animCJK/svgsJaKana/${code}.svg?v=${Date.now()}`)
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
  kanaAudio.src = `../../../assets/audio/hiragana/${currentAudioName}.mp3`;

  btn.classList.add("playing");

  kanaAudio.play().catch(error=>{
    console.log("Không phát được âm thanh:", error);
  });

  setTimeout(()=>{
    btn.classList.remove("playing");
  }, 500);
}