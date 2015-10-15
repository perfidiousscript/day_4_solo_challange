//Arrays converted to objects,
//returns an object and applys them to the html.


var objAtticus = {
  name: "Atticus",
  empNum: "2405",
  salary: "47000",
  rating: 3
},

 objJem = {
  name: "Jem",
  empNum: "62347",
  salary: "63500",
  rating: 4
},

objBoo = {
  name: "Boo",
  empNum: "11435",
  salary: "54000",
  rating: 3
},

objScout = {
  name: "Scout",
  empNum: "6243",
  salary: "74750",
  rating: 5
},

processEmployeee = {
  process : function(object){
    var newObject = {};

    newObject.name = object.name;

    var employeeNumber = object.empNum;
    var baseSalary = object.salary;
    var reviewScore = object.rating;
    
    var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
    if(bonus > 0.13){
      bonus = 0.13;
    }
    
    newObject.bonusPercentage = bonus;

    newObject.Total = (baseSalary * (1.0 + bonus)).toFixed(2);


    newObject.bonus = baseSalary * bonus;

  //console.log(newArray);

    
    console.log(newObject);
    return newObject;
  }  
};

function getBaseSTI(reviewScore){
    var basePercent;
    switch(reviewScore){
      case 1:
        basePercent = 0;
        break;
      case 2:
        basePercent = 0;
        break;
      case 3:
        basePercent = 0.04;
        break;
      case 4:
        basePercent = 0.06;
        break;
      case 5:
        basePercent = 0.10;
        break;
    }
    
    return basePercent// - 1;
  }



  function getYearAdjustment(employeeNumber){
    var yearAdjustment = 0;
    if(employeeNumber.length == 4){
      yearAdjustment = 0.05;
    }
    console.log("yearAdjustment: ",yearAdjustment);
    return yearAdjustment;
  }

  function getIncomeAdjustment(salary){
    var incomeAdjustment = 0;
    salary = parseInt(salary);
    if(salary > 65000){
      incomeAdjustment = 0.01;
    }
    console.log("incomeAdjustment: ", incomeAdjustment);
    return incomeAdjustment;
  }

var array = [objAtticus, objJem, objBoo, objScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

for(var i = 0; i < array.length; i++){
  
	array[i] = processEmployeee.process(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i].name + " " + array[i].bonusPercentage + " " +  array[i].Total + " " +  array[i].bonus);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

