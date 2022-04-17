/**
 * Gpa result calculation software
 */


let name = prompt('student name');
let age = prompt('student age');
let roll = prompt('student roll');
let bn = prompt('bangla');
let en = prompt('english');
let math = prompt('math');
let science = prompt('science');
let sscience = prompt('social science');
let religion = prompt('religion');


console.log(`
  
  Age:${name}
  Age:${age}
  Roll:${roll}
  ==========================================================================>
  Subject    Marks              Gpa                         Grade
  Bangla     ${bn}              ${getGpa(bn)}               ${getGrade(bn)}
  English    ${en}              ${getGpa(en)}               ${getGrade(en)}
  Math       ${math}            ${getGpa(math)}             ${getGrade(math)}  
  Science    ${science}         ${getGpa(science)}          ${getGrade(science)}
  Sscience   ${sscience}        ${getGpa(sscience)}         ${getGrade(sscience)} 
  Religion   ${religion}        ${getGpa(religion)}         ${getGrade(religion)}

`);