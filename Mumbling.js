const toUpper = chaine =>{
    let output = ""
    for(let elt in chaine){
        output += (elt > 0) ? chaine[elt].toLowerCase() : chaine[elt].toUpperCase() ;
    }
    return output
}
const Ajout = (chaine,number) => {
    let response = "" , i=1
    do {
        response += chaine
        i++
    } while (i <= number);
    
    return response
}
const Mumbling = chaine =>{
    let index = 1,mumbling=`${toUpper(Ajout(chaine[0],0))}`
    do {
        mumbling = `${mumbling}-${toUpper(Ajout(chaine[index],index+1))}`
        index++
    } while(index < chaine.length)
    return mumbling
}

module.exports = {Ajout}

console.log(Mumbling("abcd"));