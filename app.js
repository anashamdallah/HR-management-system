'use strict'
const employee = [];
function Employee (name ,department ,level , image ){
    this.fullName = name;
    this.department = department;
    this.level = level;
    this.imageURL = image;
    employee.push(this);
}

function levelSalary(name){
    var min;
    var max;
    let arr=[];
    if (name.level=='Senior'){
         min = 1500;
         max = 2000;
    }
    else if(name.level =='Mid-Senior' ){
         min = 1000;
        max = 1500;
    }
    else if(name.level =='Junior'){
         min = 500;
         max = 1000;
    }
     arr.push(min);
     arr.push(max);
   return  arr;
}

Employee.prototype.employeeId = function(){
    let min = 1000;
        let max = 1999;
        const id =Math.floor(Math.random() * (max - min) ) + min;
        return id;
}

Employee.prototype.salary = function (){
    let arr1 = levelSalary(ghaziSamer);
    let min=arr1[0];
    let max=arr1[1];
    const a = Math.floor(Math.random() * (max - min) ) + min;
    const x = Math.floor(a - (0.075*a));
    return x;
}

let ghaziSamer = new Employee('Ghazi Samer' ,'Administration' ,'Senior' ,'male.jpg');
let lanaAli = new Employee('Lana Ali' ,'Finance' ,'Senior' ,'female.jpg');
let tamaraAyoub = new Employee('Tamara Ayoub' ,'Marketing' ,'Senior' ,'female.jpg');
let safiWalid =new Employee('Safi Walid' ,'Administration' ,'Mid-Senior' ,'male.jpg');
let omarZaid = new Employee('Omar Zaid' ,'Development' ,'Senior' ,'male.jpg');
let ranaSaleh = new Employee('Rana Saleh' ,'Development' ,'Junior' ,'female.jpg');
let hadiAhmad = new Employee('Hadi Ahmad' ,'Finance' ,'Mid-Senior' ,'male.jpg');

Employee.prototype.renderEmployee = function(){
    document.write(`<body><main><p>Employee name: ${this.fullName}<br/>
    Department: ${this.department}<br/>
    Employee salary: ${this.salary()}<br/><br/></p></main></body>`);
}

for (let i = 0; i < employee.length;i++){
    employee[i].renderEmployee();
}

