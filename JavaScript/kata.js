3; 
1.5; 


1 + 1; 
0.1 + 0.2; 
8 - 1; 
10 * 2;
35 / 5;


5 / 2; 


10 % 2; 
30 % 4; 
18.5 % 7; 


1 << 2; 


(1 + 3) * 2; 


Infinity; 
-Infinity; 
NaN; 

true;
false;


'abc';
"Hello, world";

!true; 
!false; 


1 === 1; 
2 === 1; 


1 !== 1; 
2 !== 1; 


1 < 10; 
1 > 10; 
2 <= 2; 
2 >= 2; 


"Hello " + "world!"; 


"1, 2, " + 3; 
"Hello " + ["world", "!"];


13 + !0; 
"13" + !0; 


"a" < "b"; 

"5" == 5;
null == undefined; 


"5" === 5; 
null === undefined; 


"This is a string".charAt(0);  

"Hello world".substring(0, 5); 


"Hello".length; 


null;     
undefined; 


var someVar = 5;

someOtherVar = 10;

var someThirdVar; 


var someFourthVar = 2, someFifthVar = 4;


someVar += 5;
someVar *= 10; 


someVar++; 
someVar--; 


var myArray = ["Hello", 45, true];


myArray[1]; 

myArray.push("World");
myArray.length; 


myArray[3] = "Hello";

myArray.unshift(3); 
someVar = myArray.shift(); 
myArray.push(3); 
someVar = myArray.pop(); 


var myArray0 = [32,false,"js",12,56,90];
myArray0.join(";");


myArray0.slice(1,4); 


myArray0.splice(2,4,"hi","wr","ld"); 



var myObj = {key1: "Hello", key2: "World"};


var myObj = {myKey: "myValue", "my other key": 4};


myObj["my other key"]; // = 4


myObj.myKey; // = "myValue"

myObj.myThirdKey = true;


myObj.myFourthKey; // = undefined

var count = 1;
if (count == 3){
    
} else if (count == 4){
    
} else {
   
}


while (true){
    
}


var input;
do {
    input = getInput();
} while (!isValid(input));


for (var i = 0; i < 5; i++){
    
}


outer:
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j ==5) {
            break outer;
           
        }
    }
}


var description = "";
var person = {fname:"Paul", lname:"Ken", age:18};
for (var x in person){
    description += person[x] + " ";
} 


var myPets = "";
var pets = ["cat", "dog", "hamster", "hedgehog"];
for (var pet of pets){
    myPets += pet + " ";
} 


if (house.size == "big" && house.colour == "blue"){
    house.contains = "bear";
}
if (colour == "red" || colour == "blue"){
    
}

var name = otherName || "default";


grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}