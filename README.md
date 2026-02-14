
**GIT:**
https://git-scm.com/cheat-sheet
https://academind.com/tutorials/git-the-basics
https://academind.com/tutorials/github-the-basics
*******************************************************************************
**Variables & Constant => (Data container to store value)**
  In js to define variables use keyword "let" it acts as a container to store data.
  Example : let userName="karthik"; and we can reassign value to the same var userName="kannan";
  Incase of constant the value once assigned will not be changed.
  Example: const accountNumber=1234; and we can reassign the value to same constant.

  let x;
  x === undefined; // true ( it wont take it as null unless we specify it as null like let x= null ;)

  **Note:**
  Numbers: undefined → cannot convert → NaN
  Strings: undefined → converts to "undefined" → concatenation
  **but for constant once declared we need to init value 
**
**********************************************************************************
  Best Naming convention - **camelCase** and the name of vairable that describes the value it get stores and var are case-sensitive userName != username
  only letter and digits
  starting with $ allowed & _ allowed
  **Bad practise**
  avoid snake case example user_name
  dont start with digits example let 21Players
  no spl characters example user-name
  dont use keywords name as var names
  
  End of statement is denoted by ; incase of single experession and its optional . incase of multiple expression let a=10;let b=20; its required
**********************************************************************************************
  **Operators**
  **Mathematical operators**
  | Operator | Name                | Example  | Result |
  | -------- | ------------------- | -------- | ------ |
  | `+`      | Addition            | `5 + 2`  | `7`    |
  | `-`      | Subtraction         | `5 - 2`  | `3`    |
  | `*`      | Multiplication      | `5 * 2`  | `10`   |
  | `/`      | Division            | `5 / 2`  | `2.5`  |
  | `%`      | Modulus (remainder) | `5 % 2`  | `1`    |
  | `**`     | Exponentiation      | `2 ** 3` | `8`    |

  **Increment / Decrement**
  | Operator | Example | Meaning                    |
  | -------- | ------- | -------------------------- |
  | `++`     | `a++`   | Increase by 1 (after use)  |
  | `--`     | `a--`   | Decrease by 1 (after use)  |
  | `++`     | `++a`   | Increase by 1 (before use) |
  | `--`     | `--a`   | Decrease by 1 (before use) |

  **Assignment Operators**
  | Operator | Example   | Same as      |
  | -------- | --------- | ------------ |
  | `=`      | `a = 5`   | `a = 5`      |
  | `+=`     | `a += 2`  | `a = a + 2`  |
  | `-=`     | `a -= 2`  | `a = a - 2`  |
  | `*=`     | `a *= 2`  | `a = a * 2`  |
  | `/=`     | `a /= 2`  | `a = a / 2`  |
  | `%=`     | `a %= 2`  | `a = a % 2`  |
  | `**=`    | `a **= 2` | `a = a ** 2` |

  **Operator Precedence (high → low)**
    **
    * / %
    + -
    Use parentheses to be safe example:
    
    (5 + 2) * 3 // 21
    ******************************************************************************
    ****DATA TYPES****
    
    1. Primitive Data Types
  Primitive values are immutable (cannot be changed) and are compared by value.
  | Type          | Description                                           | Example                               |
  | ------------- | ----------------------------------------------------- | ------------------------------------- |
  | **Number**    | Represents numeric values (integer or floating-point) | `42`, `3.14`, `-100`                  |
  | **BigInt**    | For integers larger than `2^53 - 1`                   | `9007199254740991n`                   |
  | **String**    | Sequence of characters                                | `"Hello"`, `'World'`                  |
  | **Boolean**   | `true` or `false`                                     | `true`, `false`                       |
  | **Undefined** | Variable declared but not assigned                    | `let x; console.log(x); // undefined` |
  | **Null**      | Represents “no value” or “empty”                      | `let y = null;`                       |
  | **Symbol**    | Unique and immutable identifier                       | `let id = Symbol("id");`              |

  2. Non-Primitive (Reference) Types
  These are objects and compared by reference, not by value and they are mutable.
  | Type         | Description                   | Example                                   |
  | ------------ | ----------------------------- | ----------------------------------------- |
  | **Object**   | Collection of key-value pairs | `let obj = {name: "Alice", age: 25};`     |
  | **Array**    | Ordered collection of values  | `let arr = [1, 2, 3];`                    |
  | **Function** | Callable object               | `function greet() { console.log("Hi"); }` |
  | **Date**     | Represents dates & times      | `let now = new Date();`                   |
  | **RegExp**   | Regular expression object     | `let re = /ab+c/;`                        |

  
  3. Special Notes
  typeof null returns "object" — this is a historical quirk in JS.
  Arrays are objects, but Array.isArray(arr) returns true for arrays.
  Symbols are mainly used as unique keys for object properties.
  BigInt allows safe operations on very large integers.

