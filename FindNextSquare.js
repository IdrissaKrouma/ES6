const { IsSquare } = require('./IsSquare')
const fintNextSquare = (carreParfait) => {
    return (IsSquare(carreParfait) == true )? Math.pow(Math.sqrt(carreParfait)+1,2): -1
}
console.log(fintNextSquare(122));