function showTime() {
  const currtime = new Date()

  document.getElementById('hr').innerText = `${currtime.getHours() - 12}`
  document.getElementById('min').innerText = `${currtime.getMinutes()}`
  document.getElementById('sec').innerText = `${currtime.getSeconds()}`


} let inter = setInterval(showTime, 1000)
document.getElementById('stop').addEventListener('click', () => {
  clearInterval(inter);
})