'use strict'
const employee = [];
function Employee (name ,department ,level , image ){
    this.fullName = name;
    this.department = department;
    this.level = level;
    this.imageURL = image;
    employee.push(this);
}

Employee.prototype.employeeId = function(){
        let min = 1000;
        let max = 1099;
        const id =Math.floor(Math.random() * (max - min) ) + min;
        return id;
}

Employee.prototype.salary = function (name){
    let min=0;
    let max=0;
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
   
    const a = Math.floor(Math.random() * (max - min) ) + min;
    const x = Math.floor(a - (0.075*a));
    return x;
}
//body
let headerE = document.createElement("header");
let body = document.getElementsByTagName("body")[0];
body.appendChild(headerE);

//body styling
body.style.background="linear-gradient(to bottom,#04232ced 0,rgb(65 89 94 / 75%) 75%,rgb(121 147 151 / 65%) 100%)";

//header
let logoE=document.createElement("img");
logoE.src="Assests/SS__FUvO_400x400.jpg";
headerE.appendChild(logoE);
let headerName = document.createElement("h1");
headerName.textContent = "HR management system";
headerE.appendChild(headerName);
let ulE = document.createElement("ul");
headerE.appendChild(ulE);
let homeE = document.createElement("a");
homeE.textContent = "Home";
homeE.href = "./index.html";
ulE.appendChild(homeE);
let accE = document.createElement("a");
accE.textContent = "Accounting";
accE.href = "./accounting.html";
ulE.appendChild(accE);

//header styling
headerE.style.height = "60px";
headerE.style.display = "flex";
headerE.style.justifyContent = "space-around";
// headerE.style.backgroundColor="#393646";
headerE.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
headerE.style.color= "#fcf9f9";
headerE.style.alignItems = "center";
headerE.style.marginBottom="20px";
logoE.style.width="50px";
logoE.style.height="50px";
homeE.style.paddingRight = "20px";
homeE.style.fontFamily ="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
homeE.style.color = "#fcf9f9";
accE.style.fontFamily ="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
accE.style.color = "#fcf9f9";


//main
let mainE = document.createElement("main");
body.appendChild(mainE);

//main styling
mainE.style.width="100%";
mainE.style.display="flex";
mainE.style.minHeight = "calc(100vh - 30px)";
mainE.style.alignItems="center";

//footer
let footerE = document.createElement("footer");
body.appendChild(footerE);
let copyRight = document.createElement("p");
copyRight.textContent = "Copyright © 2023 - HR-management-system";
footerE.appendChild(copyRight);
let aE = document.createElement("a");
aE.href ="https://www.linkedin.com" ; 
let iE = document.createElement("i");
iE.className="fa-brands fa-linkedin";
aE.appendChild(iE);
footerE.appendChild(aE);
let aE1 = document.createElement("a");
aE1.href ="https://web.whatsapp.com" ;
let iE1 = document.createElement("i");
iE1.className="fa-brands fa-whatsapp";
aE1.appendChild(iE1);
footerE.appendChild(aE1);

//footer styling
aE.style.color = "#27374D";
aE1.style.color = "#27374D";
footerE.style.display = "flex";
footerE.style.justifyContent = "center";
footerE.style.gap = "30px";
footerE.style.backgroundColor ="#DDE6ED";
footerE.style.textAlign = "center";
footerE.style.alignItems = "center";
footerE.style.color = "#27374D";
footerE.style.fontFamily ="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
footerE.style.height = "30px";
footerE.style.marginTop = "20px";

let adm=document.createElement("adm");
mainE.appendChild(adm);
let finance=document.createElement("fin");
mainE.appendChild(finance);
let mark=document.createElement("mark");
mainE.appendChild(mark);
let devl=document.createElement("devl");
mainE.appendChild(devl);

Employee.prototype.renderEmployee = function(){
    var divE;
        if (this.department == "Administration"){
         divE = adm;
   }
        else if (this.department == "Finance"){
       divE = finance;
   }
        else if (this.department == "Marketing"){
      divE = mark;
   }
         else if (this.department == "Development"){
       divE = devl;
   }

    //cards styling
    divE.style.background = "linear-gradient(to top,#04232ced 0,rgb(65 89 94 / 75%) 75%,rgb(121 147 151 / 65%) 100%)";
    divE.style.width="250px";
    divE.style.textAlign = "center";
    divE.style.borderRadius ="10px";
    divE.style.margin="auto";
    divE.style.padding="10px";
    divE.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    divE.style.color="#fcf9f9";

    let employeeImg = document.createElement("img");
    employeeImg.src = this.imageURL;
    employeeImg.alt = this.fullName;    
    divE.appendChild(employeeImg);

    //image styling
    employeeImg.style.width = "200px";
    employeeImg.style.height="200px";
    employeeImg.style.borderRadius = "10px";

    let employeeCard = document.createElement("p");
    employeeCard.textContent =`Name: ${this.fullName}- ID: ${Employee.prototype.employeeId()}-
    Department: ${this.department}- Level: ${this.level}` ;
    divE.appendChild(employeeCard);
    let employeeSalary = document.createElement("p");
    employeeSalary.textContent =Employee.prototype.salary(this) ;
    divE.appendChild(employeeSalary);
 }

let ghaziSamer = new Employee('Ghazi Samer' ,'Administration' ,'Senior' ,'Assests/Ghazi.jpg');
let lanaAli = new Employee('Lana Ali' ,'Finance' ,'Senior' ,'Assests/Lana.jpg');
let tamaraAyoub = new Employee('Tamara Ayoub' ,'Marketing' ,'Senior' ,'Assests/Tamara.jpg');
let safiWalid =new Employee('Safi Walid' ,'Administration' ,'Mid-Senior' ,'Assests/Safi.jpg');
let omarZaid = new Employee('Omar Zaid' ,'Development' ,'Senior' ,'Assests/Omar.jpg');
let ranaSaleh = new Employee('Rana Saleh' ,'Development' ,'Junior' ,'Assests/Rana.jpg');
let hadiAhmad = new Employee('Hadi Ahmad' ,'Finance' ,'Mid-Senior' ,'Assests/Hadi.jpg');

for (let i = 0; i < employee.length;i++){
     employee[i].renderEmployee();
}