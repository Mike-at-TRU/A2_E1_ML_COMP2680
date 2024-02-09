import { CourseOutcome } from "./courseOutcome.mjs";

const rawInput = `Student_ID,Course_ID,Semester_Number,Outcome\n
12430,MATH_1140,1,A-\n 
12430,COMP_1130,1,A\n
12430,PHYS_1150,1,C\n
12430,ENGL_1010,1,B+\n
12430,MATH_1150,2,B\n
12430,COMP_2680,2,A+\n
12430,PHIL_2240,2,C+\n
12555,MATH_1100,1,C-\n
12555,CHEM_1200,1,F\n
12555,PHYS_1100,1,C+\n
12555,MATH_1200,2,B-\n
12555,LING_1000,2,D\n
12555,PHYS_1200,2,C\n
12555,PHIL_3200,2,C-\n
12702,MATH_1150,2,A-\n
12702,PHYS_1150,2,A\n
12702,CHEM_1100,2,A+\n
12702,PHIL_1450,2,B+\n
12702,ENGL_1200,2,A\n
12905,MATH_1150,1,A-\n
12905,MATH_2070,1,A\n
12905,ENGL_2010,1,B+\n
12905,PHIL_1070,1,B-\n
13456,BIO_1050,1,A\n
13456,ENGL_3040,1,A-\n
13456,MATH_2170,1,B\n
13456,PHYS_3140,1,A-\n
13456,CHEM_2300,2,B+\n
13456,COMP_1170,2,B\n
13456,BIO_1150,2,C\n
13456,ASTR_1200,2,A+\n`;

// TODO parse this text to create an array of student outcomes

const notEmptyString = x => !(x.length === 0 || x === ' ');
const seperatedOnLines = rawInput.split('\n').filter(notEmptyString);
const lengthOfStudentIds = 4; //-1 because starts at 0

console.log(typeof seperatedOnLines);
const print = x => console.log(x);
const printLength = x => console.log(x.length);
// seperatedOnLines.forEach(print);
// seperatedOnLines.forEach(printLength);
const orderOfInfoGiven = seperatedOnLines[0].split(`,`);
orderOfInfoGiven.forEach(print);
const typesOfInformation = [`Student_ID`, `Course_ID`, `Semester_Number`, `Outcome`];
let isValidOrder = true;

if (typesOfInformation.length === orderOfInfoGiven.length) {
    for (let i = 0; i < 4; i++) {
        if (orderOfInfoGiven[i] !== typesOfInformation[i])
            isValidOrder = false;
    }
}
else isValidOrder = false;



if (isValidOrder) {




    const infoInCourseOutcome = seperatedOnLines.slice(1).map(textRow => textRow.split(',')).map(studentInfo => {
        const studentID = studentInfo[0];
        const courseID = studentInfo[1];
        const semester = studentInfo[2];
        const outcome = studentInfo[3];
        return new CourseOutcome(studentID, courseID, semester, outcome);
    });
    console.log({ removedInfo: infoInCourseOutcome });


    infoInCourseOutcome.forEach(print);
    console.log(infoInCourseOutcome.forEach(x => { x.letterGradeToGradePoints(); }));











    // TODO iterate through the outcomes to calculate each students GPA and log these

    // TODO log a full transcript printout for each student

    // TODO[Advanced] Repeat the calculation, aggregating on a semester-by-semester basis and repeat the log
}