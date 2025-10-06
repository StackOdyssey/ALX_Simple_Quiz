document.addEventListener("DOMContentLoaded", function () {

    function checkAnswer() {
        const correctAnswer = "4";
        const selectedOption = document.querySelector('input[name="quiz"]:checked');
        const userAnswer = selectOption ? selectOption.value : null;

        const feedback = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! well done."
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    }

    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);

});