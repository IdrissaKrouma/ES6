const IsSquare = number => {
    return (Math.pow(Math.sqrt(number),2) == number ) ? true : false
}
console.log(IsSquare(-1));

module.exports = {IsSquare}