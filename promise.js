
let container = document.querySelector('.cont');
let input = document.querySelector('.poner')
let knopcka = document.querySelector('.lupa')
console.log(container)
let modal = document.querySelector('.modal')
let big = document.querySelector('.big')
let close=document.querySelector('.close')

let openModal =document.querySelector('.openModal')

knopcka.addEventListener("click", Search);

input.addEventListener('keydown', function (event) {
    const KeyName = event.key;

    if (KeyName === 'Enter') {
       Search()
      }
    
})
function Search(){

    console.log(input.value)

    const coffee = fetch('https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo');
    coffee.then(resp => resp.json())
.then (coffee => showImg(coffee))
.catch(Error => console.log(Error));
}

function showImg(item){

for(let i = 0; i<item.results.length; i++) {
  

    let url=item.results[i].urls.raw
    // console.log(url)

    let EL = document.createElement('img');
    EL.className = 'item';
    // EL.style.backgroundImage =`url(${item.results[i].urls.raw})`;
  EL.setAttribute('src', item.results[i].urls.small)
    container.appendChild(EL);
    let itemHTML=document.getElementsByClassName('item')


    for(let i=0; i<itemHTML.length;i++){
        itemHTML[i].addEventListener('dblclick', openF)
        // console.log(item[i])
    }
  

  
}
}

function openF(e){
    
    console.log(e.target.getAttribute('src'))
    let url =e.target.getAttribute('src')
    
        // item.results[i]
    modal.style.backgroundImage =`url(${url})`;

        modal.classList.toggle('h');
        // big.classList.toggle('i')
        // item.target = modal.style.backgroundImage = EL;
 }
 close.onclick=function(){
    modal.classList.remove('h');

 }


   

    
// }
