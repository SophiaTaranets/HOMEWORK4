// ****************** Task1 ******************

console.log("Task 1");
function calcRectangleArea(width,height){
    if (width<=0 || height<=0){
        throw new Error("Width or height < 0!");
    }
    else if(isNaN(width)===true || isNaN(height)===true){
        throw new Error("You can`t use symbols!");
    }
    return width*height;
}
let wIdth = prompt("Enter width");
let hEight = prompt("Enter height");
try{
    let area = calcRectangleArea(wIdth,hEight);
    console.log(area);
} catch (exeption1){
    console.log(exeption1.name);
    console.log(exeption1.message);
    console.log(exeption1.stack);
}
console.log("\n")

// ****************** Task2 ******************

function checkAge(){
    let age = prompt("Enter your age");
    if (age === ""){
        throw new Error("The line is empty. Please, try again!");
    }
    else if (isNaN(age) === true){
        throw new Error("You can`t use symbols!");
    }
    else if(age<0 || age>150){
        throw new Error("It`s incorrect data!");
    }
    else if(age>=4 && age<=14){
        throw new Error("You are too young!");
    }
    return alert("https://rezka.ag/series/");
}
try{
    let result = checkAge();
    result;
} catch(exception2){
    alert(exception2.name);
    alert(exception2.message);
    alert(exception2.stack);
}

// ****************** Task3 ******************

console.log("Task 3. Now month = 15, you can change it in the text of program!!!");
class MonthException {
    constructor (message){
        this.message = message;
        this.name = "MonthException";
    }
}
function showMonthName(month) {
    let monthArray = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let result;
    if (isNaN(month)===true || month<=0 || month>12){
        throw new MonthException("Incorrect month number");
    }
    for (let i = 1; i<=monthArray.length; i++){
        if(i===month){
            result = monthArray[i-1];
        }
    }
    return result;
}
try{
    let mon = 15;
    console.log(showMonthName(mon));
}
catch(exception3){
    console.log(exception3.name + " " + exception3.message);
}
console.log("\n");

// ****************** Task4 ******************

console.log("Task 4");
function showUser(id){
    if(id<0){
        throw new Error("ID must not be negative");
    }
    return id;
}
/*
try{
    let iD = prompt("Enter your ID");
    console.log(showUser(iD)); 
}
catch(exception4){
    console.log(exception4.name + " " + exception4.message);
}
*/
console.log("Array ids: ", [7,-12,44,22,-9]);
function showUsers(ids){
    let correctID = [];
    for (let i = 0; i<ids.length; i++){
        try{
            showUser(ids[i]);
            correctID.push({id:ids[i]});
        }
        catch(exception4){
            console.log(exception4.name + ": " + exception4.message + ": " + ids[i]);
        }
    }
    return correctID;
}

console.log(showUsers([7,-12,44,22,-9]));
console.log("\n")



