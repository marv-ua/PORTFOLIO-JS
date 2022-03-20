const timerBlock = document.querySelector('.timer__time');
const deadline = '31 march 2022';

let interval;

const updateClock = () => {
    const date = new Date().getTime();      // в мс от 01.01.1970
    const dateDeadline = new Date(deadline).getTime();
    const timeRemaining = (dateDeadline - date) / 1000; // разница в секундах

    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);  // округлили в меньшую сторону до целого
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    const fDays = days < 10 ? '0' + days : days;
    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSecons = seconds < 10 ? '0' + seconds : seconds;
    
    timerBlock.textContent = `${fDays}:${fHours}:${fMinutes}:${fSecons}`;    

    if (timeRemaining <= 0) {
        clearInterval(interval);
        timerBlock.textContent = '00:00:00';
    }
}

updateClock();

// setInterval(() => {
//     updateClock();
// }, 500); // 1c
interval = setInterval(updateClock, 500);