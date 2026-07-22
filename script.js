// ==========================
// Wait for page to load
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Welcome Screen
    // ==========================

    const welcomeScreen = document.getElementById("welcome-screen");
    const website = document.getElementById("website");
    const enterButton = document.getElementById("enterSite");

    // Hide website until invitation is opened
    website.style.display = "none";

    enterButton.addEventListener("click", function () {

        welcomeScreen.style.display = "none";

        website.style.display = "block";

        // Start music after user interaction
        if (music) {
            music.play().catch(() => {});
            musicButton.textContent = "⏸";
        }

    });

    // ==========================
    // Countdown Timer
    // ==========================

    const weddingDate = new Date("August 12, 2026 15:00:00").getTime();

    function updateCountdown() {

        const now = new Date().getTime();

        const distance = weddingDate - now;

        if (distance <= 0) {

            document.querySelector(".countdown").innerHTML =
                "<h2>💍 Today Is Our Wedding Day! ❤️</h2>";

            return;

        }

        document.getElementById("days").textContent =
            Math.floor(distance / (1000 * 60 * 60 * 24));

        document.getElementById("hours").textContent =
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        document.getElementById("minutes").textContent =
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("seconds").textContent =
            Math.floor((distance % (1000 * 60)) / 1000);

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

    // ==========================
    // RSVP
    // ==========================

    const form = document.getElementById("rsvpForm");

    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const guest = document.getElementById("guestName").value;

        const attendance = document.getElementById("attendance").value;

        if (attendance.includes("Yes")) {

            message.innerHTML =
                `❤️ Thank you <strong>${guest}</strong>! We can't wait to celebrate with you.`;

        } else {

            message.innerHTML =
                `💐 Thank you <strong>${guest}</strong>. We'll miss you and appreciate your kind wishes.`;

        }

        form.reset();

    });

    // ==========================
    // Music
    // ==========================

    const music = document.getElementById("music");

    const musicButton = document.getElementById("musicBtn");

    musicButton.addEventListener("click", function () {

        if (music.paused) {

            music.play();

            musicButton.textContent = "⏸";

        } else {

            music.pause();

            musicButton.textContent = "🎵";

        }

    });

    // ==========================
    // Fade In Sections
    // ==========================

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    });

    document.querySelectorAll(".section").forEach(function (section) {

        section.style.opacity = "0";

        section.style.transform = "translateY(40px)";

        section.style.transition = "1s";

        observer.observe(section);

    });

});
