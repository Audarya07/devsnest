const ques = [
    {
        question:`Who is known as "The Kingslayer"?`,
        answers:[
            {text: "Jaime Lannister", correct: true},
            {text: "Sandor Clegane", correct: false},
            {text: "Joffrey Baratheon", correct: false},
            {text: "Eddard Stark", correct: false}
        ]
            
    },
    {   
        question:`Who said this memorable line: "First lesson: Stick them with the pointy end."`,
        answers:[
            {text: "Arya Stark", correct: false},
            {text: "Gregor Clegane", correct: false},
            {text: "John Snow", correct: true},
            {text: "Lady Sansa", correct: false}
        ]
            
    },
    {
        question:"Which of the following famously worships the Lord of Light?",
        answers:[
            {text: "Joffrey Baratheon", correct: false},
            {text: "Princess Myrcella", correct: false},
            {text: "Melisandre", correct: true},
            {text: "Bran Stark", correct: false}
        ]
            
    },
    {
        question:"What does Tyrion murder his father with?",
        answers:[
            {text: "Sword", correct: false},
            {text: "Crossbow", correct: true},
            {text: "Mace", correct: false},
            {text: "Poison", correct: false}
        ]           
    },
    {
        question:"What was the name of the khal of the Dothraki that Daenerys marries?",
        answers:[
            {text: "Loras Tyrell", correct: false},
            {text: "Gregor Clegane", correct: false},
            {text: "Drogo", correct: true},
            {text: "Renly Baratheon", correct: false}
        ]        
    }   
]

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-btn");

// const score = 0;
// const scoreText = document.getElementById("scoreText");

let shuffledQuestions, currQueIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currQueIndex++;
    setNextQuestion();
});

function startGame(){
    startButton.classList.add("hide");
    shuffledQuestions = ques.sort(() => Math.random() - .5);
    currQueIndex = 0;
    questionContainer.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currQueIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currQueIndex+1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    }else{
        element.classList.add("wrong");
    }
}

function clearStatusClass(element){
   element.classList.remove("correct"); 
   element.classList.remove("wrong"); 
}
