
window.addEventListener('DOMContentLoaded', (event) => {
    // Checking if all is good
    console.log('Connected')

    const answerOne = document.getElementById('userAnswerOne')
    const answerTwo = document.getElementById('userAnswerTwo')
    const answerThree = document.getElementById('userAnswerThree')
    const answerFour = document.getElementById('userAnswerFour')
    const answerFive = document.getElementById('userAnswerFive')

    const correctAnswerOne = 'B'.toLowerCase()
    const correctAnswerTwo = 'A'.toLowerCase()
    const correctAnswerThree = 'C'.toLowerCase()
    const correctAnswerFour = 'A'.toLowerCase()
    const correctAnswerFive = 'C'.toLowerCase()

    const submitBtnOne = document.getElementById('submitBtn1')
    const submitBtnTwo = document.getElementById('submitBtn2')
    const submitBtnThree = document.getElementById('submitBtn3')
    const submitBtnFour = document.getElementById('submitBtn4')
    const submitBtnFive = document.getElementById('submitBtn5')

    let score = 0
    let progression = 0

    const scoreDisplay = document.getElementById('score')
    let progressionDisplay = document.getElementById('progression').textContent

    //Add function to check answer, record score and progression
    submitBtnOne.addEventListener('click', () => {
        const answer1 = answerOne.value
        console.log(answer1)
        if (answer1.toLowerCase() === correctAnswerOne) {
            score++
            progression++
            console.log(score)
            console.log(progression)
            scoreDisplay.textContent = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
        else if (answer1.toLowerCase() === '') {
            alert('Fill in answer')
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
        else {
            progression++
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
    }
    )
    submitBtnTwo.addEventListener('click', () => {
        const answer2 = answerTwo.value

        if (answer2.toLowerCase() === correctAnswerTwo) {
            score++
            progression++
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
        else if (answer2.toLowerCase() === '') {
            alert('Fill in answer')
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
        else {
            progression++
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
    }
    )
    submitBtnThree.addEventListener('click', () => {
        const answer3 = answerThree.value
        console.log(answer3)
        if (answer3.toLowerCase() === correctAnswerThree) {
            score++
            progression++
            scoreTextContent = 'Score: ' + score
            progressionTextContent = 'Progression:' + progression + ' /5'
        }
        else if (answer3.toLowerCase() === '') {
            alert('Fill in answer')
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
        else {
            progression++
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
    })
    submitBtnFour.addEventListener('click', () => {
        const answer4 = answerFour.value
        console.log(answer4)
        if (answer4.toLowerCase() === correctAnswerFour) {
            score++
            progression++
            console.log('so far so good')
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
        else if (answer4.toLowerCase() === '') {
            alert('Fill in answer')
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
        else {
            progression++
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
    })
    submitBtnFive.addEventListener('click', () => {
        const answer5 = answerFive.value
        console.log(answer5)
        if (answer5.toLowerCase() === correctAnswerFive) {
            score++
            progression++
            console.log('so far so good')
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
        else if (answer5.toLowerCase() === '') {
            alert('Fill in answer')
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
        else {
            progression++
            scoreDisplay = 'Score: ' + score
            progressionDisplay = 'Progression:' + progression + ' /5'
        }
    })
})