**************************************************************************************

**Strings**
In JS, it doesn’t matter whether you use single quotes ' ' or double quotes " " for strings. Both create a string type
**1. Example**
let str1 = "Hello";  // double quotes
let str2 = 'Hello';  // single quotes
console.log(typeof str1); // "string"
console.log(typeof str2); // "string"
console.log(str1 === str2); // true

**Both are exactly the same in terms of type and behavior.**
JS does not treat 'A' as a character, it’s still a string of length 1.
2. When to use ' vs "
Mostly style or convenience:
If your string contains a double quote, use single quotes:
let quote = 'He said, "Hi!"';

If your string contains a single quote, use double quotes:
let contraction = "It's sunny";
**3. Template Literals**

There’s a third option: backticks ` for template literals:
let name = "Alice";
let greeting = `Hello, ${name}!`; // interpolation works here
Template literals allow multi-line strings and variable interpolation.
Still, the type is string.
✅ Summary
  ' ' and " " → both are strings.
  'A' is not a separate character type, it’s a string of length 1.
  Backticks ` are for template literals (still strings).

**Dynamic typing → variable can change type.
Weak typing → JS will automatically convert types in operations if needed.**

  *****************************************************************************

  **falsy / truthy**

  <img width="724" height="772" alt="image" src="https://github.com/user-attachments/assets/05d387a5-a672-4cdb-9f43-11497927a9f0" />


  *************************************************************************
 ** Equlaity operaotr**
 | Operator | Name              | Type Coercion | Meaning                               | Example     | Result  |
  | -------- | ----------------- | ------------- | ------------------------------------- | ----------- | ------- |
  | `==`     | Loose equality    | ✅ Yes         | Compares values after type conversion | `2 == "2"`  | `true`  |
  | `===`    | Strict equality   | ❌ No          | Compares **value and type**           | `2 === "2"` | `false` |
  | `!=`     | Loose inequality  | ✅ Yes         | True if values differ after coercion  | `2 != "3"`  | `true`  |
  | `!==`    | Strict inequality | ❌ No          | True if **value or type** differ      | `2 !== "2"` | `true`  |

  **************************************************

 **Statement vs Expressions**
 <img width="633" height="762" alt="image" src="https://github.com/user-attachments/assets/fb307150-2d63-4b8d-a698-a9c7e530e161" />

 **************************************************

**Logical Operators - A Quick Summary**
As a reference which you can come back to (or print out), here's a quick summary of how logical operators and comparison operators behave in JavaScript:

const userName = 'Max';
const altName = '';
console.log(userName === 'Max'); // generates and prints a boolean => true
console.log(userName); // wasn't touched, still is a string => 'Max'
 
console.log(userName || null); // userName is truthy and therefore returned by || => 'Max'
console.log(altName || 'Max'); // altName is falsy (empty string), hence 'Max' is returned => 'Max'
console.log(altName || ''); // both altName and '' are falsy but if the first operand is falsy, the second one is always returned => ''
console.log(altName || null || 'Anna'); // altName and null are falsy, 'Anna' is returned => 'Anna'
 
console.log(userName && 'Anna'); // userName is truthy, hence second (!) value is returned => 'Anna'
console.log(altName && 'Anna'); // altName is falsy, hence first value is returned => ''
console.log(userName && ''); // userName is truthy, hence second value is returned => ''
Always keep in mind: NO operator (neither ===, > etc. nor && or ||) changes the variable you might be using in the comparison. In the above examples, the values stored in userName and altName are NEVER changed.

