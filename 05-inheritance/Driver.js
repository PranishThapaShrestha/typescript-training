"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
let myShape = new Shape_1.Shape(10, 15);
console.log(myShape.getInfo());
let myCricle = new Circle_1.Circle(5, 10, 11);
console.log(myCricle.getInfo());
