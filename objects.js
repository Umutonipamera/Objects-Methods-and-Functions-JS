var car={
    name:"volvo",
year:1980,
colour:"grey",
 vehicle:function(){
     return this.grey+" "+this.name;
 }
}
console.log(car.vehicle());

function add(){
    var x=20;
    var y=10;
    var z=x+y;
    console.log(x+y);
}
add();

function name(){
    firstName="Pamela";
    lastName="Umutoni";
    console.log(firstName+" "+lastName);
}name();
function numbers(){
    numb1=230;
    numb2=20;
    console.log(numb1-numb2);
}
numbers();
var a=5;
foo();
function foo(){
    a=10;
    console.log(a);
    var a;
}
console.log(a);


