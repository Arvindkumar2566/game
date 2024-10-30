// Main function for the game
function numberGenerationGame(currentScore) {
    let numbers = [];

    // Generate 3 random numbers between 1 and 9
    let num1=Math.abs(Math.floor(Math.random()*10-1));
    document.getElementById("num1").innerHTML=num1;
    // secound num
    let num2=Math.abs(Math.floor(Math.random()*10-1));
    document.getElementById("num2").innerHTML=num2;
    // third number
    let num3=Math.abs(Math.floor(Math.random()*10-1));
    document.getElementById("num3").innerHTML=num3;
    
    let gameComment = "";
    console.log("Generated numbers: ", numbers);

    // Check game conditions
    if (num1 === num2 && num2 === num3) {
        currentScore += 1000;
        gameComment = "You were lucky this time, you got 1000 INR as all the numbers are the same.";
    } else if (num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) {
        currentScore += 300;
        gameComment = "You were lucky this time, you got 300 INR as all the numbers are even.";
    } else if (num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 !== 0) {
        currentScore += 300;
        gameComment = "You were lucky this time, you got 300 INR as all the numbers are odd.";
    } else if (num2 - num1 === 1 && num3 - num2 === 1) {
        currentScore += 800;
        gameComment = "You were lucky this time, you got 800 INR as all the numbers have a difference of 1.";
    } else {
        gameComment = "You were not lucky this time.";
    
    }

    // Subtract 100 for each round
    currentScore -= 100;

    // Game Over condition
    if (currentScore <= 0) {
        gameComment = "Game Over";
        currentScore =0;
    }

    return {
        score: currentScore,
        comment: gameComment
    };
}

