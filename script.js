var firstnumber;  
var secondnumber;  
var result;  
var operations;  
  
function num1(){  
 if (document.screenform.screens.value == "0" || document.screenform.screens.value == result){  
    
  document.screenform.screens.value = "1";  
      
 }  
 else //if(document.screenform.screens.value != "0")  
 {  
  document.screenform.screens.value = document.screenform.screens.value + "1";  
 }  
   
}  
function num2(){  
   
 if (document.screenform.screens.value == "0" || document.screenform.screens.value == result){  
    
  document.screenform.screens.value = "2";  
      
 }  
 else //if(document.screenform.screens.value != "0")  
 {  
  document.screenform.screens.value = document.screenform.screens.value + "2";  
 }  
   
}  
function num3(){  
    
  if (document.screenform.screens.value == "0" || document.screenform.screens.value == result){  
    
  document.screenform.screens.value = "3";  
      
 }  
 else //if(document.screenform.screens.value != "0")  
 {  
  document.screenform.screens.value = document.screenform.screens.value + "3";  
 }  
    
}  
function num4(){  
   
 if (document.screenform.screens.value == "0" || document.screenform.screens.value == result){  
    
  document.screenform.screens.value = "4";  
      
 }  
 else //if(document.screenform.screens.value != "0")  
 {  
  document.screenform.screens.value = document.screenform.screens.value + "4";  
 }  
   
}  
function num5(){  
   
 if (document.screenform.screens.value == "0" || document.screenform.screens.value == result){  
    
  document.screenform.screens.value = "5";  
      
 }  
 else //if(document.screenform.screens.value != "0")  
 {  
  document.screenform.screens.value = document.screenform.screens.value + "5";  
 }  
   
}  
function num6(){  
   
 if (document.screenform.screens.value == "0" || document.screenform.screens.value == result){  
    
  document.screenform.screens.value = "6";  
      
 }  
 else //if(document.screenform.screens.value != "0")  
 {  
  document.screenform.screens.value = document.screenform.screens.value + "6";  
 }  
   
}  
function num7(){  
   
 if (document.screenform.screens.value == "0" || document.screenform.screens.value == result){  
    
  document.screenform.screens.value = "7";  
      
 }  
 else //if(document.screenform.screens.value != "0")  
 {  
  document.screenform.screens.value = document.screenform.screens.value + "7";  
 }  
}  
function num8(){  
   
 if (document.screenform.screens.value == "0"){  
    
  document.screenform.screens.value = "8";  
      
 }  
 else if (document.screenform.screens.value == result)  
 {  
  document.screenform.screens.value = "8";  
 }  
 else //if(document.screenform.screens.value != "0")  
 {  
  document.screenform.screens.value = document.screenform.screens.value + "8";  
 }  
   
}  
function num9(){  
   
 if (document.screenform.screens.value == "0" || document.screenform.screens.value == result){  
    
  document.screenform.screens.value = "9";  
      
 }  
 else //if(document.screenform.screens.value != "0")  
 {  
  document.screenform.screens.value = document.screenform.screens.value + "9";  
 }  
   
}  
function num0(){  
   
 if (document.screenform.screens.value == "0"){  
    
  document.screenform.screens.value = "0";  
      
 }  
 else if (document.screenform.screens.value == result)  
 {  
  document.screenform.screens.value = "0";  
 }  
 else //if(document.screenform.screens.value != "0")  
 {  
  document.screenform.screens.value = document.screenform.screens.value + "0";  
 }  
   
}  
function numdoublezero(){  
   
 if (document.screenform.screens.value == "0" || document.screenform.screens.value == result){  
    
  return;  
      
 }  
 else //if(document.screenform.screens.value != "0")  
 {  
  document.screenform.screens.value = document.screenform.screens.value + "00";  
 }  
   
}  
function clr(){  
 document.screenform.screens.value = "0";  
 document.screenform.screensu.value = "";  
 return;  
}  
  
function operationplus(){  
   
 operation = "+";  
 firstnumber = parseInt(document.screenform.screens.value);  
 document.screenform.screens.value = "0";  
 document.screenform.screensu.value = firstnumber + operation;  
 //alert(firstnumber);  
    
}  
function operationmult(){  
   
 operation = "*";  
 firstnumber = parseInt(document.screenform.screens.value);  
 document.screenform.screens.value = "0";  
 document.screenform.screensu.value = firstnumber + operation;  
   
}  
function operationminus(){  
   
 operation = "-";  
 firstnumber = parseInt(document.screenform.screens.value);  
 document.screenform.screens.value = "0";  
 document.screenform.screensu.value = firstnumber + operation;  
   
}  
function operationdivid(){  
   
 operation = "/";  
 firstnumber = parseInt(document.screenform.screens.value);  
 document.screenform.screens.value = "0";  
 document.screenform.screensu.value = firstnumber + operation;  
   
}  
function operationperc(){  
   
 operation = "%";  
 firstnumber = parseInt(document.screenform.screens.value);  
 document.screenform.screens.value = "0";  
 document.screenform.screensu.value = firstnumber + operation;  
   
}  
function equalsto(){  
   
 secondnumber = parseInt(document.screenform.screens.value);  
   
 if (operation == "+")  
 {  
  result = firstnumber + secondnumber;  
 }  
 else if (operation == "*"){  
    
  result = firstnumber * secondnumber;  
    
 }  
 else if (operation == "-"){  
    
  result = firstnumber - secondnumber;  
    
 }    
    else if (operation == "/"){  
    
  result = firstnumber / secondnumber;  
     
 }  
 else if (operation == "%"){  
    
  if (document.screenform.screens.value == "0"){  
    
  result = firstnumber / 100;  
  document.screenform.screensu.value = firstnumber + operation + "100";  
  }  
  else if (document.screenform.screens.value != "0")  {  
   result = firstnumber / secondnumber * 100;  
   document.screenform.screensu.value = firstnumber + operation + secondnumber + "*100 = " + result;  
  }  
 }  
 else if (operation == "^"){  
    
  for (var i = 0; i < secondnumber; i++){  
     
   result = firstnumber * i;  
  }   
    
 }  
 document.screenform.screens.value ="";  
 document.screenform.screens.value = result.toString();  
 document.screenform.screensu.value = firstnumber + operation + secondnumber + " = " + result.toString();  
 return;   
}  
function sqrt(){  
 firstnumber = document.screenform.screens.value;  
 result = Math.sqrt(parseInt(document.screenform.screens.value));  
 document.screenform.screens.value = result;  
 document.screenform.screensu.value = "sqrt(" + firstnumber + ") = " + result;  
}  
function operationraistop(){  
   
 operation = "^";  
 firstnumber = parseInt(document.screenform.screens.value);  
 document.screenform.screens.value = "0";  
   
}  