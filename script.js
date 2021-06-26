const quizDB = [
{
    question: "Q1: 10 + 20 + 30 = ?",
    a: "40",
    b: "50",
    c: "60",
    d: "70",
    ans: "ans3"
},

{
    question: "Q2: 10 + 20 - 30 = ?",
    a: "10",
    b: "20",
    c: "40",
    d: "0",
    ans: "ans4"
},

{
    question: "Q3: 10 + 40 - 15 = ?",
    a: "35",
    b: "45",
    c: "55",
    d: "25",
    ans: "ans1"
},

{
    question: "Q4: 68 - 10 - 5 = ?",
    a: "63",
    b: "73",
    c: "43",
    d: "53",
    ans: "ans4"
}
];

// link of js and html 
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');  //Add # to for ID type 
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');   //it returns an array

const showScore = document.querySelector('#showScore');

//To automatically add questions from database:

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
   // console.log(quizDB[0].question);
   //   question.innerHTML = quizDB[questionCount].question; // Method-1 basic
   const questionList = quizDB[questionCount];
   
   question.innerText = questionList.question;
   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;

}
loadQuestion();

// When the user clicks on 'Submit' Button , we need to collect the info of which 
// option was selected by user so event (function) needs to be created : 

const getAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};


const deselectAll = () => {

    answers.forEach((curAnsElem) => curAnsElem.checked = false );
};


submit.addEventListener('click', () => {

    const selectedAnswer = getAnswer();   // makes function call 
    console.log(selectedAnswer);

    if (selectedAnswer === quizDB[questionCount].ans ){
        score++;
    };

    questionCount++;

    deselectAll();   // to deselect the choice made in previous ques.

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else {

       showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length} 😊😊</h3>
            <button class = "btn" oneclick = "location.reload()"> </button>
             `;

             showScore.classList.remove('scoreArea');
    }

});









