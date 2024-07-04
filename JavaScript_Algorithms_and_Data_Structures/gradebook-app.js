// Get the average of all scores
function getAverage(scores) {
    let result = 0;
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    result = total / scores.length;
    return result;
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

  // Get the grade from a score
  function getGrade(score) {
    if (score >= 0 && score <= 59) {
        return "F";
    }
    if (score >= 60 && score <= 69) {
        return "D";
    }
    if (score >= 70 && score <= 79) {
        return "C";
    }
    if (score >= 80 && score <= 89) {
        return "B";
    }
    if (score >= 90 && score <= 99) {
        return "A";
    }
    else {
        return "A++";
    }
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));

  // Check if the grade is not an F
  function hasPassingGrade(score) {
    let grade = getGrade(score);
    if (grade !== "F"){
      return true;
    }
    else{
      return false;
    }
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));

  // Create a message for the student if they failed or not
  function studentMsg(totalScores, studentScore) {
    let avgGrade = getAverage(totalScores);
    let grade = getGrade(studentScore);
    if(grade === "F"){
      return `Class average: ${avgGrade}. Your grade: ${grade}. You failed the course.`;
    }
    else{
      return `Class average: ${avgGrade}. Your grade: ${grade}. You passed the course.`;
    }
  
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));