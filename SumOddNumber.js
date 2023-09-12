const SumOddNumber = nombre => {
    let output=0,divisor
    if(nombre % 2 == 0){
        divisor = nombre /2
        while(divisor >= 1){
            output += 2*Math.pow(nombre,2)
            divisor = divisor / 2
        }
    }
    else if (nombre % 2 == 1) {
        output = Math.pow(nombre,2)
        divisor = nombre /2
        while(divisor >= 1){
            output += 2*Math.pow(nombre,2)
            divisor = divisor / 2
        }
    }
    return output
}

console.log(SumOddNumber(5))