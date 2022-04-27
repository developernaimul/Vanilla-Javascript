
/**
 * ! Create a Student Array & Object Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with
 * * Total Admnission fees
 * ? Find All Female Students
 * TODO: Find class wise student result
 * ! Location wise student result
 * ? find student between 10 - 25 age
 */

let studentData= [
    {
        Name: 'Naimul',
        Roll: 2,
        Age: 20,
        Class: 12,
        Gender: 'Male',
        Location: 'Hili',
        AdmissionFee: 1000
    },
    {
        Name: 'Sumon',
        Roll: 1,
        Age: 15,
        Class: 9,
        Gender: 'Male',
        Location : 'Cumilla',
        AdmissionFee: 100
         
        },
    {
        Name: 'Tanjila',
        Roll: 5,
        Age: 18,
        Class: 12,
        Gender: 'Female',
        Location : 'Dhaka',
        AdmissionFee: 150
            
         },
   
    {
        Name: 'Morsalin',
        Roll: 6,
        Age: 10,
        Class: 1,
        Gender: 'Male',
        Location : 'Dinajpur',
        AdmissionFee: 150
    },
    {
        Name: 'Sadman',
        Roll: 9,
        Age: 6,
        Class: 1,
        Gender: 'Male',
        Location : 'Dhaka',
        AdmissionFee: 100
          
    },
    {
        Name: 'Aliya',
        Roll: 2,
        Age: 5,
        Class: 2,
        Gender: 'Female',
        Location : 'Dhaka',
        AdmissionFee: 150
    },
    {
        Name: 'Sama',
        Roll: 6,
        Age: 13,
        Class: 8,
        Gender: 'Famale',
        Location : 'Cumilla',
        AdmissionFee: 400
    },
    {
        Name: 'Aliza',
        Roll: 4,
        Age: 8,
        Class: 4,
        Gender: 'Female',
        Location : 'Dhaka',
        AdmissionFee: 200
        
    },
    {
        Name: 'Ador',
        Roll: 5,
        Age: 11,
        Class: 6,
        Gender: 'Male',
        Location : 'Dhaka',
        AdmissionFee: 200
        
    },
    {
        Name: 'Jakia',
        Roll: 15,
        Age: 18,
        Class: 11,
        Gender: 'Female',
        Location : 'Dhaka',
        AdmissionFee: 300
    },
    {
        Name: 'Adiyan',
        Roll: 17,
        Age: 34,
        Class: 9,
        Gender: 'Male',
        Location : 'Sylhet',
        AdmissionFee: 300
        
    },
    {
        Name: 'Saida',
        Roll: 3,
        Age: 13,
        Class: 8,
        Gender: 'Female',
        Location : 'Cumilla',
        AdmissionFee: 200
       
    },
    {
        Name: 'Umar',
        Roll: 1,
        Age: 27,
        Class: 3,
        Gender: 'Male',
        Location : 'Sylhet',
        AdmissionFee: 400
    },
    {
        Name: 'Sadia',
        Roll: 5,
        Age: 11,
        Class: 6,
        Gender: 'Female',
        Location : 'Chattogram',
        AdmissionFee:300
    },
    {
        Name: 'Apon',
        Roll: 4,
        Age: 10,
        Class: 5,
        Gender: 'Male',
        Location : 'Chattogram',
        AdmissionFee: 100
    },
    {
        Name: 'Tanni',
        Roll: 9,
        Age: 14,
        Class: 9,
        Gender: 'Female',
        Location : 'Chattogram',
        AdmissionFee: 200
    },
    {
        Name: 'Anika',
        Roll: 8,
        Age: 10,
        Class: 5,
        Gender: 'Female',
        Location : 'Chattogram',
        AdmissionFee: 300
        
    },
    {
        Name: 'Tarin',
        Roll: 8,
        Age: 11,
        Class: 6,
        Gender: 'Female',
        Location : 'Chattogram',
        AdmissionFee: 300
    },
    {
        Name: 'Fahad',
        Roll: 6,
        Age: 18,
        Class: 7,
        Gender: 'Male',
        Location : 'Dhaka',
        AdmissionFee: 300
    },
    {
                
        Name: 'Abdullah',
        Roll: 6,
        Age: 13,
        Class: 8,
        Gender: 'Male',
        Location : 'Chattogram',
        AdmissionFee: 100
    },
    {
        Name: 'Rifa',
        Roll: 9,
        Age: 16,
        Class: 6,
        Gender: 'Female',
        Location : 'Cumilla',
        AdmissionFee: 400
    },
    {
        Name: 'Siyam',
        Roll: 9,
        Age: 16,
        Class: 11,
        Gender: 'Male',
        Location : 'Cumilla',
        AdmissionFee: 300
    },
    {
        Name: 'Raju',
        Roll: 13,
        Age: 11,
        Class: 6,
        Gender: 'Male',
        Location : 'Sylhet',
        AdmissionFee: 200
    },
    {
        Name: 'Adnan',
        Roll: 11,
        Age: 9,
        Class: 4,
        Gender: 'Male',
        Location : 'Sylhet',
        AdmissionFee: 400
    },
    {
        Name: 'Ramisa',
        Roll: 20,
        Age: 15,
        Class: 10,
        Gender: 'Female',
        Location : 'Cumilla',
        AdmissionFee: 100
    },
    {
        Name: 'Kashem',
        Roll: 6,
        Age: 10,
        Class: 5,
        Gender: 'Male',
        Location : 'Dhaka',
        AdmissionFee: 200
    },
    {
        Name: 'Rafsan',
        Roll: 5,
        Age: 12,
        Class: 7,
        Gender: 'Male',
        Location : 'Cumilla',
        AdmissionFee: 150
    },
    {
        Name: 'Sami',
        Roll: 1,
        Age: 11,
        Class: 7,
        Gender: 'Male',
        Location : 'Cumilla',
        AdmissionFee: 200
    },
    {
        Name: 'Sara',
        Roll: 4,
        Age: 10,
        Class: 4,
        Gender: 'Female',
        Location : 'Dhaka',
        AdmissionFee: 100
    },
    {
        Name: 'Rohan',
        Roll: 3,
        Age: 17,
        Class: 11,
        Gender: 'Male',
        Location : 'Khulna',
        AdmissionFee: 300
    }
   
]


