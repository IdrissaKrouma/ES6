const IsTriangle = (cote1, cote2, cote3 ) => {
    let Aire 
    moitierPerimetre =(cote1+cote2+cote3)
    Aire = Math.sqrt(moitierPerimetre + (moitierPerimetre-cote1)+(moitierPerimetre-cote2)+(moitierPerimetre-cote3))
    return (Aire != 0)? true : false
}
console.log(IsTriangle(4,5,3));