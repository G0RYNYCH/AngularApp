//primitives
import transformJavaScript
  from "@angular-devkit/build-angular/src/builders/browser-esbuild/javascript-transformer-worker";

let age: number;
age = 12.1;

let userName: string;
userName = 'Egor';

let isInstructor: boolean;
isInstructor = true;

// complex types
let hobbies: string[];
hobbies = ['running', 'cooking'];

type Person = {
  name: string;
  age: number;
};

let person2: Person;

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

//type aliases

//function and function types
function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);//[-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
//updatedArray[0].split('');//runtime error!

//classes
class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {
  }

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student('Egor', 'Ovch', 23, ['Angular']);
student.enroll('React');

//interfaces
interface Human {
  firstName: string;
  age: number

  greet: () => void;
}

let egor: Human;
egor = {
  firstName: 'Egor',
  age: 23,

  greet() {
    console.log('Hi');
  }
}

class Instructor implements Human {
  firstName: string;
  age: number;

  greet() {
    console.log('Hi from instructor')
  }
}