===, > etc. just generate new boolean values which are used in the comparison. || and && generate NO booleans, they just treat the values before and after them as conditions (which therefore need to yield boolean values and are coerced to booleans if required).

Because of the above-described behaviors, you often use || in JavaScript to assign default/ fallback values to variables/ constants:

const enteredValue = ''; // let's assume this is set based on some input provided by the user, therefore it might be an empty string
 
const userName = enteredValue || 'PLACEHOLDER'; // will assign 'PLACEHOLDER' if enteredValue is an empty string

 **************************************************

 **for loop**
  | Loop Type         | Syntax                                           | Iterates Over                                        | Returns / Yields              | Best Use Case                                                |
  | ----------------- | ------------------------------------------------ | ---------------------------------------------------- | ----------------------------- | ------------------------------------------------------------ |
  | **Classic `for`** | `for (let i = 0; i < array.length; i++) { ... }` | Anything with manual control (arrays, numbers, etc.) | N/A (manual access via index) | General-purpose loops; precise control                       |
  | **`for...of`**    | `for (let element of iterable) { ... }`          | Iterables: arrays, strings, Sets, Maps               | Values of the iterable        | Loop over **values** in arrays, strings, Sets, Maps          |
  | **`for...in`**    | `for (let key in object) { ... }`                | Enumerable object keys (objects, arrays)             | Keys (strings)                | Loop over **object properties** (not recommended for arrays) |

   **************************************************

  ** Cdde compilation**

   +-----------------+
|   JS Code (Text) |
+-----------------+
          |
          v
+-----------------+
|     Parsing     |  ← Converts code into AST (Abstract Syntax Tree)
+-----------------+
          |
          v
+-----------------+
|  Interpreter    |  ← Ignition reads AST → converts to bytecode
|  Executes bytecode line by line
|  Detects runtime errors
+-----------------+
          |
          v
   Hot Code Detected?  ---> No --> Continue interpreting
          |
         Yes
          |
          v
+-----------------+
|   JIT Compiler  |  ← TurboFan compiles hot bytecode → Optimized Machine Code
|  Applies optimizations (inlining, type predictions, etc.)
+-----------------+
          |
          v
+-----------------+
| Optimized Machine|
|      Code       |  ← Runs directly on CPU (super fast)
+-----------------+

  **************************************************

 ** ARROW FUNCTION
**
 ** 1. Basic Syntax**
Single parameter
const greet = name => `Hello, ${name}!`; // implicit return

Multiple parameters
const add = (a, b) => a + b; // implicit return

No parameters
const sayHi = () => "Hi!"; // implicit return

**2. Function body options**
a) Single expression → implicit return
const square = x => x * x; // returns x*x automatically


No {} needed

return is not required

b) Block body → explicit return
const square = x => {
  console.log("Calculating...");
  return x * x; // must use return here
};


{} creates a block body

return required if you want a value returned

Can have multiple statements

c) Returning an object literal
const createPoint = (x, y) => ({ x, y }); // implicit return using parentheses


Parentheses around {} are needed for implicit return of objects

Otherwise {} is interpreted as a block

**3. Rules / General Guidelines**

Parentheses around parameters

Single parameter → parentheses optional

x => x * x


Zero or multiple parameters → parentheses required

() => 42
(x, y) => x + y


Return keyword

Omit return if the body is a single expression without {}

Use return if the body has {} (block) and you want to return a value

this binding

Arrow functions do not have their own this

They inherit this from the enclosing context

const obj = {
  value: 10,
  show: () => console.log(this.value) // 'this' is inherited; may not behave as expected
};


Cannot be used as constructors

Arrow functions cannot be used with new

**4. Examples**
// Implicit return
const multiply = (a, b) => a * b;

// Block body with explicit return
const multiplyVerbose = (a, b) => {
  const result = a * b;
  return result;
};

