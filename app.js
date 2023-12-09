
// Question 01
var num1 = 10


document.write("<br>"+"The Valu of ++num1 is :"+ ++num1)
document.write("<br>"+"Now the value of a is:  "+num1)


document.write("<br>"+"<br>"+"The Valu of num1++ is :"+ num1++)
document.write("<br>"+"Now the value of a is:  "+num1)


document.write("<br>"+"<br>"+"The Valu of --num1 is :"+ --num1)
document.write("<br>"+"Now the value of a is:  "+num1)


document.write("<br>"+"<br>"+"The Valu of num1-- is :"+ num1--)

document.write("<br>"+"Now the value of a is:  "+num1)


document.write("<br>"+  "<br>")

// Question 02
var a=2 , b=1

// --a;
// --a-  --b
// --a+   ++b
// --a-   --b 
//    ++b
// b-- 

//var result =a+b

var result= --a - --b + ++b + b--;

--a; a=1
--a - --b;  a=1 , b=0
--a - --b+ ++b; a=1,  b=1
--a - --b+ ++b + b--; a=1 ,b=0

result,1-0+1+1
 

document.write("<br>"+"a is "+a)
document.write("<br>"+"b is "+b)
document.write("<br>"+"result is "+result)


// Question 04
// Question 05
// var username=prompt("Enter Your Name")

//document.write("<br>"+"<br>"+"Greet the " +username)
// Question 06
var english =100
var urdu = 100
var math = 100

var total=english+urdu+math

var englishOM=54 , urduOM=54 , mathOM=48

var totalOM=englishOM+urduOM+mathOM

var perenglish=(englishOM/english)*100

var perurdu=(urduOM/urdu)*100

var permath=(mathOM/math)*100

var totalpe=(totalOM/total)*100
document.write("<br>"+  "<br>")
document.write("<table><tr><th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th></tr>")
document.write("<tr><td>English</td>  <td>"+english+" </td>     <td>"+englishOM+" </td>   <td>"+perenglish+ "% </td></tr>")
document.write("<tr><td>Urdu </td>  <td>"+urdu+"</td>   <td> "+ urduOM+  "</td>  <td>" +perurdu+"%</td></tr>")
document.write( "<tr><td> Math  </td> <td>"+math+" </td>   <td> "+ mathOM+  "   </td>   <td>  " +permath+"%</td></tr>")
document.write("<tr><th></th><th><center>"+total  + " </center> </th> <th><center>"+totalOM+" </center></th> <th> "+totalpe+"%</th></tr>" )



