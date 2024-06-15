# CHECKPOINT 7
 
## **¿Qué diferencia a JavaScript de cualquier otro lenguaje de programación?**
 
**JavaScript differs from other programming languages** in several ways.

One of the major differences between JavaScript and other programming languages is how they are executed. Most programming languages are compiled, meaning that the code must be compiled into machine code before it can be run. On the other hand, JavaScript is an interpreted language, meaning that it does not need to be compiled before it can be run. This makes JavaScript easier to work with, as developers don't have to wait for their code to compile before they can test it.

Another key difference between JavaScript and other programming languages is where they are run. JavaScript is designed to run in web browsers and, therefore, is a client-side scripting language. This means that code written in JavaScript will be executed on the user's computer rather than on the server. Other programming languages instead are usually run on the server-side, meaning that they must be sent from the server to the user's computer before they can be executed. Unlike compiled languages, JavaScript is interpreted directly by web browsers. This means that code written in JavaScript can run directly in the browser, without the need for any additional software or tools.

JavaScript is an object-oriented programming language. This means that code written in JavaScript is made up of objects that contain data and functions. These objects can be manipulated and used to create complex programs. On the other hand, many other programming languages are procedural, meaning that code written in these languages consists of a series of instructions that must be followed in order.

Another key difference between JavaScript and other programming languages is how they handle data types. JavaScript is a dynamic language, meaning that variables do not have to be declared with a specific type. This makes it easier to work with data as developers do not have to specify its type when declaring variables. Other programming languages are usually statically typed, meaning that variables must be declared with a specific type before they can be used.

 
## **¿Cuáles son algunos tipos de datos JS?**
 
In JavaScript, as in other programming languages, there are different data types. Here we have some of JavaScript data types with an example of each of them so we can understand it better:

**- Boolean:**
Can have two potencial values, true or false.

```
var truthy = true;
var notTruthy = false;

truthy; 
notTruthy; 

// true
// false
```


**- Null:**
Only can have one value, null. It's the absence of any kind of value. Null means empty.

```
var nully = null;
nully;
```


**- Undefined:**
Usually used for debugging.  By default, when you simply declare a variable, JS is going to set it equal to undefined.

While null means it's defined but it's empty, undefined means that hasn't been assigned yet (has to be assigned later).

```
var notDefined;
notDefined; 

// Undefined
```

**- Number:**

```
var age = 20;
age; 

// 20
```


**- String:**
We can use single or double quotation:

```
var city = "London";
var country = 'Germany';

city;
country; 

// "London"
// 'Germany'
```

 
**- Symbol**
Similar to strings but they have some specific rules. They can't be changed. Is used primarily for working with objects.

```
var Sym = Symbol('box');
Sym; 

// Symbol(box)
```

 
## **¿Cuáles son las tres funciones de String en JS?**

In JavaScript we do use functions because they allow us to encapsulate behaviour.

The functions we are going to see are functions provided in the JavaScript library, so we don't have to create them.
By having an object, with this functions, we are going to be able to perform different changes or to make value queries.

In order to show the different functions, we re going to create the next variable so we can use it with all the functions:

```
var exampleString = "Hi! Hope you are having a good day!";
```

The first one we're going to go with is called **charAt**, which is short for character. This function allows as to know the character in an specific index position:

```
exampleString.charAt(10);

// 'o'
```

The next one is called **concat** which is short for concatenate. With this one we can concatenate some content to the value of our variable. We can store the result in a variable:

```
var content = exampleString.concat(' Bye!');
content;

// 'Hi! Hope you are having a good day! Bye!'
```

The following three functions give us the ability to check if any values are included in the string:

```
exampleString.includes('yes'); 
// false

exampleString.endsWith('!'); 
// true

exampleString.startsWith('Hi'); 
// true
```

The next one is **repeat**. With repeat the value of our variable is going to be repeated as many times as we indicate:

```
exampleString.repeat(3);

// 'Hi! Hope you are having a good day!Hi! Hope you are having a good day!Hi! Hope you are having a good day!'
```

We are going to continue with **replace**. This function takes two arguments, the first one, is what we want to replace in our variable and, the second one, what we want it to be replaced with:

```
exampleString.replace('good', 'wonderful');

// 'Hi! Hope you are having a wonderful day!'
```

The next one is **indexOf**. This functions tell us the index of any value we pass in. We have to have in mind that, if some value is more than once in our variable, the function is going to show us the index of the first time it appears in the variable:

```
exampleString.indexOf('!');

// 2
```
Even if we have several times the exclamation mark (!) in our variable, the function **indexOf** show us the index of the first one.

