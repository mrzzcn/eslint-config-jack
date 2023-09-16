/* eslint-disable max-classes-per-file */
const array1 = [ 1 ];
const array2 = [1, 2];
const array3 = [1, 2, 3];
const array4 = [
  1,
  2,
  3,
  4,
];
const objectInArray = [ { a: 1 } ];
const objectsInArray = [{ a: 1 }, { b: 2 }, { c: 3 }];
const arrayInArray = [
  [ 1 ],
  [3, 4],
  [5, 6],
  [7, 8],
];

class Person {
  static sayHiToWorld() {
    // eslint-disable-next-line no-console
    console.log('Hello World');

    const a = 1;
    const b = 2;
    const c = 3;
  }

  sayHi() {
    // eslint-disable-next-line no-console
    console.log('Hello Foo');
  }
}

switch (window.location.protocol) {
  case 'https':
    alert('webpage is secured');
    break;
  default:
    alert('webpage is not secured');
}

const a = document.documentElement.children[0].parentElement.parentElement.parentElement.parentElement;

const b0 = document.documentElement.children[0];
const b = b0
  .parentElement
  .parentElement
  .parentElement
  .parentElement
  .parentElement;

function addPi(num1: number, num2: number, num3: number) {
  return num1 + num2 + num3 + Math.PI;
}

function add(
  num1: number,
  num2: number,
  num3: number,
  num4: number,
  num5: {
    a: number;
    b: number;
  },
) {
  return num1 + num2 + num3 + num4 + num5.a;
}

window.addEventListener('scroll',
  (event) => { alert(event); },
  {
    passive: true,
    capture: false,
  });

window.addEventListener('scroll',
  (event) => { alert(event); },
  {
    passive: true,
    capture: false,
  });

var a = 3;
var a = 10;
alert(a);

class C {
  foo() {
    var b = 3;
    var b = 10;
    alert(b);
  }

  static {
    var c = 3;
    var c = 10;

    alert(c);
  }
}

function bar() {
  return Promise.resolve(true);
}

async function foo() {
  return await bar();
}

async function foo1() {
  try {
    const barResult = await bar();
    return barResult;
  } catch (error) {
    return error;
  }
}

const object = {
  a: 1,
  b: 2,
};

const object2 = {
  a: 1,
  b: 2,
  c: { d: 3 },
  e: {
    f: 4,
    g: 5,
  },
  'h-i': 6,
  '7': 7,
};

let { a1, b1: _b1 } = {
  a1: 1,
  b1: 2,
};
a1 += 1;
alert(a1);

let timer;
function initialize() {
  if (foo()) {
    clearInterval(timer);
  }
}
timer = setInterval(initialize, 100);

new RegExp('^\\d\\.$').test('1');
