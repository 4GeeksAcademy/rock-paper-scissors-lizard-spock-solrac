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

    if (chooseHuman === actualHand)  console.log(`It's a draw!.`);
    if (chooseHuman === 'rock' && (actualHand === 'scissors' || actualHand === 'lizard')) return console.log(`You Win! 🎉`);
    if (chooseHuman === 'paper' && (actualHand === 'rock' || actualHand === 'spock')) return console.log(`You Win! 🎉`);
    if (chooseHuman === 'scissors' && (actualHand === 'paper' || actualHand === 'lizard')) return console.log(`You Win! 🎉`);
    if (chooseHuman === 'lizard' && (actualHand === 'paper' || actualHand === 'spock')) return console.log(`You Win! 🎉`);
    if (chooseHuman === 'spock' && (actualHand === 'scissors' || actualHand === 'Rock')) return console.log(`You Win! 🎉`);
    return console.log(`You lose 😢`);   
};

const chooseHuman = prompt('choose an option: rock, paper, scissors, lizard, spock').toLowerCase();
checkOption(chooseHuman);



