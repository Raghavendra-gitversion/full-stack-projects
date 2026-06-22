const birthday = new Date("June 21, 2026 7:00:00");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// 1. Declare the timer variable up here using 'let' so it's in scope
let timer;

const updateCountdown = () => {
    const now = new Date();
    const difference = birthday - now;

    if (difference <= 0) {
        document.querySelector(".card").style.display = "none";
        document.querySelector("h2").style.display = "none";
        document.getElementById("birthdayContent").style.display = "block";

        // 2. This is now perfectly safe to call
        clearInterval(timer);
        return;
    }
    
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
}

// 3. Assign the interval to the pre-declared timer variable
timer = setInterval(updateCountdown, 1000);

// 4. Run immediately when page loads (now safe because 'timer' is initialized)
updateCountdown();