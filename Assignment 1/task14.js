var a=2;
var b=1;
var result= --a - --b + ++b + b--;
--a;
// value of a will be decreased by 1 because of pre decrement so a=1
--a - --b;
// 1 - 0 =1
//here value of a is 1 and value of b will be decreased by 1 because of pre decrement so b is also 1
--a - --b + ++b;
//1 - 0 + 1= 2
//here value of a is 1 and b is 0 then after pre increment of b 1 is added to b
--a - --b + ++b +b--;
// 1 - 0 + 1 + 1 =3
//in the last step value of b will change after execution of b because of post increment
document.write("<br> value of a is: "+a+ "<br>value of b is: "+b+"<br> result is : "+result);