const HighAndLow = chaine => {
    let arrayFilter = chaine.split(' ')
    min = arrayFilter[0]
    max = arrayFilter[0]
    for(let elt in  arrayFilter){
        min = (min > arrayFilter[elt]) ? arrayFilter[elt] : min
        max = (max < arrayFilter[elt]) ? arrayFilter[elt] : max
    }
    console.log(`${max} ${min}`)
}
HighAndLow("1 9 3 4 -5")