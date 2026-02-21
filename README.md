
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


***Array methods****

📦 JavaScript Array Basics
1️⃣ Core Array Methods
| Method      | What It Does                 | Changes Original Array? | Returns         | Example          | Result      |
| ----------- | ---------------------------- | ----------------------- | --------------- | ---------------- | ----------- |
| `push()`    | Adds element(s) to **end**   | ✅ Yes                   | New length      | `arr.push(4)`    | `[1,2,3,4]` |
| `pop()`     | Removes last element         | ✅ Yes                   | Removed element | `arr.pop()`      | `[1,2]`     |
| `shift()`   | Removes first element        | ✅ Yes                   | Removed element | `arr.shift()`    | `[2,3]`     |
| `unshift()` | Adds element(s) to **start** | ✅ Yes                   | New length      | `arr.unshift(0)` | `[0,1,2,3]` |

| Operation   | Start    | Middle | End      | Affects Length | Shifts Indexes? |
| ----------- | -------- | ------ | -------- | -------------- | --------------- |
| `push()`    | ❌        | ❌      | ✅ Add    | ✅ Yes          | ❌ No            |
| `pop()`     | ❌        | ❌      | ✅ Remove | ✅ Yes          | ❌ No            |
| `shift()`   | ✅ Remove | ❌      | ❌        | ✅ Yes          | ✅ Yes           |
| `unshift()` | ✅ Add    | ❌      | ❌        | ✅ Yes          | ✅ Yes           |


2️⃣ Indexing Rules
| Concept         | Description      | Example                  |
| --------------- | ---------------- | ------------------------ |
| Index starts at | `0`              | `arr[0]` → first element |
| Last index      | `length - 1`     | `arr[arr.length - 1]`    |
| Access element  | `array[index]`   | `arr[2]`                 |
| Change element  | Assign new value | `arr[1] = 100`           |


splice method to remove/ add elements in reuqired portion
| Feature                                   | Description                                             | Syntax / Example                                    | Notes / Behavior                              |
| ----------------------------------------- | ------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------- |
| **Purpose**                               | Remove, add, or replace elements in an array            | `arr.splice(start, deleteCount, item1, item2, ...)` | Modifies the original array                   |
| **Return Value**                          | Returns array of deleted elements                       | `let removed = arr.splice(2,1)`                     | Returns `[]` if nothing deleted               |
| **start (positive)**                      | Index to start from                                     | `arr.splice(2,1)`                                   | 0-based indexing                              |
| **start (negative)**                      | Counts from end                                         | `arr.splice(-1,1)`                                  | `start = arr.length + start`                  |
| **deleteCount omitted**                   | Deletes all from `start` to end                         | `arr.splice(2)`                                     | Equivalent to `arr.splice(2, arr.length - 2)` |
| **deleteCount > available elements**      | Deletes only available elements                         | `arr.splice(-1, 5)`                                 | No error thrown                               |
| **deleteCount = 0**                       | Inserts without deleting                                | `arr.splice(2,0,'x')`                               | Useful for insertion                          |
| **Insertion**                             | Any additional arguments after deleteCount are inserted | `arr.splice(2,1,'a','b')`                           | Replaces the deleted element(s)               |
| **Empty array behavior**                  | Works even on empty arrays                              | `[].splice(0,1)` → `[]`                             | Returns empty array, array remains empty      |
| **Edge case negative start beyond array** | `start < -length` → treated as `0`                      | `arr.splice(-10,1)`                                 | Deletes from beginning                        |

Example:
| Code                          | Array Before | Result (Deleted) | Array After       |
| ----------------------------- | ------------ | ---------------- | ----------------- |
| `[1,2,3,4].splice(1,2)`       | `[1,2,3,4]`  | `[2,3]`          | `[1,4]`           |
| `[1,2,3,4].splice(-2,1)`      | `[1,2,3,4]`  | `[3]`            | `[1,2,4]`         |
| `[1,2,3,4].splice(2)`         | `[1,2,3,4]`  | `[3,4]`          | `[1,2]`           |
| `[1,2,3,4].splice(-10,1)`     | `[1,2,3,4]`  | `[1]`            | `[2,3,4]`         |
| `[1,2,3].splice(1,0,'a','b')` | `[1,2,3]`    | `[]`             | `[1,'a','b',2,3]` |


slice() does not modify the original array — it’s purely for extracting a portion.

🔹 JavaScript slice() Summary Table
| Feature                    | Description                                    | Syntax / Example           | Notes / Behavior                                    |
| -------------------------- | ---------------------------------------------- | -------------------------- | --------------------------------------------------- |
| **Purpose**                | Extract a section of an array into a new array | `arr.slice(start, end)`    | Original array **remains unchanged**                |
| **Return Value**           | New array containing selected elements         | `let sub = arr.slice(1,3)` | If nothing is selected, returns `[]`                |
| **start (positive)**       | Index to start from                            | `arr.slice(2)`             | 0-based indexing; inclusive                         |
| **start (negative)**       | Counts from end                                | `arr.slice(-2)`            | `start = arr.length + start`                        |
| **end (optional)**         | Index to stop before                           | `arr.slice(1,3)`           | Non-inclusive: element at `end` is **not included** |
| **end (negative)**         | Counts from end                                | `arr.slice(1,-1)`          | `end = arr.length + end`                            |
| **end omitted**            | Extracts until end of array                    | `arr.slice(2)`             | Includes last element automatically                 |
| **start ≥ array length**   | Returns empty array                            | `arr.slice(10)`            | Nothing to extract                                  |
| **start < 0 beyond array** | Treated as 0                                   | `arr.slice(-10,2)`         | Extracts from beginning up to `end`                 |
| **Empty array behavior**   | Works on empty arrays                          | `[].slice(0,1)` → `[]`     | Always returns empty array                          |
| **Immutable**              | Does **not** change the original array         | `arr.slice(1,3)`           | Use `splice()` if you want to modify the array      |

📌 Quick Visual Examples
| Code                     | Array Before | Result  | Array After |
| ------------------------ | ------------ | ------- | ----------- |
| `[1,2,3,4].slice(1,3)`   | `[1,2,3,4]`  | `[2,3]` | `[1,2,3,4]` |
| `[1,2,3,4].slice(-2)`    | `[1,2,3,4]`  | `[3,4]` | `[1,2,3,4]` |
| `[1,2,3,4].slice(2)`     | `[1,2,3,4]`  | `[3,4]` | `[1,2,3,4]` |
| `[1,2,3,4].slice(-3,-1)` | `[1,2,3,4]`  | `[2,3]` | `[1,2,3,4]` |
| `[1,2,3].slice(5)`       | `[1,2,3]`    | `[]`    | `[1,2,3]`   |

