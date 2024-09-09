
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
    const progressionDisplay = document.getElementById('progression')

    //Add function to check answer, record score and progression
    submitBtnOne.addEventListener('click', () => {
        const answer1 = answerOne.value
        if (answer1.toLowerCase() === correctAnswerOne) {
            score++
            progression++
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
        else if (answer1.toLowerCase() === '') {
            alert('Fill in answer to increase score')
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
        else {
            progression++
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
    }
    )
    submitBtnTwo.addEventListener('click', () => {
        const answer2 = answerTwo.value
        if (answer2.toLowerCase() === correctAnswerTwo) {
            score++
            progression++
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
        else if (answer2.toLowerCase() === '') {
            alert('Fill in answer to increase score')
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
        else {
            progression++
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
    }
    )
    submitBtnThree.addEventListener('click', () => {
        const answer3 = answerThree.value
        if (answer3.toLowerCase() === correctAnswerThree) {
            score++
            progression++
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
        else if (answer3.toLowerCase() === '') {
            alert('Fill in answer to increase score')
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
        else {
            progression++
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
    })
    submitBtnFour.addEventListener('click', () => {
        const answer4 = answerFour.value
        if (answer4.toLowerCase() === correctAnswerFour) {
            score++
            progression++
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
        else if (answer4.toLowerCase() === '') {
            alert('Fill in answer to increase score')
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
        else {
            progression++
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
    })
    submitBtnFive.addEventListener('click', () => {
        const answer5 = answerFive.value
        if (answer5.toLowerCase() === correctAnswerFive) {
            score++
            progression++
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
        else if (answer5.toLowerCase() === '') {
            alert('Fill in answer to increase score')
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
        else {
            progression++
            scoreDisplay.textContent = `Score: ${score}`
            progressionDisplay.textContent = `Progression: ${progression}/5`
        }
    })
})

