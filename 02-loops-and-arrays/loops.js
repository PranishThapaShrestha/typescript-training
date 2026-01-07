var reviews = [2, 3, 4, 5, 5, 6, 9];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
var average = total / reviews.length;
console.log("the total is: " + total);
console.log("the average is: " + average);
