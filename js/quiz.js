const questions = [
  

{
    question: "What is the tallest mountain in the world?",
    answers: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    correct: 0,
},
{
    question: "Which ocean is the largest by area?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: 3,
},
{
    question: "Who painted the Mona Lisa?",
    answers: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    correct: 0,
},
{
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Gold", "Oxygen", "Hydrogen", "Nitrogen"],
    correct: 1,
},
{
    question: "In which year did the Titanic sink?",
    answers: ["1905", "1912", "1921", "1930"],
    correct: 1,
},
{
    question: "Which country gifted the Statue of Liberty to the USA?",
    answers: ["Canada", "United Kingdom", "France", "Germany"],
    correct: 2,
},
{
    question: "What is the chemical formula for water?",
    answers: ["H2O", "CO2", "NaCl", "O2"],
    correct: 0,
},
{
    question: "Which continent is known as the 'Land Down Under'?",
    answers: ["Africa", "South America", "Australia", "Asia"],
    correct: 2,
},
{
    question: "What is the smallest prime number?",
    answers: ["1", "2", "3", "5"],
    correct: 1,
},
{
    question: "Which famous scientist developed the theory of relativity?",
    answers: ["Isaac Newton", "Galileo Galilei", "Nikola Tesla", "Albert Einstein"],
    correct: 3,
},

  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correct: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1,
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain", "Jane Austen", "J.K. Rowling"],
    correct: 0,
  },
  {
    question: "Which language is used for web development?",
    answers: ["Python", "Java", "HTML", "C++"],
    correct: 2,
  },

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const resultContainer = document.getElementById("result-container");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.onclick = () => handleAnswer(index);
  });
}

function handleAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].correct;
  if (selectedIndex === correctIndex) {
    score++;
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextButton.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  resultContainer.style.display = "block";
  scoreElement.textContent = score;
}

document.getElementById("retry-btn").addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
  resultContainer.style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  nextButton.style.display = "none";
});

loadQuestion();
