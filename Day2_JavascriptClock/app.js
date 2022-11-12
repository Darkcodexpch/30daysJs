const hour = document.querySelector('.hour-hand');
const min = document.querySelector('.min-hand');
const second = document.querySelector('.second-hand');

const timeShow = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const mintsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    console.log(hourDegrees)
    second.style.transform = `rotate(${secondsDegrees}deg)`;
    min.style.transform = `rotate(${mintsDegrees}deg)`;
    hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(timeShow, 1000);
timeShow();