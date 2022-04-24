
/** 
 * * Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with 
 * ! Total Admnission fees
 * ? Find All Female Students 
 * * Find class wise student result 
 * TODO: Location wise student result 
 * ! find student between 10 - 25 age 
 */


const studentData= [
//   name, roll, age, class, gender, location, Admission fees


    ['Naimul','1','21','12','male','Hili','100'],
    ['Rasel','2','32','13','male','Joypurhat','200'],
    ['Rifat','3','31','10','male','dhaka','150'],
    ['Zeba','4','21','12','female','Panchbibi','300'],
    ['Shihab','5','20','10','male','dhaka','500'],
    ['Sara','6','11','5','female','dighinala','100'],
    ['Raju','7','31','12','male','chittagong','200'],
    ['Sohel','8','11','6','male','chittagong','400'],
    ['Ratul','9','22','12','male','dhaka','150'],
    ['Rifa','10','15','8','female','dighinala','180'],
    ['Rabbi','11','16','9','male','dhaka','400'],
    ['Rofik','12','11','7','male','dighinala','300'],
    ['Shahid','13','18','10','male','chittagong','350'],
    ['Taslima','14','40','11','female','chittagong','450'],
    ['Kona','15','21','12','female','dighinala','580'],
    ['Fahim','16','21','12','male','chittagong','180'],
    ['Ariful','17','15','8','male','dhaka','170'],
    ['Maruf','18','26','12','male','dighinala','140'],
    ['Rafiq','19','20','10','male','chittagong','700'],
    ['Toma','20','37','12','female','dighinala','250'],
    ['Mehedi','21','10','11','male','chittagong','100'],
    ['Korim','22','23','13','male','dhaka','500'],
    ['Shekh','23','20','10','male','cumilla','400'],
    ['Sabbir','24','21','12','male','chittagong','600'],
    ['Riyad','25','25','14','male','chittagong','200'],
    ['Rana','26','11','6','male','cumilla','600'],
    ['Morsalin','27','19','9','male','chittagong','800'],
    ['Mitu','28','21','12','female','cumilla','400'],
    ['Taniya','29','20','10','female','dhaka','800'],
    ['Munna','30','24','13','male','cumilla','600'],
]


//  Total admission fees
// =========================

let totalFees= 0
studentData.forEach((data,i)=>{
    console.log(`${i + 1}. ${data[0]} = ${data[6]}`);
    totalFees += parseInt(data[6])

})
console.log(`
---------------------
 Total fees= ${totalFees}`);



//  Find All Female Students
//  ==============================


// studentData.sort().map((data,i)=>{
//     if (data[4]=='female') {
//         console.log(`${data[0]}`);
//     }
    
// })



// - Find class wise student result
// ===================================

// console.log(`
//  Student of class- 9
// ========================
// `)
// studentData.sort().map((data,i)=>{
//     if (data[3]==9) {
//         console.log(`${i+1}. Hello ${data[0]}, your class is ${data[3]}.`);
//     }
// })
// console.log(`
//  Student of class- 10
// ========================
// `)
// studentData.sort().map((data,i)=>{
//     if (data[3]==10) {
//         console.log(`${i+1}. Hello ${data[0]}, your class is ${data[3]}.`);
//     }
// })
// console.log(`
//  Student of class- 11
// ========================
// `)
// studentData.sort().map((data,i)=>{
//     if (data[3]==11) {
//         console.log(`${i+1}. Hello ${data[0]}, your class is ${data[3]}.`);
//     }
// })
// console.log(`
//  Student of class- 12
// ========================
// `)
// studentData.sort().map((data,i)=>{
//     if (data[3]==12) {
//         console.log(`${i+1}. Hello ${data[0]}, your class is ${data[3]}.`);
//     }
// })
// console.log(`
//  Student of class- 13
// ========================
// `)
// studentData.sort().map((data,i)=>{
//     if (data[3]==13) {
//         console.log(`${i+1}. Hello ${data[0]}, your class is ${data[3]}.`);
//     }
// })




// - Location wise student result
// =================================

// console.log(`
//  Students who are from Dhaka:
// =============================
// `)
// studentData.forEach((data,i)=>{
//     if (data[5]=='dhaka') {
//         console.log(`${i+1}. Hi ${data[0]}, your location is ${data[5]}`);
//     }
// })
// console.log(`
//  Students who are from Cumilla:
// ===============================
// `)
// studentData.forEach((data,i)=>{
//     if (data[5]=='cumilla') {
//         console.log(`${i+1}. Hi ${data[0]}, your location is ${data[5]}`);
//     }
// })
// console.log(`
//  Students who are from Chittagong:
// ==================================
// `)
// studentData.forEach((data,i)=>{
//     if (data[5]=='chittagong') {
//         console.log(`${i+1}. Hi ${data[0]}, your location is ${data[5]}`);
//     }
// })
// console.log(`
//  Students who are from Dighinala:
// =================================
// `)
// studentData.forEach((data,i)=>{
//     if (data[5]=='dighinala') {
//         console.log(`${i+1}. Hi ${data[0]}, your location is ${data[5]}`);
//     }
// })




// - find student between 10 - 25 age
// ===================================


// studentData.sort().map((data)=>{
//     if (data[2]>=10 && data[2]<=25) {
//         console.log(`
//         Student name: ${data[0]}
//         Student Age : ${data[2]}
//         `);
        
//     }
// })


