"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const readline = __importStar(require("readline"));
const API_URL = `https://api.exchangerate-api.com/v4/latest/INR`;
function getExchangeRates() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(API_URL);
            return response.data.rates;
        }
        catch (error) {
            console.error('Error fetching exchange rates:', error);
            throw error;
        }
    });
}
function convertCurrency(amount, from, to) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rates = yield getExchangeRates();
            const fromRate = rates[from];
            const toRate = rates[to];
            if (fromRate && toRate) {
                return (amount / fromRate) * toRate;
            }
            else {
                throw new Error('Invalid currency code');
            }
        }
        catch (error) {
            console.error('Error converting currency:', error);
            throw error;
        }
    });
}
function getUserInput(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return new Promise(resolve => {
            rl.question(prompt, answer => {
                rl.close();
                resolve(answer.trim());
            });
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fromCurrency = yield getUserInput('Enter the source currency code: ');
            const toCurrency = yield getUserInput('Enter the target currency code: ');
            const amountStr = yield getUserInput('Enter the amount to be exchanged: ');
            const amount = parseFloat(amountStr);
            if (isNaN(amount)) {
                throw new Error('Invalid amount');
            }
            const convertedAmount = yield convertCurrency(amount, fromCurrency.toUpperCase(), toCurrency.toUpperCase());
            console.log(`${amount} ${fromCurrency} is approximately ${convertedAmount.toFixed(2)} ${toCurrency}`);
        }
        catch (error) {
            console.error('An error occurred:', error);
        }
    });
}
main();
//# sourceMappingURL=Ccon.js.map