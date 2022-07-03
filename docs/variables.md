> Var

### 1. Hoisted (always declared at top of scope, global if none)

#### Example

```
console.log(a);
var a = 1;
console.log(a);

// it is interpreted as this:
var a = undefined;
console.log(a);
a = 1;
console.log(a);
```

#### Output

```
undefined
1
```

### 2. Can re-declare

#### Example:

```
var a = 8;
var a = 9;
console.log(a);
```

#### Output:

```
9
```

### 3. Global scoped

#### Example:

```
var a = 1;
function doSomeThing() {
  console.log(a)
}
console.log(a);
```

#### Output:

```
1
1
```

### 4. Function scoped

#### Example:

```
function doSomeThing() {
  var a = 10;
  console.log('inside', a);
}
doSomeThing();
console.log('outside', a);
```

#### Output:

```
inside 10
Uncaught ReferenceError: a is not defined
```

### 5. Do not have block scope

#### Example:

```
var aMessage = "hello world";
var isOk = true;
if (isOk) {
  var aMessage = "hi mom";
}
console.log(aMessage);
```

#### Output:

```
hi mom
```

> Let

### 1. Block scope

#### Example:

```
let aMessage = "hello world";
let isOk = true;
if (isOk) {
  let aMessage = "hi mom";
}
console.log(aMessage);
```

#### Output:

```
hello world
```

### 2. Cannot re-declared

#### Example:

```
let aMessage = "hello world";
let aMessage = "hi mom";
console.log(aMessage);
```

#### Output:

```
Uncaught SyntaxError: Identifier 'aMessage' has already been declared
```

### 3. Hoisted

#### Example

```
console.log(a);
let a = 1;
console.log(a);

// it is interpreted as this:
let a;
console.log(a);
a = 1;
console.log(a);
```

#### Output

```
Uncaught ReferenceError: a is not defined
```

### 4. Can update value

#### Example

```
let a = 1;
console.log(a);
a = 2;
console.log(a);
```

#### Output

```
1
2
```

> const

### 1. Cannot update value

#### Example

```
const a = 1;
console.log(a);
a = 2;
console.log(a);
```

#### Output

```
1
Uncaught TypeError: Assignment to constant variable.
```

### 2. Scope

#### Example

```
const a = 1;
function saySomeThing() {
  const a = 2;
  console.log('inside function' , a);
}
saySomeThing();
console.log('outside', a)
```

#### Output

```
inside function 2
outside 1
```

### Pass by value (tham tri) and pass by reference (tham chieu)

#### Pass by Value:

In Pass by Value, Function is called by directly passing the value of the variable as the argument. Changing the argument inside the function doesn’t affect the variable passed from outside the function.

Javascript always pass by value so changing the value of the variable never changes the underlying primitive (String or number).

```
let x = 4;
let y = 5;
function doSomeThing(a, b) {
  console.log('before', a, b)
  a = 1;
  b = 9
  console.log('after', a, b)
}
doSomeThing(x, y);
console.log('outside', x, y);
```

#### Pass by Reference:

In Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument. Changing the argument inside the function affect the variable passed from outside the function. In Javascript objects and arrays follows pass by reference.

```
const aPerson = {
  name: 'Diep',
};

function doSomeThing(obj) {
  console.log('before', obj)
  obj.name = 'Nam';
  console.log('after', obj)
}
doSomeThing(aPerson);
console.log('outside', aPerson);
```

### References:

- https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/#:~:text=The%20scope%20of%20a%20let%20variable%20is%20block%20scope.,re%2Ddeclared%20into%20the%20scope.
- https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
- https://www.w3schools.com/js/js_hoisting.asp
- https://medium.com/nodesimplified/javascript-pass-by-value-and-pass-by-reference-in-javascript-fcf10305aa9c
