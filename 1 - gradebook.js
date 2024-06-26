/*
A project to review JS fundamentals such as functions, arrays
array methods and conditions

Each functions is the solution to the steps provided in the curriculum
*/

//STEP 1
function getAverage(scores) {
    let sum = 0;
    const total = scores.length;
    let average;

    for (const score of scores) {
        sum += score;
    }
    average = sum / total;
    return average;
}

//STEP 2
function getGrade(score) {
    let grade = "";
    if (score === 100) {
        grade = "A++";
    } else if (90 <= score && score <= 99) {
        grade = "A";
    } else if (80 <= score && score <= 89) {
        grade = "B";
    } else if (70 <= score && score <= 79) {
        grade = "C";
    } else if (60 <= score && score <= 69) {
        grade = "D";
    } else if (0 <= score && score <= 59) {
        grade = "F";
    } else {
        return "NOT A SCORE!";
    }
    return grade;
}

//STEP 3
function hasPassingGrade(score) {
    const gradeCheck = getGrade(score);
    let passed = false;

    if (gradeCheck !== "F") {
        passed = true;
    }
    return passed;
}

//STEP 4
function studentMsg(totalScores, studentScore) {
    const totalClassScore = getAverage(totalScores);
    const studentGrade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);
    const passedMessage = "Class average: " + totalClassScore + "." + " " + "Your grade: " + studentGrade + "." + " " + "You passed the course.";
    const failedMessage = "Class average: " + totalClassScore + "." + " " + "Your grade: " + studentGrade + "." + " " + "You failed the course.";

    if (passed) {
        return passedMessage;
    } else {
        return failedMessage;
    }
}

// TEST
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));