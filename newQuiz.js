// creating array

const quizData = [
    {
        setA: [
            {
                question: "How do we put Javascript inside HTML?",
                options: [
                    "<js>",
                    "<javascript>",
                    "<scripting>",
                    "<script>",
                ],
                correct: "<script>",
                status: false,
            },
            {
                question: " Which type of JavaScript language is?",
                options: [
                    "Object oriented",
                    "Object based",
                    "Functional",
                    "None of above",
                ],
                correct: "Object based",
                status: false,
            },
            {
                question: "Which one is not a comparison operator?",
                options: [
                    "=",
                    "<",
                    ">",
                    "!=",
                ],
                correct: "=",
                status: false,
            },
            {
                question: "What will be the output of the following code? \nconst res = ['1', '1a', '0', -1, true, false].map(Number).filter(Boolean); \nconsole.log(res);?",
                options: [
                    "[1,1]",
                    "[1,-1,1]",
                    "[1,Nan,-1,1",
                    "[1,true]",
                ],
                correct: "[1,-1,1]",
                status: false,
            },
            {
                question: "Which method is used to sorts the elements of an array?",
                options: [
                    "order()",
                    "sort()",
                    "changeOrder()",
                    "None of the above",
                ],
                correct: "sort()",
                status: false,
            },
            {
                question: "What is the correct way to create an empty array in JavaScript?",
                options: [
                    "let arr = new Array();",
                    "let arr=[];",
                    "let arr = {};",
                    "let arr = new Array([]);",
                ],
                correct: "let arr=[];",
                status: false,
            },
            {
                question: "Which method adds one or more elements to the end of an array and returns the new length?",
                options: [
                    "insert()",
                    "append()",
                    "add()",
                    "push()",
                ],
                correct: "push()",
                status: false,
            },
            {
                question: "How do you remove a property from an object?",
                options: [
                    "object.removeProperty();",
                    "object.remove(property);",
                    "delete.object.property;",
                    "object.popProperty();",
                ],
                correct: "delete.object.property;",
                status: false,
            },
            {
                question: "How do you concatenate two strings in JavaScript?",
                options: [
                    "str1.add(str2)",
                    "str1.concate(str2)",
                    "str1.join(str2)",
                    "str1.merge(str2)",
                ],
                correct: "str1.concate(str2)",
                status: false,
            },
            {
                question: "Which method is used to find the index of the first occurrence of a substring in a string?",
                options: [
                    "str.indexOf(subString)",
                    "str.find(substring)",
                    "str.search(substring)",
                    "str.includes(substring)",
                ],
                correct: "str.indexOf(subString)",
                status: false,
            },
        ],
    },
    {
        setB: [
            {
                question: "What is the purpose of the 'typeof' operator in JavaScript?",
                options: [
                    "To check if a variable is defined",
                    "To determine the data type of a value or variable",
                    "To convert a value to a string",
                    "To compare two values"
                ],
                correct: "To determine the data type of a value or variable",
                status: false,
            },
            {
                question: "How do you declare a constant variable in JavaScript?",
                options: [
                    "const",
                    "let",
                    "var",
                    "constant"
                ],
                correct: "const",
                status: false,
            },
            {
                question: "What is the 'event loop' in JavaScript used for?",
                options: [
                    "Handling asynchronous code and callbacks",
                    "Defining event listeners for user interactions",
                    "Looping through arrays and objects",
                    "Creating animations"
                ],
                correct: "Handling asynchronous code and callbacks",
                status: false,
            },
            {
                question: "What is the purpose of the 'try...catch' statement in JavaScript?",
                options: [
                    "To define a loop",
                    "To handle exceptions and errors",
                    "To declare variables",
                    "To create functions"
                ],
                correct: "To handle exceptions and errors",
                status: false,
            },
            {
                question: "Which JavaScript function is used to remove whitespace from the beginning and end of a string?",
                options: [
                    "trim()",
                    "removeWhitespace()",
                    "strip()",
                    "cleanString()"
                ],
                correct: "trim()",
                status: false,
            },
            {
                question: "What does the 'this' keyword refer to in the global scope in JavaScript?",
                options: [
                    "It refers to the current function",
                    "It refers to the window or global object",
                    "It refers to the parent object",
                    "It refers to the previous value"
                ],
                correct: "It refers to the window or global object",
                status: false,
            },
            {
                question: "Which operator is used to compare both type and value in JavaScript?",
                options: [
                    "==",
                    "===",
                    "!=",
                    "!=="
                ],
                correct: "===",
                status: false,
            },
            {
                question: "What is the purpose of the 'forEach()' method in JavaScript?",
                options: [
                    "To filter elements in an array",
                    "To loop through the elements of an array",
                    "To add elements to an array",
                    "To sort elements in an array"
                ],
                correct: "To loop through the elements of an array",
                status: false,
            },
            {
                question: "Which statement is used to exit a loop prematurely in JavaScript?",
                options: [
                    "continue",
                    "break",
                    "return",
                    "exit"
                ],
                correct: "break",
                status: false,
            },
            {
                question: "What is the result of 'null == undefined' in JavaScript?",
                options: [
                    "true",
                    "false",
                    "undefined",
                    "null"
                ],
                correct: "true",
                status: false,
            },
        ],
    },
    {
        setC: [
            {
                question: "What is the result of adding a number and a string in JavaScript?",
                options: [
                    "TypeError",
                    "The string is converted to a number",
                    "The number is converted to a string",
                    "Concatenation of the number and string"
                ],
                correct: "Concatenation of the number and string",
                status: false,
            },
            {
                question: "Which keyword is used to declare a variable in JavaScript?",
                options: [
                    "var",
                    "int",
                    "declare",
                    "let"
                ],
                correct: "var",
                status: false,
            },
            {
                question: "What does the 'NaN' stand for in JavaScript?",
                options: [
                    "Not a Name",
                    "Not a Null",
                    "Not a Number",
                    "Not an Object"
                ],
                correct: "Not a Number",
                status: false,
            },
            {
                question: "Which function is used to parse a JSON string into an object in JavaScript?",
                options: [
                    "JSON.parse()",
                    "parseJSON()",
                    "stringifyJSON()",
                    "fromJson()"
                ],
                correct: "JSON.parse()",
                status: false,
            },
            {
                question: "What is the purpose of the 'break' statement in a JavaScript loop?",
                options: [
                    "To skip the current iteration and continue with the next",
                    "To exit the loop immediately",
                    "To pause the loop temporarily",
                    "To restart the loop from the beginning"
                ],
                correct: "To exit the loop immediately",
                status: false,
            },
            {
                question: "Which event is triggered when an HTML form is submitted?",
                options: [
                    "submitEvent",
                    "formSubmit",
                    "submit",
                    "formSubmitted"
                ],
                correct: "submit",
                status: false,
            },
            {
                question: "What is the purpose of the 'this' keyword in JavaScript?",
                options: [
                    "Refers to the current function",
                    "Refers to the parent object",
                    "Refers to the previous value",
                    "Refers to the next variable"
                ],
                correct: "Refers to the parent object",
                status: false,
            },
            {
                question: "Which method is used to add a class to an HTML element in JavaScript?",
                options: [
                    "addClass()",
                    "addToClass()",
                    "toggleClass()",
                    "setClass()"
                ],
                correct: "addClass()",
                status: false,
            },
            {
                question: "What is the purpose of the 'querySelector()' method in JavaScript?",
                options: [
                    "To select the first element that matches a CSS selector",
                    "To select all elements that match a CSS selector",
                    "To select elements by their class name",
                    "To select elements by their tag name"
                ],
                correct: "To select the first element that matches a CSS selector",
                status: false,
            },
            {
                question: "Which built-in object in JavaScript is used to perform mathematical operations?",
                options: [
                    "Math",
                    "Calc",
                    "Number",
                    "Compute"
                ],
                correct: "Math",
                status: false,
            },
        ],
    },
];

