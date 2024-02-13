export class CourseOutcome {
    constructor(studentID, courseID, semester, gradeOutcome) {
        this.studentID = studentID;
        this.courseID = courseID;
        this.semester = semester;
        this.gradeOutcome = gradeOutcome;
    }

    letterGradeToGradePoints() {
        //https://www.tru.ca/distance/services/policies/newgrading.html
        if (this.gradeOutcome === `A+`)
            return 4.3;
        if (this.gradeOutcome === `A`)
            return 4.0;
        if (this.gradeOutcome === `A-`)
            return 3.67;
        if (this.gradeOutcome === `B+`)
            return 3.33;
        if (this.gradeOutcome === `B`)
            return 3.0;
        if (this.gradeOutcome === `B-`)
            return 2.67;
        if (this.gradeOutcome === `C+`)
            return 2.33;
        if (this.gradeOutcome === `C`)
            return 2.00;
        if (this.gradeOutcome === 'C-')
            return 1.67;
        if (this.gradeOutcome === `D`)
            return 1.00;

        return 0;
    }



    toString() {
        `${this.studentID} got a ${this.gradeOutcome} in ${this.courseID} during the ${this.semester}`;
    }

}