💡 Key Differences vs splice()
| Feature                  | `slice()` | `splice()`                              |
| ------------------------ | --------- | --------------------------------------- |
| Modifies original array? | ❌ No      | ✅ Yes                                   |
| Returns                  | New array | Deleted elements                        |
| Can insert elements?     | ❌ No      | ✅ Yes                                   |
| Handles negative indices | ✅ Yes     | ✅ Yes                                   |
| Default delete behavior  | ❌ N/A     | Deletes to end if `deleteCount` omitted |

******************************************
**JS Array concat method**

.concat() alwaysreturn new array

| Feature                     | Description                                       |
| --------------------------- | ------------------------------------------------- |
| **Method Name**             | `concat()`                                        |
| **Purpose**                 | Merges two or more arrays                         |
| **Returns**                 | A **new array** (does not modify original arrays) |
| **Syntax**                  | `array1.concat(array2, array3, ..., arrayN)`      |
| **Parameters**              | Arrays and/or values to concatenate               |
| **Changes Original Array?** | ❌ No (non-mutating method)                        |

| Code                    | Output        | Explanation                 |
| ----------------------- | ------------- | --------------------------- |
| `[1,2].concat([3,4])`   | `[1,2,3,4]`   | Merges two arrays           |
| `[1].concat([2],[3])`   | `[1,2,3]`     | Merges multiple arrays      |
| `[1,2].concat(3,4)`     | `[1,2,3,4]`   | Adds values to array        |
| `[1,2].concat([3,[4]])` | `[1,2,3,[4]]` | Does **not** flatten deeply |

**********************************
Array.indexOf() method rteurns -1 of values not exist

| Feature                      | Description                                                                |
| ---------------------------- | -------------------------------------------------------------------------- |
| **Method Name**              | `indexOf()`                                                                |
| **Purpose**                  | Returns the first index at which a given element exists in an array        |
| **Return Value**             | Index (number) if found, otherwise `-1`                                    |
| **Case Sensitive?**          | Yes (for strings)                                                          |
| **Search Direction**         | Left → Right                                                               |
| **Modifies Original Array?** | ❌ No                                                                       |
| **Syntax**                   | `array.indexOf(searchElement, fromIndex)`                                  |
| **Parameters**               | `searchElement` – value to find<br>`fromIndex` (optional) – start position |
| **Works With**               | Primitive values (number, string, boolean)                                 |
| **Object Comparison**        | Compares by reference, not by value                                        |

Array.includes() => used to check value exist inside array and case sensitive

| Feature            | Description                                                                           |
| ------------------ | ------------------------------------------------------------------------------------- |
| **Purpose**        | Checks if an array contains a specific element                                        |
| **Syntax**         | `array.includes(value, startIndex)`                                                   |
| **Parameters**     | `value` – Element to search for<br>`startIndex` (optional) – Index to start searching |
| **Returns**        | `true` or `false`                                                                     |
| **Case Sensitive** | Yes (for strings inside arrays)                                                       |
| **Example**        | `["apple", "banana"].includes("apple")` → `true`                                      |


**Note**
No — indexOf() does NOT perform type coercion.

It uses strict equality (===) for comparison.

🔎 Example 1: Number vs String
let arr = [1, 2, 3];

console.log(arr.indexOf("1")); // -1 ❌
console.log(arr.indexOf(1));   // 0 ✅

***********************************************
find() vs findIndex() Summary
Method	What It Returns	When to Use	Returns if Not Found	Modifies Original Array?
find()	The first element that matches the condition	When you need the actual object/value	undefined	❌ No
findIndex()	The index of the first matching element	When you need the position to update/remove	-1	❌ No
📦 Example Array
const users = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 17 },
  { id: 3, name: "Charlie", age: 25 }
];

🧠 Example Usage
Code	Result	Explanation
users.find(user => user.age > 18)	{ id: 1, name: "Alice", age: 22 }	Returns first user older than 18
users.findIndex(user => user.age > 18)	0	Index of first user older than 18
users.find(user => user.age < 10)	undefined	No match found
users.findIndex(user => user.age < 10)	-1	No match found
🛠 Real-World Example (Update User)
const index = users.findIndex(user => user.id === 2);

if (index !== -1) {
  users[index].age = 18;
}


👉 Use findIndex() when you need to update or delete an item.

⚡ Quick Comparison Code
const numbers = [10, 20, 30, 40];

numbers.find(n => n > 25);      // 30
numbers.findIndex(n => n > 25); // 2
******************************************
**Array.foreach()**
| Feature                 | `for...of`                             | `forEach()`                        |
| ----------------------- | -------------------------------------- | ---------------------------------- |
| **Type**                | Loop statement                         | Array method                       |
| **Works On**            | Any iterable (Array, String, Map, Set) | Arrays only                        |
| **Syntax**              | `for (const item of arr)`              | `arr.forEach((item, index) => {})` |
| **Access Index**        | ❌ Not directly (need manual counter)   | ✅ Provided as parameter            |
| **Break / Continue**    | ✅ Supported                            | ❌ Not supported                    |
| **Return Value**        | None                                   | Always `undefined`                 |
| **Async/Await Support** | ✅ Works properly                       | ⚠️ Does not wait for `await`       |
| **Readability**         | Very clean                             | Clean but callback-based           |

Example
✅ for...of
const arr = [10, 20, 30];

for (const value of arr) {
  console.log(value);
}

✅ forEach()
const arr = [10, 20, 30];

arr.forEach((value, index) => {
  console.log(value);
});

************************************************************

**Array.map()**
Array.map() in JavaScript (Transforming Data)
Array.map() is used to transform each element of an array and return a new array with the transformed values.
It does not modify the original array.

✅ Syntax
**array.map((element, index, array) => {
  return transformedElement;
});**

Parameter	Description
  element	Current item being processed
  index (optional)	Index of current element
  array (optional)	Original array
  Returns	A new transformed array
🔹 Basic Example
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
✔ Original array remains unchanged
✔ Returns new transformed array
🔹 Transform Objects Example
const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 25 }
];
const names = users.map(user => user.name);
console.log(names); // ["John", "Jane"]

