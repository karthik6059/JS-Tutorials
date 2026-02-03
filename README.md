
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

  
  
