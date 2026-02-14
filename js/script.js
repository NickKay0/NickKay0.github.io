// 🔹 SET YOUR DATES HERE
const startDate = new Date("2021-11-20T03:00:00"); // Count UP from this

// Get elements
const loveBtn = document.getElementById("loveImageBtn");
const loveModal = document.getElementById("loveModal");
const loveModalClose = document.querySelector(".love-modal-close");

// Open modal on button click
loveBtn.onclick = () => {
    // Reset animation
    const img = document.getElementById("loveModalImg");
    img.style.animation = "none";
    // Force reflow
    void img.offsetWidth;
    img.style.animation = "fadeInImage 0.6s ease forwards";

    loveModal.style.display = "block";
};


// Close modal on X click
loveModalClose.onclick = () => {
    loveModal.style.display = "none";
};

// Close modal if clicked outside image
loveModal.onclick = (e) => {
    if (e.target === loveModal) {
        loveModal.style.display = "none";
    }
};


function updateTimers() {
    const now = new Date();

    // COUNT UP
    const upDiff = now - startDate;

    const upDays = Math.floor(upDiff / (1000 * 60 * 60 * 24));
    const upHours = Math.floor((upDiff / (1000 * 60 * 60)) % 24);
    const upMinutes = Math.floor((upDiff / (1000 * 60)) % 60);
    const upSeconds = Math.floor((upDiff / 1000) % 60);

    document.getElementById("countup").textContent =
        `${upDays} days, ${upHours} hours, ${upMinutes} minutes and ${upSeconds} seconds`;

    // VALENTINE'S DAY
    let year = now.getFullYear();
    let valentinesDate = new Date(year, 1, 14, 0, 0, 0); 
    // Month is 0-indexed → 1 = February

    // If this year's Feb 14 already passed, use next year
    if (now > valentinesDate) {
        valentinesDate = new Date(year + 1, 1, 14, 0, 0, 0);
    }

    // VALENTINE'S COUNTDOWN
    const valDiff = valentinesDate - now;

    const valDays = Math.floor(valDiff / (1000 * 60 * 60 * 24));
    const valHours = Math.floor((valDiff / (1000 * 60 * 60)) % 24);
    const valMinutes = Math.floor((valDiff / (1000 * 60)) % 60);
    const valSeconds = Math.floor((valDiff / 1000) % 60);

    if (valDays >= 364) {
        document.getElementById("countdown-valentines").textContent = "❤️ It's here! :3";
    }else{
        document.getElementById("countdown-valentines").textContent =`${valDays} days,  ${valHours} hours, ${valMinutes} minutes and ${valSeconds} seconds`;
    }

    // Birthday
    let birthdate = new Date(year, 0, 25, 0, 0, 0); 
    if (now > birthdate) {
        birthdate = new Date(year + 1, 0, 25, 0, 0, 0);
    }

    // BIRTHDAY COUNTDOWN
    const valDiff1 = birthdate - now;

    const valDays1 = Math.floor(valDiff1 / (1000 * 60 * 60 * 24));
    const valHours1 = Math.floor((valDiff1 / (1000 * 60 * 60)) % 24);
    const valMinutes1 = Math.floor((valDiff1 / (1000 * 60)) % 60);
    const valSeconds1 = Math.floor((valDiff1 / 1000) % 60);

    if (valDays1 >= 364) {
        document.getElementById("countdown-birthday").textContent = "❤️ It's here! :3";
    }else{
        document.getElementById("countdown-birthday").textContent =`${valDays1} days,  ${valHours1} hours, ${valMinutes1} minutes and ${valSeconds1} seconds`;
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // Random size
    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    // Random duration
    heart.style.animationDuration = (4 + Math.random() * 2) + "s";

    document.querySelector(".hearts-container").appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create hearts continuously
setInterval(createHeart, 800);
setInterval(updateTimers, 1000);
updateTimers();