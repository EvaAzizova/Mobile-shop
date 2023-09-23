    function updateTimer() {
        const now = new Date();
        const targetDate = new Date("2023-10-01T00:00:00"); // дату и время окончания таймера
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            // Таймер истек
            document.getElementById("countdown").textContent = "Время истекло";
        } else {
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDifference / 1000) % 60);

            document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
        }
    }

    setInterval(updateTimer, 1000);
    updateTimer(); 

    document.addEventListener("DOMContentLoaded", function () {
        const imageSlider = document.querySelector(".image-slider");
        imageSlider.classList.add("play");
    });