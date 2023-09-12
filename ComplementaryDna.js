const Complementary_DNA = brin_DNA => {
    let output =""
    for(elt of brin_DNA){
        output = (elt == "A")?`${output}T`:(elt == "T")?`${output}A`:(elt == "C")?`${output}G`:(elt == "G")?`${output}C`: "Erreur"
    }
    return output
}
console.log(Complementary_DNA("Haskell"));