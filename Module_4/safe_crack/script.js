function startSafeCrack() {
    const min = 1;
    const max = 100;
    const secret = Math.floor(Math.random() * (max - min + 1)) + min;

    let attempts = 0;
    let guess = null;
    let history = [];

    console.log(`SECURITY SYSTEM: Enter code from ${min} to ${max}`);

    while (guess !== secret) {
        let input = prompt(`Attempt ${attempts + 1}. Enter code (or "exit"): `);

        if (input === null || input.toLowerCase() === "exit") {
            console.log(`ACCESS TERMINATED. The code was: ${secret}`);
            return;
        }

        guess = Number(input);

        if (isNaN(guess) || guess < min || guess > max) {
            alert("ERROR: Invalid input format.");
            attempts++;
            history.push(guess);
            continue;
        }

        attempts++;
        history.push(guess);

        if (guess < secret) {
            console.log(`Your gues of ${guess} is too low. Increase value."`);
        } else if (guess > secret) {
            console.log(`Your gues of ${guess} is too high. Decrease value.`);
        } else {
            console.log(`ACCESS GRANTED. Vault opened in ${attempts} attempts.`);
        }
    }

    const summary = {
        vaultCode: secret,
        totalAttempts: attempts,
        inputHistory: history,
    };

    console.table(summary); // To draw a table instead of simple log
}

startSafeCrack();
