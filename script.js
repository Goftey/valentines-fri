// ❤️ ENTER SITE FUNCTION WITH TWO AUDIOS LOOPING
// function enterSite() {
//     const audios = [
//         document.getElementById("music1"),
//         document.getElementById("music2")
//     ];

//     let current = 0;

//     function playNext() {
//         audios[current].play();
//         audios[current].addEventListener("ended", () => {
//             current = (current + 1) % audios.length; // loop between 0 and 1
//             playNext();
//         }, { once: true });
//     }

//     playNext();

//     setTimeout(() => {
//     window.location.href = "letter.html";
// }, 5000); // 5 seconds

// }

function enterSite() {

    localStorage.setItem("musicPlaying", "true");

    const music = document.getElementById("bgMusic");

    music.play();

    window.location.href = "letter.html";
}
window.addEventListener("load", () => {

    const music = document.getElementById("bgMusic");

    
    if (localStorage.getItem("musicPlaying") === "true") {

        // Resume from last saved time
        const savedTime = localStorage.getItem("musicTime");

        if (savedTime) {
            music.currentTime = savedTime;
        }

        music.play().catch(() => {});
    }

    // Save music position constantly
    setInterval(() => {
        if (!music.paused) {
            localStorage.setItem("musicTime", music.currentTime);
        }
    }, 1000);

});
function stopMusic(){
    localStorage.removeItem("musicPlaying");
    localStorage.removeItem("musicTime");
}


// ❤️ FLOATING HEARTS
function createFloatingHearts(){
    setInterval(()=>{
        let heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random()*100 + "vw";
        heart.style.fontSize = (Math.random()*20+15)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },4000);

    },800);
}

createFloatingHearts();


// ❤️ CONFETTI EFFECT
function launchConfetti(){

    for(let i=0;i<50;i++){

        let confetti = document.createElement("div");
        confetti.innerHTML = "💖";
        confetti.style.position="fixed";
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-10px";
        confetti.style.fontSize="20px";

        confetti.style.animation="fall 2s linear";

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },2000);
    }
}


// CONFETTI FALL STYLE
let style = document.createElement("style");
style.innerHTML = `
@keyframes fall{
    to{
        transform: translateY(100vh);
        opacity:0;
    }
}`;
document.head.appendChild(style);
// ❤️ LOVE LETTER TYPING EFFECT
let text = `My Dearest Frida,

From the very first moment our paths crossed, I knew something magical had begun. Your smile lights up my world brighter than the sun on a summer day, and your laughter… oh, your laughter is my favorite song in the entire universe.

Every little thing about you amazes me. The way you care, the way you dream, and yes… even the way you steal the last sipp of minute maid without telling me 😏.

I love how our hearts understand each other without words, how we can be silly together, and how even on the quietest days, just being near you fills me with happiness.

Funny little truth: If I had a penny for every time I thought of you… I’d be rich enough to buy you all the chocolate in the world. But honestly, nothing compares to having you.

You are my sunshine, my confidant, my partner in laughter, my safe place, and the love of my life. Every day with you is a gift I never want to take for granted.

And just so you know, I promise to always:

Laugh at your jokes  😅

Hold your hand through life’s storms

And to love you endlessly, more than all the stars in the sky combined.

Happy Valentine’s Day, my darling Frida. Thank you for being you… perfectly, wonderfully, and hilariously you. ❤️

Forever yours,
kiplimo kibet`;

let i = 0;

function typing() {
    const letterElement = document.getElementById("letter");

    if (letterElement && i < text.length) {
        // Preserve line breaks
        if (text.charAt(i) === "\n") {
            letterElement.innerHTML += "<br>";
        } else {
            letterElement.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typing, 70);
    }
}

// Start typing once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    typing();
});


// ❤️ LOVE REASONS GENERATOR
let reasons = [
    "Your smile melts my heart ❤️",
    "You support my dreams",
    "You make my life fun",
    "You are my best friend",
    "You are my happiness",
    "You make every day special",
    "You believe in me",
    "You make my world brighter"
];

function showReason(){
    let reasonElement = document.getElementById("reason");

    if(reasonElement){
        let random = Math.floor(Math.random()*reasons.length);
        reasonElement.innerText = reasons[random];
    }
}


// ❤️ MUSIC CONTROL
function playMusic(){
    let music = document.getElementById("music");
    if(music){
        music.play();
    }
}


// ❤️ LOVE DAY COUNTER
function loveCounter() {
    const startDate = new Date("2024-02-14"); // Your special date
    const today = new Date();

    const diff = today - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const counter = document.getElementById("loveDays");
    if (counter) {
        counter.innerText = `${days} days together ❤️Happy anniversary too Babyy`;
    }
}

// Call counter
loveCounter();


// ❤️ “YES” BUTTON FUNCTIONS
function yesLove() {
    alert("Yay! I knew you’d say yes 😘❤️");
}