//initialization
const submit1 = document.querySelector(".btn2");
let userName;//stored the name of user
let selectedSet;
let currentSet;
let shuffledOptions;

const trackerItems = document.querySelectorAll('.tracker li');
const progressBar = document.getElementById("myBar");
const valueOfProgress = document.querySelector(".progressValue");

const ansElement = document.querySelectorAll(".choose");
// console.log(ansElement);//giving a nodeList

const quiz = document.querySelector('#quiz');

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
        "#question, .option_1 , .option_2, .option_3, .option_4"
    );

const submitBtn = document.getElementById("submit");
const previousBtn = document.getElementById("previous");
const reviewBtn = document.getElementById("review");


//getting the selected set index
const getSelectedSet = () => {
    let ansElm = Array.from(ansElement);//changing nodelist to array
    return ansElm.findIndex((curElem) => curElem.checked);
};

// current quiz
let currentQuiz = 0;
let score = 0;

// Initialize an array to store shuffled options for each question
const shuffledOptionsArray = [];

// ...

// Function to load the quiz with shuffled options
const loadQuiz = () => {
    const setSelected = quizData[selectedSet];
    const setKeys = Object.keys(setSelected);

    currentSet = setSelected[setKeys[0]];



    // Check if shuffled options already exist for this question
    if (shuffledOptionsArray[currentQuiz]) {

        const { question } = currentSet[currentQuiz];
        questionElm.innerHTML = `${currentQuiz + 1}: ${question}`;


        shuffledOptions = shuffledOptionsArray[currentQuiz];
        for (let i = 0; i < shuffledOptions.length; i++) {
            const optionId = `option_${i + 1}`;
            const optionElement = document.querySelector(`#${optionId}`);
            optionElement.textContent = shuffledOptions[i];

            //conditon to get the previous selected onption when 
            if (currentSet[currentQuiz].hasOwnProperty('ans')) {
                // console.log(optionElement.textContent);
                if (shuffledOptions[i] === currentSet[currentQuiz].ans) {
                    console.log(currentSet[currentQuiz].ans);
                    optionElement.previousElementSibling.checked = true;
                }
                else {
                    optionElement.previousElementSibling.checked = false;
                }
            }

        }
    } else {
        const { question, options } = currentSet[currentQuiz];
        questionElm.innerHTML = `${currentQuiz + 1}: ${question}`;

        // Shuffle options array and store it
        shuffledOptions = shuffleArray(options);
        shuffledOptionsArray[currentQuiz] = shuffledOptions;

        for (let i = 0; i < shuffledOptions.length; i++) {
            const optionId = `option_${i + 1}`;
            const optionElement = document.querySelector(`#${optionId}`);
            optionElement.textContent = shuffledOptions[i];
        }
    }
};



