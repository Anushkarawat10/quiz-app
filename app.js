var quiz = {
  "IndiaQuiz": [
    {
      "id": 1,
      "question": "What is the capital city of India?",
      "options": [
        {
          "a": "Mumbai",
          "b": "New Delhi",
          "c": "Chennai",
          "d": "Kolkata"
        }
      ],
      "answer": "New Delhi",
      "score": 0,
      "status": ""
    },
    {
      "id": 2,
      "question": "Who was the first Prime Minister of independent India?",
      "options": [
        {
          "a": "Jawaharlal Nehru",
          "b": "Mahatma Gandhi",
          "c": "Sardar Patel"
        }
      ],
      "answer": "Jawaharlal Nehru",
      "score": 0,
      "status": ""
    },
    {
      "id": 3,
      "question": "Which is the national animal of India?",
      "options": [
        {
          "a": "Lion",
          "b": "Tiger",
          "c": "Elephant"
        }
      ],
      "answer": "Tiger",
      "score": 0,
      "status": ""
    },
    {
      "id": 4,
      "question": "In which year did India gain independence from British rule?",
      "options": [
        {
          "a": "1945",
          "b": "1947",
          "c": "1950"
        }
      ],
      "answer": "1947",
      "score": 0,
      "status": ""
    },
    {
      "id": 5,
      "question": "What is the national flower of India?",
      "options": [
        {
          "a": "Rose",
          "b": "Lotus",
          "c": "Marigold",
          "d": "Sunflower"
        }
      ],
      "answer": "Lotus",
      "score": 0,
      "status": ""
    },
    {
      "id": 6,
      "question": "Who wrote the Indian national anthem?",
      "options": [
        {
          "a": "Bankim Chandra Chatterjee",
          "b": "Rabindranath Tagore",
          "c": "Sarojini Naidu"
        }
      ],
      "answer": "Rabindranath Tagore",
      "score": 0,
      "status": ""
    },
    {
      "id": 7,
      "question": "Which city is known as the 'Pink City' in India?",
      "options": [
        {
          "a": "Jaipur",
          "b": "Udaipur",
          "c": "Jodhpur"
        }
      ],
      "answer": "Jaipur",
      "score": 0,
      "status": ""
    },
    {
      "id": 8,
      "question": "What is the currency of India?",
      "options": [
        {
          "a": "Dollar",
          "b": "Rupee",
          "c": "Pound"
        }
      ],
      "answer": "Rupee",
      "score": 0,
      "status": ""
    },
    {
      "id": 9,
      "question": "Which river is known as the 'Ganges of the South'?",
      "options": [
        {
          "a": "Godavari",
          "b": "Krishna",
          "c": "Cauvery",
          "d": "Narmada"
        }
      ],
      "answer": "Godavari",
      "score": 0,
      "status": ""
    },
    {
      "id": 10,
      "question": "Which monument is also known as the 'Symbol of Love' in India?",
      "options": [
        {
          "a": "Qutub Minar",
          "b": "Taj Mahal",
          "c": "Red Fort"
        }
      ],
      "answer": "Taj Mahal",
      "score": 0,
      "status": ""
    }
  ]
}

var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.IndiaQuiz.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.IndiaQuiz[this.currentque].id + '.');
$("#question").html(quiz.IndiaQuiz[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.IndiaQuiz[this.currentque].options[0]) {
if (quiz.IndiaQuiz[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.IndiaQuiz[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.IndiaQuiz[this.currentque].options[0][key] +
"</span></label>"
);
}
}
}
if (this.currentque <= 0) {
$("#previous").attr("disabled", true);
}
if (this.currentque >= totalque) {
$('#next').attr('disabled', true);
for (var i = 0; i < totalque; i++) {
this.score = this.score + quiz.IndiaQuiz[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.IndiaQuiz[j].score == 0) {
res = '<span class="wrong">' + quiz.IndiaQuiz[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.IndiaQuiz[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.IndiaQuiz[j].id + '</span> &nbsp;' + quiz.IndiaQuiz[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.IndiaQuiz[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.IndiaQuiz[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.IndiaQuiz[this.currentque].answer) {
if (quiz.IndiaQuiz[this.currentque].score == "") {
quiz.IndiaQuiz[this.currentque].score = 1;
quiz.IndiaQuiz[this.currentque].status = "correct";
}
} else {
quiz.IndiaQuiz[this.currentque].status = "wrong";
}
}
this.changeQuestion = function (cque) {
this.currentque = this.currentque + cque;
this.displayQuiz(this.currentque);
}
}
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
jsq.displayQuiz(0);
$('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
//var radio = $(this).find('input:radio');
$(this).prop("checked", true);
selectedopt = $(this).val();
});
});
$('#next').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(1);
});
$('#previous').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(-1);
});