Now is time to see what **slice** is used for. With slice we can grab the content of our variable by indicating the index:

```
exampleString.slice(5, 15); 
// 'ope you ar'

exampleString.slice(-12); 
// ' a good day!'

exampleString.slice(9); 
// 'you are having a good day!'
```

We do have functions in order to convert our string into upper or lower cases:

```
exampleString.toUpperCase();
// 'HI! HOPE YOU ARE HAVING A GOOD DAY!'

exampleString.toLowerCase();
// 'hi! hope you are having a good day!'
```

The last method we are going to see is **trim**. This one allow us to delete any excess empty space in our variable:

```
var newOne = "       Blank space   ";

newOne.trim();

// 'Blank space'
```

## **¿Qué es un condicional?**
Conditionals are one of the most fundamental building blocks of any kind of programming language.
The reason for that is because conditionals allow us to have dynamic behavior in our applications.

For creating a conditional we do use triple equals(===), what is called strict equal. Using double equal (==) is considered a poor practice. The reason for using strict equal is because, this way, not only checks if the value is true but also if the data type match (numbers, strings...).

Here we have a few examples where we can see conditional's syntax:

By having this two variables:

```
var resultOne = 10;
var resultTwo = '12';
```  


- Here, we want to show the message 'They are equal' if both variables are equal:

```
if (resultOne === ageTwo) {
  console.log('They are equal');
}
```  


- In this case, we want to get the message 'Not equal' in case the two variables are different:

```
if (resultOne !== ageTwo) {
  console.log('Not equal');
}
```  


- In this example, we want to check if the first result is equal or grater than 30 so, if that is the case, it prints 'You've got a good result':

```
if (resultOne >= 30) {
  console.log('You've got a good result');
}
```  


- In this last example, we want to print the message of 'The result could be better' in case the first result is lower than 20:

```
if (resultOne <= 20) {
  console.log('The result could be better');
}
```  

 
## **¿Qué es un operador ternario?**

The **ternary operator** allows you to write an entire conditional in one line.

Thw syntax for the ternary operator is as follows:

```
Conditional ? If conditional is true : if conditional is false;
```

The best way for understanding the ternary operator is to see the difference of how we stablish a conditional in a traditional way, and then, see how that same example looks with the ternary operator.

Imagine we need a conditional so, depending if a user is logged in or not in our web page, the content they recive is different and, the content received by a logged user with admin control is different too.

This is how we can set it by using a normal conditional:

```
function adminControls(user) {
if (user) {
  if (user.admin) {
    return 'Showing admin controls...';
  } else {
    return 'You need to be an admin';
  }
} else {
  return 'You need to be logged in';
  }
}
```

Now we are going to see how we can do it by using the ternary operator:

```
function adminControls(user) {
return user     
    ? user.admin ? "Showing admin controls" : "You need to be an admin"
    : "You need to be logged in";
}
```

As shown in the example, you can write the ternary operator in multiple lines.

 
## **¿Cuál es la diferencia entre una declaración de función y una expresión de función?**

A function expression is very similar to, and has almost the same syntax as, a function declaration. The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions, that's why they are also called anonymous functions.

### **Function declaration:**

To declare a function, we use the function keyword and specify a name for the function. For example:

```
function greeting(name) {
    return `Hi there, ${name}!`;
}

const david = greeting('David');
console.log(david); 

// Hi there, David!
```

Here, we have "declared" a function called greeting. We have used the function keyword followed by the name of the function, "greeting".


### **Function expression:**

Here, we create a function expression and assign it to a variable that can be called.

One way to do this is to use the function keyword without a name, which makes it an anonymous function. Here's how:

```
var greetingTwo = function () { 
    return "Hi there again!";
};

console.log(greetingTwo());

// Hi there again!
```
 
As you can see, we have the function keyword without a name for the function. This makes it an expression, which you have to assign to a variable (in our case "greetingTwo").

If we use the function keyword without a name, we create a function expression, which we have to assign to a variable, else we get an error. 

When we assign it to a variable, we are assigning the expression, and when we call the variable, it will execute the logic of the function expression assigned to it.


## **¿Qué es la palabra clave “this” en JS?**

In JavaScript, __this__ keyword refers to an object. __This__ keyword refers to different objects depending on how it is used. 

> ### Note:
>__This__ is not a variable. __This__ is a keyword. You cannot change the value of this. 

For example, in an object method, __this__ refers to the object.

```
const user = {
  firstName: "Kate",
  lastName : "Black",
  id       : 1234,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

user.fullName();

// Kate Black

```

When used alone, __this__ refers to the global object, because __this__ is running in the global scope.

```
const its_name = this;
```

