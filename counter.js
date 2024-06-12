// let countEl.document.getElementById('count-el').innerText = 4
//let count = 8;
//console.log(count);
//let myAge = 17;
//console.log(myAge);
let saveEl = document.getElementById('save-el')
let countEl
=document.getElementById('count-el')
console.log(countEl)
let count = 0;

console.log(saveEl)

function increment(){
    count += 1;
    countEl.textContent = count;
}
function save(){
    let countStr = count + "-"
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count= 0
}