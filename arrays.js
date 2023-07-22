var arr = [
    {name: 'Amir', age: 19},
    {name: 'Marina', age: 25},
    {name: 'Grisha', age: 54},

]

var getOld = arr.filter((item) => item.age >= 25);
console.log(getOld)

var sort = arr.sort((item, item2) => item.age - item2.age)
console.log(sort)