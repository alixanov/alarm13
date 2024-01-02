
let time = new Date();
const vaqt = document.getElementById("soat");
const alarmTimeInput = document.getElementById("alarmTime");
let alarmTime;

console.log(time.getFullYear() + "." +
    (time.getMonth() + 1) + "." +
    time.getDate());

setInterval(() => {
    let currentTime = new Date();
    vaqt.innerHTML = (
        currentTime.getHours() + ":" +
        currentTime.getMinutes() + ":" +
        currentTime.getSeconds()
    );

    // Проверяем, наступило ли время будильника
    if (alarmTime && currentTime >= alarmTime) {
        alert("Время для намаза!");
        alarmTime = null; // Сбрасываем время будильника после срабатывания
    }
}, 1000);

function setAlarm() {
    const inputTime = alarmTimeInput.value;
    if (inputTime) {
        const inputTimeArray = inputTime.split(":");
        alarmTime = new Date();
        alarmTime.setHours(parseInt(inputTimeArray[0], 10));
        alarmTime.setMinutes(parseInt(inputTimeArray[1], 10));
        alarmTime.setSeconds(0);

        alert("Будильник установлен на " + inputTime);
    } else {
        alert("Введите время для будильника");
    }
}


const weekdays = [
    "Sunday ",
    "Monday",
    "Tusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let timeNow  = document.getElementById("haftakunlar");
let today = weekdays [time.getDay()];
console.log(`Today is ${today}`);
timeNow.innerHTML = today
let month = document.getElementById("oynomi");

const monthinText = time.toLocaleString("en-us", {month:"long"});
console.log(monthinText);
month.innerHTML = monthinText;


 const sana = document.getElementById ("sana")
sana.innerHTML= time.getDate()











