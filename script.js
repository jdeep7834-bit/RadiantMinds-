/* ==========================================
   DYNAMICS OF HAPPINESS
   ADVANCED PROJECT JAVASCRIPT
========================================== */

/* ==========================================
   OPEN / CLOSE GAMES
========================================== */

const gameSections = document.querySelectorAll(".game-section");

function openGame(id) {

    gameSections.forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");

    window.scrollTo({
        top: document.getElementById(id).offsetTop - 20,
        behavior: "smooth"
    });
}

function closeGames() {

    gameSections.forEach(section => {
        section.classList.add("hidden");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ==========================================
   BUBBLE POP GAME
========================================== */

const bubbleContainer = document.getElementById("bubbleContainer");
const bubbleScoreElement = document.getElementById("bubbleScore");

let bubbleScore = 0;

function createBubble() {

    if (!bubbleContainer) return;

    const bubble = document.createElement("div");

    bubble.classList.add("bubble");

    const size = Math.random() * 60 + 30;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    bubble.style.left =
        Math.random() * (bubbleContainer.clientWidth - size) + "px";

    bubble.style.bottom = "-80px";

    bubble.onclick = () => {

        bubbleScore++;

        bubbleScoreElement.textContent = bubbleScore;

        bubble.style.transform = "scale(1.5)";
        bubble.style.opacity = "0";

        setTimeout(() => {
            bubble.remove();
        }, 200);
    };

    bubbleContainer.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(() => {

    if (!document.getElementById("bubbleGame").classList.contains("hidden")) {
        createBubble();
    }

}, 700);

/* ==========================================
   BREATHING RHYTHM GAME
========================================== */

const breathText = document.getElementById("breathText");

const breathingStates = [
    "Breathe In",
    "Hold",
    "Breathe Out",
    "Hold"
];

let breathingIndex = 0;

setInterval(() => {

    if (breathText) {

        breathingIndex++;

        if (breathingIndex >= breathingStates.length) {
            breathingIndex = 0;
        }

        breathText.textContent =
            breathingStates[breathingIndex];
    }

}, 4000);

/* ==========================================
   CLOUD CATCHER GAME
========================================== */

const cloudContainer =
    document.getElementById("cloudContainer");

const cloudScoreElement =
    document.getElementById("cloudScore");

let cloudScore = 0;

function createCloud() {

    if (!cloudContainer) return;

    const cloud = document.createElement("div");

    cloud.classList.add("cloud");

    cloud.innerHTML = "☁️";

    cloud.style.top =
        Math.random() * 400 + "px";

    cloud.style.animationDuration =
        (Math.random() * 5 + 8) + "s";

    cloud.onclick = () => {

        cloudScore++;

        cloudScoreElement.textContent =
            cloudScore;

        cloud.remove();
    };

    cloudContainer.appendChild(cloud);

    setTimeout(() => {

        cloud.remove();

    }, 14000);
}

setInterval(() => {

    if (!document.getElementById("cloudGame")
        .classList.contains("hidden")) {

        createCloud();
    }

}, 1200);

/* ==========================================
   COLOR HARMONY PAINTER
========================================== */

const paintCanvas =
    document.getElementById("paintCanvas");

const paintCtx =
    paintCanvas.getContext("2d");

let painting = false;

function resizePaintCanvas() {

    paintCanvas.width =
        paintCanvas.offsetWidth;

    paintCanvas.height =
        paintCanvas.offsetHeight;
}

resizePaintCanvas();

window.addEventListener(
    "resize",
    resizePaintCanvas
);

paintCanvas.addEventListener(
    "mousedown",
    () => painting = true
);

paintCanvas.addEventListener(
    "mouseup",
    () => {
        painting = false;
        paintCtx.beginPath();
    }
);

paintCanvas.addEventListener(
    "mouseleave",
    () => {
        painting = false;
        paintCtx.beginPath();
    }
);

paintCanvas.addEventListener(
    "mousemove",
    drawPaint
);

function drawPaint(e) {

    if (!painting) return;

    const color =
        document.getElementById("colorPicker").value;

    paintCtx.lineWidth = 8;
    paintCtx.lineCap = "round";
    paintCtx.strokeStyle = color;

    paintCtx.lineTo(
        e.offsetX,
        e.offsetY
    );

    paintCtx.stroke();

    paintCtx.beginPath();

    paintCtx.moveTo(
        e.offsetX,
        e.offsetY
    );
}

function clearCanvas() {

    paintCtx.clearRect(
        0,
        0,
        paintCanvas.width,
        paintCanvas.height
    );
}

/* ==========================================
   ZEN GARDEN GAME
========================================== */

const zenCanvas =
    document.getElementById("zenCanvas");

const zenCtx =
    zenCanvas.getContext("2d");

let zenDrawing = false;

function resizeZenCanvas() {

    zenCanvas.width =
        zenCanvas.offsetWidth;

    zenCanvas.height =
        zenCanvas.offsetHeight;

    zenCtx.fillStyle = "#f3d9a5";

    zenCtx.fillRect(
        0,
        0,
        zenCanvas.width,
        zenCanvas.height
    );
}

resizeZenCanvas();

window.addEventListener(
    "resize",
    resizeZenCanvas
);

zenCanvas.addEventListener(
    "mousedown",
    () => zenDrawing = true
);

zenCanvas.addEventListener(
    "mouseup",
    () => {
        zenDrawing = false;
        zenCtx.beginPath();
    }
);

zenCanvas.addEventListener(
    "mouseleave",
    () => {
        zenDrawing = false;
        zenCtx.beginPath();
    }
);

zenCanvas.addEventListener(
    "mousemove",
    drawZen
);

function drawZen(e) {

    if (!zenDrawing) return;

    zenCtx.lineWidth = 4;

    zenCtx.strokeStyle =
        "rgba(120,90,40,0.5)";

    zenCtx.lineCap = "round";

    zenCtx.lineTo(
        e.offsetX,
        e.offsetY
    );

    zenCtx.stroke();

    zenCtx.beginPath();

    zenCtx.moveTo(
        e.offsetX,
        e.offsetY
    );
}

/* ==========================================
   MEMORY MATCH GAME
========================================== */

const memoryBoard =
    document.getElementById("memoryBoard");

const memoryScoreElement =
    document.getElementById("memoryScore");

const symbols = [
    "😊",
    "🌈",
    "🌸",
    "🦋",
    "☀️",
    "🌿",
    "😊",
    "🌈",
    "🌸",
    "🦋",
    "☀️",
    "🌿"
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let memoryScore = 0;

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [array[i], array[j]] =
            [array[j], array[i]];
    }

    return array;
}

function initializeMemoryGame() {

    if (!memoryBoard) return;

    memoryBoard.innerHTML = "";

    memoryScore = 0;

    memoryScoreElement.textContent =
        memoryScore;

    shuffle(symbols);

    symbols.forEach(symbol => {

        const card =
            document.createElement("div");

        card.classList.add(
            "memory-card"
        );

        card.dataset.symbol =
            symbol;

        card.textContent = "?";

        card.addEventListener(
            "click",
            flipCard
        );

        memoryBoard.appendChild(card);
    });
}

function flipCard() {

    if (lockBoard) return;

    if (this === firstCard) return;

    this.classList.add("flipped");

    this.textContent =
        this.dataset.symbol;

    if (!firstCard) {

        firstCard = this;

        return;
    }

    secondCard = this;

    checkMatch();
}

function checkMatch() {

    const isMatch =
        firstCard.dataset.symbol ===
        secondCard.dataset.symbol;

    if (isMatch) {

        disableCards();

    } else {

        unflipCards();
    }
}

function disableCards() {

    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    firstCard.removeEventListener(
        "click",
        flipCard
    );

    secondCard.removeEventListener(
        "click",
        flipCard
    );

    memoryScore++;

    memoryScoreElement.textContent =
        memoryScore;

    resetBoard();

    if (memoryScore === 6) {

        setTimeout(() => {

            alert(
                "🎉 Excellent! You completed the Memory Match game."
            );

        }, 500);
    }
}

function unflipCards() {

    lockBoard = true;

    setTimeout(() => {

        firstCard.classList.remove(
            "flipped"
        );

        secondCard.classList.remove(
            "flipped"
        );

        firstCard.textContent = "?";
        secondCard.textContent = "?";

        resetBoard();

    }, 1000);
}

function resetBoard() {

    [firstCard,
        secondCard,
        lockBoard] = [null, null, false];
}

initializeMemoryGame();

/* ==========================================
   OPTIONAL HAPPY WELCOME
========================================== */

window.addEventListener(
    "load",
    () => {

        console.log(
            "Dynamics of Happiness Loaded Successfully"
        );
    }
);