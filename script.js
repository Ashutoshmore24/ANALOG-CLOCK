const hr = document.getElementById('hour');
const min = document.getElementById('minute');
const sec = document.getElementById('second');

function displayTime() {

    let date = new Date();

    let hh = date.getHours() % 12;
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Tick movement (no smooth animation)
    const hRotation = (hh * 30) + (mm * 0.5);
    const mRotation = (mm * 6);
    const sRotation = (ss * 6);

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    
}

displayTime();
setInterval(displayTime, 1000);