// Returning object
const makeUser = (name, age) => ({ name, age });

// No parameters
const getRandom = () => Math.random();


✅ Summary in One Line:

Arrow function = (params) => expression for short, or (params) => { statements; return value; } for blocks.


| Feature / Property               | Function Declaration                 | Function Expression (Anonymous / Arrow)                                 |
| -------------------------------- | ------------------------------------ | ----------------------------------------------------------------------- |
| **Syntax**                       | `function name(params) { ... }`      | `const fn = function(params) { ... }` <br> `const fn = (params) => ...` |
| **Hoisting**                     | ✅ Entire function is hoisted         | ❌ Only variable name hoisted (`const/let` in TDZ)                       |
| **Call before definition**       | ✅ Works                              | ❌ ReferenceError if `const/let`                                         |
| **Name**                         | Always named                         | Can be anonymous or named                                               |
| **Return**                       | `return` required in block           | `return` optional if using single-expression arrow function             |
| **`this` binding**               | Dynamic (`this` depends on caller)   | Arrow: lexical (`this` inherited) <br> Anonymous: dynamic               |
| **`arguments` object**           | ✅ Available                          | Arrow: ❌ Not available <br> Anonymous: ✅ Available                      |
| **Use as constructor (`new`)**   | ✅ Yes                                | Arrow: ❌ No <br> Anonymous: ✅ Yes                                       |
| **Stored as object**             | ✅ Function object stored in memory   | ✅ Function object stored in variable                                    |
| **Use as expression / callback** | ✅ Can be used (but usually assigned) | ✅ Works naturally (assigned or IIFE)                                    |
| **IIFE (Immediately Invoked)**   | ❌ Rarely used directly               | ✅ Common (anonymous or arrow)                                           |




1️⃣ Default arguments

Fallback values when args are missing.

function greet(name = "Guest") {
  return `Hello, ${name}`;
}

greet();        // Hello, Guest
greet("Sam");   // Hello, Sam

2️⃣ Rest operator (...)

Collects arguments into an array.

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3); // 6

3️⃣ bind()

Returns a new function with fixed this.

const user = { name: "Alex" };

function hi() {
  return `Hi ${this.name}`;
}

const boundHi = hi.bind(user);
boundHi(); // Hi Alex

4️⃣ call()

Invokes function immediately, arguments passed one by one.

hi.call(user); // Hi Alex

5️⃣ apply()

Same as call, but arguments passed as an array.

function intro(age, city) {
  return `${this.name}, ${age}, ${city}`;
}

intro.apply(user, [25, "NY"]); // Alex, 25, NY

*********************************************************

DOM QEURY 

Node Query Methods
Here's a summary of the various methods you got to reach out to DOM elements (note: you can only query for element nodes).

Besides the below query methods, you also got these special properties on the document object to select parts of the document:

document.body => Selects the <body> element node.

document.head => Selects the <head> element node.

document.documentElement => Selects the <html> element node

---

QUERY METHODS

---

document.querySelector(<CSS selector>);
Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns the first (!) matching element in the DOM. Returns null if no matching element could be found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

