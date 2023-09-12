const findDivisor = nombre => {
    let i=1,divisor = []
    do {
        (nombre % i == 0)? divisor.push(i) : true
        i++
    } while ( i <= nombre/2)
    divisor.push(nombre)
    return divisor
    //return (des.toLowerCase() != "all")? divisor : divisor.find(elt => elt != 1 && elt != nombre)

}
const findPrimaryNumber = nombre => {
    return (findDivisor(nombre).length != 2)? findDivisor(nombre) :`${nombre} is prime`
}
console.log(findPrimaryNumber(16));