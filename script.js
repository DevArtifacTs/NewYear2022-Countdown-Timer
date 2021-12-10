const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const newyear2022 = new Date("December 31, 2021 00:00:00").getTime();

function injectElement(target, countdown) {
    const elem = document.querySelector(`${target} `)
    elem.innerText = countdown;


}


function countdown() {
    const now = new Date().getTime();
    const timeLeft = newyear2022 - now;

    const dayLeft = Math.floor(timeLeft / day);
    const hourLeft = Math.floor((timeLeft % day) / hour);
    const minLeft = Math.floor((timeLeft % hour) / minute);
    const secLeft = Math.floor((timeLeft % minute) / second);

    injectElement("#day", dayLeft);
    injectElement("#hour", hourLeft);
    injectElement("#minute", minLeft);
    injectElement("#second", secLeft);

    textBlink(".blink", "2022");
}

function textBlink(target, text) {
    const elem = document.querySelector(` ${target} `);
    // elem.style.color = "#FFFFFF";
    // elem.innerText = text;
    setInterval(() => {
        elem.style.color = "#96C7C1";
        elem.innerText = text;
    }, 1500)
    setInterval(() => {
        elem.style.color = "#D0CAB2";
        elem.innerText = text;
    }, 3000)

}

function run() {
    setInterval(countdown, 1000);


}

run();