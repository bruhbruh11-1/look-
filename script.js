let puzzleAnswer;
let currentBgIndex = 0;
const bgImages = [
    "https://i.ibb.co/QjFsFmbX/s.jpg",
    "https://i.ibb.co/ZPgn5MF/download.jpg",
    "https://i.ibb.co/cc5PVT1t/ya-l-kurt.jpg",
    "https://i.ibb.co/F4VcDhGz/hacker-hd-photos-jakearfin.jpg",
    "https://i.ibb.co/v6LNF3XX/image.jpg"
];

function startVerification() {
    document.getElementById("verificationSection").classList.remove("hidden");
}

function puzzleQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    puzzleAnswer = num1 + num2;
    document.getElementById("puzzleQuestion").innerText = `${num1} + ${num2} = ?`;
    document.getElementById("puzzleSection").classList.remove("hidden");
}

function checkPuzzle() {
    const userAnswer = document.getElementById("puzzleAnswer").value;
    if (parseInt(userAnswer) === puzzleAnswer) {
        fakeSearch();
    } else {
        alert("Wrong answer! Try again.");
    }
}

function fakeSearch() {
    const loadingMsg = document.getElementById("loadingMessage");
    loadingMsg.classList.remove("hidden");
    loadingMsg.innerHTML = "?? Searching records... Please wait.";

    setTimeout(() => {
        loadingMsg.innerHTML = "?? Connecting to databases...";
        
        setTimeout(() => {
            loadingMsg.innerHTML = "?? Fetching data...";
            
            setTimeout(() => {
                loadingMsg.classList.add("hidden");
                alert("? Unable to fetch information. Try again in 30 seconds.");
            }, 5000);

        }, 5000);
    }, 3000);
}

// Show Ads in Random Positions
function showAd() {
    const ads = ["ad1", "ad2", "ad3"];
    const ad = document.getElementById(ads[Math.floor(Math.random() * ads.length)]);
    ad.style.top = Math.floor(Math.random() * 70) + "vh";
    ad.style.left = Math.floor(Math.random() * 70) + "vw";
    ad.classList.remove("hidden");

    setTimeout(() => ad.classList.add("hidden"), 5000);
}
setInterval(showAd, 2000);

// Background Slider
function changeBackground() {
    document.body.style.backgroundImage = `url(${bgImages[currentBgIndex]})`;
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;
}
setInterval(changeBackground, 3000);
changeBackground();