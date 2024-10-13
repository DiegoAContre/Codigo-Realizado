function getAverage(scores) {
    let total = 0;
    scores.forEach(element => {
        total += element;
    });  
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89, 10, 65]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95, 50, 10]));
console.log(getAverage([45, 87, 98, 94, 95, 50, 10]));