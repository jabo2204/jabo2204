
function tellFortune (numChildren, partner, location, job) {
    document.write("You will be a " + job + " in " + location + ", and married to " + partner + " with " + numChildren + " kids. <br>");
}

tellFortune(2, "Sally", "Detroit", "plumber");
tellFortune(10, "Mercedes", "Dubai", "stock trader");
tellFortune(0, "Kevin", "Los Angeles", "twitch streamer");

function calculateDogAge(age) {
    dogAge = age * 7;
    document.write("You're doggie is " + dogAge + " years old in dog years! <br>");
}

calculateDogAge(1)
calculateDogAge(5)
calculateDogAge(10)

function reverseNumber(num) {
    num = num.toString()
    let newNum = "";
    let length = (num.length - 1);
    for(let i = length; i >= 0; i--) {
        newNum += num[i];
    }
    document.write("The reversal of " + num + " is " + newNum + ".<br>");
}

reverseNumber(12345);
reverseNumber(3422587983);

function alphabeticalOrder(string) {
    let length = string.length;
    let char = string.split("");
    for(let i = 0; i < length; i++) {
        for(let j = (i + 1); j < length; j++) {
            if (char[i] > char[j]) {
                let temp = char[j];
                char[j] = char[i];
                char[i] = temp;
            }
        }
    }
    let newString = char.join("");
    document.write("The alphabetical order of the letters in " + string + " is " + newString + ". <br>");
}

alphabeticalOrder("mac");
alphabeticalOrder("webmaster");

function firstUpperCase(string) {
    let words = string.split(" ");
    let length = words.length;
    for(let i = 0; i < length; i++) {
        words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);;
    }
    string = words.join(" ");
    document.write(string + "<br>");
}

firstUpperCase("tonight is election night!");
firstUpperCase("the quick brown fox")