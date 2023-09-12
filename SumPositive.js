const SumPositive = array => {
    let sum = 0
    for(elt of array){
        sum += (elt > 0) ? elt : 0
    }
    return sum
}
console.log(SumPositive([1,-4,7,12]))