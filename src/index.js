import readlineSync from 'readline-sync';
import askName from './cli.js';

export default (description, game) => {
    const userName = askName();
    console.log(description);

    let correctAnswersCount = 0;
    while (correctAnswersCount < 3) {
        const [question, correctAnswer] = game();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer.toString()) {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
        correctAnswersCount += 1;
    }
    console.log(`Congratulations, ${userName}!`);
};

