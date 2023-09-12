const nb_year = (nombre_actuel,annee_evolution,nouvelle_habitant,population_max) => {
    let annee_depassement=0,nombre_habitant = nombre_actuel
    while(nombre_habitant < population_max){
        nombre_habitant += nombre_habitant *(annee_evolution/100) + nouvelle_habitant
        annee_depassement += 1
    }
    return annee_depassement
}
console.log(nb_year(1500000, 2.5, 10000, 2000000));