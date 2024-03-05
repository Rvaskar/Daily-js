let arr = [54,65,676,68,86,755,45,78]

Array.prototype.sumOfAll = function(){
    let sum = 0;
    for(let i = 0 ; i<this.length;i++){
        sum += this[i];
    }
    return sum
}
 

console.log(arr.sumOfAll())