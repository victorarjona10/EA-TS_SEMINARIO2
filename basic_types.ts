//
// TS Types
//

// Primitive types are the most basic types
let myName: string = "Aaron"; // strings
let height: number = 1.78; // numbers: floting point numbers
let isDone: boolean = true; // boolean

let aCounter; // unkwnow (any) type
let bCounter = 0; // number(inferred)
let cCounter: number; //number
let dCounter: number = 0; //number

// Union Types
let id: number | string;
id = 10;
id = "11";

//  Type assertions
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
console.log(strLength); 

let anotherValue: number | string = "Learning TypeScript";
let anotherStrLength: number = (<string>anotherValue).length;
console.log(anotherStrLength);  


// Arrays of types
const listOfNotes: number[] = [7, 10, 4];
const listOfNotes2: Array<number> = [12, 12, 12];

const listOfStrings: string[] = ["hello", "how are you"];
const listOfStrings2: Array<string> = ["hola", "que tal"];

const listOfBooleans: boolean[] = [true, false, true];
const listOfBooleans2: Array<boolean> = [true, false, true];


// Tuples
let strNumTuple: [string, number];
strNumTuple = ["Hello", 1000];


// Any - all types in ts are subtypes of 'Any Type'
let anyData: any = 1;
anyData = true;
anyData = "maybe a string instead";

let listOfAny: any[] = [1, true, "free"];
listOfAny[1] = 100;


// Functions

function greets(name: string): string {
  return `Hello + ${name}`;
}

//optional parameter
function addThree(x: number, y: number, z?: number): number {
  if (z !== undefined) {
    return x + y + z;
  }
  return x + y;
}

// JSON Objects

// type
type Task = {
  id: string | number
  title: string
  completed: boolean
}

const task: Task = {
  id: 1,
  title: "My Title",
  completed: true
}


// interface
interface Product {
  name: string;
  readonly price: number; // readonly is a modifier
  description?: string;
}

const product: Product = {
  name: "laptop",
  price: 1000,
  description: "good laptop",
};


// enums

enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING"
}

let currentStatus: Status = Status.Success;
