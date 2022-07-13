// import animals, { useAnimals } from "./data";

// //Destructuring Arrays
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound} = cat;
// // const { name: catName, sound: catSound } = cat;
// // const { name = "Fluffy", sound = "Purr" } = cat;
// // const {feedingRequirements: {food, water} } = cat;
// // console.log(food);

/* 
(2) [Object, Object]

0: Object
model: "Honda Civic"
coloursByPopularity: Array(2)
speedStats: Object

1: Object
model: "Tesla Model 3"
coloursByPopularity: Array(2)
speedStats: Object
*/

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// console.log(cars);

// 1- Destructuring our car model ....
// that say honda and tesla as array
const [honda, tesla] = cars;

// now i can access to this objects
console.log(honda);

/* 
{
  model: "Honda Civic", 
  coloursByPopularity: Array(2), 
  speedStats: Object
}
*/

// 2- now for another object .... TopSpeed
// we know that the top speed lives inside another object called speedStats.

// console.log(honda);
/*
      {
        ----------------------------
        model: "Honda Civic", 
        coloursByPopularity: Array(2), 
        speedStats: Object}
        ----------------------------

        1 ------------------
        model: "Honda Civic"

        2 ------------------
        coloursByPopularity: Array(2)
          0: "black"
          1: "silver"
        
        3 ------------------
        speedStats: Object
          topSpeed: 140
          zeroToSixty: 8.5
      */

// speedStats >>> (topSpeed & zeroToSixty)
// So we have to destructure this a little bit further.

/* 
first have to dive into the speedStats 
and then we have to get hold of the top speed.
*/

// const {speedStats: {topSpeed, zeroToSixty}} = honda;
// or ... we need only topSpeed now
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

//----------------------------------------
const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

// ---------------------------------------
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
