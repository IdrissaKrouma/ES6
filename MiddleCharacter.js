const MiddleCharacter = chaine =>{
    let length=chaine.length
    Pairecenter=(length-2)/2
    Impairecenter=(length-1)/2
    return (length%2==0)?chaine.substring(Pairecenter,Pairecenter+2):chaine.substring(Impairecenter,Impairecenter+1)
}
console.log(MiddleCharacter("B"))