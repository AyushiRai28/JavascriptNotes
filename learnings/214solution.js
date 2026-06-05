//The Password Validator: you are building a password validation feature . Create a function that checks if a given password meets the following criteria : at least 8 characters long, contains both uppercaseand lowercase letter, and includes at least one digit.


function pswrd(password) {
    // check length
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLower = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        }
    }

    if (!hasUpper) return "Password must contain an uppercase letter";
    if (!hasLower) return "Password must contain a lowercase letter";
    if (!hasDigit) return "Password must contain a digit";

    return "Valid Password ✅";
}

// Example
console.log(pswrd("Hello"));