//celsius to fahrenheit
var tempc=prompt("Enter temperature in \u00B0 C");
var c_f=(tempc*9/5)+32;
document.write(tempc+"\u00B0 C  is " +c_f+ "\u00B0F<br>");

//fahrenheit to celsius
var tempf=prompt("Enter temperature in \u00B0 F");
var f_c=(tempf-32)*5/9;
document.write(tempf+"\u00B0 F is "+f_c+ "\u00B0C");