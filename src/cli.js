import readlineSync from 'readline-sync';
export const askName = () => {
    return readlineSync.question('May I have your name?');
};