| Feature                 | `map()` | `forEach()` |
| ----------------------- | ------- | ----------- |
| Returns new array       | ✅ Yes   | ❌ No        |
| Used for transformation | ✅ Yes   | ❌ Not ideal |
| Can chain methods       | ✅ Yes   | ❌ No        |


*****************************************************

sort() vs reverse()

JavaScript sort() vs reverse()
| Feature                  | `sort()`         | `reverse()`                   |
| ------------------------ | ---------------- | ----------------------------- |
| Purpose                  | Sort elements    | Reverse order of elements     |
| Modifies Original Array  | ✅ Yes            | ✅ Yes                         |
| Returns                  | Sorted array     | Reversed array                |
| Default Behavior         | Sorts as strings | Simply reverses current order |
| Compare Function Needed? | ✅ For numbers    | ❌ No                          |
| Time Complexity          | ~O(n log n)      | O(n)                          |

🔹 1️⃣ sort() Examples
✅ Default Sort (String-based)
const arr = [10, 2, 1];
arr.sort();

console.log(arr);
// [1, 10, 2]  (Wrong for numbers)


Because it sorts as strings:

"1", "10", "2"

✅ Sort Numbers (Ascending)
const arr = [1, 4, 5, 2, 7, 6];
arr.sort((a, b) => a - b);

console.log(arr);
// [1, 2, 4, 5, 6, 7]

✅ Sort Numbers (Descending)
arr.sort((a, b) => b - a);

console.log(arr);
// [7, 6, 5, 4, 2, 1]

✅ Sort Strings
const names = ["John", "Alice", "Bob"];
names.sort();

console.log(names);
// ["Alice", "Bob", "John"]

✅ Sort Objects by Property
const users = [
  { name: "John", age: 25 },
  { name: "Alice", age: 20 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);

🔹 2️⃣ reverse() Examples
✅ Reverse Array
const arr = [1, 2, 3, 4];
arr.reverse();

console.log(arr);
// [4, 3, 2, 1]

✅ Reverse After Sort (Descending Alternative)
const arr = [1, 4, 5, 2, 7, 6];

arr.sort((a, b) => a - b).reverse();

console.log(arr);
// [7, 6, 5, 4, 2, 1]

🔹 Important Differences
Scenario	Result
sort() only	Orders elements
reverse() only	Flips current order
sort().reverse()	Sort ascending → then descending
Both modify original?	✅ Yes

*******************************************************
**sort() vs reverse() **

| Feature                  | `sort()`         | `reverse()`                   |
| ------------------------ | ---------------- | ----------------------------- |
| Purpose                  | Sort elements    | Reverse order of elements     |
| Modifies Original Array  | ✅ Yes            | ✅ Yes                         |
| Returns                  | Sorted array     | Reversed array                |
| Default Behavior         | Sorts as strings | Simply reverses current order |
| Compare Function Needed? | ✅ For numbers    | ❌ No                          |
| Time Complexity          | ~O(n log n)      | O(n)                          |

1️⃣ sort() Examples
✅ Default Sort (String-based)
const arr = [10, 2, 1];
arr.sort();

console.log(arr);
// [1, 10, 2]  (Wrong for numbers)


Because it sorts as strings:

"1", "10", "2"

✅ Sort Numbers (Ascending)
const arr = [1, 4, 5, 2, 7, 6];
arr.sort((a, b) => a - b);

console.log(arr);
// [1, 2, 4, 5, 6, 7]

✅ Sort Numbers (Descending)
arr.sort((a, b) => b - a);

console.log(arr);
// [7, 6, 5, 4, 2, 1]

✅ Sort Strings
const names = ["John", "Alice", "Bob"];
names.sort();

console.log(names);
// ["Alice", "Bob", "John"]

✅ Sort Objects by Property
const users = [
  { name: "John", age: 25 },
  { name: "Alice", age: 20 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);

🔹 2️⃣ reverse() Examples
✅ Reverse Array
const arr = [1, 2, 3, 4];
arr.reverse();

console.log(arr);
// [4, 3, 2, 1]

✅ Reverse After Sort (Descending Alternative)
const arr = [1, 4, 5, 2, 7, 6];

arr.sort((a, b) => a - b).reverse();

console.log(arr);
// [7, 6, 5, 4, 2, 1]

🔹 Important Differences
Scenario	Result
sort() only	Orders elements
reverse() only	Flips current order
sort().reverse()	Sort ascending → then descending
Both modify original?	✅ Yes

******************************************************

Array.filter()

| Feature                      | Description                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Purpose**                  | Creates a **new array** containing elements that pass a test                                                       |
| **Original Array Modified?** | ❌ No, original array remains unchanged                                                                             |
| **Type**                     | Array method                                                                                                       |
| **Callback Function**        | `(element, index, array) => boolean`                                                                               |
| **Return Value**             | New filtered array                                                                                                 |
| **Parameters**               | `element` – current item <br> `index` – optional index of item <br> `array` – optional reference to original array |
| **Chaining**                 | ✅ Can chain with `map()`, `sort()`, `reduce()`, etc.                                                               |
| **Common Use Case**          | Filtering numbers, strings, objects based on condition                                                             |

Filter Numbers Greater Than 10
const numbers = [5, 12, 8, 20];
const result = numbers.filter(num => num > 10);
console.log(result); // [12, 20]

✅ Filter Strings
const names = ["John", "Jane", "Alice"];
const result = names.filter(name => name.startsWith("J"));
console.log(result); // ["John", "Jane"]

✅ Filter Objects
const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 25 }
];

const adults = users.filter(user => user.age >= 21);
console.log(adults);
// [{ name: "Jane", age: 25 }]

✅ Filter Even Numbers
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

**filter() vs map()**

| Feature         | `filter()`                            | `map()`                                     |
| --------------- | ------------------------------------- | ------------------------------------------- |
| Purpose         | Keep elements that meet condition     | Transform elements                          |
| Return          | New array with **subset** of elements | New array with **all elements transformed** |
| Callback Return | `true` / `false`                      | Any value (new transformed value)           |
| Original Array  | ❌ Not modified                        | ❌ Not modified                              |


