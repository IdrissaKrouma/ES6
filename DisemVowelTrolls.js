
const DisemVowelTrolls = chaine => {
    const Voyelles = "aeyuio"
    let output = ""
    for (elt of chaine){
        output += (Voyelles.includes(elt.toLowerCase()) == true) ? "" : elt
    }
    return output
}
console.log(DisemVowelTrolls("LOLalt!"));