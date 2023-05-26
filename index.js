let meks = document.querySelector('.meks')
let output = document.querySelector('.meksikanec')
let days = document.getElementById('day')
let houses = document.getElementById('hous')
let minutes = document.getElementById('minute')
let sik = document.getElementById('sek')
let times = document.querySelectorAll('.times')



meks.addEventListener('click', function () {
for (let i = 0; i < times.length; i++) {
    times[i].classList.toggle('i')
}
meks.classList.toggle('h');

   

})
setInterval(function(){
const time = new Date();

    const dedLine = new Date('2023, 05, 20') - time;
// console.log(dedLine)
const day = Math.floor(dedLine / 1000 / 60 / 60/24)
// console.log(day)
const hous = Math.floor(dedLine /1000/60 /60)%24
// console.log(hous)
const minute = Math.floor(dedLine / 1000 / 60)%60
// console.log(minute)
const sek = Math.floor(dedLine /1000)%60
// console.log(sek)
 days.innerHTML = `${day}:`
    houses.innerHTML = `${hous}:`
    minutes.innerHTML = `${minute}:`
    sik.innerHTML = `${sek}`
    console.log("askdals")
},1000)
