const message = prompt("ENTREZ UN MESSAGE")
const nombreOccurence = (char , chaine) => {
    let output = 0
    for(elt of chaine){
        output += (elt.toLowerCase() === char) ? 1 : 0
    }
    return output
}
const ExesOhs = chaine => {
    return (nombreOccurence("x",chaine) == nombreOccurence("o",chaine)) ? true : false
}
module.exports = {nombreOccurence}
console.log(ExesOhs(message));