export class CourseOutcome {
    constructor(studentID, courseID, semesterNumber, gradeOutcome) {
        this.studentID = studentID;
        this.courseID = courseID;
        this.semesterNumber = semesterNumber;
        this.gradeOutcome = gradeOutcome;
    }

    letterGradeToGradePoints() {

        switch (this.gradeOutcome) {
            //https://www.tru.ca/distance/services/policies/newgrading.html
            case `A+`:
                return 4.3;
            case `A`:
                return 4.0;
            case `A-`:
                return 3.67;
            case `B+`:
                return 3.33;
            case `B`:
                return 3.0;
            case `B-`:
                return 2.67;
            case `C+`:
                return 2.33;
            case `C`:
                return 2.00;
            case 'C-':
                return 1.67;
            case `D`:
                return 1.00;
            default:
                return 0;
        }

    }

    toString() {
        `${this.studentID} got a ${this.gradeOutcome} in ${this.courseID} during the ${this.semesterNumber}`;
    }

}