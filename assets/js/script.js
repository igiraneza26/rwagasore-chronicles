// Checking if all is good
console.log('Connected')
// Function to start quiz
function startQuiz() {
    window.location.href = 'quiz-template.html';
}
// Quiz content and details
const questions = [
    {
        text: 'Who was Prince Louis Rwagasore?',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqEkvNqJ0wzQ1bHLBiDfXXr_40nbtNuhxeg&s',
        type: 'checkbox',
        options: ['A colonial governor', 'The first Prime Minister of Burundi', 'A businessman', 'A religious leader'],
        correctAnswer: 'The first Prime Minister of Burundi'
    },
    {
        text: 'Prince Louis Rwagasore born in 1930',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4ZN5Sqgx24K-MqV4w_kO0-f-m4I9WnFOcg&s',
        type: 'checkbox',
        options: ['True', 'False'],
        correctAnswer: 'True'
    },
    {
        text: 'Which political party did Prince Louis Rwagasore found in Burundi?',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrS0CZvQXMCoqgpXaUTO3-aDsEM2uYlpeBrA&s',
        type: 'text',
        correctAnswer: 'UPRONA'
    },
    {
        text: 'In which year did Burundi gain independence?',
        image: 'https://nationaltoday.com/wp-content/uploads/2022/05/118-Burundi.jpg',
        type: 'slider',
        min: 1920,
        max: 1970,
        step: 2,
        correctAnswer: 1962
    },
    {
        text: 'Which European country colonized Burundi before its independence?',
        image: 'https://cdn04.allafrica.com/download/pic/main/main/csiid/00421276:c97bb29eda5ac86afce1bae7c25e7d25:arc614x376:w735:us1.jpg',
        type: 'carousel',
        options: [
            { img: 'https://i.natgeofe.com/k/04665f4a-3f8d-4b62-8ca3-09ce7dfc5a20/france-eiffel-tower_2x3.jpg', alt: 'France' },
            { img: 'https://www.brussels.com/media/public/sheetal/Atomium.jpg', alt: 'Belgium' },
            { img: 'https://www.berlin.de/binaries/asset/image_assets/6274092/ratio_4_3/1684826673/800x600/', alt: 'Germany' },
            { img: 'https://i.natgeofe.com/k/a6c9f195-de20-445d-9d36-745ef56042c5/OG_Colosseum_Ancient-Rome_KIDS_1122_3x2.jpg', alt: 'Italy' },
        ],
        correctAnswer: 'https://www.brussels.com/media/public/sheetal/Atomium.jpg'
    },
]

let currentQuestion = 0;
let score = 0;

// Function to load a question
function loadQuestion(index) {
    const question = questions[index];
    document.getElementById("question-text").innerHTML = `<h2>${question.text}</h2>`;
    document.getElementById("question-image").src = question.image;

    const answerOptionsArea = document.getElementById("answer-options");
    answerOptionsArea.innerHTML = ""; // Clear previous options

    // Handle different question types
    if (question.type === "checkbox") {
        question.options.forEach(option => {
            answerOptionsArea.innerHTML += `
          <md-checkbox id="checkbox-two" touch-target="wrapper" id="${option}"></md-checkbox>
          <label for="${option}">${option}</label>
        `;
        });
    } else if (question.type === "text") {
        answerOptionsArea.innerHTML += `
        <md-filled-text-field label="Your answer" id="answerText" value="Value">
        </md-filled-text-field>
      `;
    } else if (question.type === "carousel") {
        // Create a carousel of image options
        answerOptionsArea.innerHTML += `<div class="carousel-container" id="carouselContainer"></div>`;
        const carouselContainer = document.getElementById("carouselContainer");

        question.options.forEach(option => {
            carouselContainer.innerHTML += `
          <div class="carousel-item">
            <img src="${option.img}" alt="${option.alt}" class="carousel-img" onclick="selectImage('${option.img}')">
          </div>
        `;
        });
    }
    else if (question.type === "slider") {
        answerOptionsArea.innerHTML += `
          <md-slider range id="slider" min="${question.min}" max="${question.max}" step="${question.step}" value="${question.min}"></md-slider>
          <md-slider labeled id="sliderValue">Selected Value: ${question.min}</md-slider>
        `;
    }
}
// Load the first question initially
loadQuestion(currentQuestion);