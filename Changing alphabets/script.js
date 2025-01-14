const alphabets = document.getElementById('alphabets')

let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let i = 0;

function updateAlphabets(){
    alphabets.textContent = letters[i];
    i++;
    if(i == 25){
        i = 0
    }
}

let btn = document.getElementById('btn')

let inter = setInterval(updateAlphabets,100)

btn.addEventListener('click',()=>{
    clearInterval(inter)

}
)