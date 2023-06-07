let myHour = document.querySelector(".hour");
let myMinute = document.querySelector(".minute");

 function getTime() {
    let myTime = new Date();
    let hour = myTime.getHours();
    let minute = myTime.getMinutes();
console.log(hour.length);
    hour = hour.toString().length == 1 ? "0" + hour : hour;
    minute = minute.toString().length == 1 ? "0" + minute : minute

    myHour.textContent = hour;
    myMinute.textContent = minute
 }

 setInterval(getTime,1000)