// ! Total Admnission fees


// let total= 0;
// for(data of studentData){
//     console.log(` ${data.Name} - ${data.AdmissionFee}`);
//     total += data.AdmissionFee

// }

// console.log(`----------------------------
//  Total Admission fee= ${total}`);



// - Find All Female Students

// for(data of studentData){
//     if(data.Gender=='Female'){
//         console.log(`${data.Name}`);
//     }
// }



// - Find class wise student result





// ! student of class- 4

// studentData.map((data,i)=>{
    
//     if (data.Class==4) {
//         console.log(`${i+1}. Hello ${data.Name}, Your class is ${data.Class}.`);
//     }
// })



// ? student of class- 5

// studentData.map((data,i)=>{
    
//     if (data.Class==5) {
//         console.log(`${i+1}. Hello ${data.Name}, Your class is ${data.Class}.`);
//     }
// })



// * student of class- 6

// studentData.map((data,i)=>{
    
//     if (data.Class==6) {
//         console.log(`${i+1}. Hello ${data.Name}, Your class is ${data.Class}.`);
//     }
// })



// TODO: student of class- 7

// studentData.map((data,i)=>{
    
//     if (data.Class==7) {
//         console.log(`${i+1}. Hello ${data.Name}, Your class is ${data.Class}.`);
//     }
// })

// ! student of class- 8

// studentData.map((data,i)=>{
    
//     if (data.Class==8) {
//         console.log(`${i+1}. Hello ${data.Name}, Your class is ${data.Class}.`);
//     }
// })

// ? student of class- 9,10 & 11

// studentData.map((data,i)=>{
    
//     if (data.Class==9 || data.Class==10 || data.Class== 11) {
//         console.log(`${i+1}. Hello ${data.Name}, Your class is ${data.Class}.`);
//     }
// })




// * Location wise student 



// studentData.map((data,i)=>{
//     if(data.Location=='Dhaka'){
//      console.log(`Hi ${data.Name}, you live in ${data.Location}.`);   
//     }
// })
// studentData.map((data,i)=>{
//     if(data.Location=='Cumilla'){
//      console.log(`Hi ${data.Name}, you live in ${data.Location}.`);   
//     }
// })
// studentData.map((data,i)=>{
//     if(data.Location=='Chattogram'){
//      console.log(`Hi ${data.Name}, you live in ${data.Location}.`);   
//     }
// })




// ! find student between 10 - 25 age


// studentData.forEach((data,i)=>{
//     if(data.Age >= 10 && data.Age <=25){
//         console.log(` Hello ${data.Name}, You're ${data.Age} Years old.`);
//     }
// })

