/**
 * Gpa calculation function
 */


function getGpa(marks) {

    let gpa;

    if (marks >= 0 && marks <= 33) {
        gpa = 0;
    } else if (marks >= 33 && marks <= 40) {
        gpa = 1;
    } else if (marks >= 40 && marks <= 50) {
        gpa = 2;
    } else if (marks >= 50 && marks <= 60) {
        gpa = 3;
    } else if (marks >= 60 && marks <= 70) {
        gpa = 3.5;
    } else if (marks >= 70 && marks <= 80) {
        gpa = 4;
    } else if (marks >= 80 && marks <= 100) {
        gpa = 5;
    }

    return gpa;

}


/**
 * 
 * @param {grade calculation} marks 
 * @returns 
 */


function getGrade(marks) {

    let grade;

    if (marks >= 0 && marks <= 33) {
        grade = 'Failed';
    } else if (marks >= 33 && marks <= 40) {
        grade = 'D';
    } else if (marks >= 40 && marks <= 50) {
        grade = 'C';
    } else if (marks >= 50 && marks <= 60) {
        grade = 'B';
    } else if (marks >= 60 && marks <= 70) {
        grade = 'A-';
    } else if (marks >= 70 && marks <= 80) {
        grade = 'A';
    } else if (marks >= 80 && marks <= 100) {
        grade = 'A+';
    }

    return grade;

}

/**
 * age calculation function
 */

function ageCal(name, age) {

    let manus = '';

    if (age >= 0 && age < 5) {
        manus = 'baby';
    } else if (age >= 5 && age < 10) {
        manus = 'balok';
    } else if (age >= 10 && age < 18) {
        manus = 'kisor';
    } else if (age >= 18 && age < 30) {
        manus = 'jubok';
    } else if (age >= 30 && age < 50) {
        manus = 'togboge jubok';
    } else if (age >= 50 && age < 70) {
        manus = 'uncle';
    } else if (age >= 70) {
        manus = 'bura';
    }
    console.log(`Hi ${name} you're a ${manus} manush.`);
}


/**
 * currency converter function
 */


function currencyConvert(amount, type) {

    let rate = 0;

    if (type = 'USD' && 'usd' && 'Usd') {
        rate = 86;
    } else if (type = 'CAD' && 'cad' && 'Cad') {
        rate = 67;
    } else if (type = 'POUND' && 'pound' && 'Pound') {
        rate = 115;
    } else if (type = 'EURO' && 'euro' && 'Euro') {
        rate = 95;
    }

    console.log(`
    ${amount} ${type} = ${amount*rate} BDT.
   `)

}


/**
 * byear age calculation
 */

function byearCal(name, skill, byear) {

    let age = byear ? 2022 - byear : 'Invalid';

    console.log(`
     Hi ${name} you're ${skill} developer & your age ${age} years old.
    `)

}


/**
 * BMI calculation function
 */

function bmiCal(name, weight, height) {

    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        console.log(`
        Hi ${name}, apnar obostha kharap,,,samne ja paben kheye felen.
       `);
    } else if (bmi >= 18.5 && bmi < 25) {
        console.log(`
        Hi ${name}, you're normal.
       `);
    } else if (bmi >= 25 && bmi < 30) {
        console.log(`
        Hi ${name}, you're over weight.
       `);
    } else if (bmi >= 30) {
        console.log(`
        Hi ${name}, you're very very over weight.
       `);
    }

}