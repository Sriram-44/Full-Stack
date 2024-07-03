import axios from 'axios';
import * as readline from 'readline';

interface QuizQuestion {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

async function fetchQuizQuestions(amount: number, category: number, difficulty: string): Promise<QuizQuestion[]> {
    try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching quiz questions:', error);
        throw error;
    }
}

async function displayQuizQuestion(question: QuizQuestion): Promise<string> {
    console.log('Category:', question.category);
    console.log('Question:', question.question);
        const options = [question.correct_answer, ...question.incorrect_answers];
        for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    return new Promise(resolve => {
        rl.question('Enter your answer (0-3): ', answer => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

function checkAnswer(userAnswer: string, correctAnswer: string): boolean {
    return userAnswer === correctAnswer;
}

async function startQuiz() {
    try {
        const questions = await fetchQuizQuestions(5, 9, 'medium');
        
        let score = 0;
        
        for (const question of questions) {
            console.log('\n*****************************************************\n');
            const userAnswer = await displayQuizQuestion(question);
            
            if (checkAnswer(userAnswer, question.correct_answer)) {
                console.log('\nCorrect!');
                score++;
            } else {
                console.log('\nIncorrect!');
                console.log('Correct answer:', question.correct_answer);
            }
        }
        
        console.log('\n*****************************************************\n');
        console.log(`Quiz completed! Your score: ${score}/${questions.length}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

startQuiz();
