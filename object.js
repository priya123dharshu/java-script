"use strict"

//-----1 Question ------


// let number = Number(prompt("enter any number"));
// let odd = 0;
// let even = 0;
// for(let i=0;i<=number;i++)
// {
//     console.log(i);
//     if(i % 2 == 0)
//     {
//         even += i;
//     }
//     else
//     {
//         odd += i;
//     }
// }
// console.log("even number is: "+even+"\n odd number is: "+odd);




// ----- 2 Question ------


// const arr = [15,3,9,10,20,8,3,7,15];

// const arr1 = new Set(arr);
// let result =[...arr1];

// console.log(result);


//------3 Question -----


// let str = prompt("enter any string")
// let str1 =str.split("");
// let result='';

// for(let i=0;i<str1.length;i++)
// {
//     if(str[i]!==str1[i+1])
//     {
//         if(str1[i-1]!==str1[i])
//         {
//         result += str1[i]
//         }
//     }
// }
// console.log(result)

 
//-----4 Question-----

// const arr=[true,-8,6,false,true,4]

// let result = arr.sort()

// console.log(result);


//----5 Question -----

const fitnessTracker ={
    information :[],
    details : function(menus,name,age,weight,height,BMI,uniqueID,id){
         menus= prompt("1. Adduser ditailes\n 2.DisplayUser ditailes\n 3.Updateuser ditailse\n 4.Deleteuser ditailse\n 5.Excit"); 
         
         if(menus == 1)
         {
            name = prompt("enter your name")
            age = Number(prompt("enter your age"))
            weight =Number(prompt("enter your weight"))
            height = Number(prompt("enter your height"))
            if(name == "")
                {
                    console.log("Invalid name(name should not empty string).");
                        
                }
                else if(age <=0)
                {
                    console.log("Invalid age(must be positive number)");
                        
                }
            console.log("name: "+name+"\nage: "+age+"\nweight: "+weight+"\nheight: "+height);
            // this.information.push({name,age,weight,height})
            var height1 = height/100;
            BMI = (weight)/(height1*height1);
         
            if(BMI <= 18.5)
            {
                console.log("User "+name+" Added successfuly Increase calorie intake and gain weight.")
            }
            else if(BMI >18.5 && BMI <=24.9)
            {
                console.log("User "+name+" Added successfuly Maintain your current activity and diet.")
            }
            else if(BMI >=25)
            {
                console.log("User "+name+" Added successfuly Aim to burn more calories through exercise.")
                
            }
          
           this.information.push({name,age,weight,height,BMI})
            this.details()

         }
         else if(menus == 2)
         {
            for(let i=0;i<this.information.length;i++)
            {  
                uniqueID=Math.floor(1000+Math.random()*100)
               
                      if(this.information[i].BMI<=18.5)
                      {
                          console.log("ID: "+uniqueID +" \nName: "+this.information[i].name+ " \nAge: "+this.information[i].age+" \nWeight: "+this.information[i].weight+" \nHeight: "+this.information[i].height+" \nBMI: "+this.information[i].BMI+ " \nGoal:Increase calorie intake and gain weight.");
                      }
                  
                      else if(this.information[i].BMI>18.5 && this.information[i].BMI<=24.9)
                      {
                           console.log("ID: "+uniqueID +" \nName: "+this.information[i].name+ " \nAge: "+this.information[i].age+" \nWeight: "+this.information[i].weight+" \nHeight: "+this.information[i].height+" \nBMI: "+this.information[i].BMI+ " \nGoal: Maintain your current activity and diet.");
                      }
                      else if(this.information[i].BMI>=25)
                      {
                           console.log("ID: "+uniqueID +" \nName: "+this.information[i].name+ " \nAge: "+this.information[i].age+" \nWeight: "+this.information[i].weight+" \nHeight: "+this.information[i].height+" \nBMI: "+this.information[i].BMI+ " \nGoal: Aim to burn more calories through exercise.");
                      }      
            }
            this.information.push({name,age,height,weight,BMI,uniqueID})
            this.details() 
        }
         else if (menus ==  3)
         {
            let updates = prompt("1.weight\n 2.height\n 3.age")
            if(updates == 1 || updates == 2){
                id = prompt("enter your id")
                weight = Number(prompt("enter your weight "))
                height = Number(prompt("enter your height"))
          
                if(uniqueID == id)
                {

                        if(weight>0 && height>0)
                        {
                        if(BMI <= 18.5)
                                {
                                    console.log("User "+name+" updated successfuly. New BMI: "+BMI+" Goal:Increase calorie intake and gain weight.")
                                }
                                else if(BMI >18.5 && BMI <=24.9)
                                {
                                    console.log("User "+name+" updated successfuly. New BMI: "+BMI+" Goal:Maintain your current activity and diet.")
                                }
                                else if(BMI >=25)
                                {
                                    console.log("User "+name+" updated successfuly. New BMI: "+BMI+" Goal:Aim to burn more calories through exercise.")
                                    
                                }
                        
                        }
                        else 
                        {
                            console.log( "Invalid weight. Weight must be a positive number.");
                            
                        }   
                }
            }
            
            else if(updates == 3)
            {
                id = prompt("enter your id")
                age = Number(prompt("enter your age"))
                if(uniqueID == id){
                    
                    if(age >0)
                    {
                        console.log("User "+name+" updated successfully. BMI remains unchanged.");
                        
                    }
                    else
                    {
                        console.log("Invalid age(must be positive number)");
                        
                    }
                }
                else
                {
                    console.log("User with ID nonExistentID not found.");
                    
                }
            
            }
            this.information.push({name,age,height,weight,BMI,uniqueID})
         }
         else if (menus == 4)
         {
            id= Number(prompt("enter your id"))
            if(uniqueID == id)
            {
                console.log("User "+name+" with ID "+uniqueID+" deleted successfully!");
                
            }
            else
            {
                console.log("User not found!");
                
            }
            this.details()
         }  
         else if(menus == 5)
         {
            alert("Thank You for give the information")
         } 

    }

}
fitnessTracker.details()