submit1.addEventListener('click', () => {
    userName = document.querySelector("#userInput");
    console.log(userName.value);

    //checking & displaying selected option
    selectedSet = getSelectedSet();
    console.log(selectedSet);

    //changing divs and displaying disabled div
    if (selectedSet === -1 && (userName === null || userName === undefined || userName === "")) {//also do same for userName⭐⭐⭐
        alert("fill both the fields");
    }
    else {
        const quizSectionDisplay = document.querySelector(".quiz-section");
        const trackerDisplay = document.querySelector(".tracker");
        const acceptDisplay = document.querySelector(".accept");
        quizSectionDisplay.style.display = "block";
        trackerDisplay.style.display = "flex";
        acceptDisplay.style.display = "none";

        const displaySection = document.querySelector(".display-section");
        displaySection.innerHTML = userName.value;
    }
    loadQuiz();
});


// for suffling the options ⭐⭐⭐
const shuffleArray = (array) => {
    const shuffledArray = array.slice(); // Create a copy of the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
};

//for getting the selected option
const getSelectedOption = () => {
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked)
    // const selectedOption = answerElement.find((curElem) => curElem.checked);
    // return selectedOption ? selectedOption.value : null;
};


// deselectedAnswer
const deselectedAnswer = () => {
    answerElm.forEach((curElem) => curElem.checked = false);
};

let width = 0;//counting for progressBar

submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);
    //testing⭐⭐⭐👇
    const ans = currentSet[currentQuiz].correct;
    console.log(ans);
    const chooseAns = shuffledOptions[selectedOptionIndex];
    console.log(chooseAns);


    // inserting the choseAns to the current suffled question array
    currentSet[currentQuiz].ans = chooseAns;
    // console.log(currentSet);

    //condition to get green color on li if ans is not equal to undefined
    if ((currentSet[currentQuiz].ans) != undefined) {
        const li_item = trackerItems[currentQuiz];
        li_item.style.backgroundColor="lightgreen";
    }

    if (width < 100) {
        width += 10;
        progressBar.style.width = `${width}%`;//increasing the progressBar on every next button click
        valueOfProgress.innerHTML = `${width}%`;
    }

    if (currentSet[currentQuiz].ans === currentSet[currentQuiz].correct) {
        score++;
    }
    currentQuiz++;

    if (currentQuiz < currentSet.length) {
        deselectedAnswer();
        loadQuiz();
    }
    else {
       for(let i = 0;i<currentSet.length;i++){
        if (currentSet[i].status === true){
            Swal.fire({
                title: "You Have Question to Review",
                text: "Do you want to review?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "No"
              }).then((result) => {
                if (result.isConfirmed) {
                  // User clicked "Yes"
                  // Handle the "Yes" action here
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  // User clicked "No" or closed the modal
                  // Handle the "No" action here
                }
              });
        } 
       }
        quiz.innerHTML = `
        <div class="result">
        <h2>🏆 Your score: ${score}/${currentSet.length} Correct answer</h2>
        <p>percentage : ${(score/currentSet.length)*100}%</p>
        <button class="reload-button" onclick="location.reload()">Play Again</button>
        <button class="result-button" onclick="">View Result</button>
        </div>`;
        console.log(score + "score");
    }
});


trackerItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const questionNumber = item.getAttribute('data-question');
        currentQuiz = parseInt(questionNumber) - 1; // Adjust for 0-based array
        // reloadQuiz();
        loadQuiz();
    });
});

previousBtn.addEventListener('click', () => {
    if (currentQuiz > 0) {
        currentQuiz--;

        deselectedAnswer();
        loadQuiz();
    }
}); 

reviewBtn.addEventListener('click',() => {
    currentSet[currentQuiz].status=true;
    console.log(currentSet);
})

function review(){

}