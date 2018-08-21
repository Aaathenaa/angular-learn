import {double} from "./hello";

class Animal{
    constructor( public name:string, public weight:number){

    }
}

const lulu = new Animal('Cat', 7);

class Narval extends Animal{
    constructor(public length: number){
        super('Gérard', 400);
    }
    detect(object:any){
        console.log(object);
    }
}

const gerard = new Narval(30);
gerard.name = 'Toto';
console.log(gerard);
//generics: we make a parameter T for the type : the type T can change
//observable pattern
class Viewer<T>{
    viewable:T

    view(thing:T){
        this.viewable = thing;
    }
}

let viewer = new Viewer<Animal>();
viewer.view(lulu);
console.log(viewer);

gerard.length = double(40);
console.log(gerard);

//backticks
 const lorem = `this
 is
 on multiline
 <html>
     <div>${gerard.name}</div>
 </html>
  `;

 console.log(lorem);

 //quick shortcut for interface
// we defined a new Type which is a function
 type operation = (x:number, y:number)=>number;

 let add:operation = (x, y) => x+y;
 console.log(add(12,15));

 let div = (x:number, y:number)=> x/y;
 // duck typing works for any Type, including functions

let myOperation:operation = div;

//Splat operator
const people = ['Jim', 'John', 'Jules'];
const morePeople = people.concat('Jack'); // push is mutative not concat

console.log('People', people);
console.log(morePeople);
const morePeopleSexy= [... people, 'Jacky', 'Joseph'];
console.log(morePeopleSexy); // work the same in ES2015

//with objects: Only ES 2017
const house = {
    size:50,
    price:500000
};

let palace= {
    ...house,
    employees:5,
};

//let somePalace = Object.assign({employees:5, house})
console.log(palace);

let location = {
    people:people,
    palace:palace,
    price:10000,
    days:7
};

