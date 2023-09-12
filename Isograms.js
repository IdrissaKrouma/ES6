const {nombreOccurence} = require('./ExesOhs')
const Isograms = chaine => {
    let bool_ouput = true
    for(elt of chaine){
        bool_ouput= bool_ouput && nombreOccurence(elt ,chaine) == 1
    }
    return bool_ouput
}
console.log(Isograms("moOse"));