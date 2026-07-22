// ===============================
// Wedding Countdown
// ===============================

const weddingDate = new Date("August 12, 2026 15:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.querySelector(".countdown").innerHTML =
            "<h2>💍 Today is Our Wedding Day! 💕</h2>";

    }

}, 1000);

// ===============================
// RSVP Form
// ===============================

const form = document.getElementById("rsvpForm");

const message = document.getElementById("message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const guest = document.getElementById("guestName").value;

    const attendance = document.getElementById("attendance").value;

    if (attendance.includes("Yes")) {

        message.innerHTML =
            `❤️ Thank you, <strong>${guest}</strong>! We can't wait to celebrate with you!`;

    } else {

        message.innerHTML =
            `💐 Thank you, <strong>${guest}</strong>. We'll miss you and appreciate your wishes.`;

    }

    form.reset();

});

// ===============================
// Background Music
// ===============================

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();

        musicBtn.innerHTML = "▶ Play Music";

    }

});

// ===============================
// Fade-in Animation
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "all 1s ease";

    observer.observe(section);

});
