//write your code here
console.log("Hello Rigo from the console!");

const objeto = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const getRandomhand = () => {
    const randomOption = Math.floor(Math.random() * objeto.length);
    return objeto[randomOption];
};

const checkOption = (optionHuman) => {

    const actualHand = getRandomhand();

    console.log(`You option is: ${optionHuman}`);
    console.log(`The PC option is: ${actualHand}`);

    if (chooseHuman === actualHand) {
        console.log(`It's a draw!.`);
    } else if (chooseHuman === 'rock' && actualHand === 'scissors' || actualHand === 'lizard') {
        console.log(`You Win! 🎉`);

    } else if (chooseHuman === 'paper' && actualHand === 'rock' || actualHand === 'spock') {
        console.log(`You Win! 🎉`);

    } else if (chooseHuman === 'scissors' && actualHand === 'paper' || actualHand === 'lizard') {
        console.log(`You Win! 🎉`);

    } else if (chooseHuman === 'lizard' && actualHand === 'paper' || actualHand === 'spock') {
        console.log(`You Win! 🎉`);

    } else if (chooseHuman === 'spock' && actualHand === 'scissors' || actualHand === 'Rock') {
        console.log(`You Win! 🎉`);

    } else {
        console.log(`You lose! 😢`);

    }

};

const chooseHuman = prompt('choose an option: rock, paper, scissors, lizard, spock').toLowerCase();
checkOption(chooseHuman);



