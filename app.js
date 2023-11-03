var questionsArray = [{
        question: "Which language runs in a web browser...?",
        opt1: "java",
        opt2: "C",
        opt3: "Python",
        opt4: "javaScript",
        correct: "opt4",

    },
    {
        question: "What does CSS stand for...?",
        opt1: "central style sheet",
        opt2: "cascading style sheet",
        opt3: "cascading simple sheet",
        opt4: "cars SUVs Sailboats",
        correct: "opt2",

    },
    {
        question: "What does HTML stand for...?",
        opt1: "HyperText Markup language",
        opt2: "HyperText Markdown language",
        opt3: "hYperloop Machine language",
        opt4: "Helicopters Terminals motorboats lamborginis",
        correct: "opt1",

    },
    {
        question: "What yeare was javaScrpit launched...?",
        opt1: "1996",
        opt2: "1995",
        opt3: "1994",
        opt4: "none of the above",
        correct: "opt2",

    },

];

var question_number_element = document.getElementById("question-number");
var question_txt_element = document.getElementById("question-txt");
var option_1_element = document.getElementById("option1");
var option_2_element = document.getElementById("option2");
var option_3_element = document.getElementById("option3");
var option_4_element = document.getElementById("option4");
var next_button = document.getElementById("next-button");
var time_element = document.getElementById("timer");

var current_question_number = 0;
var score = 0;
var time;
const total_time = 10;
var sec = total_time;

function timer() {
    time_element.innerHTML = sec;
    sec--;
    if (sec == 0) {
        sec = total_time;
        clearInterval(time);
        current_question_number++;
        showQuestion();
    }
}


function showQuestion() {
    sec = total_time;
    clearInterval(time);
    timer();
    time = setInterval(timer, 1000)

    document.querySelectorAll("input[name = opt]").forEach(option => option.checked = false);

    if (current_question_number >= questionsArray.length) {
        goToResultPage();
    }

    question_number_element.innerHTML = (current_question_number + 1) + ". ";
    question_txt_element.innerHTML = questionsArray[current_question_number].question;
    option_1_element.innerHTML = questionsArray[current_question_number].opt1;
    option_2_element.innerHTML = questionsArray[current_question_number].opt2;
    option_3_element.innerHTML = questionsArray[current_question_number].opt3;
    option_4_element.innerHTML = questionsArray[current_question_number].opt4;
}

next_button.addEventListener('click', () => {
    let optionIdSelected = document.querySelector('input[name = opt]:checked');

    let option_correct = questionsArray[current_question_number].correct;
    if (optionIdSelected !== null) {
        if (optionIdSelected.id = option_correct) {
            score++;
        }
    }
    current_question_number++;
    if (current_question_number >= questionsArray.length) {
        goToResultPage();
    } else {
        showQuestion()
    }
});
showQuestion()

function goToResultPage() {
    current_question_number = 0;
    localStorage.setItem("score", score);
    location.href = "./resultPage.html";
}









//     current_question_number++;
//     if (current_question_number >= questionsArray.length) {
//         current_question_number = 0;
//         localStorage.setItem("score", score);
//         location.href = "./result.html";
//     } else { showQuestion() }
// }

//