const birthday=new Date("June 22, 2026 19:30:00")

const days=document.getElementById("days")
const hours=document.getElementById("hours")
const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds")

const updateCountdown=()=>{
    const now = new Date();

    const difference = birthday - now;

    if (difference <= 0) {

        document.querySelector(".container").innerHTML = `
            <h1>🎉 Happy Birthday! 🎂</h1>
        `;

        clearInterval(timer);
        return;
}
const d = Math.floor(difference / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const s = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
}

// Run immediately when page loads
updateCountdown();

// Update every second
const timer = setInterval(updateCountdown, 1000);