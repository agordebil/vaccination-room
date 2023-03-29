//orta animasyon
const circle = document.querySelector('.circle');
const progressBar = document.querySelector('.respond');
//minutes, dakika olarak gelen değişkeni milisaniyeye çevirir.
let minutes = 0.05;
let time = minutes * 60;
let setTime = `${time}000`;
let sum = 0;
let increment = function () {
  if (sum < 284) {
    sum = sum + 7;
    setTimeout(increment, setTime);
    progressBar.style.strokeDashoffset = sum;
  } else {
    return sum;
  }
};
setTimeout(increment, 1000);
