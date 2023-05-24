//primitives
let age: number;
age = 12.1;

let userName: string;
userName = 'Egor';

let isInstructor: boolean;
isInstructor = true;

// complex types
let hobbies: string[];
hobbies = ['running', 'cooking'];

let person: {
  name: string;
  age: number;
};
person = {
  name: 'Egor',
  age: 23
}

// person = {
//   isEmployee: 'false'
// }

let people: {
  name: string;
  age: number;
}[];

//type inference
let course = 'Angular guide';
//course = 123;

//union types
let courses: string | number = `courses`;
courses = 123;//no error!
