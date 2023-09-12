const ListFiltering = array => array.filter(product => typeof product == "number");
console.log(ListFiltering([1,2,'aasf','1','123',123]));