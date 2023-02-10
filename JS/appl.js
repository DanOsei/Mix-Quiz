

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector("option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

// push the questions into availableQuestions //
function setAvailableQuestions(){
  const totalQuestion = quiz.length;
  for(let i=0; i<totalQuestion; i++){
    availableQuestions.push(quiz[i]);
  }
}
 // set question number, question and options // 
function getNewQuestion(){
// set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1 ) + " of " + quiz.length;

    // set question text //
    //get random question// 
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    console.log(questionIndex);

    questionCounter++;
  }

  function next(){
    if(questionCounter === quiz.length){
      console.log("quiz over");
    }
    else{
      getNewQuestion();
    }
  }

window.onload = function(){
//first we will set all questions in availablequestins array
    setAvailableQuestions();
 // second we call getnewquestion(); function
    getNewQuestion();
}