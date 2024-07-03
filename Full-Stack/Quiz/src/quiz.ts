import * as readline from 'readline';
import fetch from 'node-fetch';

// Define an interface for the quiz question
interface Question {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

// Define the Quiz class
class Quiz {
    private questions: Question[];
    private currentQuestionIndex: number;
    private score: number;
    private rl: readline.Interface;

    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    // Method to fetch quiz questions from an API
    async fetchQuestions(url: string): Promise<void> {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.questions = data.results;
            this.displayQuestion();
        } catch (error) {
            console.error('Error fetching quiz questions:', error);
        }
    }

    // Method to display the current question
    displayQuestion(): void {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        console.log(currentQuestion.question);
        const options = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer);
        options.sort(() => Math.random() - 0.5); // Shuffle options
        options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
        this.rl.question('Your answer: ', (answer) => {
            this.checkAnswer(answer);
        });
    }

    // Method to check the answer
    checkAnswer(userAnswer: string): void {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (userAnswer.toLowerCase() === currentQuestion.correct_answer.toLowerCase()) {
            console.log("Correct!");
            this.score++;
        } else {
            console.log("Incorrect!");
        }
        this.nextQuestion();
    }

    // Method to move to the next question
    nextQuestion(): void {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex === this.questions.length) {
            this.endQuiz();
        } else {
            this.displayQuestion();
        }
    }

    // Method to end the quiz and display the score
    endQuiz(): void {
        console.log("Quiz ended!");
        console.log(`Your score: ${this.score}/${this.questions.length}`);
        this.rl.close();
    }
}

// Example usage
const quiz = new Quiz();
quiz.fetchQuestions('https://opentdb.com/api.php?amount=5&type=multiple'); // Example API URL for multiple-choice questions
