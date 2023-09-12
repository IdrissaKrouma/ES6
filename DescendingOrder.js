const Order = ( array,ordre ) => {
    let j
    if(ordre ===1){
        for( let i = 1;i < array.length;i++){
            let min = array[i]
            j=i-1
            while(j>=0 && array[j] < min){
                array[j+1] = array[j]
                array[j] = min
                j-=1
            }
        }
    }
    else if(ordre ===0){
        for( let i = 1;i < array.length;i++){
            let min = array[i]
            j=i-1
            while(j>=0 && array[j] > min){
                array[j+1] = array[j]
                array[j] = min
                j-=1
            }
        }
    }
    return array
}
const DescendingOrder = number => {
    let array_number = `${number}`.split("")
    return Order(array_number, 1).join("")*1
}

module.exports={Order}

console.log(DescendingOrder(42145));