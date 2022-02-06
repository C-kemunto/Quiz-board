let correctAnswers = {
  q1: "false",
  q2: "function myFunction()",
  q3: "Both the head section and the body section are correct",
  q4: "script",
  q5: "script src='xxx.js'",
  q6: "if(i==5)",
};

let quizForm = document.getElementById("quizForm");

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let userData = new FormData(quizForm);
  comparision(userData);
});
//const names = ["cindy", "kemunto", "chep"];
//let chep = names[2];
//['q1', 'false']

function comparision(userData) {
  let score = 0;
  let wrongAnswers = [];
  for (let answerList of userData) {
    // let question = answerList[0];
    // let answer = answerList[1];
    if (answerList[1] === correctAnswers[answerList[0]]) {
      score++;
    } else {
      wrongAnswers.push(answerList[1]);
    }
  }
//   let userGrade = grading(score);
//   alert(userGrade);
  document.querySelector(".result").innerHTML = grading(score);
}

function grading(actualScore) {
  let grade = (actualScore / 6) * 100;
  let message = "";
  if (grade < 50) {
    message = "pull your socks!!";
  } else if (grade <= 75) {
    message = "well done!!";
  } else if (grade < 90) {
    message = "excellent :)";
  } else {
    message = "You are a Guru!!!";
  }
  return `${grade}%: ${message}`
}
