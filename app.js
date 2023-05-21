'use strict';
let ghaziSamer	= {
        employeeID : function(){
            let min = 1000;
            let max = 1999;
            const id =Math.floor(Math.random() * (max - min) ) + min;
            return id;
            },
        fullName : 'Ghazi Samer',
        department : 'Administration',
        level : 'Senior',
        imageURL : document.getElementById("img1"),
        salary : function(){
            let arr1 = levelSalary(ghaziSamer);
            let min=arr1[0];
            let max=arr1[1];
            const a = Math.floor(Math.random() * (max - min) ) + min;
            const x = Math.floor(a - (0.075*a));
            return x;
            },
};
let lanaAli	= {
        employeeID : function(){
            let min = 1000;
            let max = 1999;
            const id =Math.floor(Math.random() * (max - min) ) + min;
            return id;
            },
        fullName : 'Lana Ali',
        department : 'Finance',
        level : 'Senior',
        imageURL : document.getElementById("img2"),
        salary : function(){
            let arr1 = levelSalary(lanaAli);
            let min=arr1[0];
            let max=arr1[1];
            const a = Math.floor(Math.random() * (max - min) ) + min;
            const x = Math.floor(a - (0.075*a));
            return x;
            }
};
let tamaraAyoub	= {
        employeeID :  function(){
            let min = 1000;
            let max = 1999;
            const id =Math.floor(Math.random() * (max - min) ) + min;
            return id;
            },
        fullName : 'Tamara Ayoub',
        department : 'Marketing',
        level : 'Senior',
        imageURL : document.getElementById("img3"),
        salary : function(){
            let arr1 = levelSalary(tamaraAyoub);
            let min=arr1[0];
            let max=arr1[1];
            const a = Math.floor(Math.random() * (max - min) ) + min;
            const x = Math.floor(a - (0.075*a));
            return x;
            }
};
let safiWalid	= {
        employeeID :  function(){
            let min = 1000;
            let max = 1999;
            const id =Math.floor(Math.random() * (max - min) ) + min;
            return id;
            },
        fullName : 'Safi Walid',
        department : 'Administration',
        level : 'Mid-Senior',
        imageURL : document.getElementById("img4"),
        salary : function(){
            let arr1 = levelSalary(safiWalid);
            let min=arr1[0];
            let max=arr1[1];
            const a = Math.floor(Math.random() * (max - min) ) + min;
            const x = Math.floor(a - (0.075*a));
            return x;
            }
};
let omarZaid	= {
        employeeID :  function(){
            let min = 1000;
            let max = 1999;
            const id =Math.floor(Math.random() * (max - min) ) + min;
            return id;
            },
        fullName : 'Omar Zaid',
        department : 'Development',
        level : 'Senior',
        imageURL : document.getElementById("img5"),
        salary : function(){
            let arr1 = levelSalary(omarZaid);
            let min=arr1[0];
            let max=arr1[1];
            const a = Math.floor(Math.random() * (max - min) ) + min;
            const x = Math.floor(a - (0.075*a));
            return x;
            }
};
let ranaSaleh	= {
        employeeID :  function(){
            let min = 1000;
            let max = 1999;
            const id =Math.floor(Math.random() * (max - min) ) + min;
            return id;
            },
        fullName : 'Rana Saleh',
        department : 'Development',
        level : 'Junior',
        imageURL : document.getElementById("img6"),
        salary : function(){
            let arr1 = levelSalary(ranaSaleh);
            let min=arr1[0];
            let max=arr1[1];
            const a = Math.floor(Math.random() * (max - min) ) + min;
            const x = Math.floor(a - (0.075*a));
            return x;
            }
};
let hadiAhmad	= {
        employeeID :  function(){
            let min = 1000;
            let max = 1999;
            const id =Math.floor(Math.random() * (max - min) ) + min;
            return id;
            },
            fullName : 'Hadi Ahmad',
        department : 'Finance',
        level : 'Mid-Senior',
        imageURL : document.getElementById("img7"),
        salary : function(){
            let arr1 = levelSalary(hadiAhmad);
            let min=arr1[0];
            let max=arr1[1];
            const a = Math.floor(Math.random() * (max - min) ) + min;
            const x = Math.floor(a - (0.075*a));
            return x;
            }
};
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
};


document.getElementById("demo").innerHTML = `Employee name: ${ghaziSamer.fullName} <br/>Employee salary: ${ghaziSamer.salary()}
<br/><br/>Employee name: ${lanaAli.fullName} <br/>Employee salary: ${lanaAli.salary()}
<br/><br/>Employee name: ${tamaraAyoub.fullName} <br/>Employee salary: ${tamaraAyoub.salary()}
<br/><br/>Employee name: ${safiWalid.fullName} <br/>Employee salary: ${safiWalid.salary()}
<br/><br/>Employee name: ${omarZaid.fullName} <br/>Employee salary: ${omarZaid.salary()}
<br/><br/>Employee name: ${ranaSaleh.fullName} <br/>Employee salary: ${ranaSaleh.salary()}
<br/><br/>Employee name: ${hadiAhmad.fullName} <br/>Employee salary: ${hadiAhmad.salary()}`;

