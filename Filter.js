const arr = [-2,3,4,5,8,-55,-54]

function NombrePositive(array){
    let output= []
    for(elt of array){
         if(elt >= 0){
            output.push(elt)
         }
    }
    return output
}

let NombrePositiveFilter = arr.filter(elt => elt >= 0)

console.log(NombrePositiveFilter)