let chaine="la maison";
const Voyelles=["a","e", "i","o","u","y"]

const  nombreVoyelles= array =>{
    let total = 0;
    for(let elt of array ){
        for(let element of Voyelles ){
            (elt == element) ? total++ : false ;
        }
    }
    return total;
}
console.log(nombreVoyelles(chaine));
