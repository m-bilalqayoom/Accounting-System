


var description = function(){

var name = document.getElementById("name").value; 
var fullname  = document.getElementById("fullname").value;
var fathername = document.getElementById("fathername").value;
var nic = document.getElementById("nic").value;
var overtimeallowance = document.getElementById("overtimeallowance").value
var attendence = document.getElementById("attendence").value;  

console.log( "Empolye Name:" + name);
console.log("Empolye fullname:"+fullname)
console.log("Empolye Father:"+fathername)
console.log("Empolye NIC:" +nic)
console.log("Empolye overtimeallowance:"+ overtimeallowance)
console.log("Empolye Attendence:"+attendence);
}

var paidrecipt = function(){
var fixsalary = document.getElementById("fixsalary").value
console.log(fixsalary +"rs")
var advancesalary = document.getElementById("advancesalary").value
console.log(advancesalary + "rs")
var travellingallowance = document.getElementById("travellingallowance").value
console.log(  travellingallowance +"rs")
var bonusallowance = document.getElementById("bonusallowance").value
console.log(bonusallowance +"rs")
var bonuspermonth = document.getElementById("bonuspermonth").value
console.log( bonuspermonth +"rs")
var taxpermonth = document.getElementById("taxpermonth").value
console.log(taxpermonth +"rs")
total = fixsalary+advancesalary +travellingallowance + bonusallowance + bonuspermonth + taxpermonth
 console.log("Salary Slip in Rupess" + total)

}