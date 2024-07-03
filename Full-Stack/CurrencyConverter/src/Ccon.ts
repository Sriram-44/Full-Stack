import axios from 'axios';
import * as readline from 'readline';

const API_URL = `https://api.exchangerate-api.com/v4/latest/INR`;
async function getExchangeRates(): Promise<{ [currency: string]: number }> {
    try {
        const response = await axios.get(API_URL);
        return response.data.rates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error;
    }
}

async function convertCurrency(amount: number, from: string, to: string): Promise<number> {
    try {
        const rates = await getExchangeRates();
        
        const inrRate = rates['INR'];
        const inrAmount = amount / rates[from];

        const toRate = rates[to];
        if (inrRate && toRate) {
            return inrAmount * toRate;
        } else {
            throw new Error('Invalid currency code');
        }
    } catch (error) {
        console.error('Error converting currency:', error);
        throw error;
    }
}

async function getUserInput(prompt: string): Promise<string> {
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
}

async function main() {
    try {
        const fromCurrency = await getUserInput('Enter the source currency code: ');
        const toCurrency = await getUserInput('Enter the target currency code: ');
        const amountStr = await getUserInput('Enter the amount to be exchanged: ');
        const amount = parseFloat(amountStr);
        if (isNaN(amount)) {
            throw new Error('Invalid amount');
        }
        const convertedAmount = await convertCurrency(amount, fromCurrency.toUpperCase(), toCurrency.toUpperCase());
        console.log(`${amount} ${fromCurrency} is approximately ${convertedAmount.toFixed(2)} ${toCurrency}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
