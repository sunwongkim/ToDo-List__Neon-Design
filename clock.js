const clock = document.querySelector(".clock");

function showTime() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const nowTime = hours + ":" + minutes + ":" + seconds;
  clock.innerHTML = nowTime;
}
showTime(); // 시작 시 딜레이 없이 시계 바로 노출
setInterval(showTime, 1000);
