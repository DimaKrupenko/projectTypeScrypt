// const button = document.querySelector('button')!
// const input1 = document.getElementById('num1')! as HTMLInputElement
// const input2 = document.getElementById('num2')! as HTMLInputElement

// function add(num1: number, num2: number) {
//     return num1 + num2
// }

// button.addEventListener('click', function () {
//     console.log(add(+input1.value, +input2.value))
// })


// let age: number = 50;
// let name1: string = 'Max';
// let toggle: boolean = true;
// let empty: null = null;
// let notInitialize: undefined = undefined;
// let callback = (a: number) => { return 100 + a };

// let anything: any = -20;
// anything = 'Text';
// anything = {};

// let some: any;
// some = 'Text';

// let str: string;

// str = some;

// // let person: readonly [string, number] = ['Max', 21];

// enum LoadingStatus {
//   LOADING = 'LOADING',
//   READY = 'READY',
// }

// let status1: LoadingStatus = LoadingStatus.LOADING;

// if (status1 === LoadingStatus.LOADING) {
//   console.log('Загружается');
// } else if (status1 === LoadingStatus.READY) {
//   console.log('Загружено');
// }

// let any: string | number = 21

// let status2: 'enable' | 'disable' = 'enable';


// function showMessage(message: string) {
//   console.log(message);
// }

// function calc(num1: number, num2: number) {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error('Error');
// }

// interface Page {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: 'open' | 'close';
//   details?: {
//     createAt: string;
//     updateAt: string;
//   };
// }

// const page1: Page = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: '2021-01-01',
//     updateAt: '2021-05-01',
//   }
// }

// const page2: Page = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }


// abstract class House {
//   door: 'open' | 'close';
//   key: Key;
//   tenants: Person[];

//    constructor(key: Key) {
//         this.door = 'close';
//         this.key = key;
//         this.tenants = [];
//    }
  
//   comeIn(person: Person): void {
//         if (this.door === 'open') {
//             this.tenants.push(person);
//             console.log(`${person} entered the house.`);
//         } else {
//             console.log('The door is closed. You cannot enter.');
//         }
//   }
  
//   abstract openDoor(key: Key): void;

// }

// class MyHouse extends House {
//     constructor(key: Key) {
//         super(key);
//     }

//     openDoor(key: Key): void {
//         if (this.key === key) {
//             this.door = 'open';
//             console.log('The door is now open.');
//         } else {
//             console.log('Invalid key. The door remains closed.');
//         }
//     }
// }

// class Key {
//     signature: number;

//     constructor() {
//         this.signature = Math.floor(Math.random() * 1000); 
//     }

//     getSignature(): number {
//         return this.signature;
//     }
// }

// class Person {
//     key: Key;

//     constructor(key: Key) {
//         this.key = key;
//     }

//     getKey(): Key {
//         return this.key;
//     }
// }

// const key = new Key(); // создание объекта Key с сгенерированным случайным числом

// const person = new Person(key); // создание объекта Person с переданным ключом

// const myHouse = new MyHouse(key); // создание объекта MyHouse с переданным ключом

// myHouse.openDoor(person.getKey()); // попытка открыть дверь с использованием ключа у жильца


function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function AddProperty () {
  return function(constructor: Function) {
    console.log('Modify');
    constructor.prototype.modify = true;
  };
}

@Logger('LOGGING - CONTROLLER')
@AddProperty()
class Controller {
  public id = 1;
  public modify?: boolean;
}

const controller = new Controller();

console.log('Modified classes', controller.modify);