*********************************************
**Array.reduce()**
| Feature                      | Description                                                                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**                  | Reduce array to a **single value** by repeatedly applying a function                                                                                      |
| **Original Array Modified?** | ❌ No                                                                                                                                                      |
| **Syntax**                   | `array.reduce((accumulator, currentValue, index, array) => { ... }, initialValue)`                                                                        |
| **Callback Parameters**      | `accumulator` → accumulated value so far<br>`currentValue` → current element<br>`index` (optional) → current index<br>`array` (optional) → original array |
| **Initial Value**            | Optional starting value for `accumulator`. If not provided, the first array element is used.                                                              |
| **Return Value**             | Single value of any type (number, string, object, array, etc.)                                                                                            |
| **Chaining**                 | ✅ Can chain with `map()`, `filter()`, `sort()`, etc.                                                                                                      |
| **Use Cases**                | Sum, product, max/min, flatten arrays, group items, create objects                                                                                        |
🔹 Basic Syntax
const result = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);


0 → initial value of accumulator

accumulator accumulates result

currentValue is each element

🔹 Examples
✅ Sum of Numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum); // 15

✅ Product of Numbers
const numbers = [1, 2, 3, 4];
const product = numbers.reduce((acc, val) => acc * val, 1);
console.log(product); // 24

✅ Find Maximum Value
const numbers = [10, 5, 20, 8];
const max = numbers.reduce((acc, val) => (val > acc ? val : acc), numbers[0]);
console.log(max); // 20

✅ Flatten an Array of Arrays
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, val) => acc.concat(val), []);
console.log(flat); // [1, 2, 3, 4, 5]

✅ Count Occurrences in Array
const fruits = ["apple", "banana", "apple", "orange", "banana"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 2, banana: 2, orange: 1 }

**reduce() vs map() / filter()**

| Feature                 | `reduce()`                       | `map()`                    | `filter()`                       |
| ----------------------- | -------------------------------- | -------------------------- | -------------------------------- |
| Purpose                 | Reduce array to **single value** | Transform **each element** | Keep **elements that pass test** |
| Returns                 | Any type                         | Array of same length       | Array of subset                  |
| Callback Must Return    | ✅ accumulator                    | ✅ new value                | ✅ boolean                        |
| Original Array Modified | ❌ No                             | ❌ No                       | ❌ No                             |

**********************************************
**split() vs join()**

| Feature           | `split()`                                                                          | `join()`                                                         |
| ----------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Purpose           | Converts a **string → array**                                                      | Converts an **array → string**                                   |
| Syntax            | `string.split(separator, limit)`                                                   | `array.join(separator)`                                          |
| Parameters        | `separator` → string or regex to split on <br> `limit` → optional number of pieces | `separator` → string to insert between elements (default is `,`) |
| Returns           | New array of substrings                                                            | New string                                                       |
| Modifies Original | ❌ No                                                                               | ❌ No                                                             |
| Common Use        | Split sentences, CSV parsing, tokenize strings                                     | Combine array elements, create strings from arrays               |

**********************************************
use of ...spread operator in js array tpo create a shallow copy

| Use Case                      | Description                           | Example                                                          | Output                             |
| ----------------------------- | ------------------------------------- | ---------------------------------------------------------------- | ---------------------------------- |
| **Copy Array**                | Create a **shallow copy** of an array | `const arr = [1,2,3]; const copy = [...arr];`                    | `[1,2,3]`                          |
| **Merge Arrays**              | Combine multiple arrays               | `const a=[1]; const b=[2,3]; const merged=[...a,...b];`          | `[1,2,3]`                          |
| **Add Elements**              | Add elements while copying            | `const arr=[2,3]; const newArr=[1,...arr,4];`                    | `[1,2,3,4]`                        |
| **Copy Array of Objects**     | Shallow copy objects inside array     | `const users=[{name:'John'}]; const copy=[...users];`            | `[ {name:'John'} ]`                |
| **Add Object to Array**       | Add new object while keeping existing | `const newUsers=[...users,{name:'Jane'}];`                       | `[ {name:'John'}, {name:'Jane'} ]` |
| **Update Object in Array**    | Create new array with updated object  | `const updated = users.map(u=>u.name==='John'?{...u,age:25}:u);` | `[ {name:'John', age:25} ]`        |
| **Convert Iterable to Array** | Spread a string or Set into array     | `const arr=[...'hello'];`                                        | `['h','e','l','l','o']`            |

*****************************************************************
**Array destructuring:**
| Use Case                        | Description                            | Example                                          | Output                |
| ------------------------------- | -------------------------------------- | ------------------------------------------------ | --------------------- |
| **Basic Assignment**            | Assign array elements to variables     | `const arr=[1,2,3]; const [a,b,c]=arr;`          | `a=1, b=2, c=3`       |
| **Skip Elements**               | Skip elements using commas             | `const [x,,y]=arr;`                              | `x=1, y=3`            |
| **Default Values**              | Assign default if element is undefined | `const [p,q,r=5]=[1,2];`                         | `p=1, q=2, r=5`       |
| **Rest Pattern**                | Collect remaining elements into array  | `const [first,...rest]=arr;`                     | `first=1, rest=[2,3]` |
| **Swap Variables**              | Swap values without temp variable      | `let a=1,b=2; [a,b]=[b,a];`                      | `a=2, b=1`            |
| **Nested Arrays**               | Destructure nested arrays              | `const arr2=[1,[2,3]]; const [i,[j,k]]=arr2;`    | `i=1, j=2, k=3`       |
| **Destructure Function Return** | Assign multiple return values          | `function f(){ return [1,2]; } const [x,y]=f();` | `x=1, y=2`            |
| **Ignore Rest**                 | Only take some elements                | `const [a,b]=[1,2,3,4];`                         | `a=1, b=2`            |

************************************************************************
**JS Set**

| Feature / Method        | Description                           | Syntax / Example                             | Output / Result |
| ----------------------- | ------------------------------------- | -------------------------------------------- | --------------- |
| **Create Set**          | Create a new Set (unique values only) | `const s = new Set([1,2,2,3]);`              | `Set {1,2,3}`   |
| **add()**               | Add a value to the Set                | `s.add(4);`                                  | `Set {1,2,3,4}` |
| **delete()**            | Remove a value                        | `s.delete(2);`                               | `Set {1,3,4}`   |
| **has()**               | Check if value exists                 | `s.has(3);`                                  | `true`          |
| **size**                | Get number of elements                | `s.size;`                                    | `3`             |
| **clear()**             | Remove all elements                   | `s.clear();`                                 | `Set {}`        |
| **forEach()**           | Iterate over values                   | `s.forEach(v=>console.log(v));`              | Prints 1,3,4    |
| **Spread operator**     | Convert Set → Array                   | `const arr=[...s];`                          | `[1,3,4]`       |
| **Convert Array → Set** | Remove duplicates from array          | `const arr=[1,2,2,3]; const s=new Set(arr);` | `Set {1,2,3}`   |
| **Convert Set → Array** | `Array.from(s)` or `[...s]`           | `const arr=Array.from(s);`                   | `[1,2,3]`       |
************************************************************************
**JS MAP**
Keys can be any type – string, number, object, or even functions:

