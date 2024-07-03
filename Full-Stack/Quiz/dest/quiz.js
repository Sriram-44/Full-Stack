"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function fetchQuestions(amount, category, difficulty) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
        try {
            const response = yield axios_1.default.get(apiUrl);
            return response.data.results;
        }
        catch (error) {
            console.error('Error fetching questions:', error);
            throw error;
        }
    });
}
function displayQuestion(question) {
    console.log('Category:', question.category);
    console.log('Question:', question.question);
    console.log('Options:');
    const options = [...question.incorrect_answers, question.correct_answer];
    options.sort(() => Math.random() - 0.5); // Shuffle options
    options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
}
function startQuiz(amount, category, difficulty) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const questions = yield fetchQuestions(amount, category, difficulty);
            questions.forEach((question, index) => {
                console.log(`Question ${index + 1}:`);
                displayQuestion(question);
                console.log('\n');
            });
        }
        catch (error) {
            console.error('An error occurred during the quiz:', error);
        }
    });
}
// Example usage:
const amount = 5; // Number of questions
const category = 9; // General Knowledge category
const difficulty = 'medium';
startQuiz(amount, category, difficulty);
//# sourceMappingURL=quiz.js.map