document.getElementById(<ID>);
Takes an ID (without #, just the id name) and returns the element that has this id. Since the same ID shouldn't occur more than once on your page, it'll always return exactly that one element. Returns null if no element with the specified ID could be found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

document.querySelectorAll(<CSS selector>);
Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns all matching elements in the DOM as a static (non-live) NodeList. Returns and empty NodeList if no matching element could be found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

document.getElementsByClassName(<CSS CLASS>);
Takes a CSS class g (e.g. 'some-class') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

document.getElementsByTagName(<HTML TAG>);
Takes an HTML tag (e.g. 'p') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName

There also is the getElementsByName() method which really isn't used commonly (https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName).

****************************************************

**Arrays & Iterables**

**Array-like objects**

  Look like arrays: have .length and numeric indices [0], [1], ...
  
  May or may not be mutable (depends on the object)
  
  Not necessarily iterable (can’t always use for...of)
  
  Examples: arguments, NodeList, {0:'a',1:'b', length:2}

**Iterables**

  Can be looped automatically with for...of
  
  Implement [Symbol.iterator] (conveyor belt for values)
  
  May or may not have .length or numeric indices
  
  Examples: Array, String, Set, Map, NodeList

**💡 Memory trick:**

    Array-like = “looks like an array, may need manual counting”
    
    Iterable = “you can walk through it automatically”


  ✅ Rule of thumb
  
  Array-like → numeric indices + length → manual access possible
  
  Iterable → implements [Symbol.iterator] → can use for...of
  
  So some array-like objects are not iterable, that’s why you sometimes need Array.from(obj) to loop over them.

  **summary**
  Iterable

An object that implements the iterable protocol ([Symbol.iterator] method).

Can be looped with for...of.

Examples: Array, String, Set, Map, NodeList, Generator objects.

Array-like Object

An object with numeric indices (0,1,2…) and a length property.

Not necessarily iterable.

Examples: {0:'a',1:'b',length:2}, arguments, NodeList, String.

Key Distinction
Property	Iterable	Array-like
[Symbol.iterator]	✅	❌ (not always)
.length & numeric indexes	❌ (not always)	✅
Works with for...of	✅	❌ (not always)

  | Type                         | Iterable   | Array-Like |
| ---------------------------- | ---------- | ---------- |
| Array                        | ✅          | ✅          |
| String                       | ✅          | ✅          |
| NodeList                     | ✅          | ✅          |
| HTMLCollection               | ✅          | ✅          |
| Arguments                    | ✅ (modern) | ✅          |
| TypedArray                   | ✅          | ✅          |
| Set                          | ✅          | ❌          |
| Map                          | ✅          | ❌          |
| custom 
  generator
  objects                        | ✅         | ❌          |
| Custom `{0:..., length:...}` | ❌          | ✅          |

****Array feature**:

| Feature                     | JavaScript Array                                                                                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Size**                    | **Dynamic** – You can add/remove elements anytime, no need to define size upfront.                            |
| **Data type**               | **Heterogeneous** – Can store numbers, strings, objects, other arrays, functions, etc. all in the same array. |
| **Access by index**         | ✅ Use numeric indices: `arr[0], arr[1]…`                                                                      |
| **Length property**         | ✅ `arr.length` automatically updates as you push/pop or assign at higher index.                               |
| **Methods to add/remove**   | `push()`, `pop()`, `shift()`, `unshift()`, `splice()`                                                         |
| **Can assign at any index** | ✅ e.g., `arr[5] = "new"` automatically increases length, creates empty slots.                                 |
| **Iterable**                | ✅ Can use `for...of`, spread operator `[...]`, `Array.from()` (if array-like/iterable).                       |
| **Array-like objects**      | ❌ Normal objects aren’t arrays; must have numeric indices + length to convert via `Array.from()`.             |
| **Multi-type storage**      | ✅ Example: `[1, "hello", true, {a:1}, [2,3]]`                                                                 |


  Array creatiion sysntax:
  | Method         | What it does                         | When to use                         |
| -------------- | ------------------------------------ | ----------------------------------- |
| `[1,2,3]`      | Direct array                         | ✅ Best & simplest                   |
| `Array()`      | Empty array                          | Rarely needed                       |
| `Array(5)`     | Empty slots with length 5 if only one value passed           | ⚠️ Be careful                       |
| `Array.of()`   | Exact values into array              | When avoiding constructor confusion |
| `Array.from()` | Convert iterable/array-like to array | Very useful                         |

**Rules for array.from()**
| Object Type          | Numeric indices + length | Iterable | Can use Array.from? |
| -------------------- | ------------------------ | -------- | ------------------- |
| Normal object        | ❌                        | ❌        | ❌                   |
| Custom array-like    | ✅                        | ❌        | ✅                   |
| Array / String / Set | ✅ / ✅ / ❌                | ✅        | ✅                   |



not working vs working

const ob = {0:"karthik",1:25};
const d = Array.from(ob);
console.log(d);

vs 

const ob = {0: "karthik", 1: 25, length: 2};
const d = Array.from(ob);
console.log(d); 