const obj = {};
const m = new Map();
m.set(obj, "value");
console.log(m.get(obj)); // "value"

Maintains insertion order – unlike plain objects.
Useful for counting, mapping, or caching data with non-string keys.

| Feature / Method        | Description                           | Syntax / Example                             | Output / Result                    |
| ----------------------- | ------------------------------------- | -------------------------------------------- | ---------------------------------- |
| **Create Map**          | Create a new Map                      | `const m = new Map([ ['a',1], ['b',2] ]);`   | `Map { 'a' => 1, 'b' => 2 }`       |
| **set()**               | Add or update a key-value pair        | `m.set('c',3);`                              | `Map { 'a'=>1, 'b'=>2, 'c'=>3 }`   |
| **get()**               | Get value by key                      | `m.get('a');`                                | `1`                                |
| **has()**               | Check if key exists                   | `m.has('b');`                                | `true`                             |
| **delete()**            | Remove key-value pair                 | `m.delete('b');`                             | `Map { 'a'=>1, 'c'=>3 }`           |
| **size**                | Number of key-value pairs             | `m.size;`                                    | `2`                                |
| **clear()**             | Remove all key-value pairs            | `m.clear();`                                 | `Map {}`                           |
| **keys()**              | Return iterator of keys               | `m.keys();`                                  | `MapIterator { 'a', 'c' }`         |
| **values()**            | Return iterator of values             | `m.values();`                                | `MapIterator { 1, 3 }`             |
| **entries()**           | Return iterator of [key, value] pairs | `m.entries();`                               | `MapIterator { ['a',1], ['c',3] }` |
| **forEach()**           | Iterate over Map                      | `m.forEach((v,k)=>console.log(k,v));`        | Prints `a 1`, `c 3`                |
| **Spread operator**     | Convert Map to array                  | `const arr=[...m];`                          | `[ ['a',1], ['c',3] ]`             |
| **Convert Array → Map** | From key-value pairs array            | `const m = new Map([ ['x',10], ['y',20] ]);` | `Map { 'x'=>10, 'y'=>20 }`         |

************************************
 set vs weakset()
 Key Differences Between Set and WeakSet
Feature	Set	WeakSet
References	Strong reference	Weak reference
Garbage Collection	Object stays in memory until removed from Set	Object can be garbage collected if no other references exist
Iterable	✅ Yes	❌ No
Size	✅ .size property available	❌ No .size
Values Allowed	Objects, primitives	Objects only
Use Case	Store unique values safely	Track objects without preventing GC
🔹 Summary
Using Set keeps a strong reference, so the object will not be garbage collected even if you set your variable to null.
Using WeakSet keeps a weak reference, so the object can be garbage collected when there are no other references.
Set is iterable and has .size. WeakSet is not iterable and has no .size.

<img width="652" height="806" alt="image" src="https://github.com/user-attachments/assets/254a8cd4-d379-4880-809e-cc9086edecfb" />

WeakSet vs WeakMap Summary Table
<img width="799" height="812" alt="image" src="https://github.com/user-attachments/assets/783b773c-5716-4ec6-8391-3696074c42e7" />

*******************************************
**JS Objects**

Summary
  Objects = collection of properties + methods.
  They are mutable and can represent real-world entities.
  Methods are just functions associated with the object.
  Objects can also inherit properties and methods from a prototype.

✅ Key takeaway:

Object keys: string or symbol (numbers and booleans are converted to strings)
Object values: keep their type, coercion only happens when used in operations

| Feature         | Object                       | Map                             |
| --------------- | ---------------------------- | ------------------------------- |
| Key types       | Strings, Symbols             | Any type (string, number, obj…) |
| Key coercion    | Yes (numbers → strings)      | No                              |
| Key uniqueness  | By string/symbol             | By exact value/reference        |
| Iteration order | Not guaranteed (except ES6+) | Guaranteed (insertion order)    |

**Undefined vs. null**
undefined → property doesn’t exist or hasn’t been assigned a value yet.
null → property exists, but intentionally set to “no value”.

✅ Key takeaway:
Accessing non-existent properties always returns undefined.
This is different from other languages that might throw an error for missing keys.
Helps JS be flexible and dynamic, but can lead to bugs if you forget to check for existence.

| Case                                                           | Result                              | Explanation                                               |
| -------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------- |
| Primitive with value (number, string, boolean, bigint, symbol) | undefined if property doesn’t exist | JS auto-boxes primitive temporarily                       |
| Primitive is `null` or `undefined`                             | TypeError                           | Cannot create temporary object to access property         |
| Object with missing property                                   | undefined                           | Safe, object exists so missing property returns undefined |

✅ Takeaway:
  undefined is returned for missing properties on initialized primitives (except null/undefined).
  TypeError occurs if the primitive itself is undefined or null, because JS can’t wrap it.

**Delete operator**
Basic syntax
  delete object.property;
  delete object["property"];
Removes the property from the object completely.
After deletion, accessing that property will return undefined
Note: delete only works on object properties, not variables declared with let, const, or var:

Very Important Rule

| Code        | Meaning                                 |
| ----------- | --------------------------------------- |
| `b.name`    | property literally called `"name"`      |
| `b["name"]` | property literally called `"name"`      |
| `b[name]`   | property using value of variable `name` example :
              |b={name:"kk"}
              {name: 'kk'}
              b[name]
              undefined
              let name ="name"
              undefined
              b[name]
              'kk'

🚀 Simple Mental Trick
  If it's inside quotes → property name
  If no quotes → variable


  | Feature                              | Dot Notation (`.`)             | Bracket Notation (`[]`)            |
