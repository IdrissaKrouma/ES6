const {Order} = require('./DescendingOrder');
const SumTwoLowestPositiveInteger = array => {
    const new_array = Order(array, 0)
    return new_array[0] + new_array[1]
}
console.log(SumTwoLowestPositiveInteger([19, 5, 42, 2, 77]));