const data = new Date()

const renderCalendar = () =>{
    
data.setDate(1)

const mesDias = document.querySelector(".dias");

const ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();

const antesUltimoDia = new Date(data.getFullYear(), data.getMonth(), 0).getDate();

const primeiroDiaIndex = data.getDay();

const ultimotDiaIndex = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDay();

const proximosDias = 7 - ultimotDiaIndex - 1;


const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
]; //var do mês

document.querySelector(".data h1").innerHTML = meses[data.getMonth()]

document.querySelector(".data p").innerHTML = new Date().toDateString()

let dias = "";

for (let x = primeiroDiaIndex; x > 0; x--) {
    dias += `<div class="dias_antes">${antesUltimoDia - x + 1}</div>`;
  }

for (let i = 1; i <= ultimoDia; i++) {
    if (i === new Date().getDate() && data.getMonth() === new Date().getMonth()) {
        dias += `<div class="hoje">${i}</div>`;
      } else {
        dias += `<div>${i}</div>`;
      }
  }

for (let j = 1; j <= proximosDias; j++) {
    dias += `<div class="dias_depois">${j}</div>`;
    mesDias.innerHTML = dias;
  }

}

  document.querySelector('.prev').addEventListener('click', () =>{
    data.setMonth(data.getMonth() - 1)
    renderCalendar()
  })

document.querySelector('.next').addEventListener('click', () =>{
    data.setMonth(data.getMonth() + 1) 
    renderCalendar()
  })

renderCalendar()


const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (s < 10) s = '0' + s

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s
})