// ❤️ SURPRISE MESSAGE
function surpriseMessage() {
    alert("You’ve unlocked a secret surprise! 🎁❤️\nCheck your heart… it’s full of love and chocolate 😏🍫");
}

// ❤️ PHOTO POPUP (Lightbox Effect)
function openPhoto(img){
    let popup = document.createElement("div");
    popup.className = "photo-popup";

    popup.innerHTML = `
        <div class="popup-content">
            <img src="${img.src}">
            <span class="close-btn">X</span>
        </div>
    `;

    document.body.appendChild(popup);

    popup.querySelector(".close-btn").onclick = () => {
        popup.remove();
    };
}


// ❤️ ADD CLICK EVENT TO ALL GALLERY IMAGES
window.onload = function(){
    let images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        img.addEventListener("click", () => openPhoto(img));
    });

    createFloatingHearts();
};


// ❤️ FLOATING HEARTS ANIMATION
function createFloatingHearts(){
    setInterval(() => {

        let heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        },4000);

    },800);
}


// ❤️ SURPRISE POPUP MESSAGE
function surpriseMessage(){
    alert("You are the best thing that ever happened to me ❤️");
}

/* =========================================================
   ❤️ GLOBAL SITE ACCESS GUARD (PASSWORD FIRST ALWAYS)
========================================================= */


/* =========================================================
   ❤️ PASSWORD + SECRET HINT SYSTEM (DAY YOU MET)
========================================================= */
let wrongAttempts = 0;

function checkPassword() {
    const password = document.getElementById("passwordInput")?.value;
    const correctPassword = "14022024"; // 🔴 CHANGE TO DAY YOU MET (DDMMYYYY)

    const errorMsg = document.getElementById("errorMsg");
    const hintMsg = document.getElementById("hintMsg");
    const input = document.getElementById("passwordInput");

    if (!password) return;

    if (password === correctPassword) {
        localStorage.setItem("loveUnlocked", "true");
        window.location.href = "slideshow.html";
    } else {
        wrongAttempts++;

        if (errorMsg) {
            errorMsg.innerText = "That’s not our special memory date 😢 Try again baby ❤️";
        }

        if (input) {
            input.classList.add("shake");
            setTimeout(() => input.classList.remove("shake"), 400);
        }

        if (hintMsg) {
            switch (wrongAttempts) {
                case 1:
                    hintMsg.innerText = "It was the day two hearts accidentally found each other ❤️";
                    break;
                case 2:
                    hintMsg.innerText = "Remember the first time we talked and everything felt different?";
                    break;
                case 3:
                    hintMsg.innerText = "It was the beginning of our story… the day we met 💕";
                    break;
                case 4:
                    hintMsg.innerText = "Think about the first day we became part of each other’s lives 📅";
                    break;
                default:
                    hintMsg.innerText = "You know this date better than anyone… it changed both our lives ❤️";
            }
        }
    }
}


/* =========================================================
   ❤️ PHOTO SLIDESHOW (ONLY RUNS ON slideshow.html)
========================================================= */
const slides = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let slideIndex = 0;

function startSlideshow() {
    const img = document.getElementById("slideImage");
    if (!img) return;

    setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        img.src = slides[slideIndex];
    }, 2000);
}

function goToMain() {
    window.location.href = "password.html";
}


/* =========================================================
   ❤️ BACKGROUND LOVE PARTICLES
========================================================= */
function createLoveParticles() {
    setInterval(() => {
        const particle = document.createElement("span");
        particle.innerHTML = "💖";
        particle.style.position = "fixed";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.bottom = "0";
        particle.style.fontSize = "20px";
        particle.style.animation = "particleFloat 5s linear";

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 5000);
    }, 600);
}


/* =========================================================
   ❤️ LOVE DAY COUNTER (USED ON FINAL PAGE)
========================================================= */
function loveCounter() {
    const startDate = new Date("2024-02-14"); // 🔴 CHANGE IF NEEDED
    const today = new Date();

    const diff = today - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const counter = document.getElementById("loveDays");
    if (counter) {
        counter.innerText = `${days} days together ❤️`;
    }
}


/* =========================================================
   ❤️ PAGE INITIALIZER (SAFE & CONTROLLED)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

    // Start slideshow only if image exists
    startSlideshow();

    // Start particles on all unlocked pages
    if (localStorage.getItem("loveUnlocked") === "true") {
        createLoveParticles();
    }

    // Love counter (final page)
    loveCounter();

    // Hide navigation if locked
    const nav = document.getElementById("navBar");
    if (nav && localStorage.getItem("loveUnlocked") !== "true") {
        nav.style.display = "none";
    }
});


/* =========================================================
   ❤️ RESET (FOR TESTING ONLY)
========================================================= */
function resetLove() {
    localStorage.removeItem("loveUnlocked");
    window.location.href = "password.html";
}
