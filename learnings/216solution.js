//The vowel counter: you need to create a function that counts the number of vowel in a given string. Consider both uppercase and lowercasee vowels

function vowel(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        let ch = string[i];

        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
            ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
            count++;
        }
    }

    console.log(`The number of vowels used in the given string is ${count}`);
}

vowel("dumadum");