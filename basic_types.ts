//
// TS Types
//

// Primitive types are the most basic types
let myName: string = "Aaron"; // strings
let height: number = 1.78; // numbers: floting point numbers
let isDone: boolean = true; // boolean

let aCounter; // unkwnow (any) type
let bCounter = 0; // number (inferred)
let cCounter: number; //number
let dCounter: number = 0; //number

// Any 
let anyData: any = 1;
anyData = true;
anyData = "maybe a string instead";

// Union Types
let id: number | string;
id = 10;
console.log(typeof id, id); // number
id = "11";
console.log(typeof id, id); // string

//  Type assertions
let someValue: any;
someValue = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

let anotherValue: number | string;
anotherValue = "Learning TypeScript";
let anotherStrLength: number = (<string>anotherValue).length;

// Arrays of types
const listOfNotes: number[] = [7, 10, 4];
const listOfNotes2: Array<number> = [12, 12, 12];
console.log(typeof listOfNotes, listOfNotes); // JSON object
console.log(typeof listOfNotes2, listOfNotes2); // JSON object

const listOfStrings: string[] = ["hello", "how are you"];
const listOfStrings2: Array<string> = ["hola", "que tal"];

const listOfAny: any[] = [1, true, "free"];
listOfAny[1] = 100;
console.log(listOfAny); // JSON object

// Tuples
let strNumTuple: [string, number];
strNumTuple = ["Hello", 1000];
console.log(typeof strNumTuple, strNumTuple); // JSON object

// Functions
function greets(name: string = "Roc"): string {
  return `Hello ${name}`;
}

console.log(greets()) 

//optional parameter
function addThree(x: number, y: number, z?: number): number {
  if (z !== undefined) {
    return x + y + z;
  }
  return x + y;
}

console.log(addThree(1,2,3)) 
console.log(addThree(1,2)) 

// JSON Objects

/// type
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
console.log(typeof task, task); // JSON object

/// interface
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

console.log(typeof product, product); // JSON object

// enums

enum Status {
  Activo,     // 0
  Inactivo,   // 1
  Pendiente   // 2
}

let estadoActual: Status = Status.Activo;
console.log(estadoActual); // 0
console.log(Status[0]);    // "Activo"


enum HttpStatus {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500
}

console.log(HttpStatus.OK);       // 200
console.log(HttpStatus[404]);     // "NotFound"


enum RolUsuario {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Usuario = "USUARIO"
}

let rol: RolUsuario = RolUsuario.Admin;
console.log(rol); // "ADMIN"

