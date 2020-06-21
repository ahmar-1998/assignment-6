// string task 1

var a = prompt("enter first name")
var b = prompt("enter last name")
var c = a + " " + b
alert(c)


// string task 2


// var str = prompt("enter your phone name");
// var a = str.length;
// alert(a)


// string task 3


// var str = "Pakistani";
// var a = str.indexOf("n");
// alert(a)


// string task 4


// var str = "“Hello World";
// var a = str. lastIndexOf("l");
// alert(a)


// string task 5


// var abc = "Pakistani";
// var task5 = abc.charAt(3);
// alert(task5)


// string task 6


// var firstname = prompt("enter first name");
// var lastname = prompt("enter last name");
// var fullname = firstname.concat( lastname);
// alert(fullname);


// String task 7


// var a = "Hyderabad";
// var b = a.replace("Hyder", "Islam");
// alert(b)


// string task 8


// var a = "Ali and Sami are best friends. They play cricket and football together";
// var b = a.replace(/and/g, "&");
// alert(b)


// String tart 9


// var a = parseInt("472")
// var b = alert("type is value" +" " + a)


// string task 10


// var a = ("peanuts")
// var b = a.toUpperCase(a)
// console.log(b)


// string task 11


// var lower = prompt("write something");
// var upper = lower.charAt(0).toUpperCase() + lower.slice(1);
// alert(upper)


// string task 12


// var a = 35.36;
// var b = a.toString(); 
// var newb = b.replace('.', '');
// alert(newb)


// string task 13

// var a = prompt("enter your password")
// var b = /[@ . , !]/g
// if(a.match(b))
// {
// alert("you may input wrong character");

// }
// else
// {
// alert('successfull');

// }


// string task 14


// var item = ["cake", "applepie", "cookie", "chips" , "patties"];
// var a =prompt("welcome to ABC bakery, what do you want to order sir/maam?");


// if(fruits.indexOf(a)){
//     alert(item + "is available in our bakery")
// }else{
//     alert("sorry sir")
// }


// string task 16



    // var str = ("University of karachi");
    // var a = str.split(" ");
    // console.log(a)


// string task 17


// var str = "pakistan"; 
// var res = str.charAt(str.length-1); 
// alert(res)






















// math task 1

// var num = prompt('enter number')
// var num2 = Math.round(num)
// var num3 = Math.floor(num)
// var num4 = Math.ceil(num)
// console.log(num2)
// console.log(num3)
// console.log(num4)

// math task 2

// var num = prompt('enter number')
// var num2 = Math.round(num)
// var num3 = Math.floor(num)
// var num4 = Math.ceil(num)
// console.log(num2)
// console.log(num3)
// console.log(num4)

// math task 3

// function task4() {
//   var a = Math.abs(prompt('enter value'));
//   console.log(a)
// }
//  task4();

//  math task 4


// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('random dice value ' + diceRoll);


// math task 5


// var toss = Math.floor(Math.random() * 2) + 1  
// var floor = Math.floor(toss)
// if(floor ===2) {
//     alert("random coin value = heads")
// }
// else{
//     alert("random coin value = tails")
// }

// math task 6


// var task6 = Math.floor(Math.random() * 100) + 1;
// document.write(task6);


// math task 8


// var num = prompt('enter your secret value')
// var task8 = Math.floor(Math.random() * 10) + 1;
// if(task8 === 5){
//     alert("congratulations your value match")
// }
// else{
//     alert("try again")
// }


// math task7

// var value = prompt('enter your weight in kilograms')
// console.log(value)






















// data tast 1

// function task1(today){
//     var today = new Date();
//     console.log(today)
// }
// task1();

// data task 2

// data task2(){
//     var my_month=new Date()
    
    
//     var month_name=new Array(12);
//     month_name[0]="January"
//     month_name[1]="February"
//     month_name[2]="March"
//     month_name[3]="April"
//     month_name[4]="May"
//     month_name[5]="June"
//     month_name[6]="July"
//     month_name[7]="August"
//     month_name[8]="September"
//     month_name[9]="October"
//     month_name[10]="November"
//     month_name[11]="December"
    
//     alert ("Current month = " + month_name[my_month.getMonth()]); 
//     }
//     task2();

// data task3
  
// var day = today.getDay();  
// var daylist = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];  
// console.log("Today is : " + daylist[day] + ".");

// data task4

// // data task 13

// function calculate_age(dob) { 
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms); 
  
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// console.log(calculate_age(new Date(prompt('enter your date of birth' , "1998, 05, 08"))));






 
 












// functions task 1

// function task1(){
//     var a = new Date();
//     alert(a);
// }
// task1();

// functions task 2

// function task2(){
//     var a = prompt("Please enter your  first name", "Ahmar");
//     var b = prompt("Please enter your  last name", " jalees");
//     console.log("My full name is" + a + " " + b );
    
    
// }
// task2();

// functions task 3

// function task3(){
//     var x = +prompt('enter your first value')
//     var y = +prompt('enter your second value')
//     console.log(x + y)
//     return z(x+y)
// }
// task3();

// functions task 4

// function task4(){
//     var a = prompt('enter your first value')
//     var b = prompt('enter your second value')
//     var sign = prompt('enter your operator')
//     console.log(a+sign+b)
//     if (sign === '+'){
//         alert(a+b)
//     }
//     else if (sign === '-'){
//         alert(a-b)
//     }
//     else if (sign === '*'){
//         alert(a*b)
//     }
//     else if (sign === '/'){
//         alert(a/b)
//     }
// }
// task4();

// fuction task 5

// function task5() {
//     var a = Math.pow(prompt('enter value'), 2);
//     // var b = Math.pow(1, 1);
//     // var c = Math.pow(1, 10);
//     // var d = Math.pow(3, 3);
//     // var e = Math.pow(-3, 3);
//     // var f = Math.pow(2, 4);
  
//     // var x = a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e + "<br>" + f;
//     document.write(a);
//   }
//   task5();

// function task 6

// function factorial(x) { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// console.log(factorial(6));

// function task 7

// var a = prompt('enter your first value')
// var b = prompt('enter your second value')

// function task7(){
//   for( a; a <=b; a++) {
//     document.write(a + "<br>");
// }
// }
// task7();

// function task 8

// var base = prompt('enter your first value')
// var perpendicular = prompt('enter your second value')

// function task8(base, perpendicular){
//   return Math.sqrt(Math.pow(base, 2) + Math.pow(perpendicular, 2));
// }

// console.log(task8(base, perpendicular));

// fuction task 9

//  var width = prompt('enter your width value')
//  var height = prompt('enter your height value')

//  function area(width, height) {
//   return width * height;
// }
// document.write('The area of your rectangle is ' + area(width, height));

// fuction task 10

// var word = prompt("enter your word")
// var check = "";

// function task10(){
// for (var i = word.length -1; i >= 0; i--){
//     check +=word[i]
// }
// if (word === check){
//   console.log(word + " " + "is pelidrome word")

// }
// }
// task10();

// function task 11

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));


// function task 14


// var r =promp('enter radius')
// function circle(radius)
// {
//     this.radius = radius;
//   // area method
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var c = new circle(3);
// console.log('Area =', c.area().toFixed(2));
// console.log('perimeter =', c.perimeter().toFixed(2));

 