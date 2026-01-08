"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCricle = new Circle_1.Circle(5, 10, 11);
let myRectangle = new Rectangle_1.Rectangle(0, 2, 3, 4);
let theShapes = [];
theShapes.push(myCricle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
