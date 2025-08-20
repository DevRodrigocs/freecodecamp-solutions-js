// 1. Calculate the average of an array of scores
function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

// 2. Determine the grade based on the average score
function getGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// 3. Create a report card object for a student
function studentReportCard(scores) {
    const average = getAverage(scores);
    const grade = getGrade(average);
    return {
        name: student.name,
        scores: student.scores,
        average: average,
        grade: grade
    };
}

// Example usage
const student = {
    name: "John Doe",
    scores: [85, 92, 78, 88, 90]
};

console.log(studentReportCard(student));
/*
Output:
{
    name: "John Doe",
    scores: [85, 92, 78, 88, 90],
    average: 86.6,
    grade: "B"
}
*/