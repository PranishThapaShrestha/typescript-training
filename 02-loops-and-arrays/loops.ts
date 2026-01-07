let reviews: number[] = [2, 3, 4, 5, 5, 6, 9];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {

    total += reviews[i];

}

let average: number = total / reviews.length;
console.log("the total is: " + total);
console.log("the average is: " + average);