| ------------------------------------ | ------------------------------ | ---------------------------------- |
| Basic syntax                         | `obj.name`                     | `obj["name"]`                      |
| Property name type                   | Must be a **valid identifier** | Can be **any expression**          |
| Requires quotes                      | ❌ No                           | ✅ Yes (if using string literal)    |
| Dynamic property access              | ❌ Not possible                 | ✅ Yes                              |
| Works with variables                 | ❌ No                           | ✅ Yes                              |
| Works with spaces/special characters | ❌ No                           | ✅ Yes                              |
| Internally converts key              | Not needed (literal)           | Converts to string (unless Symbol) |

🔥 When to Use What?
| Use Case                  | Best Choice |
| ------------------------- | ----------- |
| Simple known property     | `.`         |
| Dynamic key (variable)    | `[]`        |
| Special characters/spaces | `[]`        |
| Numeric keys              | `[]`        |

🚀 Quick Rule to Remember

Use . → when you know the exact property name
Use [] → when property name is dynamic or not a valid identifier.

**Using [] in Object Keys (Computed Properties)**
| Case              | Without `[]`     | With `[]`               | Result                       |
| ----------------- | ---------------- | ----------------------- | ---------------------------- |
| Literal key       | `{ name: "kk" }` | ❌ Not needed            | `{ name: "kk" }`             |
| Variable as key   | `{ key: "kk" }`  | `{ [key]: "kk" }`       | Uses value of `key` variable |
| Function as key   | ❌ Not possible   | `{ [getKey()]: 25 }`    | Uses function return value   |
| Expression as key | ❌ Not possible   | `{ ["na"+"me"]: "kk" }` | Evaluates expression         |
| Number as key     | `{ 1: "one" }`   | `{ [num]: "one" }`      | Converted to `"1"`           |

Example:
🔹 Example 1 — Variable as key
const key = "name";
const obj = {
  [key]: "Karthik"
};
console.log(obj);
// { name: "Karthik" }

Without []:
const obj = {
  key: "Karthik"
};
// { key: "Karthik" } ❌ literal "key"


Example🔢const propKey = 'field 12';
const person = {
    [propKey]: 'Max'
};
console.log(person['field 12']);
VM1342:5 Max
undefined
const propKey = 'field 12';
const person = {
    [propKey]: 'Max'
};
console.log(person[propKey]);
VM1347:5 Max

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
**IMportant**
| Scenario                      | What Gets Copied?             | Safe?           | Example                              | Result                               |
| ----------------------------- | ----------------------------- | --------------- | ------------------------------------ | ------------------------------------ |
| `[...arr]` (primitive array)  | New array + values            | ✅ Yes           | `const a=[1,2]; const b=[...a];`     | Changing `b[0]` does NOT affect `a`  |
| `[...arr]` (array of objects) | New array only                | ⚠️ Partial      | `const a=[{n:1}]; const b=[...a];`   | Changing `b[0].n` affects `a[0].n`   |
| `{...obj}` (flat object)      | New object + primitive values | ✅ Yes           | `const a={n:1}; const b={...a};`     | Changing `b.n` does NOT affect `a.n` |
| `{...obj}` (nested object)    | New outer object only         | ❌ No            | `const a={x:{n:1}}; const b={...a};` | Changing `b.x.n` affects `a.x.n`     |
| `arr.map(o => ({...o}))`      | New array + new objects       | ✅ Yes (1 level) | `const b=a.map(o=>({...o}))`         | Safe unless objects are nested       |
| `structuredClone(obj)`        | Deep copy everything          | ✅ Yes           | `const b=structuredClone(a)`         | Fully independent copy               |

Memory rule:
| Type                                | Copied By |
| ----------------------------------- | --------- |
| Primitive (number, string, boolean) | Value     |
| Object / Array                      | Reference |

**another way : Object.assign()** instead 0f ... operator
<img width="870" height="812" alt="image" src="https://github.com/user-attachments/assets/73607da6-a03c-45f5-8b87-89016c3f7930" />

Object Destructuring

| Feature                          | Syntax                                | Description                                           | Example                                                                       | Result                       |
| -------------------------------- | ------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------- |
| Basic destructuring              | `const { key } = obj;`                | Extracts a property from an object into a variable    | `const obj = { name: "John", age: 30 }; const { name } = obj;`                | `name = "John"`              |
| Multiple properties              | `const { key1, key2 } = obj;`         | Extract multiple properties at once                   | `const { name, age } = obj;`                                                  | `name = "John", age = 30`    |
| Rename variables                 | `const { key: newName } = obj;`       | Assign property to a new variable name                | `const { name: username } = obj;`                                             | `username = "John"`          |
| Default values                   | `const { key = defaultValue } = obj;` | Use default if property is undefined                  | `const { gender = "M" } = obj;`                                               | `gender = "M"`               |
| Nested destructuring             | `const { nested: { key } } = obj;`    | Extract property from nested object                   | `const obj = { address: { city: "NY" } }; const { address: { city } } = obj;` | `city = "NY"`                |
| Destructuring in function params | `function fn({ key }) {}`             | Directly extract from object parameter                | `function greet({ name }) { console.log(name); } greet({ name: "John" })`     | logs `"John"`                |
| Combine with rest operator       | `const { key, ...rest } = obj;`       | Extract one property, put remaining in another object | `const obj = { a:1, b:2, c:3 }; const { a, ...rest } = obj;`                  | `a = 1, rest = { b:2, c:3 }` |

<img width="828" height="570" alt="image" src="https://github.com/user-attachments/assets/6f32bf34-c513-4714-aa64-0e31a89a5ba4" />

🔹 Quick Note
Order doesn’t matter — object destructuring matches by property name, not position.
Works well with nested objects, default values, and renaming.
Can be combined with spread/rest (...) to extract remaining properties.
Very useful in React props or function arguments.

**Verify Object Properties – Summary Table**
| Method                            | Checks For                                                          | Syntax / Example              | Notes / Caveats                                            |
| --------------------------------- | ------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------- |
| `in` operator                     | Checks if **property exists anywhere** in object (own or inherited) | `'name' in obj`               | ✅ Returns true for inherited properties too                |
| `obj.hasOwnProperty()`            | Checks if **property exists directly on object** (not inherited)    | `obj.hasOwnProperty('name')`  | ✅ Safer for own properties only                            |
| `obj.key !== undefined`           | Checks if property **has a value other than undefined**             | `if (obj.name !== undefined)` | ❌ Will fail if property exists but is `undefined`          |
| `Object.hasOwn()` (modern)        | Checks if property is **own property**                              | `Object.hasOwn(obj, 'name')`  | ✅ Modern replacement for `hasOwnProperty()`                |
| Optional chaining + nullish check | Checks deeply nested properties safely                              | `if (obj?.address?.city)`     | ✅ Avoids runtime errors if intermediate keys are undefined |



XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

**this - keyword **

| **Context / Scope**                      | **How to Access Properties**                                    | **Example**                                                                                                              | **Result / Notes**                                                                     |
| ---------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| **Inside object method**                 | Use `this.property`                                             | `javascript const person = { name: "Alice", greet() { console.log(this.name); } }; person.greet(); // "Alice" `          | `this` refers to the object, allows dynamic access without hardcoding                  |

| **Outside object, different block**      | Use `object.property`                                           | `javascript const person = { name: "Alice" }; { console.log(person.name); } // "Alice" `                                 | You **cannot** access property directly as a variable; must reference the object       |

| **Inside object, arrow function method** | `this` inherits outer scope                                     | `javascript const person = { name: "Alice", greet: () => console.log(this.name) }; person.greet(); // undefined `        | Arrow functions **don’t bind their own `this`**, usually not useful for object methods |

| **Inside constructor function**          | Use `this.property`                                             | `javascript function Person(name) { this.name = name; } const bob = new Person("Bob"); console.log(bob.name); // "Bob" ` | `this` points to the new object being created; without `this`, property won’t attach   |

| **Regular function outside object**      | `this` refers to global object                                  | `javascript function show() { console.log(this); } show(); // window (browser) `                                         | Not usually used to access object properties                                           |

| **Block scope variable**                 | Cannot access object property directly without object reference | `javascript const person = { name: "Alice" }; { console.log(name); } // ReferenceError `                                 | Object properties are **not block-scoped variables**, must use `object.property`       |

2️⃣ JavaScript: Object properties are not automatically in scope
const person = {
  name: "Alice",
  greet: function() {
    console.log(name); // ❌ ReferenceError
  }
};

**Why this fails in JS:**
name is a property of the object, not a variable in the function scope.
Methods in JS don’t automatically get object properties as local variables.
To access object properties, you must reference the object:
Inside a method: this.name
Outside the object: person.name

Memory difference:
JS separates stack (function scope) and heap (object properties) strictly.
Fields aren’t magically copied into function scope like Java.

3️⃣ Optional: When this is optional in JS

In JS, this can sometimes be skipped if you destructure or assign the property to a local variable:
const person = {
  name: "Alice",
  greet: function() {
    const { name } = this; // now name is a local variable
    console.log(name);      // ✅ "Alice"
  }
};

This is manual in JS.
Java does it automatically for class fields.

**USAGE OF BIND IN this**
1️⃣ Why bind is needed

In JavaScript:

const { getFormattedTitle } = movie;
getFormattedTitle(); // ❌ Error: Cannot read properties of undefined (reading 'title')


When you extract a method from an object, it loses its implicit this binding.

Inside the function, this no longer points to the object (movie) — it becomes undefined in strict mode.

✅ Solution: bind() sets the value of this permanently for that function:

getFormattedTitle = getFormattedTitle.bind(movie);
getFormattedTitle(); // ✅ Works


Now, no matter how you call the function, this always points to movie.

2️⃣ How bind works
const person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

const greet = person.greet;
greet(); // ❌ undefined or "Hello, undefined"

const boundGreet = person.greet.bind(person);
boundGreet(); // ✅ "Hello, Alice"


.bind(object) returns a new function with this permanently set to object.

3️⃣ Quick comparison table
| Method          | `this` inside function | Example                                                             |
| --------------- | ---------------------- | ------------------------------------------------------------------- |
| Direct call     | Refers to object       | `person.greet()` → "Hello, Alice"                                   |
| Detached method | Loses object reference | `const greet = person.greet; greet()` → "Hello, undefined"          |
| Bound method    | `this` fixed to object | `const greet = person.greet.bind(person); greet()` → "Hello, Alice" |

4️⃣ Key takeaway

bind is used to fix this so a function still works even if called detached from the object.
Useful in callbacks, destructuring, event handlers, or passing methods around.


| **Scenario**                             | **Function uses `this`?** | **Bind value (`thisArg`)**              | **Example**                                                                                                                                 | **Result / Notes**                                                 |
| ---------------------------------------- | ------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Function **does not use `this`**         | ❌ No                      | Any value (`this`, `null`, `undefined`) | `javascript function multiply(a,b){ return a*b; } const double = multiply.bind(null,2); console.log(double(5)); // 10 `                     | Works fine because `this` is ignored; only preset arguments matter |

| Function **uses `this`**                 | ✅ Yes                     | Must be the correct object              | `javascript const obj = { x: 10, multiply(b){ return this.x*b; } }; const double = obj.multiply.bind(obj,2); console.log(double()); // 20 ` | `this` must point to the object to access its properties           |

| Function **uses `this`, but wrong bind** | ✅ Yes                     | Wrong object / null                     | `javascript const wrong = obj.multiply.bind(null,2); console.log(wrong()); // NaN `                                                         | `this` is incorrect, so property access fails                      |

| Function **no preset args**              | Any                       | Any                                     | `javascript const double = multiply.bind(null); console.log(double(5,6)); // 30 `                                                           | Only affects `this`; arguments are passed normally                 |


✅ Key takeaways

.bind(thisArg, arg1, arg2…):

Fixes this inside the function.
Optionally pre-fills arguments for partial application.
If the function doesn’t use this, the thisArg doesn’t matter.
If the function does use this, the correct object must be bound, or it will fail.
You can mix this binding and argument pre-filling for convenience in callbacks, event handlers, and timers.

What is Bind?
Think of bind as “gluing a function to an object” so it always knows who it belongs to (this) and optionally what arguments it should start with.
Without bind → function can “forget” its object (this becomes wrong)
With bind → function always remembers its object and preset arguments

<img width="727" height="560" alt="image" src="https://github.com/user-attachments/assets/a0aaf312-7140-43d1-a763-c1af380a070d" />

**using this in fucntion()  vs ()=>{}**

**Simple Final Rule**

If you need:
this
bind
call
apply
dynamic object context
👉 DO NOT use arrow functions.
Use normal functions.

Core Rule (Most Important)

this depends on HOW a function is called, NOT where it is written.

