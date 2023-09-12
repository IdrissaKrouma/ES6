const SquareDigit = nombre => {
    let output = ""
    let chaine_nombre = `${nombre}`
    for( elt of chaine_nombre){
        output = `${output}${Math.pow(elt,2)}`
    }
    return output*1
}
console.log(SquareDigit(9119));