✅ 1️⃣ Global Context
console.log(this);


Browser → window

Even in strict mode

👉 Avoid relying on this here.

✅ 2️⃣ Normal Function (Standalone Call)
function test() {
  console.log(this);
}

test();


Non-strict → window

Strict → undefined

👉 Don’t rely on this in standalone functions.

✅ 3️⃣ Object Method (Regular Function)
const person = {
  name: "Max",
  greet() {
    console.log(this.name);
  }
};

person.greet(); // "Max"


✔ this = object before the dot
✔ This is the most common and safe usage

❌ 4️⃣ Object Method (Arrow Function)
const person = {
  name: "Max",
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // undefined


🚨 Arrow functions do NOT have their own this
They inherit from outer scope.

👉 Do NOT use arrow functions as object methods if you need this.

✅ 5️⃣ Extracting a Method (Loses this)
const greet = person.greet;
greet(); // undefined


When extracted:

Function is no longer called as person.greet()

this is lost

✅ 6️⃣ Fixing with .bind()
const greet = person.greet.bind(person);
greet(); // "Max"


✔ bind() permanently sets this

✅ 7️⃣ bind() with Arguments (Partial Application)
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
double(5); // 10


First argument fixed to 2

this irrelevant because function doesn’t use it

❌ 8️⃣ Arrow Functions + bind()
const obj = {
  x: 10,
  getX: () => this.x
};

const fn = obj.getX.bind(obj);
fn(); // ❌ still wrong


🚨 bind() does NOT work on arrow functions
Arrow functions ignore this binding.

✅ 9️⃣ Event Listeners
Regular function:
button.addEventListener("click", function() {
  console.log(this); // button
});


✔ this = element

Arrow function:
button.addEventListener("click", () => {
  console.log(this); // outer scope
});


❌ Not the button
| Situation                | What is `this`?     | What to Use          |
| ------------------------ | ------------------- | -------------------- |
| Object method            | The object          | Regular function     |
| Extracted method         | Lost / undefined    | Use `.bind()`        |
| Arrow function           | Outer scope         | Avoid for methods    |
| Event listener (regular) | The element         | Regular function     |
| Standalone function      | window / undefined  | Avoid using `this`   |
| `bind(obj)`              | Forces `this = obj` | When passing methods |

🚀 One-Line Memory Trick

Regular function → this depends on WHO calls it
Arrow function → this depends on WHERE it was created

**What “outer scope” actually means**
Arrow functions do not create their own this.
Instead, they inherit this from where they are defined, not where they are called.
This is called:
Lexical this (fixed at creation time)

✅ Example 1: Arrow in Global Scope
const test = () => {
  console.log(this);
};

test();


In browser:

this = window

Because arrow takes this from outer global scope

✅ Example 2: Arrow Inside a Method
const person = {
  name: "Max",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

person.greet(); // "Max"


Why does this work?

greet() is a normal method → this = person

Arrow function inside it inherits that this

So inner() still sees this = person

✔ This is a GOOD use of arrow functions.

❌ Example 3: Arrow as Object Method
const person = {
  name: "Max",
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // undefined


Why?

Arrow function takes this from outer scope (global)

NOT from person

So this !== person

*****************************************************************************************************************************

🔥 What Are Getters and Setters?

They are special methods inside objects that let you:

✅ Control how a property is read (getter)

✅ Control how a property is updated (setter)

They look like properties but behave like functions.

<img width="625" height="760" alt="image" src="https://github.com/user-attachments/assets/c5a96b0d-38f5-4894-9c19-8027bf70287a" />
**********************************************************************
Sumamrise this
| Situation              | Example Call        | What `this` Refers To                             | Memory Hint       |
| ---------------------- | ------------------- | ------------------------------------------------- | ----------------- |
| 🌍 Global              | `console.log(this)` | Global object (`window` in browser)               | Global = window   |
| 🔹 Object Method       | `obj.say()`         | The object before the dot                         | **Dot = Object**  |
| ⚙️ Regular Function    | `func()`            | `undefined` (strict mode) / `window` (non-strict) | Alone = undefined |
| ➡️ Arrow Function      | `() => {}`          | Inherits from parent scope                        | Arrow = Parent    |
| 🆕 Constructor         | `new Person()`      | Newly created object                              | New = New object  |
| 🎯 call / apply / bind | `func.call(obj)`    | Whatever you pass                                 | You decide        |

🧠 Memory Rule
| Function Type    | `bind`/`call`/`apply` work? |
| ---------------- | --------------------------- |
| Regular function | ✅ Yes                       |
| Arrow function   | ❌ No (fixed `this`)         |

**********************************************************************

| Topic                              | Description                                                                                                       | Example                                                                                                                                        |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Prototype**                      | Every JS object has an internal property `[[Prototype]]` linking it to another object. It’s used for inheritance. | `let obj = {}; Object.getPrototypeOf(obj);`                                                                                                    |
| **Prototype Chain**                | A chain of objects used to resolve properties not found on the object itself.                                     | `obj.toString(); // searches obj → Object.prototype → null`                                                                                    |
| **Constructor Function Prototype** | Functions have a `prototype` property. Objects created via `new` inherit from this.                               | `function Person(name){ this.name = name; } Person.prototype.greet = function(){ console.log("Hi"); } let p = new Person("Alice"); p.greet();` |
| **Object.create()**                | Creates a new object with a specified prototype.                                                                  | `let obj = Object.create(Person.prototype);`                                                                                                   |
| **ES6 Classes**                    | Syntactic sugar over prototypes; methods are added to `Class.prototype`.                                          | `class Person { greet(){ console.log("Hi"); } } let p = new Person(); p.greet();`                                                              |
| **Modifying Prototype**            | You can add methods to prototype even after objects are created; all instances see the changes.                   | `Person.prototype.sayBye = () => console.log("Bye");`                                                                                          |
| ****proto****                      | Access or set an object’s prototype (not recommended for production; use Object.getPrototypeOf/setPrototypeOf).   | `obj.__proto__`                                                                                                                                |
| **Prototype vs Instance Property** | JS checks instance first, then prototype if property/method is missing.                                           | `p.name = "Bob"; console.log(p.name); // instance overrides prototype`                                                                         |
| **hasOwnProperty()**               | Checks if property exists directly on object (not prototype).                                                     | `p.hasOwnProperty('name'); // true`                                                                                                            |
********************************************************************
